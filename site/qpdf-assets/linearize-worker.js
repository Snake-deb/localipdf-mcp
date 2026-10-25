/* Local qpdf CLI adapter. The upstream core is unchanged; licence/provenance
 * and linked component notices are published at /licenses/qpdf/. */
importScripts('/qpdf-assets/qpdf-core.js');
self.onmessage = async ({ data }) => {
  try {
    if (
      !(data instanceof ArrayBuffer) ||
      !data.byteLength ||
      data.byteLength > 128 * 1024 * 1024
    )
      throw new Error('Choose a PDF up to 128 MB.');
    if (typeof DecompressionStream === 'undefined')
      throw new Error('Update your browser to use Fast Web View.');
    const response = await fetch('/qpdf-assets/qpdf-core.bin');
    if (!response.ok || !response.body)
      throw new Error(
        'Could not load the local PDF engine. Reload and try again.',
      );
    const reader = response.body
      .pipeThrough(new DecompressionStream('gzip'))
      .getReader();
    const wasm = new Uint8Array(2196333);
    let length = 0;
    try {
      for (;;) {
        const { value, done } = await reader.read();
        if (done) break;
        if (length + value.length > wasm.length)
          throw new Error('The local PDF engine failed its size check.');
        wasm.set(value, length);
        length += value.length;
      }
    } finally {
      await reader.cancel();
      reader.releaseLock();
    }
    const hash = Array.from(
      new Uint8Array(await crypto.subtle.digest('SHA-256', wasm)),
    )
      .map((value) => value.toString(16).padStart(2, '0'))
      .join('');
    if (
      length !== wasm.length ||
      hash !==
        '07ced6845a714be265c4e6c5a9515e1746cc71c7f193f357b912b9f74c53b50d'
    )
      throw new Error(
        'The local PDF engine failed its integrity check. Reload and try again.',
      );
    const logs = [];
    const log = (value) => {
      if (logs.length < 40) logs.push(String(value).slice(0, 300));
    };
    const core = await self.createQpdfCore({
      wasmBinary: wasm,
      noInitialRun: true,
      print: log,
      printErr: log,
    });
    core.FS.writeFile('/input.pdf', new Uint8Array(data));
    // Classic object references avoid a PDF-lib linearized-xref-stream reader
    // bug that hides the Info dictionary during later local edits.
    if (
      core.callMain([
        '/input.pdf',
        '--object-streams=disable',
        '--linearize',
        '/output.pdf',
      ])
    )
      throw new Error(
        'This PDF could not be prepared safely. Try Repair PDF or an unlocked copy. ' +
          logs.join(' '),
      );
    const output = core.FS.readFile('/output.pdf');
    if (!output.length || output.length > 128 * 1024 * 1024)
      throw new Error(
        'The result exceeds the 128 MB output limit. Split the PDF first.',
      );
    if (core.callMain(['/output.pdf', '--check-linearization']))
      throw new Error(
        'Fast Web View could not be verified. No output was saved.',
      );
    self.postMessage({ output }, [output.buffer]);
  } catch (error) {
    self.postMessage({
      error:
        error instanceof Error ? error.message : 'Could not prepare this PDF.',
    });
  }
};
