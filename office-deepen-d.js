/* ================================================================
 * R0:hello office · 第二十二批：英文态操作路径 OFFICE path_en（28 节）
 * 制作者 / Creator:    Bilibili 黄豆666 (huangdouplone)
 * 版权所有 / Copyright: (c) 2026 黄豆666 / huangdouplone. All rights reserved.
 * 隶属 / Series:        隶属于拾色造梦企划 EDU 系列
 *
 * 为什么单独一层：渲染器（index.html:1619）在英文态优先读 l.path_en，
 * 「层里没给就仍显示中文路径，不硬翻菜单名」是刻意的回落 —— 机翻菜单名会造出
 * 产品里根本不存在的入口。所以这一层逐节写**真实存在的英文界面菜单路径**，
 * ms 与 wps 各写一份，行数与中文严格对齐（校验器判条数，不判条数就等于允许偷工）。
 *
 * 约束：只写两家的真差异，不写付费 / 版本断言（WPS 的入口名与 Word 并不总是一致，
 * 例如 WPS 用 Page Layout / Data Validity / Save as PDF，Word 用 Layout / Data Validation / Export）。
 * ================================================================ */
var DEEPEN_OFFICE_D = {
  stages: ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8"],
  lessons: {
    c1l1: { path_en: {
      ms: "View → Navigation Pane; View → Page Layout / Outline\nShortcuts: Ctrl+F opens the navigation search; Alt+W goes to the View tab",
      wps: "View → Navigation Pane; View → Page Layout / Outline\nShortcuts: Ctrl+F opens the navigation search; the Search box at the top of WPS finds a command by name" } },
    c1l2: { path_en: {
      ms: "Home → the Paragraph dialog (small arrow in its corner) → Indents and Spacing\nLine spacing: Home → Line and Paragraph Spacing",
      wps: "Home → the Paragraph dialog → Indents and Spacing\nLine spacing: Home → Line Spacing (pick it straight from the drop-down)" } },
    c1l3: { path_en: {
      ms: "Layout → Breaks → Section Breaks (Next Page)\nInsert → Page Number → Format Page Numbers / Header & Footer Tools → Link to Previous",
      wps: "Page Layout → Breaks → Section Break (Next Page)\nInsert → Page Number → Page Number Format / Header and Footer → Same as Previous (untick it to break the link)" } },
    c1l4: { path_en: {
      ms: "Home → Replace (Ctrl+H) → More → Use wildcards / Format",
      wps: "Home → Find and Replace (Ctrl+H) → Advanced → Use wildcards / Format" } },
    c2l1: { path_en: {
      ms: "Home → the Styles pane → right-click Heading 1 → Modify / New Style",
      wps: "Home → the Styles drop-down → right-click Heading 1 → Modify Style / New Style" } },
    c2l2: { path_en: {
      ms: "Home → Multilevel List → Define New Multilevel List\nReferences → Table of Contents → Automatic Table of Contents / Update Table",
      wps: "Home → Numbering → Multilevel → Custom\nReferences → Table of Contents → Insert Table of Contents / Update Table" } },
    c2l3: { path_en: {
      ms: "References → Insert Caption / Cross-reference / Insert Footnote",
      wps: "References → Caption / Cross-reference / Insert Footnote" } },
    c2l4: { path_en: {
      ms: "Review → Track Changes / New Comment / Compare / Accept All Changes",
      wps: "Review → Track Changes / Insert Comment / Compare / Accept All Changes" } },
    c3l3: { path_en: {
      ms: "Formulas → Insert Function / Function Library; press Tab while editing to step through the argument hints",
      wps: "Formulas → Insert Function; the argument hints work like the Function Wizard" } },
    c3l4: { path_en: {
      ms: "Data → Sort / Filter / Text to Columns; the SUBTOTAL result shows in the status bar",
      wps: "Data → Sort / AutoFilter / Split Column" } },
    c4l2: { path_en: {
      ms: "Insert → Chart → pick a type; Chart Design → Add Chart Element / Switch Row/Column",
      wps: "Insert → Chart → pick a type; Chart Tools → Chart Elements / Data Labels" } },
    c4l3: { path_en: {
      ms: "Home → Conditional Formatting → Highlight Cells Rules / Data Bars / Colour Scales",
      wps: "Home → Conditional Formatting → Highlight Rules / Data Bars / Colour Scale" } },
    c4l4: { path_en: {
      ms: "Data → Data Validation → List / Whole number / Date\nReview → Protect Sheet",
      wps: "Data → Data Validity → List / Whole number / Date\nReview → Protect Sheet" } },
    c5l1: { path_en: {
      ms: "View → Slide Master → master / layout → Close Master View\nHome → Layout (pick one); Home → Reset",
      wps: "View → Slide Master → Edit Master → Close\nHome → Layout; Home → Reset" } },
    c5l2: { path_en: {
      ms: "View → Guides / Gridlines; Format → Align → Align Selection / Distribute",
      wps: "View → Grid and Guides; Drawing Tools → Align → Align and Distribute" } },
    c5l3: { path_en: {
      ms: "Design → Variants → Colours / Fonts (change the theme and the whole deck follows)",
      wps: "Design → Colour Scheme / Font Scheme (change the theme and the whole deck follows)" } },
    c5l4: { path_en: {
      ms: "Insert → SmartArt / Chart; Format → Group Objects",
      wps: "Insert → SmartArt / Chart; Group Objects" } },
    c6l1: { path_en: {
      ms: "Animations → Animation Pane / Effect Options; Transitions → pick a transition",
      wps: "Animation → Animation Pane; Transition → pick a transition effect" } },
    c6l2: { path_en: {
      ms: "Slide Show → From Beginning / Presenter View / Rehearse Timings",
      wps: "Slide Show → From Beginning / Presenter View / Rehearse Timings" } },
    c6l3: { path_en: {
      ms: "File → Export → Create PDF/XPS Document; File → Options → Save → Embed fonts in file",
      wps: "File → Save as PDF; Options → General and Save → Embed fonts" } },
    c6l4: { path_en: {
      ms: "Design → Slide Size → Custom Slide Size; File → Info → Check for Issues",
      wps: "Design → Page Setup → Slide Size; File → Document Check" } },
    c7l1: { path_en: {
      ms: "Word/PPT → File → Export → Create PDF/XPS Document",
      wps: "WPS Writer/Presentation → File → Save as PDF" } },
    c7l3: { path_en: {
      ms: "Tools → Combine Files / Split / Compress (or convert back with Export to PDF)",
      wps: "PDF Tools → Combine and Split / Compress / OCR" } },
    c7l4: { path_en: {
      ms: "Tools → Protect → Encrypt / Redact; Form → Prepare for Filling Out",
      wps: "PDF Protect → Encrypt Document / Redaction; Form → Create Form" } },
    c8l1: { path_en: {
      ms: "File → Share → specific people or link → permission; Review → Version History",
      wps: "File → Share → permission settings; File → History Versions" } },
    c8l2: { path_en: {
      ms: "File → Save As → template (.dotx/.xltx/.potx); New → personal / organisational templates",
      wps: "File → Save As → template file; New → My Templates / Cloud Templates" } },
    c8l3: { path_en: {
      ms: "File → Options → Customize Ribbon / Quick Access Toolbar",
      wps: "File → Options → Custom Shortcuts / Quick Access Toolbar" } },
    c8l4: { path_en: {
      ms: "File → Info → Check for Issues / Protect Document; save a redacted PDF copy",
      wps: "File → Document Check / Encrypt Document; export a PDF copy" } }
  }
};
/* 示例代码块的英文（同一层里分块写，是为了让「哪几节还缺」一眼可数）。
   这些块不是程序代码，而是中文课里那张"菜单速查表"，所以英文态必须重写成英文菜单名；
   行数与中文严格一致，否则弹窗里的排版会错位。 */
var CODE_EN = {
  c1l1: "View switching: View → Page View / Outline / Read View\nNavigation pane: View → Navigation Pane (Ctrl+F, then switch to the Headings tab)\nQuick Access: the small arrow at the right of the ribbon → Customize the Quick Access Toolbar",
  c1l2: "Recommended body settings:\n  East Asian font: Source Han Serif / SimSun   Latin font: Times New Roman\n  Size: 12pt                                   Line spacing: 1.5\n  Before 0pt / After 6pt                       First-line indent: 2 characters",
  c1l3: "Common need → what to do:\n  No page number on the cover → Layout → Breaks → Section Break (Next Page) → untick Link to Previous\n  Mix portrait and landscape → put a section break on each side → set that section to landscape\n  Body numbering starts at 1  → that section's page-number format → start at 1",
  c1l4: "Remove blank lines: find ^p^p → replace with ^p (repeat until nothing matches)\nNormalise spaces: find ^t → replace with four half-width spaces\nRemove manual line breaks: find ^l → replace with ^p",
  c2l1: "Recommended levels:\n  Heading 1 → chapter (for example Chapter 3 ...)\n  Heading 2 → section (for example 3.1 ...)\n  Heading 3 → subsection      Body → every ordinary paragraph",
  c2l2: "Workflow:\n  1) Define a multilevel list and link it to Heading 1/2/3\n  2) References → Table of Contents → Automatic Table (it inserts a field)\n  3) Put a section break before the body → set that section's page numbers to start at 1",
  c2l3: "Order: insert the caption on the object first, then refer to it in the text with Cross-reference\nNote: after referencing, press Ctrl+A then F9 to update every field",
  c2l4: "Suggested review flow:\n  1) Switch on Track Changes before editing\n  2) Raise points as New Comment rather than editing directly\n  3) Reconcile with Compare, then Accept All Changes to produce the final copy",
  c3l1: "A tidy example:\n  Date        Product      Qty   Unit price   Amount\n  2026-03-01  Printer A4   10    25.0         250.0\n  2026-03-01  Pen          20    3.5          70.0",
  c3l2: "=B2*C2              Relative: both row and column move when dragged\n=$B$2*C2            Absolute: the parameter stays pinned at B2\n=B$2*C2             Mixed: only the row is locked\n=Prices!$B$2        Cross-sheet plus an absolute reference",
  c3l3: "=SUMIFS(Amount, Product, \"A4 paper\", Month, \"March\")\n=XLOOKUP(A2, Codes!A:A, Codes!C:C, \"Not found\")\n=IF(D2>=90,\"Excellent\",IF(D2>=60,\"Pass\",\"Fail\"))\n=ROUND(E2/F2, 2)",
  c3l4: "Total after filtering: =SUBTOTAL(109, E2:E100)      109 means sum ignoring hidden rows\nSplit a column: Data → Text to Columns → Delimited (for example a dash or a comma) or Fixed width",
  c4l1: "A typical layout:\n  Rows: product     Columns: month\n  Values: sum of amount   Filters: region\nRefresh: PivotTable Tools → Refresh (mandatory whenever the source changes)",
  c4l2: "Title wording compared:\n  Bad  Sales\n  Good March sales 1.28M, up 12% month on month (East China contributed most)",
  c4l3: "Rules worth keeping:\n  Highlight Cells Rules → greater than 100000 → light red fill\n  Highlight → Duplicate Values → dark red text\n  Data Bars / Colour Scales / Icon Sets",
  c4l4: "Steps:\n  1) Select the cells to open up → Format Cells → Protection → untick Locked\n  2) Review → Protect Sheet → set a password\n  Result: only the entry area is editable while the formula cells stay locked",
  c5l1: "Order: View → Slide Master → set background, fonts and placeholder positions → Close Master View → fill content using the layouts",
  c5l2: "Suggested page skeleton:\n  Title 24-32pt   Body 18-24pt   Margins: at least 5% of the width on every side\n  One idea per slide, no more than six bullets",
  c5l3: "A safe palette:\n  Primary #2F7ED8   Accent #F0A020   Body #1F2733   Secondary #6B7785   Ground #FFFFFF\nType scale: 40 / 28 / 22 / 18 pt",
  c5l4: "Conclusion → graphic:\n  What to do first, then next → a flow chart\n  Who reports to whom         → a hierarchy diagram\n  Where A beats B             → a comparison table\n  How many stages             → a timeline",
  c6l1: "Recommended: entrance → Fade / Wipe (from top); duration 0.3-0.5s\nIn bulk: Animation Pane → select all → give them the same start and duration",
  c6l2: "Show-time keys:\n  F5 from the start         Shift+F5 from the current slide\n  B black / W white         type a number then Enter to jump there\n  Presenter view: Slide Show → Use Presenter View",
  c6l3: "Export guidance:\n  For reading → PDF (embed the fonts)\n  For editing → send the source plus a note about the fonts\n  For web or chat → export images or a compressed PDF\n  For a narrated walkthrough → export video (with narration and rehearsed timings)",
  c6l4: "Checklist:\n  The canvas ratio matches the projector\n  Special fonts are embedded\n  Video and audio are embedded, not linked\n  Hyperlinks open and point at web addresses, not local paths\n  The key slides have a PDF backup",
  c7l1: "Choosing a format:\n  To be read with a fixed layout           → PDF\n  To be edited together and reused        → the Word / Excel / PPT source\n  For long-term archiving under a standard → PDF/A",
  c7l2: "Everyday operations:\n  Highlight / underline / strike-through → the comment tools\n  Handwritten or image signature          → the signing tools\n  Export a summary of comments            → Comments → Export / Print with markup",
  c7l3: "Suggested order:\n  Scans → OCR → a searchable PDF\n  Many files → combine → unify page numbers and bookmarks\n  Too large → compress the images (check the quality loss is acceptable first)",
  c7l4: "The right way to redact:\n  Right  Use Redaction, which permanently deletes the text in that area\n  Wrong  Covering it with a black rectangle - copy and paste still reveals it\n  Wrong  Screenshotting and pasting it back - worse quality and easy to undo",
  c8l1: "Permission guidance:\n  Notice only         → View\n  Collecting opinions → Comment\n  Writing together    → Edit (with version history switched on)\n  Publishing outward  → export to PDF first",
  c8l2: "Worth templating:\n  Documents: weekly report / meeting minutes / proposal / report\n  Spreadsheets: budget / expenses / register / schedule\n  Presentations: status update / pitch / retrospective",
  c8l3: "Everywhere: Ctrl+Z undo / Ctrl+Y redo / Ctrl+S save / F4 repeat the last action\nSpreadsheets: Alt+= auto-sum / Ctrl+Shift+L filter / Ctrl+E Flash Fill\nLayout: Ctrl+Enter inserts a page break (text), Ctrl+D duplicates an object (presentation)",
  c8l4: "Three questions before sending a file:\n  1) Any field that should not leave the building? (redact it)\n  2) Is the recipient list as small as it can be? (do not post it to a group)\n  3) Does it need a trace or a receipt? (PDF plus a record)"
};
Object.keys(CODE_EN).forEach(function (k) {
  /* 有 4 节本来就带 path_en、只缺 code_en，所以这里不能只认上面列过的课节 */
  DEEPEN_OFFICE_D.lessons[k] = DEEPEN_OFFICE_D.lessons[k] || {};
  DEEPEN_OFFICE_D.lessons[k].code_en = CODE_EN[k];
});

if (typeof window !== "undefined") window.DEEPEN_OFFICE_D = DEEPEN_OFFICE_D;
