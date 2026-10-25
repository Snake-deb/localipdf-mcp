# localipdf MCP server

Use the [localipdf](https://localipdf.com) PDF tools from Claude Desktop, Claude Code, Codex and other local MCP clients. Ask in plain words, for example "make report.pdf in my Downloads smaller than 1 MB" or "merge invoice.pdf and receipt.pdf on my Desktop". The result is saved as a new file next to the original, and existing files are never overwritten.

## Where your PDFs go

The server serves its bundled copy of the localipdf tools on 127.0.0.1 and opens them in a separate, temporary browser profile on your computer. That browser starts with every hostname except 127.0.0.1 blocked, so the page that processes your PDF cannot reach the internet.

Your AI client still receives what you type and what the tools report: file paths, status messages and, for some tools such as Edit PDF, document text. Its own data policy applies to that information.

## Privacy Policy

Full policy: https://localipdf.com/privacy/

- **Data collection:** the add-on collects nothing. It does not send information to localipdf or anyone else, and analytics do not run inside it.
- **Usage and storage:** your PDFs are processed in the temporary browser profile described above, and results are saved as new files next to your originals.
- **Third-party sharing:** none by the add-on. Your AI client receives your prompts and the tool responses, as described above.
- **Retention:** the temporary browser profile and download folders are deleted when the add-on closes.
- **Contact:** privacy@localipdf.com

## Requirements

- Node.js 20 or newer
- Chrome, Edge, Chromium or Brave. For an unusual install location, set `LOCALIPDF_BROWSER` to the browser's executable.
- macOS, Windows or Linux

## Install

Download the latest files from [Releases](../../releases), or from [localipdf.com/claude](https://localipdf.com/claude/).

**Claude Desktop:** open `localipdf.mcpb` and confirm. Claude Desktop may show a warning because the extension is not in its directory.

**Claude Code:** extract `localipdf-mcp.zip`, keep its files together, then run:

```sh
claude mcp add localipdf -- node "/absolute/path/localipdf-mcp/server.mjs"
```

**Codex:** extract the ZIP, then run:

```sh
codex mcp add localipdf -- node "/absolute/path/localipdf-mcp/server.mjs"
```

For large jobs in Codex, add `tool_timeout_sec = 960` to the existing `[mcp_servers.localipdf]` section of `~/.codex/config.toml`. The server stops a job after 15 minutes.

**Other local MCP clients:** register `server.mjs` as a local stdio server run with `node`.

After installing, ask your assistant to list the localipdf tools, then try merging two test PDFs and open the result.

## What it can do

The server offers four MCP operations:

| Operation | What it does |
| --- | --- |
| `list_pdf_tools` | Lists the PDF tools and whether each one runs here |
| `pdf_tool_help` | Reads a tool's help, options and limits |
| `show_pdf_tool_options` | Lists a tool's options for the files you name |
| `run_pdf_tool` | Runs a tool on files on this computer and saves the results |

Most localipdf tools run here, including Compress PDF, Merge PDF, Split PDF, Protect PDF, Unlock PDF, PDF to Word, Annotate PDF, Edit PDF and Redact PDF. Tools that need hands-on work, such as Sign PDF and Organize PDF, stay on the website; `list_pdf_tools` marks them with `runs_here: false`. Text recognition (OCR) is not included.

## Check the download

Compare the file you downloaded with `SHA256SUMS` in the release:

```sh
shasum -a 256 localipdf.mcpb localipdf-mcp.zip
```

## Updates

The package does not update itself. Download the new release, test it on a spare PDF, then point your client at the new folder and reload it.

## Licence

The package is free to use. See [LICENSE](LICENSE). It includes open-source components under their own licences; their full texts are in [licenses/](licenses/) and inside the package.

## Support

support@localipdf.com. Please don't send private documents or passwords; a sample with made-up details is enough to reproduce most problems.
