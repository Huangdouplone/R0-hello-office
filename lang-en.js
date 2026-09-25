/* R0:hello office · 英文覆盖层
 * 制作者 / Creator:    Bilibili 黄豆666 (huangdouplone)
 * 版权所有 / Copyright: (c) 2026 黄豆666 / huangdouplone. All rights reserved.
 * 隶属 / Series:        隶属于拾色造梦企划 EDU 系列
 * 从 office-data.js 的 *_en 字段派生出按 id 索引的英文表；
 * 渲染层在 EN 模式下优先取这些表，缺字段则回退中文。
 * 单一事实源 = 数据文件里的 *_en 字段，本文件只做「提取 / 索引」，不重复抄写文案。
 */
(function () {
"use strict";

/* 章节名 / 描述 */
window.OFFICE_STAGE_EN = {};
(window.OFFICE_CURRICULUM || []).forEach(function (s) {
  window.OFFICE_STAGE_EN[s.id] = { name: s.name_en, desc: s.desc_en };
});

/* 课节标题（按课节 id 扁平索引） */
window.OFFICE_LESSON_EN = {};
(window.OFFICE_CURRICULUM || []).forEach(function (s) {
  (s.lessons || []).forEach(function (l) {
    window.OFFICE_LESSON_EN[l.id] = { title: l.title_en };
  });
});

/* 动手实战标题 */
window.OFFICE_LAB_EN = {};
(window.OFFICE_LABS || []).forEach(function (x) {
  window.OFFICE_LAB_EN[x.id] = { t: x.t_en };
});

/* 名词卡 */
window.OFFICE_TERM_EN = {};
(window.OFFICE_TERMS || []).forEach(function (x) {
  window.OFFICE_TERM_EN[x.term] = { term: x.term_en, short: x.short_en, vs: x.vs_en };
});

/* 工作流步骤标题 + 示例名 */
window.OFFICE_WORKFLOW_EN = { steps: {}, example: {} };
((window.OFFICE_WORKFLOW && window.OFFICE_WORKFLOW.steps) || []).forEach(function (x) {
  window.OFFICE_WORKFLOW_EN.steps[x.n] = { title: x.title_en };
});
if (window.OFFICE_WORKFLOW && window.OFFICE_WORKFLOW.example) {
  window.OFFICE_WORKFLOW_EN.example.name = window.OFFICE_WORKFLOW.example.name_en;
}

/* ============================================================
 * B12 英文正文覆盖层：名词库 detail / 工作流正文与示例 / 实战起步代码
 * 渲染器早已留好读取口（termDetEn / wfBodyEn / OFFICE_WORKFLOW_FLOW_EN / labBodyEn），
 * 此前这些表从未写过，所以英文模式整段回落到中文。
 * ============================================================ */
window.OFFICE_TERM_DETAIL_EN = {
  "办公文档": ["Prose suits linear reading, tables suit structured data, decks suit live explanation.", "Picking the wrong medium is the root cause of wasted effort (writing proposals in a spreadsheet, keeping ledgers in a document)."],
  "文字处理": ["The core idea is style-driven editing, not manual tweaking.", "What makes long documents hard is structure (heading levels, TOC, captions), not the text itself."],
  "样式": ["The Heading 1/2/3 hierarchy is the basis for the TOC, navigation and multilevel numbering.", "The Body style keeps every paragraph of body text on the same settings."],
  "多级列表": ["Numbers re-flow automatically when chapters are added or removed.", "It only works when linked to heading styles; typing numbers by hand means there is no structure."],
  "分节符": ["Mixed portrait/landscape pages, no page number on the cover, body numbering restarting at 1 — all of these need it.", "A section break changes the rules; a page break only moves to the next page."],
  "页眉页脚": ["'Link to Previous' decides whether this section inherits the header and footer of the one before.", "Page numbers, document title and logo normally live here."],
  "域": ["A field is recomputable content: Ctrl+A then F9 refreshes the whole document.", "Typing page numbers and cross-reference numbers by hand throws away that automation."],
  "目录": ["Choose Update entire table when content changed; update page numbers only when just pages moved.", "Wrong TOC page numbers almost always mean broken heading levels."],
  "题注": ["Combined with cross-references you can cite a figure in the body and stay in sync.", "Captions renumber automatically after figures are inserted or deleted."],
  "交叉引用": ["'As shown in Figure 3-1' should be a cross-reference, not typed text.", "Numbers sync automatically once fields are updated."],
  "修订": ["The standard way for multiple people to edit: turn Track Changes on before touching anything.", "Accept or reject each change while reviewing, then Accept All to produce the final text."],
  "批注": ["Settle the discussion before deciding what lands in the body — don't edit while arguing.", "Comments can be exported as a list and answered one by one."],
  "表格": ["One row per record, one column per attribute is its basic contract.", "Sorting, filtering, pivot tables and formulas all depend on that structure."],
  "数据规范": ["Merged cells and multi-row headers are the number one cause of failed analysis.", "A tidy table can be sorted, filtered and pivoted immediately."],
  "公式与函数": ["There are only about ten you reach for constantly: SUM/IF/SUMIFS/XLOOKUP/ROUND/TEXT.", "Break a complex formula into intermediate columns first, then combine — it is far easier to debug."],
  "绝对引用": ["Parameter tables, exchange rates and thresholds sit at fixed positions and must be locked.", "Press F4 while editing a formula to cycle through the locking modes."],
  "查找引用": ["Prefer XLOOKUP — it can look left and supply a default value.", "With VLOOKUP always pass FALSE as the last argument for an exact match."],
  "数据透视表": ["It only syncs after you click Refresh when the source data changes.", "Value fields can switch between sum, count, average and share of total."],
  "条件格式": ["The three most useful rules: duplicates, over-threshold, data bars/colour scales.", "Write what the colours mean in the header or a comment, or nobody will know within a week."],
  "分列": ["Typical uses: splitting province-city-district, and turning text numbers into real numbers.", "After splitting, check for stray spaces and leading zeros."],
  "演示": ["Slides serve the talk; they are not a substitute for a document.", "Put the script in the notes and keep only keywords and one picture on the slide."],
  "母版": ["Background, title position, body size and page numbers are all set here once.", "One edit in the master beats dozens of manual per-slide adjustments."],
  "版式": ["Pick a layout when creating a page instead of dragging your own text boxes; content in placeholders aligns automatically.", "Layout-driven content can be restyled globally; when a page drifts away from the master, use Reset to hand it back."],
  "主题": ["Changing the theme applies everywhere — the cheapest way to a consistent look.", "One primary colour, one accent, plus a neutral grey ramp is a good palette."],
  "对齐与分布": ["The first reason a layout looks professional is that things line up.", "Use guides and the grid; never eyeball positions."],
  "动画与切换": ["The two most useful are entrance and emphasis.", "Keep duration and start behaviour consistent for similar elements — do not restyle every slide."],
  "图表": ["Choosing the right chart beats decorating the wrong one: bars to compare, lines for trends, pie or stacked bars for composition.", "A bar chart axis must start at 0, or it exaggerates differences."],
  "字体嵌入": ["When delivering a source file with unusual fonts, embed them (the font licence must allow it).", "Exporting to PDF is the easier alternative."],
  "PDF": ["Good for delivery and archiving, poor for continued editing.", "To change content, go back to the source file, edit there and export again."],
  "OCR": ["A scan has no text layer, so without OCR it cannot be searched or copied from.", "Spot-check key figures and reference numbers by hand after recognition."],
  "脱敏": ["You must use Redact to genuinely delete the text layer.", "Drawing a black box does nothing: copy and paste still recovers the original text."],
  "协作": ["Cloud documents aim for one file, one version.", "Permissions, version history and an audit trail are the three cornerstones of collaboration."],
  "云文档": ["When sharing, grant exactly what is needed: view / comment / edit.", "Check whether the link scope can leak outside your organisation."],
  "版本历史": ["If an edit goes wrong, roll back to a point in time.", "Before a major delivery, keep a version explicitly named final."],
  "模板": ["Documents, spreadsheets and decks all support templates (.dotx/.xltx/.potx).", "Maintain templates centrally and version them, or you will end up with several competing copies."],
  "快捷键": ["Universal: Ctrl+Z/Y/S/F/H, and F4 repeats the last action.", "Spreadsheets: Alt+= autosum, Ctrl+Shift+L filter, Ctrl+E flash fill."],
  "最小权限": ["To collect feedback, comment access is enough — edit access is not needed.", "For external delivery export a PDF rather than sending an editable source file."],
  "打印设置": ["Fit to one page is the usual fix for a table spilling a few cells onto page two.", "Always check page breaks in print preview before printing."],
  "命名区域": ["Writing 'PriceTable' instead of 'Prices!$B$2:$B$20' makes formulas far more readable.", "A name is an absolute reference, so dragging never shifts it."],
  "排练计时": ["It tells you early that there is too much content to finish.", "Kiosk auto-play depends on the rehearsal timings."],
  "数字签名": ["Formal signing should use a digital signature or a proper e-signature platform.", "An image of a signature can be copied by anyone and carries no legal reliability."],
  "视图与导航": ["Multi-page view is for checking layout; single-page view is for writing.", "The navigation pane is built from heading styles — it is the TOC-like entry point for a long document."],
  "字符与段落格式": ["Character level: font, size, bold, colour.", "Paragraph level: line spacing, space before/after, indentation, alignment, numbering."],
  "查找替换": ["^p paragraph mark, ^t tab, ^l manual line break.", "Back up, or test on a small selection first, before a document-wide replace."],
  "题注与交叉引用": ["After a major edit, Ctrl+A then F9 refreshes every field.", "A caption can include the chapter number (Figure 3-1)."],
  "引用方式": ["The $ sign is a pin: $A1 pins the column, A$1 pins the row, $A$1 pins both.", "Press F4 while editing to cycle through them."],
  "常用函数": ["Use SUMIFS for conditional sums rather than filtering first and adding up by hand.", "With VLOOKUP the last argument must be FALSE for an exact match."],
  "排序与筛选": ["Select the whole range before sorting, or rows will end up misaligned.", "SUBTOTAL(109,...) sums while ignoring hidden rows."],
  "数据校验": ["A dropdown list is the cheapest way to stop wrong entries and typos.", "It only holds up together with sheet protection: unlock the entry range first, then protect the sheet."],
  "排版四原则": ["Express grouping through spacing, not through borders.", "If the hierarchy still reads at 25% zoom, the layout works."]
};

/* 端到端工作流：每步正文（标题已有 title_en，正文此前没有） */
window.OFFICE_WORKFLOW_BODY_EN = {
  1: { body: ["Is the deliverable a document for people to read, a spreadsheet for people to compute with, or a deck for people to present? Choose the wrong medium and everything after it is wasted.", "Settle the format while you are at it: source file or PDF, paper or projector, and whether a change trail is required."] },
  2: { body: ["For documents fix styles and heading levels first; for spreadsheets fix fields and data rules; for decks fix the master and its layouts.", "Build the skeleton before filling content, so a later revision does not force a rewrite."] },
  3: { body: ["Mark document hierarchy with heading styles; in a spreadsheet, one row per record and one column per attribute.", "This step decides whether an automatic TOC, pivot tables and charts will work later."] },
  4: { body: ["Automatic TOC, captions and cross-references, formulas and pivot tables, conditional formatting — automate everything that can be automated.", "Automation only pays off once the first three steps were done properly."] },
  5: { body: ["In documents check alignment and white space; in spreadsheets check column widths and number formats; in decks check one idea per slide.", "Upgrade from 'I can read this' to 'someone else gets it at a glance'."] },
  6: { body: ["Aspect ratio, embedded fonts, hyperlinks, page numbers, sensitive fields, backup format — walk the list item by item.", "Keep a PDF fallback ready; it saves most on-site surprises."] },
  7: { body: ["For internal collaboration grant comment or edit access; for external delivery export a PDF.", "For important files keep a record: who received it and when."] },
  8: { body: ["Turn what you did this time into a template or a checklist you can reuse directly.", "Efficiency comes from configuring once and reusing for years, not from repeating the same work faster each time."] }
};

/* 示例：六步落地流程 */
window.OFFICE_WORKFLOW_FLOW_EN = [
  "1. Clean the raw data in a spreadsheet into date / product / region / quantity / amount",
  "2. Pivot table for the summary + conditional formatting to flag outliers, then keep only three conclusions as charts",
  "3. Build 8 slides from a template: conclusion, three arguments, risks, action items",
  "4. One keyword line plus one image per slide; the script goes in the notes; rehearse and trim to 12 minutes",
  "5. Export the PDF (fonts embedded) as the deliverable and archive the source file",
  "6. Share with reviewers as comment-only; revise the body once all comments are in"
];

/* 动手实战：前置要求 / 起步代码 / 提示 */
window.OFFICE_LAB_BODY_EN = {
  lab1: { starter: "1. New document, apply Heading 1, Heading 2 and Body styles to three paragraphs\n2. Modify the Body style: 12pt, 1.5 line spacing, 2-character first-line indent\n3. Observe: all three paragraphs change together, instead of editing them one by one" },
  lab2: { starter: "1. Mark at least two chapters with Heading 1/2\n2. Insert an automatic table of contents at the top and watch the entries appear\n3. Add a section break (next page) after the TOC and set that section's page numbering to start at 1\n4. Change one heading, right-click the TOC and choose Update entire table" },
  lab3: { starter: "1. Build a table: date / product / quantity / unit price / amount\n2. In the amount column write =quantity*price, unmerge any merged cells and fill downwards\n3. Put the price list in another area, lock it with $ and pull prices with XLOOKUP or VLOOKUP\n4. Use SUMIFS to total a given product within a given month" },
  lab4: { starter: "1. Insert a pivot table from the detail sheet: rows = product, columns = month, values = sum of amount\n2. Add data bars to the amount column and a light red fill for cells over a threshold\n3. Use Data validation > List to make the product column a dropdown\n4. Finally protect the worksheet, leaving only the entry range unlocked" },
  lab5: { starter: "1. Open the slide master, set the title to 32pt and body to 20pt, and adjust placeholder positions\n2. Set the theme colours: primary + accent + neutral grey\n3. Close the master and create 5 slides using the title, title-and-content and two-content layouts\n4. Check: are title position and size identical across all slides?" },
  lab6: { starter: "1. Build a five-slide structure: conclusion, three arguments, action item\n2. Put only keywords plus one image on each slide and write the script in the notes\n3. Add a fade entrance animation to the bullets, uniformly 0.3s, starting after previous\n4. Rehearse with timings and export a PDF as backup" },
  lab7: { starter: "1. Prepare a scanned or screenshot PDF (photograph one page of a document with your phone)\n2. Run OCR and confirm the text can now be searched\n3. Use Redact to permanently remove the phone-number region, then copy that area to confirm nothing is recoverable\n4. Add a permissions password forbidding copy and edit, and save a second copy" },
  lab8: { starter: "1. Build a weekly-report template: fixed styles, a date field, and this week / next week / risks sections\n2. Save it as a template file (.dotx or a WPS template) in the shared folder\n3. Upload to cloud docs, set sharing to comment-only, and send the link to colleagues\n4. Have them comment, edit the body only after you confirm, and watch the version history" }
};

})();
