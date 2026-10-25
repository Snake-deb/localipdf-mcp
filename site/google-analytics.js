// Basic consent: no Google request is made until the visitor opts in.
(() => {
  const id = 'G-P8T4Z8WY63';
  const key = 'localipdf-analytics-consent-v1';
  const lifetime = 180 * 24 * 60 * 60 * 1000;
  const disabled = `ga-disable-${id}`;
  // Local, preview and test copies must not count as visitors.
  const testOptOut =
    window[disabled] === true || location.hostname !== 'localipdf.com';
  const privacySignal = () =>
    navigator.globalPrivacyControl === true || navigator.doNotTrack === '1';
  // Only public, fixed tool identifiers may become event parameters.
  const resultTools = new Set([
    'pdf-to-pdfa',
    'grayscale-pdf',
    'rasterize-pdf',
    'deskew-pdf',
    'print-friendly-pdf',
    'headers-footers',
    'resize-pdf',
    'linearize-pdf',
    'extract-images',
    'word-to-pdf',
    'rtf-to-pdf',
    'csv-to-pdf',
    'pdf-to-svg',
    'annotate-pdf',
    'compress-pdf-to-100kb',
    'compress-pdf-to-200kb',
    'compress-pdf-to-500kb',
    'compress-pdf-to-1mb',
    'compress-pdf-to-50kb',
    'compress-pdf-to-300kb',
    'compress-pdf-to-2mb',
    'png-to-pdf',
    'pdf-to-png',
    'html-to-pdf',
    'markdown-to-pdf',
    'pdf-to-html',
    'text-to-pdf',
    'overlay-pdf',
    'halve-pdf',
    'pages-per-sheet',
    'merge-pdf',
    'split-pdf',
    'organize-pdf',
    'remove-pages',
    'extract-pages',
    'rotate-pdf',
    'jpg-to-pdf',
    'pdf-to-jpg',
    'watermark-pdf',
    'page-numbers',
    'pdf-workflow',
    'repair-pdf',
    'edit-bookmarks',
    'bates-numbering',
    'protect-pdf',
    'unlock-pdf',
    'compress-pdf',
    'scan-to-pdf',
    'ocr-pdf',
    'pdf-forms',
    'edit-pdf',
    'sign-pdf',
    'crop-pdf',
    'pdf-to-markdown',
    'pdf-to-text',
    'pdf-to-word',
    'pdf-to-excel',
    'pdf-to-powerpoint',
    'redact-pdf',
    'edit-metadata',
    'remove-metadata',
    'flatten-pdf',
    'sanitize-pdf',
    'compare-pdf',
  ]);
  let loaded = false;
  let current = null;
  let expiry = 0;
  let lastPage = '';
  window[disabled] = true;
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    // eslint-disable-next-line prefer-rest-params -- Google's documented dataLayer queue format.
    window.dataLayer.push(arguments);
  }
  function read() {
    try {
      const value = JSON.parse(localStorage.getItem(key));
      if (
        value &&
        ['granted', 'denied'].includes(value.choice) &&
        Number.isFinite(value.expires) &&
        value.expires > Date.now() &&
        value.expires <= Date.now() + lifetime
      )
        return value;
    } catch {
      /* Storage can be unavailable; remain opted out. */
    }
    return { choice: null, expires: 0 };
  }
  function clearCookies() {
    const hosts = location.hostname.split('.');
    const domains = ['', ...hosts.map((_, i) => hosts.slice(i).join('.'))];
    const paths = [
      '/',
      ...location.pathname
        .split('/')
        .filter(Boolean)
        .flatMap((_, i, parts) => {
          const path = '/' + parts.slice(0, i + 1).join('/');
          return [path, path + '/'];
        }),
    ];
    for (const cookie of document.cookie.split(';')) {
      const name = cookie.trim().split('=')[0];
      if (!/^_ga(?:_|$)|^_gid$|^_gat(?:_|$)/.test(name)) continue;
      for (const domain of domains)
        for (const path of paths) {
          document.cookie = `${name}=; Max-Age=0; Path=${path}${domain ? '; Domain=' + domain : ''}; SameSite=Lax`;
        }
    }
  }
  function pageView() {
    if (window[disabled]) return;
    const path =
      /^\/tools\/[a-z0-9-]+\/?$/.test(location.pathname) ||
      /^\/(?:privacy|about|terms|faq|verify|licenses)\/?$/.test(
        location.pathname,
      )
        ? location.pathname
        : '/';
    if (lastPage === path) return;
    lastPage = path;
    gtag('event', 'page_view', {
      page_location: location.origin + path,
      page_title: 'localipdf',
      page_referrer: '',
    });
  }
  function apply(value) {
    current = privacySignal() ? 'denied' : value.choice;
    expiry = value.expires;
    window[disabled] = current !== 'granted' || testOptOut;
    if (!window[disabled]) {
      if (!loaded) {
        loaded = true;
        gtag('consent', 'default', {
          analytics_storage: 'granted',
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied',
        });
        gtag('js', new Date());
        gtag('config', id, {
          send_page_view: false,
          allow_google_signals: false,
          allow_ad_personalization_signals: false,
          cookie_expires: 15552000,
          cookie_update: false,
          page_location: location.origin + '/',
          page_title: 'localipdf',
          page_referrer: '',
          ignore_referrer: true,
        });
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
        document.head.append(script);
      } else {
        gtag('consent', 'update', { analytics_storage: 'granted' });
      }
      pageView();
    } else {
      lastPage = '';
      if (loaded) gtag('consent', 'update', { analytics_storage: 'denied' });
      clearCookies();
    }
    window.dispatchEvent(new Event('localipdf-analytics-change'));
  }
  window.localipdfAnalytics = {
    choice: () => current,
    signal: privacySignal,
    choose(choice) {
      if (!['granted', 'denied'].includes(choice)) return;
      const value = { choice, expires: Date.now() + lifetime };
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch {
        /* Apply for this page only. */
      }
      apply(value);
    },
    pageView,
    resultDownload() {
      refresh();
      if (window[disabled]) return;
      const tool = /^\/tools\/([a-z0-9-]+)\/?$/.exec(location.pathname)?.[1];
      if (!resultTools.has(tool)) return;
      gtag('event', 'pdf_result_download', {
        tool_name: tool,
        page_location: location.origin + '/tools/' + tool,
        page_title: 'localipdf',
        page_referrer: '',
      });
    },
  };
  window.addEventListener('storage', (event) => {
    if (event.key === key || event.key === null) apply(read());
  });
  document.addEventListener('click', (event) => {
    const choice = event.target.closest?.('[data-analytics-choice]')?.dataset
      .analyticsChoice;
    if (choice) window.localipdfAnalytics.choose(choice);
  });
  const refresh = () => {
    if (
      (expiry && expiry <= Date.now()) ||
      (privacySignal() && current !== 'denied')
    )
      apply(read());
  };
  document.addEventListener('visibilitychange', refresh);
  window.setInterval(refresh, 60000);
  apply(read());
})();
