/* ================================================================
 * R0:hello office · D23 收口：阶段测评英文侧表 OFFICE_QUIZ_EN
 * 制作者 / Creator:    Bilibili 黄豆666 (huangdouplone)
 * 版权所有 / Copyright: (c) 2026 黄豆666 / huangdouplone. All rights reserved.
 * 隶属 / Series:        隶属于拾色造梦企划 EDU 系列
 *
 * 渲染器早就在查这张表（index.html 的 quizEn：题内 *_en 优先，其次 window.OFFICE_QUIZ_EN[中文题干]），
 * 但表从来没被写过 —— 这正是 D23「渲染器读一张不存在的表」的原始形态，英文态 86 题里 80 题整段中文。
 *
 * 两个约束：
 * ① 键是**中文题干原文**，改中文题干会让条目失效并静默回落中文，所以 en-audit.js 的测评面必须跟着改；
 * ② o 数组必须与中文 o **同序**（乱序显示是在同一套下标上做 perm），错位等于把正确答案改掉。
 * 判断题在本站没有 judgeOpts 生成器，选项照打 q.o，所以英文态必须给 o:["True","False"]（或反序）。
 * 填空题的 a 字段是**英文可接受答案**（判分已改成中英任一算对），不是中文答案的重复。
 * ================================================================ */
(function () {
  var T = window.OFFICE_QUIZ_EN || (window.OFFICE_QUIZ_EN = {});
  function add(k, v) { if (!T[k]) T[k] = v; }   /* 只补缺失，不覆盖题内 *_en 与已有译文 */

  /* ---------------- c1 版面与格式 ---------------- */
  add("想「一次修改全文所有一级标题的字体」，正确做法是？", { q: "You want to change the font of every level-1 heading in one move. What is the right way?", o: ["Select and change each one", "Modify the Heading 1 style", "Paint over them with Format Painter", "Select all and change the font"], why: "A style is a bundle of formatting, so editing it updates every paragraph that uses it." });
  add("让「封面不显示页码」，最靠谱的做法是？", { q: "What is the reliable way to keep the page number off the cover?", o: ["Delete the cover page number by hand", "Use a section break to isolate the cover and unlink its header and footer", "Set the page-number font size to 0", "Change the cover text to white"], why: "Page numbering is a section property, so the cover must become its own section before it can be excluded." });
  add("用回车把内容顶到下一页，增删文字后不会出问题。", { q: "Pushing content onto the next page with Enter stays safe after text is added or removed.", o: ["False", "True"], why: "Extra blank lines drift with the text; page breaks and section breaks are what stay put." });
  add("段落级设置不包括下列哪一项？", { q: "Which of these is NOT a paragraph-level setting?", o: ["Line spacing", "Space before and after", "First-line indent", "Font colour"], why: "Font colour is a character-level property; the other three belong to the paragraph." });
  add("在查找替换里，^p 代表___（填：段落标记 / 制表符）。", { q: "In Find and Replace, ^p stands for ___ (answer: paragraph mark or tab character).", a: "paragraph mark", why: "^p is the paragraph mark while ^t is the tab character." });
  add("写正式长文档时，正文行距 1.25~1.5 倍、段后留 0.5 行是常见做法。", { q: "For a formal long document, 1.25 to 1.5 line spacing with 0.5 line after each paragraph is a common choice.", o: ["True", "False"], why: "That range balances readability against page density and is the usual rule of thumb." });
  add("想让整篇文档的正文同时变成 1.5 倍行距，最省事的做法是？", { q: "What is the least laborious way to set the whole body text to 1.5 line spacing?", o: ["Change it paragraph by paragraph", "Edit the paragraph settings of the Body Text style", "Paint it with Format Painter", "Select all and press Enter"], why: "A style is a global switch: change it and every paragraph using it follows." });
  add("在 Word / WPS 文字里，Ctrl+H 打开的是「查找替换」对话框。", { q: "In Word or WPS Writer, Ctrl+H opens the Find and Replace dialog.", o: ["True", "False"], why: "Ctrl+F finds, Ctrl+H replaces." });
  add("想排查文档中间是否夹了整页空白，应该切到哪个视图？", { q: "Which view should you switch to in order to spot blank pages inside a document?", o: ["Print Layout", "Outline", "Multiple Pages", "Reading"], why: "A single-page view shows one page at a time; blank pages become obvious in the multiple-pages view." });
  add("行距与「段前段后」是同一个设置，改其中一个就能同时控制段落内部与段落之间的距离。", { q: "Line spacing and space before/after are the same setting, so changing one controls both.", o: ["True", "False"], why: "Line spacing governs density inside a paragraph while space before/after governs the gap between paragraphs; they are independent." });
  add("清理网页复制来的多余空行时，查找两个连续的段落标记，应填写的代码是___。", { q: "To clear the extra blank lines pasted from a web page, the code to search for two consecutive paragraph marks is ___.", a: "^p^p", why: "^p is the paragraph mark, so a pair is the redundant blank line; replace it with a single ^p and repeat until nothing matches." });

  /* ---------------- c2 结构与自动化 ---------------- */
  add("标题层级混乱最直接的后果是？", { q: "What is the most immediate consequence of a messy heading hierarchy?", o: ["Ugly fonts", "Broken table of contents and navigation, scrambled caption numbers", "A bigger file", "It cannot be printed"], why: "The TOC, the navigation pane and multilevel numbering all depend on heading levels." });
  add("自动目录本质上是？", { q: "An automatic table of contents is essentially?", o: ["Manually typed text", "A field generated from the heading styles", "A picture", "Fixed text in the header"], why: "The TOC is a field, which is why it can be refreshed; hand-typed entries are just text." });
  add("要让正文页码从 1 开始，只需要改页码字体。", { q: "To make the body page numbers restart at 1 you only need to change the page-number font.", o: ["False", "True"], why: "You need a section break plus a start-page-number setting for that section; the font is irrelevant." });
  add("给图片自动编号应该用？", { q: "Which feature should number your figures automatically?", o: ["Type Figure 1 by hand", "Insert Caption", "Insert a text box", "Insert WordArt"], why: "Captions carry automatic numbering and can be cross-referenced." });
  add("在别人原稿上改内容又想让对方看到改动，应打开___模式（填：修订 / 阅读）。", { q: "Editing someone else's draft while letting them see every change means switching on ___ mode (answer: Track Changes or Reading).", a: "Track Changes", why: "Track Changes records each insertion and deletion." });
  add("两份不同版本的文档要找出差异，可以用「比较 / 文档比较」功能。", { q: "To find the differences between two versions of a document you can use the Compare feature.", o: ["True", "False"], why: "Compare produces a merged copy carrying revision marks." });
  add("自动目录的页码错乱，首先应检查什么？", { q: "The page numbers in an automatic TOC are wrong. What do you check first?", o: ["The TOC field is broken", "Whether the heading levels use the right styles", "The page-number format", "The printer settings"], why: "Wrong TOC page numbers usually trace back to heading-level mistakes, such as body text styled as a heading." });
  add("修改正文样式后，某一段没有跟着变化，多半是因为这一段被手工格式覆盖过。", { q: "After editing the body style, one paragraph did not follow. The likely cause is manual formatting overriding it.", o: ["True", "False"], why: "Manual formatting wins locally; clear the formatting and re-apply the style to hand that paragraph back to style control." });
  add("题注编号变化后，要让正文里的「如图 3-1 所示」同步更新，应使用___。", { q: "After a caption number changes, use ___ so that a reference like see Figure 3-1 in the body updates too.", a: "cross-reference", why: "A cross-reference points at the caption itself and refreshes with the field, so nothing has to be edited one by one." });

  /* ---------------- c3 表格与数据 ---------------- */
  add("下列哪种做法会破坏表格的可分析性？", { q: "Which habit destroys a table's analysability?", o: ["Field names in the first row", "Merged cells used as a header", "One attribute per column", "No blank rows"], why: "Merged cells distort the row and column structure, so sorting, filtering and pivots all break." });
  add("公式往下拖时希望某个参数固定不变，应使用？", { q: "Dragging a formula down, you want one operand to stay fixed. What do you use?", o: ["A relative reference A1", "An absolute reference $A$1", "Write it as text", "Use a text box"], why: "The dollar signs lock row and column, so the reference does not move while dragging." });
  add("多条件求和优先使用的函数是 SUMIFS。", { q: "For summing across several conditions, prefer SUMIFS.", o: ["True", "False"], why: "SUMIFS accepts pairs of criterion range and criterion." });
  add("筛选之后想只统计可见行的合计，应该用？", { q: "After filtering, which formula totals only the visible rows?", why: "Function code 109 in SUBTOTAL ignores hidden rows." });
  add("把「北京市-朝阳区」这种一列拆成两列，应该用___功能（填：分列 / 排序）。", { q: "To split a column such as Chaoyang District, Beijing into two columns, use the ___ feature (answer: Text to Columns or Sort).", a: "Text to Columns", why: "Text to Columns splits one column into several on a delimiter." });
  add("只选中一列就点排序，不会影响其他列的数据。", { q: "Sorting after selecting only one column leaves the other columns unaffected.", o: ["False", "True"], why: "Sorting moves whole rows, so selecting a single column scrambles the alignment between columns." });
  add("公式向下填充时希望某个参数固定不变，应使用哪种引用？", { q: "When filling a formula downward you want one operand fixed. Which reference type?", o: ["Relative", "Absolute", "Mixed", "No reference"], why: "An absolute reference locks row and column with $ so it does not shift while filling." });
  add("把「100 元」直接写进单元格，之后仍然可以直接对它求和。", { q: "Typing 100 yuan straight into a cell still lets you sum it directly afterwards.", o: ["True", "False"], why: "A unit turns the value into text that cannot be calculated; keep the unit in the field name and only the number in the cell." });
  add("对筛选后的结果求和、且要忽略被隐藏的行，SUBTOTAL 的功能码应填___。", { q: "To total filtered results while ignoring hidden rows, the function code in SUBTOTAL is ___.", a: "109", why: "109 means sum ignoring hidden rows, which is the key difference from SUM." });

  /* ---------------- c4 数据透视与图表 ---------------- */
  add("数据透视表的四个区域不包括？", { q: "Which is NOT one of the four areas of a pivot table?", o: ["Rows", "Columns", "Values", "Page numbers"], why: "The four areas are Rows, Columns, Values and Filters; page numbers belong to page setup." });
  add("看十二年销售额的变化趋势，最合适的图表是？", { q: "To show how sales moved across twelve years, which chart fits best?", o: ["Pie", "Line", "Scatter", "Radar"], why: "A line chart exists to express change over time." });
  add("柱状图的纵轴可以截断以突出差异。", { q: "A bar chart's value axis may be truncated to emphasise the differences.", o: ["False", "True"], why: "Truncating the axis distorts the visual ratio, which makes it a misleading chart." });
  add("找出表格里重复录入的编号，最省事的办法是？", { q: "What is the quickest way to find duplicate IDs in a table?", o: ["Check them one by one", "Conditional Formatting then Duplicate Values", "Sort and eyeball it", "Export and print to compare"], why: "The duplicate-values rule highlights the repeats directly." });
  add("要限制某列只能从下拉列表选择，应使用___功能（填：数据校验 / 条件格式）。", { q: "To restrict a column to a drop-down list, use the ___ feature (answer: Data Validation or Conditional Formatting).", a: "Data Validation", why: "Data Validation can offer a fixed list of allowed entries." });
  add("想保护公式不被误改，需要先取消录入区的「锁定」，再保护工作表。", { q: "To protect formulas from accidental edits you first unlock the entry cells, then protect the sheet.", o: ["True", "False"], why: "Protection follows each cell's locked state, so the entry cells must be unlocked first." });
  add("数据透视表建好后修改了源数据，应该？", { q: "After editing the source data behind an existing pivot table you should?", o: ["Rebuild the pivot table", "Click Refresh", "Restart the software", "Re-insert the data"], why: "A pivot table does not follow its source automatically, so it must be refreshed." });
  add("想让图表标题表达结论，应该写成？", { q: "To make a chart title state a conclusion, write it as?", o: ["Sales", "March sales 1.28M, up 12 percent month on month", "Sheet1 Chart 1", "Data statistics"], why: "A title should carry the conclusion rather than the field name, so readers get it at a glance." });
  add("源数据增删之后，数据透视表应该怎么处理？", { q: "When the source data grows or shrinks, what should you do to the pivot table?", o: ["Rebuild it", "Click refresh", "Restart the software", "Nothing"], why: "A pivot caches a snapshot, so without refreshing you draw conclusions from stale totals." });
  add("为了突出差异，柱状图的纵轴可以从任意数值开始。", { q: "To emphasise differences, a bar chart's value axis may start at any value.", o: ["True", "False"], why: "Bar length encodes absolute quantity, so a truncated axis distorts the ratio; it is the classic misleading chart." });
  add("限制单元格只能从下拉列表中选择，应使用___功能。", { q: "To restrict a cell to a drop-down list, use the ___ feature.", a: "Data Validation", why: "The List option in Data Validation builds the drop-down and eliminates typos and synonyms at the source." });

  /* ---------------- c5 幻灯片视觉与版式 ---------------- */
  add("想让所有幻灯片统一背景与标题位置，应该改？", { q: "To give every slide the same background and title position, edit the?", o: ["Each slide by hand", "Slide master", "First slide only", "Background as an image pasted onto each slide"], why: "The master controls the elements every slide shares." });
  add("下列哪一项不属于排版四原则？", { q: "Which is NOT one of the four layout principles?", o: ["Alignment", "Contrast", "Repetition", "Flashy animation"], why: "The four are alignment, contrast, repetition and proximity." });
  add("一页幻灯片里使用四种字体、六种颜色，有助于突出重点。", { q: "Using four fonts and six colours on one slide helps highlight the key point.", o: ["False", "True"], why: "Too many fonts and colours dilute attention, so the key point disappears instead of standing out." });
  add("表达「分几个阶段推进」最适合用？", { q: "To express delivery in several phases, which is most suitable?", o: ["Pie", "Timeline", "Scatter", "Radar"], why: "A timeline naturally carries stages and order." });
  add("正文推荐字号一般不小于___pt（填：18 / 8）。", { q: "Recommended body text is normally no smaller than ___ pt (answer: 18 or 8).", a: "18", why: "Below 18pt body text is hard to read once projected." });
  add("通过主题修改配色与字体，可以一次性影响整套幻灯片。", { q: "Changing colours and fonts through the theme affects the whole deck at once.", o: ["True", "False"], why: "A theme is precisely the deck-wide colour and font scheme." });
  add("母版里改了设置，某一页却没跟着变，应该怎么做？", { q: "You changed the master but one slide did not follow. What do you do?", o: ["Change every slide by hand", "Use Reset to hand it back to the master", "Delete it and start over", "Switch to another theme"], why: "That slide was overridden by manual formatting, so Reset makes it obey the master again." });
  add("把整段 Word 文字粘进幻灯片当讲稿，是一种合适的做法。", { q: "Pasting a whole block of Word text onto a slide as the script is a reasonable practice.", o: ["True", "False"], why: "The audience reads it instead of listening; the script belongs in the notes and the slide keeps keywords." });
  add("排版四原则中，用间距表达分组关系的是___。", { q: "Among the four layout principles, ___ uses spacing to express grouping.", a: "proximity", why: "Proximity means related items sit close and unrelated ones move apart, so spacing rather than borders carries the grouping." });

  /* ---------------- c6 演示与交付 ---------------- */
  add("「切换」与「动画」的区别是？", { q: "What separates Transitions from Animations?", o: ["There is no difference", "Transitions act between slides while animations act on elements inside a slide", "Transitions only work on images", "Animations only work on text"], why: "A transition is the slide-level pass; an animation is an element-level appear, emphasise or disappear." });
  add("演讲时要看的讲稿应该写在哪里？", { q: "Where should the script you read while presenting go?", o: ["In the slide body", "In the notes", "In the title bar", "In the footer"], why: "The notes pane is visible only in presenter view, so it does not distract the audience." });
  add("交付阅读用的材料优先导成 PDF 是稳妥做法。", { q: "Exporting to PDF is the safer choice for material meant to be read.", o: ["True", "False"], why: "PDF freezes the layout, looks the same everywhere and resists accidental edits." });
  add("对方电脑没装你用的特殊字体，最可能的结果是？", { q: "Your recipient's computer lacks the special font you used. What most likely happens?", o: ["The font downloads itself", "It is substituted with a default font and the layout breaks", "The file cannot be opened", "It converts to an image"], why: "Missing fonts get substituted, which changes line breaks and positions; embed the font or export PDF to prevent it." });
  add("排练计时可以用来校准讲稿长度，也能用于展台___播放（填：自动 / 手动）。", { q: "Rehearse Timings can calibrate a script and also drive ___ playback on a kiosk (answer: automatic or manual).", a: "automatic", why: "With rehearsed timings the deck advances on its own, which is what a kiosk display needs." });
  add("视频建议用「链接到文件」的方式插入，文件更小。", { q: "Inserting video as a link to the file is fine because it keeps the file small.", o: ["False", "True"], why: "A linked file stops working when you change machines; embed it instead." });
  add("放映中按下 B 键的效果是？", { q: "What does pressing B during a slideshow do?", o: ["Back to the first slide", "Black screen", "Open the notes", "End the show"], why: "B blacks out and W whites out, which pulls attention back to the speaker." });
  add("给页面里所有元素都加上动画，能显著提升演示效果。", { q: "Animating every element on a slide noticeably improves the presentation.", o: ["False", "True"], why: "Animation should serve pacing and eye guidance; too much only slows the talk down." });
  add("交付给对方阅读的材料，优先导出成什么？", { q: "For material handed over to be read, which format do you export first?", o: ["The source file", "PDF", "Images", "Video"], why: "PDF freezes the layout and resists edits; send the source only when the other side must edit it." });
  add("视频用「链接到文件」的方式插入，换一台电脑也能正常播放。", { q: "Video inserted as a link to the file still plays on another computer.", o: ["True", "False"], why: "A link breaks when you change machines, so the video must be embedded." });
  add("放映时按下___键可以黑屏，把注意力拉回讲述者。", { q: "During a slideshow, press the ___ key to black out and pull attention back to the speaker.", a: "B", why: "B blacks out and W whites out; they are the two most useful emergency keys during a show." });

  /* ---------------- c7 PDF 与输出 ---------------- */
  add("PDF 在各设备上版式一致的根本原因是？", { q: "Why does a PDF look identical on every device?", o: ["The file is smaller", "It records the fixed position of every element on the page", "Everyone uses the same font", "It cannot be edited"], why: "PDF describes absolute positions rather than a reflowable text stream." });
  add("需要多人继续编辑修改的内容，优先发什么格式？", { q: "For content several people must keep editing, which format do you send?", o: ["PDF", "The Word, Excel or PPT source file", "Images", "A zip archive"], why: "The source keeps the structure, so it can be edited and reused." });
  add("扫描版 PDF 可以直接检索其中的文字。", { q: "A scanned PDF can be searched directly.", o: ["False", "True"], why: "A scan has no text layer, so OCR must run first." });
  add("对外发送前遮盖身份证号，正确做法是？", { q: "Before sending a file out, how do you properly hide an ID number?", o: ["Draw a black rectangle over it", "Use redaction, which really deletes the text", "Set the font size to 1pt", "Change the text to white"], why: "Only redaction permanently removes the underlying text; a visual cover can be copied back out." });
  add("限制文件「能否打印与复制」属于___密码（填：权限 / 打开）。", { q: "Restricting whether a file may be printed or copied belongs to the ___ password (answer: permission or open).", a: "permission", why: "The open password controls viewing while the permission password controls printing, copying and editing." });
  add("多份 PDF 合并成一份、按书签拆分，是常见的批量操作。", { q: "Merging several PDFs into one and splitting by bookmarks are common batch operations.", o: ["True", "False"], why: "Merge and split are basic features of PDF tools." });
  add("扫描件 PDF 无法搜索内容，需要先做什么？", { q: "A scanned PDF cannot be searched. What has to happen first?", o: ["Compression", "OCR", "Merging", "Encryption"], why: "A scan is an image with no text layer, so only after OCR can it be searched or copied." });
  add("用黑色矩形盖住敏感信息后，复制粘贴仍然能看到原文。", { q: "After covering sensitive text with a black rectangle, copy and paste still reveals the original.", o: ["True", "False"], why: "The rectangle is only visual and the text underneath remains; redaction is what truly removes it." });
  add("PDF 的权限控制分两层：打开密码与___密码。", { q: "PDF access control has two layers: the open password and the ___ password.", a: "permission", why: "The open password decides who can view; the permission password decides whether printing, copying and editing are allowed." });

  /* ---------------- c8 协作与效率 ---------------- */
  add("只想让对方提意见、不能改正文，应给什么权限？", { q: "You want feedback but no edits to the body. Which permission do you grant?", o: ["View", "Comment", "Edit", "Owner"], why: "Comment allows annotations without touching the body." });
  add("把「通过链接任何人都可编辑」分享到大群里，主要风险是？", { q: "Sharing anyone with the link can edit to a large group mainly risks what?", o: ["Bigger files", "Content changed freely with no accountability", "It cannot be downloaded", "Lost formatting"], why: "Unbounded edit rights mean the content can be wrecked and nobody can be held to it." });
  add("模板机制的价值在于把统一格式变成默认行为，降低对个人自觉的依赖。", { q: "The value of templates is turning a shared format into default behaviour, reducing reliance on personal discipline.", o: ["True", "False"], why: "Templates fix the structure and styles, so a newcomer opens the correct format immediately." });
  add("表格中自动求和的快捷键是？", { q: "Which shortcut auto-sums in a spreadsheet?", why: "Alt+= inserts a SUM formula automatically." });
  add("效率提升的第一原则是消除___劳动（填：重复 / 创造性）。", { q: "The first principle of efficiency is to eliminate ___ work (answer: repetitive or creative).", a: "repetitive", why: "Hand the repetitive work to styles, templates and automation; that is where real efficiency comes from." });
  add("含敏感数据的文件内部共享时不需要考虑权限范围。", { q: "Files holding sensitive data need no permission scoping when shared internally.", o: ["False", "True"], why: "Internally the same least-privilege rule applies, so avoid over-broad share links." });
  add("在表格里开关「筛选」的快捷键是？", { q: "Which shortcut toggles filtering in a table?", why: "Ctrl+Shift+L switches the filter on and off." });
  add("收集同事意见时，只给「评论」权限比给「编辑」权限更合适。", { q: "When collecting colleagues' opinions, granting Comment rather than Edit is more appropriate.", o: ["True", "False"], why: "Comment gathers feedback while keeping the body from being changed at will." });
  add("只想收集意见、不想让对方改正文，应给什么权限？", { q: "To gather opinions without letting others change the body, which permission?", o: ["Edit", "Comment", "View", "Owner"], why: "Comment permits annotation but not editing, which is the right choice for collecting feedback." });
  add("备份只放在云端一份，就已经足够安全。", { q: "Keeping a single backup copy in the cloud is safe enough.", o: ["True", "False"], why: "A single point is not a backup; keep one copy in the cloud and one locally." });
  add("把重复出现的格式与结构固化为默认行为，依靠的是___。", { q: "Turning recurring format and structure into default behaviour relies on ___.", a: "templates", why: "A template makes the shared format correct by default instead of depending on individual experience." });
})();
