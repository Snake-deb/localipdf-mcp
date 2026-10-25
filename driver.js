// Runs inside the tool page. Drives the same controls a person uses, by their
// on-screen labels. Adapted from the retired in-browser WebMCP integration.
(() => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const clean = (s) => (s ?? '').replace(/[\s▼▲]+/g, ' ').trim();
  const shown = (e) =>
    e.getClientRects().length > 0 && !e.closest('.tool-guide,[hidden]');
  const main = () => document.querySelector('main');

  function labelOf(e) {
    const aria = e.getAttribute('aria-label');
    if (aria) return clean(aria);
    const by = e.getAttribute('aria-labelledby');
    if (by)
      return clean(
        by
          .split(' ')
          .map((id) => document.getElementById(id)?.textContent)
          .join(' '),
      );
    const label =
      e.closest('label') ??
      (e.id
        ? document.querySelector(`label[for="${CSS.escape(e.id)}"]`)
        : null);
    return clean(
      label?.querySelector(':scope > span')?.textContent ?? label?.textContent,
    );
  }

  function controls() {
    return [
      ...(main()?.querySelectorAll(
        'input,textarea,select,[role=combobox],[role=checkbox],[role=switch],[role=radio]',
      ) ?? []),
    ].filter(
      (e) =>
        shown(e) &&
        e.getAttribute('aria-hidden') !== 'true' &&
        !(
          e.tagName === 'INPUT' &&
          ['file', 'hidden', 'submit', 'button'].includes(e.type)
        ) &&
        // Native inputs that only back a styled control are skipped.
        !(e.tagName === 'INPUT' && e.closest('[role=combobox]')) &&
        labelOf(e),
    );
  }

  function valueOf(e) {
    const role = e.getAttribute('role');
    if (role === 'checkbox' || role === 'switch' || role === 'radio')
      return e.getAttribute('aria-checked') === 'true';
    if (role === 'combobox' && e.tagName !== 'INPUT')
      return clean(e.textContent);
    if (e.type === 'checkbox' || e.type === 'radio') return e.checked;
    if (e.type === 'password') return e.value ? '(entered)' : '';
    return e.value;
  }

  const find = (items, wanted) => {
    const w = clean(String(wanted)).toLowerCase();
    return (
      items.find((i) => i.label.toLowerCase() === w) ??
      items.find((i) => i.label.toLowerCase().includes(w))
    );
  };

  const busy = () => {
    const m = main();
    return (
      !m ||
      !!m.querySelector('[aria-busy=true],.progress-box') ||
      [...m.querySelectorAll('button')].some(
        (b) => shown(b) && /^Cancel\b/.test(clean(b.textContent)),
      )
    );
  };

  /** Wait until the page stops changing and no job is running. */
  async function settle(limit = 5000, quiet = 800) {
    const m = main();
    if (!m) return;
    let changed = Date.now();
    const watch = new MutationObserver(() => (changed = Date.now()));
    watch.observe(m, {
      subtree: true,
      childList: true,
      attributes: true,
      characterData: true,
    });
    const end = Date.now() + limit;
    try {
      while (Date.now() < end) {
        await sleep(200);
        if (Date.now() - changed > quiet && !busy()) return;
      }
    } finally {
      watch.disconnect();
    }
  }

  function openMore() {
    for (const d of main()?.querySelectorAll(
      'details.more-options:not([open])',
    ) ?? [])
      if (shown(d)) d.open = true;
  }

  function setNative(e, value) {
    const proto = Object.getPrototypeOf(e);
    Object.getOwnPropertyDescriptor(proto, 'value')?.set?.call(e, value);
    e.dispatchEvent(new Event('input', { bubbles: true }));
    e.dispatchEvent(new Event('change', { bubbles: true }));
  }

  async function choose(trigger, value) {
    const options = () =>
      [...document.querySelectorAll('[role=option]')].filter(shown);
    trigger.focus();
    for (const open of [
      () => trigger.click(),
      () =>
        trigger.dispatchEvent(
          new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }),
        ),
    ]) {
      if (options().length) break;
      open();
      await sleep(150);
    }
    const list = options().map((e) => ({ label: clean(e.textContent), e }));
    const match = find(list, value);
    if (match) match.e.click();
    else
      document.activeElement?.dispatchEvent(
        new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }),
      );
    return { matched: !!match, options: list.map((o) => o.label) };
  }

  function fields() {
    return controls().map((e) => {
      const field = { label: labelOf(e), value: valueOf(e) };
      if (e.disabled || e.getAttribute('aria-disabled') === 'true')
        field.disabled = true;
      if (e.tagName === 'SELECT')
        field.choices = [...e.options].map((o) => clean(o.text));
      return field;
    });
  }

  // The on-screen label an option name resolves to, without changing anything.
  function resolveOption(label) {
    openMore();
    return (
      find(
        controls().map((e) => ({ label: labelOf(e) })),
        label,
      )?.label ?? null
    );
  }

  async function setOption(label, value) {
    openMore();
    const items = controls().map((e) => ({ label: labelOf(e), e }));
    const hit = find(items, label);
    if (!hit)
      throw new Error(
        `No option called "${label}". Options on screen: ${items.map((i) => i.label).join('; ')}`,
      );
    const { e } = hit;
    const role = e.getAttribute('role');
    if (role === 'combobox' && e.tagName !== 'INPUT') {
      const result = await choose(e, value);
      if (!result.matched)
        throw new Error(
          `"${value}" is not a choice for "${hit.label}". Choices: ${result.options.join('; ')}`,
        );
    } else if (
      ['checkbox', 'switch'].includes(role ?? '') ||
      e.type === 'checkbox'
    ) {
      const on = value === true || value === 'true';
      if (valueOf(e) !== on) e.click();
    } else if (role === 'radio' || e.type === 'radio') {
      if (value === false || value === 'false')
        throw new Error(
          `Choose another option instead of turning off "${hit.label}".`,
        );
      if (!valueOf(e)) e.click();
    } else if (e.tagName === 'SELECT') {
      const opt = find(
        [...e.options].map((o) => ({ label: clean(o.text), o })),
        value,
      );
      if (!opt)
        throw new Error(`"${value}" is not a choice for "${hit.label}".`);
      setNative(e, opt.o.value);
    } else setNative(e, String(value));
    await settle(3000, 400);
    openMore();
  }

  async function selectPages(pages) {
    for (const n of pages) {
      const b = main()?.querySelector(`button[aria-label="Select page ${n}"]`);
      if (!b) throw new Error(`There is no page ${n} to select.`);
      if (b.getAttribute('aria-pressed') !== 'true') b.click();
      await sleep(50);
    }
    await settle(2000, 300);
  }

  const messages = () => [
    ...new Set(
      [
        ...(main()?.querySelectorAll(
          '[role=alert],[role=status],.notice,.result-line',
        ) ?? []),
      ]
        .filter(shown)
        .map((e) => clean(e.innerText).slice(0, 400))
        .filter(Boolean),
    ),
  ];

  const dialog = () => {
    const d = [
      ...document.querySelectorAll('[role=alertdialog],[role=dialog]'),
    ].find(shown);
    if (!d) return null;
    return {
      text: clean(d.innerText).slice(0, 600),
      buttons: [...d.querySelectorAll('button')]
        .filter(shown)
        .map((b) => clean(b.textContent)),
    };
  };

  function clickDialog(label) {
    const d = [
      ...document.querySelectorAll('[role=alertdialog],[role=dialog]'),
    ].find(shown);
    const b =
      d &&
      [...d.querySelectorAll('button')].find(
        (x) => clean(x.textContent) === label,
      );
    b?.click();
    return !!b;
  }

  function act() {
    const button = [
      ...(main()?.querySelectorAll('.tool-action-button') ?? []),
    ].find(shown);
    if (!button) throw new Error('This tool has no main button to run.');
    if (button.disabled) {
      const hint = clean(
        button.closest('.tool-action')?.querySelector('.action-hint')
          ?.textContent,
      );
      throw new Error(
        hint || `"${clean(button.textContent)}" is not available yet.`,
      );
    }
    button.click();
    return clean(button.textContent);
  }

  // Result downloads: every "Download …" button in the results, else the ZIP.
  function downloads() {
    const all = [
      ...(main()?.querySelectorAll(
        '.results button, .tool-result button, [aria-label="Batch processing"] button',
      ) ?? []),
    ].filter(
      (b) =>
        shown(b) && !b.disabled && /^Download\b/.test(clean(b.textContent)),
    );
    const single = all.filter(
      (b) => !/ZIP|summary|original|all\b/i.test(clean(b.textContent)),
    );
    return single.length
      ? single
      : all.filter((b) => /ZIP/.test(clean(b.textContent))).slice(0, 1);
  }

  async function clickDownloads() {
    const list = downloads();
    for (const b of list) {
      b.click();
      await sleep(300);
    }
    return list.length;
  }

  // ---------- Hand-work tools: the same buttons a person presses ----------
  const nameOf = (b) => b.getAttribute('aria-label') || clean(b.textContent);
  function openDetails(summary) {
    for (const d of main()?.querySelectorAll('details') ?? [])
      if (clean(d.querySelector(':scope > summary')?.textContent) === summary)
        d.open = true;
  }
  async function press(name) {
    const b = [...(main()?.querySelectorAll('button') ?? [])].find(
      (x) => shown(x) && nameOf(x) === name,
    );
    if (!b) throw new Error(`There is no "${name}" button here.`);
    if (b.disabled) throw new Error(`"${name}" is not available right now.`);
    b.click();
    await settle(8000, 400);
  }
  const text = (selector, pattern) =>
    [...(main()?.querySelectorAll(selector) ?? [])]
      .map((e) => clean(e.textContent))
      .find((t) => pattern.test(t)) ?? '';

  // Annotate PDF
  const markTypes = () =>
    [
      ...(main()?.querySelectorAll(
        '.annotation-toolbar .mark-palette button',
      ) ?? []),
    ]
      .map(nameOf)
      .filter((n) => !['Select', 'Scroll', 'Erase mark', 'Draw'].includes(n));
  async function chooseMark(type, page) {
    if (page) await press(`Go to page ${page}`);
    openDetails('More marks');
    const b = [
      ...main().querySelectorAll('.annotation-toolbar .mark-palette button'),
    ].find((x) => nameOf(x).toLowerCase() === String(type).toLowerCase());
    if (!b || !markTypes().includes(nameOf(b)))
      throw new Error(
        `No mark type "${type}". Mark types: ${markTypes().join('; ')}`,
      );
    b.click();
    await settle(3000, 300);
  }
  const markCount = () =>
    main()?.querySelectorAll('.annotation-list > li').length ?? 0;
  // Select the newest mark so its position fields show, as a person would.
  async function selectLastMark() {
    const items = main().querySelectorAll(
      '.annotation-list > li > button.text-button',
    );
    items[items.length - 1]?.click();
    await settle(3000, 300);
    openMore();
  }

  // Edit PDF: every page's editable text, from the "Text area" list.
  const editPages = () => [
    ...(main()?.querySelectorAll('nav.edit-pages button') ?? []),
  ];
  const textChoices = () =>
    [
      ...(main()?.querySelector('select[aria-label="Text area"]')?.options ??
        []),
    ].filter((o) => o.value);
  async function editableText(limit = 300) {
    const found = [];
    for (const [i, b] of editPages().entries()) {
      b.click();
      await settle(4000, 300);
      for (const o of textChoices())
        found.push({ page: i + 1, text: clean(o.text) });
      if (found.length >= limit) break;
    }
    return found.slice(0, limit);
  }
  async function editText(find, replace, page) {
    const pages = editPages();
    if (!pages.length)
      throw new Error('This PDF has no text that can be edited here.');
    const order = page ? [page - 1] : pages.map((_, i) => i);
    for (const i of order) {
      if (!pages[i]) throw new Error(`There is no page ${page}.`);
      pages[i].click();
      await settle(4000, 300);
      const options = textChoices().map((o) => ({ label: clean(o.text), o }));
      const hit =
        find &&
        (options.find((x) => x.label === clean(find)) ??
          options.find((x) => x.label.includes(clean(find))));
      if (!hit) continue;
      setNative(
        main().querySelector('select[aria-label="Text area"]'),
        hit.o.value,
      );
      await settle(3000, 300);
      setNative(
        main().querySelector('textarea[aria-label="New text"]'),
        replace,
      );
      await press('Apply text change');
      const problem = clean(
        main().querySelector('.edit-properties [role=alert]')?.textContent,
      );
      if (problem) throw new Error(`"${hit.label}": ${problem}`);
      return { page: i + 1, original: hit.label };
    }
    throw new Error(
      `Could not find editable text "${find}"${page ? ` on page ${page}` : ''}. Use show_pdf_tool_options to list the editable text.`,
    );
  }
  const changeCount = () => text('.edit-properties p', /^\d+ changes?\./);

  // Redact PDF
  async function redactPage(n) {
    for (let guard = 0; guard < 2000; guard++) {
      const [, now, total] =
        text('.form-toolbar span', /^Page \d+ of \d+$/).match(
          /Page (\d+) of (\d+)/,
        ) ?? [];
      if (!now) throw new Error('The PDF is not open yet.');
      if (n > +total || n < 1)
        throw new Error(`There is no page ${n}; this PDF has ${total}.`);
      if (+now === n) return;
      await press(+now < n ? 'Next page' : 'Previous page');
    }
  }
  async function redactFind(kind, query) {
    openDetails('Find text to redact');
    await setOption('Find', kind);
    if (query != null)
      await setOption(
        /Regular/.test(kind)
          ? 'Pattern (without / delimiters)'
          : 'One word or phrase per line',
        query,
      );
    await press('Find and mark');
  }
  const areaCount = () =>
    text('.form-inspector p', /^\d+ areas? on \d+ pages?$/);

  window.__lp = {
    resolveOption,
    settle,
    openMore,
    fields,
    setOption,
    selectPages,
    messages,
    dialog,
    clickDialog,
    act,
    downloads: () => downloads().length,
    clickDownloads,
    busy,
    press,
    markTypes,
    chooseMark,
    markCount,
    selectLastMark,
    editableText,
    editText,
    changeCount,
    redactPage,
    redactFind,
    areaCount,
  };
})();
