import{o as e,u as t}from"./index-CWanKoBM.js";import{t as n}from"./marked.esm-BoAm_sgN.js";var r=`---
{
  "title": "What is a linearized PDF? Fast Web View explained",
  "description": "A linearized PDF can display pages before the full file downloads. Learn when Fast Web View helps, how it differs from compression, and what to check.",
  "slug": "linearized-pdf",
  "type": "glossary",
  "keywords": ["linearized pdf", "linearized pdf meaning", "fast web view pdf"],
  "relatedTool": "linearize-pdf",
  "related": ["/tools/compress-pdf/"],
  "date": "2026-10-21"
}
---
A linearized PDF is a PDF arranged so a compatible viewer can display a page before the whole file finishes downloading. It puts the information needed to start viewing near the beginning and includes hints for finding other page data. The same feature is often called Fast Web View.

This can help when you publish a long report, manual or catalogue on a website. A reader may be able to start reading while the remaining data loads. The benefit depends on the viewer and on how the website serves the PDF. Opening a copy that is already downloaded does not test progressive loading. The PDF Association's [PDF basics reference](https://pdfa.org/download-area/cheat-sheets/Basics.pdf) lists Fast Web View as linearization.

Choose the operation that matches the job. For a smaller email attachment or an upload limit, use [Compress PDF](/tools/compress-pdf/). For progressive viewing from a web link, use [Fast Web View](/tools/linearize-pdf/). Linearization alone does not lower picture resolution or turn text into images, and its extra structure can increase file size. If you need both operations, finish compression and other edits first, then prepare the final copy for Fast Web View.

## Questions

### Is a linearized PDF a different file format?

It is still a PDF with the usual .pdf extension. Linearization describes how its contents are stored inside the file. A reader does not need a separate document format, although it needs support for progressive loading to benefit from the arrangement.

### How should I check a PDF prepared for a website?

First check that the tool reports successful Fast Web View verification and preview the output for missing or changed content. Then open the hosted PDF through the same kind of link your readers will use. A cached copy may already be downloaded, so it cannot show how a first visit behaves. Verification confirms the file structure; it does not promise a particular loading time.

### Why can a verified linearized PDF still wait before showing a page?

The viewer may download the entire file before displaying it, or the server may not deliver the requested portions of the file. Connection speed and the amount of content needed for the first page also matter. If the file opens correctly but starts slowly, check delivery and viewer support before repeatedly rewriting it.

### Should I apply Fast Web View before signing or editing a PDF?

Finish edits and prepare Fast Web View before distributing the final document. Later changes can disturb the arrangement, so check it again after saving. Rewriting an already digitally signed PDF invalidates its cryptographic signature. Keep the signed original and do not replace it with a rewritten copy when signature validity matters.
`,i=`---
{
  "title": "Aadhaar PDF password: how to open and unlock e-Aadhaar",
  "description": "Your e-Aadhaar password is the first four letters of your name in capitals plus your birth year. Open the PDF, or save a copy with no password.",
  "slug": "aadhaar-pdf-password",
  "type": "guide",
  "keywords": ["aadhaar pdf password", "e aadhaar password", "aadhar card pdf password", "remove password from aadhaar pdf"],
  "relatedTool": "unlock-pdf",
  "related": ["/tools/compress-pdf-to-200kb/", "/tools/compress-pdf/"],
  "date": "2026-10-25"
}
---
The password for an e-Aadhaar PDF is the first four letters of your name in capital letters, followed by your year of birth. For SURESH KUMAR born in 1990, it is SURE1990. Type it when the PDF asks. If a website or office needs a copy without a password, save one with Unlock PDF on your own device.

## Work out your password

UIDAI explains the rule in its [e-Aadhaar password FAQ](https://uidai.gov.in/283-faqs/aadhaar-online-services/e-aadhaar/1891-what-is-the-password-of-e-aadhaar.html). Use your name exactly as it is printed on your Aadhaar.

| Name on Aadhaar | Year of birth | Password |
| --- | --- | --- |
| SURESH KUMAR | 1990 | SURE1990 |
| RIA | 1990 | RIA1990 |
| P. KUMAR | 1990 | P.KU1990 |

The letters must be capitals. If your name has fewer than four letters, use all of them. Dots and other marks count as characters when they appear in the first four, as in P.KU1990.

## Open the PDF

1. Download e-Aadhaar from the UIDAI website and find the file on your phone or computer.
2. Open it in any PDF viewer. It asks for a password.
3. Type your password. Type the letters in capitals.
4. If it does not open, check the spelling of your name on the card and your year of birth, then try again.

## Save a copy without the password

Some forms and offices ask for a PDF that opens without a password. You can make that copy without sending your Aadhaar to anyone.

1. Open [Unlock PDF](/tools/unlock-pdf/) and choose your e-Aadhaar file. It stays on this device. Nothing is uploaded.
2. Type your Aadhaar password in PDF password.
3. Select “I have permission to unlock these PDFs.”
4. Click Unlock PDF, then download the copy.
5. Open the new copy and check that it shows your details without asking for a password.

Keep the original file as well. e-Aadhaar is digitally signed by UIDAI, and a changed copy no longer passes that signature check. If a portal checks the signature, give it the original file.

## If the file is too big for a form

Some application portals set a small size limit for documents. After unlocking, use [Compress PDF to 200 KB](/tools/compress-pdf-to-200kb/) or choose another size in [Compress PDF](/tools/compress-pdf/). Open the result and make sure your photo, name and number are still easy to read.

## Common problems

| What happens | What to do |
| --- | --- |
| The password is rejected | Use capital letters and the four-digit year. Check your name as printed on Aadhaar, including initials and dots. |
| My name starts with an initial | Count the initial and the dot. P. KUMAR becomes P.KU, so the password is P.KU1990. |
| The unlocked copy will not upload | Check the portal’s size limit and file type. Compress the copy if needed. |
| The portal says the signature is not valid | Use the original e-Aadhaar file. A changed copy fails the UIDAI signature check. |

## Questions

### Is it safe to unlock my Aadhaar PDF on a website?

Many websites send your file to their servers first. Unlock PDF works on this device and the file is never uploaded. You can check this yourself on the [verify page](/verify/).

### Can I remove the password if I have forgotten my year of birth?

No. You need the correct password to open or unlock the file. Unlock PDF does not guess passwords. Download e-Aadhaar again and check your details with UIDAI.

### Is an unlocked copy of e-Aadhaar still valid?

UIDAI says e-Aadhaar is as valid as the physical card. A changed copy fails UIDAI’s signature check, so keep the original for any place that checks it.
`,a=`---
{
  "title": "How to add bookmarks to a PDF",
  "description": "Add PDF bookmarks for chapters, sections and attachments. Build a clear hierarchy, choose the right destination pages, and check the saved navigation.",
  "slug": "add-bookmarks-to-pdf",
  "type": "guide",
  "keywords": ["how to add bookmarks to a pdf", "add bookmarks to pdf", "pdf bookmarks"],
  "relatedTool": "edit-bookmarks",
  "related": ["/tools/organize-pdf/"],
  "date": "2026-10-24"
}
---
To add bookmarks to a PDF, open it in PDF Bookmarks, add an entry, and give it a title and destination page. Group related entries under chapter headings, then save a new copy. Open the saved PDF in a reader with a bookmarks panel and test where each entry leads.

## Plan the navigation before adding entries

Choose labels that help someone find a section without reading every page. Use the document's actual chapter names where possible. A short report may need only a few entries; a report with supporting documents may benefit from nested groups.

W3C's [guidance on PDF bookmarks](https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF2) describes using an outline to help people locate sections in long documents. It also recommends checking that entries lead to the intended content. Adding bookmarks alone does not establish that the rest of a PDF is accessible.

Finish any planned page rearrangement in [Organize PDF](/tools/organize-pdf/) first. Count the actual pages from the start of the file, including the cover and any introduction. A printed page number can differ from that position: chapter page 1 might be the third page in the file. Use the destination preview to confirm the section you mean.

## Add and arrange the bookmarks

1. Open [PDF Bookmarks](/tools/edit-bookmarks/) and choose your PDF. The file is processed on your device. Keep the original separately, especially if it already has useful navigation.
2. Select Add bookmark. Enter a clear Bookmark title, such as Project details, rather than leaving New bookmark as the name.
3. Under Destination, choose Go to a page. Set Destination page to the page's position in the file, starting at 1. Check the preview below the controls.
4. Under Place under, choose Top level for a main chapter. To create a subsection, select its parent by title. Use Move up or Move down to reorder entries under the same parent; this changes the bookmark list, not the document's pages.
5. For a group that only organizes other entries, choose Heading only under Destination, then add its children. Show children when the PDF opens controls the group's initial expansion in compatible readers; it does not guarantee that every reader will open its bookmarks panel automatically.
6. Review the complete list. Select Save bookmarks, then Download PDF. Reopen the saved file, show its bookmarks or outline panel, and click every entry that has a page destination.

If the file already has a supported destination that is not a local page, the editor may show Keep existing link. Leave that selected when you want to retain the existing action. Changing it to a page destination replaces that link.

## A worked five-page outline

For an invented five-page report, you could use this structure. Parent names refer to entries you have already added.

| Bookmark title | Destination | Place under |
| --- | --- | --- |
| Overview | Page 1 | Top level |
| Project details | Page 3 | Top level |
| Budget | Page 4 | Project details |
| Attachments | Heading only | Top level |
| Receipt | Page 5 | Attachments |

Here, Attachments is a group label, so clicking it need not open a page. Receipt opens the fifth page. Budget belongs beneath Project details and should still lead to the fourth page even if you move that bookmark up or down in the list.

Give each attachment its own label, such as Receipt or Site plan. Match it to the page heading so readers can confirm where they have landed.

## Use heading suggestions as a starting point

Suggest headings looks for headings in the PDF's text and adds suggested entries for review. It supports documents of up to 200 pages. It can miss headings or include text you do not want in the outline, so check each suggested title and page before saving.

A scanned page may show a heading as a picture, with no text for this feature to read. Add that bookmark manually if suggestions do not find it. You can build the entire outline by hand without using suggestions.

## Check the saved result

Open the downloaded copy in the reader your recipient uses when possible. Expand the groups, test the first and last entries, and inspect each subsection's destination. Confirm that page content and page order still match the original.

If you change, remove or duplicate pages later, check the bookmarks again. A destination can be omitted when its page is removed, and a heading may remain to hold retained children. Do not assume a previous navigation check still covers a newly arranged file.

Deleting a parent in the bookmark editor also deletes its children. Use Undo to restore a mistaken deletion before saving. If you need to correct a downloaded result, reopen it or return to your original; a later browser refresh clears the current editing session.

For a digitally signed file, keep the signed original. Saving bookmark changes creates an edited copy whose original digital signature will no longer be valid. The tool requires confirmation before that export; a visible signature mark does not prove that the edited copy is still verified.

## Common situations

| What you see | What to check |
| --- | --- |
| The bookmark opens the cover instead of chapter 1 | Use the page's position in the file, including front matter, and inspect the preview. |
| A group does not jump to a page | It may use Heading only. Choose Go to a page if the group itself should open a section. |
| Move up does not move an entry out of a group | Those buttons reorder siblings. Change Place under to choose a different parent or Top level. |
| The saved PDF seems to have no bookmarks | Open the reader's bookmarks or outline panel. Reader controls and initial display vary. |
| A destination outside the document is rejected | Choose a page from 1 through the file's page count. A printed chapter number is not always the same number. |

## Questions

### Are PDF bookmarks the same as a web browser bookmark?

No. These entries are stored inside the saved PDF and point to document destinations or supported existing links. A browser bookmark saves a web address in your browser. Sharing the PDF shares its saved outline with compatible readers.

### Can one bookmark jump to two different pages?

A page bookmark has one destination. Create separate entries for different sections, or put several entries under a heading so the reader can choose the section they need.

### Will my bookmark list appear when I print the PDF?

The reader's bookmark panel is separate from the document's visible pages. This tool does not insert a printed contents page. If your recipient needs navigation on paper, include a contents page in the document itself.

### Does changing a bookmark title rename text on the PDF page?

No. It changes the navigation label in the saved outline. The page heading and body text remain as they were, so keep the bookmark wording consistent with the section it opens.
`,o=`---
{
  "title": "How to extract selected pages from a PDF",
  "description": "Save one page or selected sections from a PDF as a new file. Check the page order, choose separate outputs when needed, and review the copy before sharing.",
  "slug": "extract-pdf-pages",
  "type": "guide",
  "keywords": ["how to extract pages from a pdf", "extract pages from pdf", "save one page of a pdf"],
  "relatedTool": "extract-pages",
  "related": ["/tools/organize-pdf/", "/tools/compress-pdf/"],
  "date": "2026-10-25"
}
---
To extract selected pages from a PDF, open the file in Extract pages, select the page previews you need, and save the result. You can keep those pages together or save one PDF per page. Your original stays unchanged. Reopen the new copy to check its contents before you share it.

## Decide which pages belong in the new copy

Write down the sections the recipient needs, then check the original. A report page may refer to an earlier definition, a footnote on the next page or an appendix. Include the surrounding pages needed to understand the section.

Count pages from the beginning of the file, including the cover. Printed page numbers and PDF viewer labels can differ from the page's position. W3C's [guidance on PDF page numbering](https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF17) explains how front matter and appendices can use different numbering schemes. In the tool, compare the numbered previews with the visible page content.

Extraction copies pages into another file. If you want to discard a few pages and retain everything else, removing those pages may be easier. If you want a different page order, plan that in [Organize PDF](/tools/organize-pdf/) and check the result again afterward.

## Save the chosen pages

1. Open [Extract pages](/tools/extract-pages/) and choose one PDF. Processing happens on your device. The extraction button stays disabled until you choose pages.
2. Select the previews of the pages to keep. For a longer selection, enter page numbers in Select range and click Select. For example, \`2,5-6\` selects the second, fifth and sixth pages.
3. Check the highlighted previews. Use None to clear a mistaken selection and choose again. Typing a range alone does not apply it; click Select before continuing.
4. Leave Save each selected page as a separate PDF off to keep the selected pages in one document. Turn it on if you want a different PDF for each selected page.
5. Choose Keep bookmarks if you want supported navigation for the pages that remain. Links to pages outside the new copy cannot be retained as working internal destinations.
6. Click Extract pages. Download the result, or use Download ZIP when several separate PDFs are ready. Give the copy a clear filename so you can distinguish it from the original.

If Make form entries permanent appears, read its warning before continuing. The option makes supported filled answers part of the page, so they no longer work as editable form fields in the new copy. Keep the editable source if someone will need to change the answers later.

## A six-page example

For this example, an application has six pages.

| Position in the file | Contents | Include in this copy? |
| --- | --- | --- |
| 1 | Cover letter | No |
| 2 | Application summary | Yes |
| 3 | Supporting explanation | No |
| 4 | Detailed schedule | No |
| 5 | First attachment | Yes |
| 6 | Second attachment | Yes |

Enter \`2,5-6\` in Select range, then click Select. With the separate-PDF option off, the result should contain three pages: the summary followed by the two attachments. Open the downloaded copy and compare those pages with the original. This is an illustrative selection; decide whether the omitted explanation is needed in your actual document.

If you only need the summary, choose its preview alone. The result should have one page. With the separate-PDF option on for the three-page selection, expect three one-page files.

## Review the new file before sending it

Check the page count and the first and last pages. Look at the transition between selected sections: an attachment without its title or explanatory page can be confusing. Make sure the copy has no pages you did not intend to include.

Review visible personal details, comments and filled answers on retained pages. Choosing pages does not automatically find or remove confidential information within them. Test any bookmarks or internal links the recipient will need; destinations on omitted pages cannot take the reader there.

Extracting fewer pages does not guarantee a particular file size. Shared fonts, images and other document resources can affect the result. If an upload limit still applies, use [Compress PDF](/tools/compress-pdf/) on the reviewed copy and check small print and pictures again after compression.

## Common situations

| What happens | What to check |
| --- | --- |
| Extract pages is disabled | Choose at least one page preview, or apply Select range with the Select button. |
| The typed range has not changed the highlights | Click Select, then review the selection before exporting. |
| A selection is rejected | Use page positions inside this file. Write a range such as 5-7 in ascending order, and separate different selections with commas. |
| You got several PDFs instead of one | Turn off Save each selected page as a separate PDF and export again. |
| The chosen page number does not match the printed heading | Check the preview. Covers, Roman-numbered introductions and appendices can shift the position in the file. |

## Questions

### Will the extracted copy renumber the numbers printed on my pages?

The visible page content keeps its existing numbering. The new file has fewer pages, so its first page may still show a different printed number. Review both the file's page count and the wording printed on the page.

### Is extracting pages the same as copying text from a PDF?

No. Extraction produces another PDF containing the selected pages. It does not turn those pages into a text document or spreadsheet. Keep a PDF copy when the reader needs the page layout.

### Why do selected pages keep their order in the preview grid?

The highlighted-page workflow exports pages in their current grid order. Clicking pages in a different sequence does not rearrange them. Use Organize PDF when you need to change the order, then review the saved copy.

### Can an extracted copy retain proof of the source's digital signature?

Keep the complete signed original for signature verification. Rebuilding a PDF from selected pages changes the document. A visible signature on an extracted page does not establish that the new copy has the original's valid digital signature.
`,s=`---
{
  "title": "How to flatten a PDF form before sharing",
  "description": "Flatten a filled PDF form while keeping an editable original. Choose which fields and marks to keep, then check the saved copy before sharing it.",
  "slug": "flatten-pdf-before-sharing",
  "type": "guide",
  "keywords": ["how to flatten a pdf", "flatten pdf", "what does flatten pdf mean"],
  "relatedTool": "flatten-pdf",
  "related": ["/tools/pdf-forms/"],
  "date": "2026-10-23"
}
---
To flatten a PDF form, save the completed answers, open a copy in Flatten PDF, and select Form fields. Flattening turns supported saved answers into ordinary page content. Keep the editable original, then reopen the downloaded copy to check every answer before sharing. Other PDF editing can still change the page.

## Decide which copy the recipient needs

Flatten a completed form when the recipient needs to read the answers without using its fillable fields. If they must add answers, choose options or continue a signature workflow, send the appropriate interactive original instead. Check their submission instructions before changing the file.

Flattening removes the selected interactive items. It does not make the document tamper-proof or remove confidential wording beneath a rectangle. It also does not guarantee a smaller file. Keep your filled original separately so a mistaken answer can be corrected later.

For a form that someone still needs to complete, preserve its accessible controls. W3C's [guidance on PDF form controls](https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF12) explains how field names, roles and values help assistive technology work with them. A flattened page is not a substitute for an accessible fillable form.

## Save the answers before flattening

Open the form and check the completed values, including ticked boxes and choices. Save it, close it, and reopen that saved file. This checks that the answers are in the file rather than only visible in the current editing session.

If you need to fill or correct supported fields first, use [PDF Forms](/tools/pdf-forms/) and save the completed form. A PDF can store a field's value separately from the instructions that draw it on screen. Flatten PDF needs those saved appearances; it does not guess how an unsupported or incomplete field should look.

## Create the flattened copy

1. Open [Flatten PDF](/tools/flatten-pdf/) and choose the saved PDF. Processing happens on your device.
2. Keep Form fields selected to make supported filled answers part of the page. All three categories start selected, so review the other two before proceeding.
3. Select Comments and marks if you want supported visible annotations included as page content. Pop-up note text is not printed, and hidden selected items are removed. Copy any note wording you need into the visible document before flattening.
4. Select Signatures and stamps only when you want their supported visible appearances included. This does not preserve the validity of a digital signature. Keep a signed original separately for verification.
5. If the file has a digital signature, read the warning. Tick \`Save an edited copy. Its digital signature will no longer be valid.\` only if that edited copy is what you need.
6. Select Flatten PDF, then Download flattened PDF. Save the result with a different filename so you can distinguish it from the editable source.

The choices apply to the document, not a selected page range. Unselected categories remain interactive where supported. Ordinary links are retained, but an overlap with a visible link or an unselected annotation can prevent an export that would change the appearance.

## Check a worked example

Suppose an invented application contains reference \`001234\`, amount \`1234.50\`, and a checked consent box. After flattening, compare all three with the filled original. Keep both leading zeros and both decimal places visible. Check that a long answer is not cut off at the edge of its former field.

Click where the answer fields used to be. They should no longer accept input if Form fields was selected. Check every page, including rotated pages, stamps and the end of a long form. Test any link the recipient needs. If comments mattered, check their visible marks and wording rather than assuming the pop-up discussion was included.

Reopen the result in the PDF reader you intend to use. A successful download is not proof that every answer or annotation was present in the source file's saved appearance.

## If the result is not ready to share

| What you see | What to do |
| --- | --- |
| No items to flatten | The file may already contain only page content. Check whether any field still accepts input; do not expect flattening to shrink a normal text PDF. |
| An item has no saved appearance | Save the completed file in a PDF editor first. Leaving its category unselected keeps it interactive and may not meet your purpose. |
| Selected and unselected items overlap | Select both categories if both should become page content, or change the overlap in the original. |
| A note's discussion is missing | Pop-up note text is not printed. Keep the annotated original or add the required wording visibly before flattening. |
| The form uses XFA | This tool needs an AcroForm copy. Ask the sender for a supported copy rather than assuming the export can reproduce the form. |

## Questions

### Can I change a flattened answer back into its original field?

Flatten PDF does not reconstruct the removed fields. Correct the editable original and make a fresh flattened copy. Keep that original until you are sure no further changes are needed.

### Does flattening hide the answers I entered?

No. The selected answers become visible page content. Anyone who receives the file can still read them. Flattening should not be used to conceal personal information or remove text beneath an added box.

### Should I flatten a blank form before sending it to someone?

Keep the interactive form if the recipient needs to type into it. Flattening its empty fields removes those inputs. A copy intended only for printing serves a different purpose; confirm which version the recipient needs.

### Will every comment become readable text on the flattened page?

The tool places supported marks on the page using their saved appearance. Pop-up note text is not printed. Review the downloaded copy and retain the annotated original if the full discussion is needed.
`,c=`---
{
  "title": "How to make a scanned PDF searchable",
  "description": "Make a scanned PDF searchable with OCR. Choose the right language, keep the page images, and check names, numbers and missing text before sharing.",
  "slug": "make-pdf-searchable",
  "type": "guide",
  "keywords": ["make pdf searchable", "how to make a pdf searchable", "scanned pdf to searchable pdf"],
  "relatedTool": "ocr-pdf",
  "related": ["/tools/pdf-to-text/"],
  "date": "2026-10-22"
}
---
To make a scanned PDF searchable, run optical character recognition (OCR) and save a Searchable PDF. OCR adds a text layer so you can find and copy words while keeping the page images. Choose the correct languages, then check a few searches and important numbers against the original before sharing.

## Check whether the PDF needs OCR

Open the original and try selecting a short sentence. Copy it into a plain text editor and compare the words. A scan may look sharp on screen while containing only pictures of the text. If selection and copying already work, you may not need OCR.

Some documents mix scanned pages with pages that already contain text. Note which pages need recognition. Keep the original file separately and work from the clearest copy available. A small, heavily compressed scan can leave too little detail to distinguish a decimal point from a speck on the page.

## Create a searchable copy step by step

1. Open [OCR PDF](/tools/ocr-pdf/) and choose the scanned PDF. The document is processed on your device.
2. Under Save as, choose Searchable PDF. This keeps a PDF for reading and searching; a text or Word export serves a different purpose.
3. Set Pages (leave blank for all). For a long scan, try a representative page first. A range such as \`2-4\` recognizes those pages; other pages remain in the PDF without new recognition.
4. Choose Text languages to match the printed words. English is selected initially. If the document also contains Tamil, for example, select Tamil as well. Avoid adding languages that do not appear on the pages.
5. Open More options if recognition data needs preparing, then select Prepare languages. The first preparation needs an internet connection to download the chosen data. Your PDF is not sent with that download.
6. Select Recognize text and wait for the result. Keep the tab open. If the browser runs short of memory, try fewer pages rather than repeatedly starting the entire document.
7. Download the result. In your PDF reader, search for a distinctive word from a processed page, then try copying a sentence. Check the copied wording as well as the visible page.

The page picture can still look correct when the hidden text contains a mistake. Review the text that search and copy actually use, especially before relying on amounts, dates or reference numbers.

## Test the result with a small checklist

For an invented invoice, suppose the image says \`Invoice 001234\` and \`Total 1234.56\`. Search for the invoice heading, copy the identifier and amount, and compare each character with the image. A match for the heading does not prove that the amount was read correctly.

Check the first and last processed pages, a dense paragraph, and any faint or rotated page. Watch for \`0\` versus \`O\`, \`1\` versus \`I\`, missing minus signs, decimal points and leading zeros. A confidence indicator can help you decide where to look, but it cannot certify a particular number.

To check several pages together, open the saved copy in [PDF to Text](/tools/pdf-to-text/) and export its wording. Look for missing paragraphs and an unexpected reading order, especially on pages with columns. Compare the extracted text with the source PDF.

W3C's [guidance on text in scanned PDFs](https://www.w3.org/WAI/WCAG22/Techniques/pdf/PDF7) also describes checking recognized text and reading order. Searchable text alone does not establish that a document is fully accessible; tags and reading order need their own review.

## Common situations and what to try

| Situation | What it can mean | Next step |
| --- | --- | --- |
| Search finds a word on one page but not another | The second page may be outside the chosen range or poorly recognized | Check Pages and test that page separately |
| The page looks right, but copied numbers are wrong | The picture and recognized text are different parts of the PDF | Compare the text with the original and use a clearer scan if possible |
| Words run together or appear out of order | Columns, skew or a complex layout may affect recognition | Review a small sample before processing the whole file |
| Recognition data is not ready | The selected language data has not finished downloading | Use Prepare languages with an internet connection |
| The file is larger after OCR | The searchable copy includes additional text information | Keep both copies and review any later compressed result again |

If a scan is blurred or badly faded, try a clearer scan before running recognition again. Handwriting and stamps need particular care. OCR cannot recover missing print. If the scan cuts off a line, rescan the complete page.

## Questions

### Does adding searchable text let me rewrite the printed page?

No. A searchable copy adds text for finding and copying words; it does not turn the printed page into an editable page layout. Choose an editable-text output if you need to revise wording, and compare that export with the original.

### What happens to pages outside my OCR range?

They remain in the searchable PDF. The chosen range controls which pages receive recognition, so a scanned page outside that range may still be impossible to search. Include it in a later run if you need its words recognized.

### Can I keep an existing digital signature when I add OCR text?

Keep the signed original. OCR PDF requires an unsigned copy when saving a searchable PDF because rewriting the document would invalidate the original cryptographic signature. Do not present an edited copy as the signed original.

### Will OCR make every word in a scan searchable correctly?

No. Small print, unusual names, faded characters and complex layouts can produce missing or incorrect text. Test searches and copied passages on representative pages, and check important values against the image before sharing or using the result.
`,l=`---
{
  "title": "How to convert a bank statement PDF to Excel",
  "description": "Turn a bank statement PDF into Excel with this step-by-step guide. Prepare scans, combine pages, preserve account IDs, and check transactions before use.",
  "slug": "pdf-to-excel-one-column",
  "type": "guide",
  "keywords": ["bank statement to excel", "convert pdf bank statements to excel"],
  "relatedTool": "pdf-to-excel",
  "related": ["/tools/ocr-pdf/", "/tools/pdf-to-text/"],
  "date": "2026-10-20"
}
---
To convert a bank statement PDF to Excel, start with the original statement, identify its tables, review the columns, and export a workbook. Combine matching tables when transactions continue across pages. Keep account identifiers as text, and compare dates, amounts and balances with the PDF before sorting or calculating.

## Before you start

Keep an unchanged copy of the statement. If your bank already provides an Excel or CSV download for the same account and period, consider using that structured file instead of reconstructing a table from a PDF.

For a PDF, check these three things:

- Can you select a sentence? A bank-generated PDF often contains selectable text. A scan or photograph may contain only pictures of words. The preparation step below explains what to do with a scan.
- Does it need an opening password? Use the password supplied for a document you are entitled to access. A PDF that opens normally does not need an extra password simply because it has editing restrictions.
- Which pages contain the transactions? Note the page range and whether other sections, such as fees or account summaries, have different headings. This helps you choose what to include.

A statement does not need visible grid lines to look like a table. Columns may be formed by aligned text and blank space. Their positions still need to be checked during conversion, particularly around long descriptions and page breaks.

## Convert the statement step by step

1. Open [PDF to Excel](/tools/pdf-to-excel/) and choose your statement. The document is processed on your device.
2. Set **Pages (leave blank for all)**. For a long statement, try one representative transaction page first, then return to the full range once you understand the preview.
3. Choose **Export layout**. Select **Document** to keep headings and nearby notes with the tables, or **Tables only** when you mainly need the detected cells. Choose the layout before making your final selections, because changing it resets some related options.
4. Select **Find tables**. In **Table to preview**, switch between the detected tables and compare each with the PDF. Check that dates, descriptions, debits, credits and balances sit in the intended columns.
5. Use **Include this table** to choose the sections you need. Correct individual cells in the preview where necessary. For longer tables, use **Previous rows** and **Next rows** to inspect more than the first screen.
6. When multiple selected tables belong together, enable **Combine selected tables with matching headings into one sheet**. Different headings remain separate. The next section explains what to check across pages.
7. Review the number and reference-text options. In Document layout, **Use numbers for amounts and quantities** converts unambiguous amounts while keeping leading-zero IDs, dates and long identifiers as text. **Include original page text on separate sheets** adds a useful reference copy of the wording.
8. Select **Create Excel file**, then **Download Excel**. Open the workbook and complete the checks below before sorting, filtering or calculating with the transactions.

Use the preview to check how the table was extracted. Columns can be misplaced, and correcting a few cells will not fix a table whose structure is wrong throughout. If your bank offers a structured export, that can save you from rebuilding the table.

## Combine a statement that spans several pages

Use Document layout when the heading, table and nearby notes should stay together. Matching table sections can be joined in page order, while a different set of headings starts another worksheet.

For example, pages containing \`Date\`, \`Description\`, \`Debit\`, \`Credit\` and \`Balance\` may belong to one transaction table. A separate section containing \`Fee type\` and \`Amount\` should remain distinct. Do not combine unrelated sections solely because they have the same number of columns.

Inspect the boundary between each pair of pages. A long description may continue onto another line, and a repeated header or carried-forward balance is not necessarily another transaction. Keep nearby notes identifiable. If a continuation page has no heading, check that it joined the right table.

Original-text worksheets intentionally contain one column. They preserve page wording for comparison and are separate from table worksheets. Keep them until you have checked for any missing notes or unplaced content.

## Prepare a scanned statement

If you cannot select the visible words, open [OCR PDF](/tools/ocr-pdf/) first. Choose the languages actually present, select **Searchable PDF** under **Save as**, and select **Recognize text**. Review the recognized words and download the searchable copy, then use that copy in PDF to Excel. Follow the [searchable PDF guide](/guides/make-pdf-searchable/) for a page-by-page checking method.

OCR also offers an **Excel tables (.xlsx)** output. You can try that route for a scanned table, but still compare the resulting cells with the page image. OCR may recognize the words correctly but still place them in the wrong columns.

Faint print, skewed pages, stamps and small digits can affect recognition. Start with the clearest available original rather than a heavily compressed screenshot. Check similar-looking characters such as \`0\` and \`O\`, and review decimal points and minus signs in amounts.

## Keep amounts usable and identifiers intact

Store amounts as numbers when you need to calculate with them. Keep account numbers as text: they identify an account even when every character is a digit.

- Keep codes such as \`001234\` as text so the starting zeros remain part of the value.
- Check the statement's date convention before treating an ambiguous date as a calendar value.
- Preserve blank debit or credit cells. Removing blanks can move the balance into the wrong column.
- Keep multi-word and multi-line descriptions attached to their transaction.
- Review currency signs, thousands separators and decimal separators before adding amounts.

For an invented transaction, \`01 Oct | CARD PAYMENT CITY STORE | 42.50 | blank | 957.50\` contains five fields. The store description belongs in one cell, and the empty credit field still occupies its own column. Splitting on every space would break the description and would not recover the intended table.

## Check the workbook against the PDF

Before relying on the exported data, check these points.

1. Confirm the account and statement period match the source.
2. Compare the first and last transaction on every page to spot missing or repeated rows.
3. Check transaction counts, allowing for descriptions that wrap across printed lines.
4. Review dates, debit and credit placement, signs, amounts and balances against the original.
5. Keep opening balances, closing balances, totals and notes distinct from transaction rows.
6. Save a reviewed copy before sorting or changing formulas, and retain the PDF as your reference.

If you only need the statement's wording, [PDF to Text](/tools/pdf-to-text/) can produce a text file. Use that as a reference rather than expecting plain text to preserve spreadsheet columns.

## Common situations and next steps

| Situation | What to check | What to do |
| --- | --- | --- |
| You see a worksheet with only one column | Whether it is an original-text reference sheet | Open the table worksheet and compare both with the PDF |
| No table is found on a page | Whether the words are selectable and arranged consistently | Try the scan preparation step if needed; otherwise review the available source format |
| A page starts a separate worksheet | Whether its headings differ or are missing | Check whether the section should be separate before manually joining it |
| A description appears on two lines | Whether the second line belongs to the same transaction | Preserve the full description and check the adjacent amounts |
| An amount or identifier looks different | Whether recognition or number conversion changed its interpretation | Compare with the PDF and correct the value before using the workbook |

## Questions

### Is the bank's CSV download worth using instead of its PDF?

Yes, when it covers the account, period and details you need. CSV already separates data into fields, so it avoids reconstructing columns from a page layout. Check the download's dates, identifiers and totals just as you would check a converted workbook.

### Should account summaries and transaction tables go in the same worksheet?

They do not have to. Document layout can preserve nearby headings and notes, while tables with different headings stay separate. Keep summaries distinguishable so their balances and totals are not accidentally counted as transactions.

### Is searchable text enough to guarantee a correct statement table?

No. Searchable text helps make the words available, but column positions, wrapped descriptions and missing headings still need interpretation. Review the table preview and compare important cells with the original.

### Can I remove the reference-text sheets after reviewing the workbook?

Yes, if you no longer need them and have confirmed that important notes and transactions are preserved elsewhere. Keep the original PDF and a copy of the reviewed workbook so you can check the source later.
`,u=`---
{
  "title": "How to use localipdf PDF tools in Codex",
  "description": "Connect localipdf to Codex to merge, split and convert local PDFs. Follow setup steps, test a result, understand privacy limits, and update the connection.",
  "slug": "use-localipdf-with-codex",
  "type": "guide",
  "keywords": ["PDF tools for Codex", "localipdf MCP", "Codex PDF MCP server"],
  "relatedTool": "merge-pdf",
  "related": ["/claude/", "/privacy/"],
  "date": "2026-10-20"
}
---
You can ask Codex to work with local PDFs through localipdf's MCP connection. MCP lets an AI assistant discover and call tools. This package uses the same PDF engine as the website and the same server as the [Claude Desktop integration](/claude/). You do not need a second converter.

## Before you start

Use a local Codex installation, Node.js 20 or newer, and an installed Chrome, Edge, Chromium or Brave browser. This package needs a computer that can run a local browser; it is not a hosted connector for ChatGPT in a web browser.

No localipdf API key is required. Your normal Codex account and usage arrangements still apply. Start with two disposable PDFs so you can check the connection without sharing sensitive material.

## Download the tools

1. [Download the localipdf MCP package](https://localipdf.com/downloads/localipdf-mcp.zip).
2. Extract it into a permanent folder, such as a folder named \`localipdf-mcp\`.
3. Keep \`server.mjs\`, \`driver.js\`, \`tools.json\`, \`manifest.json\`, \`README.md\` and the \`site\` folder together. Moving only the server file will break the connection.

If you already have the extracted Claude package, you can reuse that folder. Both downloads contain the same server. Codex does not need the Claude extension installer.

## Add it to Codex

Check your installed client's commands with \`codex mcp --help\`. For a CLI installation, replace the example path below with the full path to your extracted server:

\`\`\`sh
codex mcp add localipdf -- node "/absolute/path/localipdf-mcp/server.mjs"
\`\`\`

If \`localipdf\` is already configured, inspect that entry instead of adding another. If the desktop app cannot find Node, use the full path to the Node executable in place of \`node\`.

For longer conversions, add the following setting inside the existing \`[mcp_servers.localipdf]\` section of \`~/.codex/config.toml\`:

\`\`\`toml
tool_timeout_sec = 960
\`\`\`

This gives the connection time to receive the server's own 15-minute timeout response. It does not make a conversion faster. Keep other server settings intact.

In the desktop app's MCP settings, save the connection and use the available restart control. For CLI, start a fresh session and use \`/mcp\` to inspect connected servers. The exact settings labels can vary by client version. See [OpenAI's MCP setup documentation](https://learn.chatgpt.com/docs/extend/mcp?surface=cli) for its current configuration and reload steps.

## Confirm the connection works

First ask:

\`\`\`text
List the localipdf tools available through MCP.
\`\`\`

Then use two disposable PDFs and an existing output folder:

\`\`\`text
Use localipdf to merge "/full/path/first.pdf" and
"/full/path/second.pdf" in that order.
Save the result in "/full/path/results".
\`\`\`

Open the saved file and check its page count and order. Listing the tools checks the connection. Merging the sample PDFs also checks the browser, file access and saving.

The [Merge PDF tool](/tools/merge-pdf/) offers the same workflow in the browser if you prefer to choose files yourself.

## Choose options before running a tool

Ask Codex to show the available options for the selected tool and file before changing an unfamiliar setting. The connection reads the controls shown by that tool.

You can ask to split a PDF, extract selected pages, convert a document or compress a copy. Give the full file paths and the folder where you want the result saved. The server preserves existing files by choosing a new name when necessary. Check the returned path rather than assuming it replaced an earlier output.

Some operations require your confirmation. Review the action and any warning before agreeing, especially when changing signatures, security restrictions or visible content.

## Know which workflows need the website

The tool catalog marks workflows that cannot run through this connection. Signing, drag-based page organization, reading, visual comparison, overlay templates, camera scanning and the workflow builder need the website's interface. The downloadable MCP package also excludes OCR recognition assets.

Use the website for those workflows. They appear in the catalog with an explanation of why they cannot run through the connection.

## Understand what stays local

The server processes PDFs in a separate temporary browser profile on your computer. It does not reuse your personal browser tabs or browsing profile.

However, Codex receives your prompts and the tool's responses. These can contain paths, messages and, for some operations, extracted document text. Your AI provider can therefore receive some document information even though the PDF is processed locally. Review your client's data settings before asking it to extract sensitive text.

Read the [localipdf privacy policy](/privacy/) for the website's practices. Your AI client's policies apply separately.

## Update or troubleshoot the connection

To update, extract a fresh download into a new folder, change the configured server path and reload the connection. Test a disposable file before deleting the previous package.

| What you see | What to check |
| --- | --- |
| Node or the server cannot be found | Use full executable and server paths; confirm the folder was extracted |
| A missing file or blank tool page | Keep the complete package together, including \`site\` and \`tools.json\` |
| No supported browser is found | Install a supported browser, or set \`LOCALIPDF_BROWSER\` in the server environment to its executable |
| A conversion times out | Check the timeout setting and try fewer pages or a smaller file |
| The tool is listed but cannot run here | Read its limitation and use the website's interface |

## Questions

### Do I need a separate PDF engine for Codex and Claude?

No. Both integrations use the same localipdf server and bundled website tools. Each client has its own connection settings.

### Can I install this ZIP as a hosted ChatGPT web connector?

No. This package uses local STDIO and launches a local browser. ChatGPT web needs a remote MCP connection or a supported tunnel, as described in [OpenAI's ChatGPT connection guide](https://help.openai.com/en/articles/12584461-connecting-custom-mcp-servers-in-chatgpt). That requires a separate connection and access design; it is not part of this setup.

### Will the connection change my original PDF?

Results are saved as new files. If an output name already exists, the server chooses another name. Review the saved copy before using or sharing it.

### Why should I test with disposable PDFs first?

It confirms that the configured path, browser and output folder work together. It also lets you see what information the assistant receives before using a private document.
`,d=e=>String(e).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`),f=e=>`/${e.type===`guide`?`guides`:e.type}/${e.slug}/`;function p(e){let t=/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]+)$/.exec(e);if(!t)throw Error(`Article needs JSON front matter and Markdown body.`);let n=JSON.parse(t[1]);for(let e of[`title`,`description`,`slug`,`type`,`relatedTool`,`date`])if(typeof n[e]!=`string`||!n[e].trim())throw Error(`Missing article ${e}`);if(![`blog`,`glossary`,`guide`].includes(n.type)||!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(n.slug))throw Error(`Invalid article route.`);if(!/^\d{4}-\d{2}-\d{2}$/.test(n.date)||new Date(n.date).toISOString().slice(0,10)!==n.date)throw Error(`Invalid article date.`);if(n.title.length>60||n.description.length<140||n.description.length>155)throw Error(`Article title must be <=60 and description 140–155 characters.`);if(!Array.isArray(n.keywords)||!n.keywords.length||n.keywords.some(e=>typeof e!=`string`||!e.trim()))throw Error(`Article keywords are required.`);if(!Array.isArray(n.related)||n.related.length<1||n.related.length>2||n.related.some(e=>typeof e!=`string`||!/^\/(?:[a-z0-9-]+\/)*$/.test(e)))throw Error(`Article needs 1–2 related site paths.`);return{...n,path:f(n),body:t[2].trim()}}function m(e){return new n({renderer:{html(){throw Error(`Raw HTML is not allowed in articles.`)},image(){throw Error(`Article images are not supported.`)},link({href:e,tokens:t}){if(!/^\/(?!\/)[a-z0-9/#-]*$/i.test(e)&&!/^https:\/\/[^\s<>"\\]+$/i.test(e))throw Error(`Unsafe article link.`);return`<a href="${d(e)}">${this.parser.parseInline(t)}</a>`},heading({depth:e,tokens:t}){if(e===1)throw Error(`Use the front matter title, not a second H1.`);return`<h${e}>${this.parser.parseInline(t)}</h${e}>\n`}}}).parse(e.body,{async:!1})}function h(t,n){let r=t.replace(/^\/|\/$/g,``);if(e[r]){let t=n.filter(e=>e.path.startsWith(`/`+r+`/`));return`<h1>${d(e[r].title.replace(` | localipdf`,``))}</h1><p>${d(e[r].description)}</p>${t.length?t.map(e=>`<section><h2><a href="${d(e.path)}">${d(e.title)}</a></h2><p>${d(e.description)}</p></section>`).join(``):`<p>New articles will appear here as they are published. <a href="/">Browse PDF tools</a>.</p>`}`}let i=n.find(e=>e.path===t.replace(/\/$/,``)+`/`);return i?`<nav aria-label="Breadcrumb"><a href="/">PDF tools</a> / <a href="/${i.path.split(`/`)[1]}/">${d(e[i.path.split(`/`)[1]].title.replace(` | localipdf`,``))}</a></nav><h1>${d(i.title)}</h1><p>Published <time datetime="${i.date}">${i.date}</time></p><div class="article-body">${m(i)}</div>`:`<h1>Page not found</h1><p><a href="/">Browse PDF tools</a>.</p>`}var g=t(),_=Object.values(Object.assign({"./articles/glossary-linearized-pdf.md":r,"./articles/guide-aadhaar-pdf-password.md":i,"./articles/guide-add-bookmarks-to-pdf.md":a,"./articles/guide-extract-pdf-pages.md":o,"./articles/guide-flatten-pdf-before-sharing.md":s,"./articles/guide-make-pdf-searchable.md":c,"./articles/guide-pdf-to-excel-one-column.md":l,"./articles/guide-use-localipdf-with-codex.md":u})).map(e=>p(e));function v({path:e}){return(0,g.jsx)(`article`,{className:`container prose`,dangerouslySetInnerHTML:{__html:h(e,_)}})}export{v as default};