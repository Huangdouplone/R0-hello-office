/* ================================================================
 * R0:hello office · 课程深化层 ①（c1–c4：Word 与 Excel 上半）
 * 制作者 / Creator:    Bilibili 黄豆666 (huangdouplone)
 * 版权所有 / Copyright: (c) 2026 黄豆666 / huangdouplone. All rights reserved.
 * 隶属 / Series:        隶属于拾色造梦企划 EDU 系列
 *
 * 目的：把每节从「3 个要点」深化到「6~7 个要点」，补齐
 *       「是什么 / 为什么这样设计 / 什么时候会出错」的完整讲法。
 * 约定：既有课节 id 与标题一律保持不变（老进度零迁移），只替换内容；
 *       每条要点都有对应的英文 summary_en（条数与中文一致）。
 * ================================================================ */

const DEEPEN_OFFICE_A = {
  stages: ["c1", "c2", "c3", "c4"],
  lessons: {

    /* ========== c1 Word 文字：从输入到排版 ========== */
    "c1l1": {
      title: "界面与视图：先找到东西在哪", title_en: "Interface & Views: Know Where Things Are",
      summary: [
        "办公软件 90% 的时间花在「找功能」上，所以第一步不是记菜单，而是认识三块固定区域：顶部功能区（按「开始/插入/布局/引用」分组）、左侧导航窗格（按标题跳转）、右下角视图与缩放。",
        "功能区是「按任务分组」而不是按字母排的：同一个需求（比如插入目录）一定在同一个选项卡里，找不到时先想它属于哪一类操作。",
        "写长文档时切到「页面视图 + 导航窗格」：左边看结构、右边写内容，点标题即可跳转，比滚动条高效得多。",
        "排版阶段切到「多页」或「双页」视图看整体节奏——单页视图只能看到局部，很容易漏掉空白页与孤行。",
        "记不住位置完全正常：用功能搜索框直接输入名字（如「分节符」「样式」），比逐级翻菜单快，而且换版本也不慌。",
        "把高频功能固定到快速访问工具栏，一天能省下几十次鼠标往返——这是投入产出比最高的一个设置。"
      ],
      summary_en: [
        "Most of the time in office software goes into *finding* features, so start with three fixed areas: the ribbon (grouped by task), the navigation pane (jump by heading), and the view/zoom controls.",
        "The ribbon is grouped by task, not alphabetically: a need such as inserting a table of contents always lives in one tab — think about which category your task belongs to.",
        "For long documents use Page View plus the navigation pane: structure on the left, writing on the right, and one click to jump.",
        "Switch to multi-page view while polishing — single-page view hides stray blank pages and widows.",
        "Not remembering locations is normal: type the feature name in the search box; it is faster and survives version changes.",
        "Pin your frequent commands to the quick access toolbar — the highest-return setting you can make."
      ],
      code: "视图切换：视图 → 页面视图 / 大纲视图 / 阅读视图\n导航窗格：视图 → 导航窗格（Ctrl+F 后切到「标题」标签）\n快速访问：功能区右上角 ▾ → 自定义快速访问工具栏",
      pit: "只在单页视图里排版，结果打印出来发现中间夹了一整页空白——空白页往往来自多余的分节符或分页符，必须在多页视图下才看得见。",
      pit_en: "Polishing in single-page view hides a blank page caused by a stray break — always check in multi-page view before printing.",
      ex: {
        q: "为什么强调「先找得到功能」比「背菜单」重要？",
        a: "办公软件功能多且位置随版本变；掌握搜索式调用与视图切换，换版本也不慌，而背下来的位置可能下一版就失效。",
        q_en: "Why does knowing how to find features beat memorising menus?",
        a_en: "Features are numerous and move between versions; search and view switching keep working when memorised locations do not."
      }
    },

    "c1l2": {
      title: "文字与段落：排版的基本单位", title_en: "Text & Paragraphs: The Basic Units",
      summary: [
        "分不清两层设置是排版混乱的根源：字符级（字体、字号、加粗、颜色）只管「这个字」；段落级（行距、段前段后、缩进、对齐、编号）管「这一段」。",
        "正文的通行参数：中文宋体/思源宋体配西文 Times，正文小四（12pt）、行距 1.25~1.5 倍、段后 0.5 行、首行缩进 2 字符。",
        "这些参数要在「段落」对话框里一次设好，而不是逐段刷格式——后者改一次字号就得重刷一遍。",
        "行距与段间距是两个不同的量：行距管段落「内部」的疏密，段前段后管段落「之间」的距离，两者配合才有呼吸感。",
        "项目符号与编号也属于段落属性；需要 1.1 / 1.1.1 这种层级时必须用多级列表，手打数字一改动就全乱。",
        "对齐方式的取舍：正文一般两端对齐（书刊观感），标题居中或左对齐，右对齐只适合落款与数字列。"
      ],
      summary_en: [
        "Confusing two levels is the root of messy layout: character-level settings (font, size, bold, colour) affect the glyphs; paragraph-level settings (line spacing, space before/after, indent, alignment, numbering) affect the block.",
        "Common body parameters: a serif Chinese face with a Times-like Latin face, 12pt body, 1.25–1.5 line spacing, 0.5 line after paragraphs, 2-character first-line indent.",
        "Set these once in the Paragraph dialog, never paragraph by paragraph — otherwise every size change means redoing everything.",
        "Line spacing governs density *within* a paragraph; space before/after governs distance *between* paragraphs. Both are needed.",
        "Bullets and numbering are paragraph properties; hierarchical 1.1 / 1.1.1 numbering requires a multilevel list, not typed digits.",
        "Alignment: justified for body text, centred or left for headings, right only for signatures and numeric columns."
      ],
      code: "推荐正文参数：\n  中文字体：思源宋体 / 宋体     西文字体：Times New Roman\n  字号：小四（12pt）           行距：1.5 倍\n  段前 0pt / 段后 6pt          首行缩进 2 字符",
      pit: "用空格或空行「撑」出缩进与间距：一旦改字号或换字体，整篇立刻散架；缩进与间距必须走段落设置。",
      pit_en: "Faking indents with spaces or blank lines collapses the moment the font changes — use paragraph settings.",
      ex: {
        q: "字符级与段落级设置分别管什么？",
        a: "字符级管单字外观（字体/字号/颜色/加粗），段落级管整段版式（行距/段间距/缩进/对齐/编号）。",
        q_en: "What do character-level and paragraph-level settings control?",
        a_en: "Character level controls glyph appearance; paragraph level controls block layout (spacing, indent, alignment, numbering)."
      }
    },

    "c1l3": {
      title: "页面、页眉页脚与分节", title_en: "Pages, Headers & Sections",
      summary: [
        "页面设置管「纸张多大、边距多少、方向如何」；正式文档常用 A4 纵向、上下 2.54cm、左右 3.17cm（或按模板要求）。",
        "页眉页脚不是「每页打一遍」——它是页面级元素，设一次全篇生效，所以页码、文档标题、logo 都放这里。",
        "要让封面不显示页码，靠的不是删字，而是分节后取消「链接到前一节」（或勾选首页不同），让封面成为独立的一节。",
        "分节符是 Word 里最关键的隐藏概念：它把文档切成若干「节」，每节可以有自己的纸张方向、页边距、页眉与页码格式。",
        "横竖混排的做法是在要转横向的段前后各插一个分节符，然后只把该节的纸张方向改成横向。",
        "页码「从正文开始算 1」同样靠分节：进入正文所在节后，把页码格式设为「起始页码 1」。",
        "检查分节是否生效的最快方法：双击页眉，看是否显示「与上一节相同」——显示就说明还没断开链接。"
      ],
      summary_en: [
        "Page setup controls paper size, margins and orientation; formal documents commonly use A4 portrait with 2.54cm top/bottom and 3.17cm left/right.",
        "Headers and footers are page-level elements, not per-page typing: set them once and they apply throughout — this is where page numbers, titles and logos belong.",
        "To hide the page number on a cover page, split into sections and unlink from the previous section (or use 'Different first page') rather than deleting text.",
        "A section break is the hidden key concept: it splits a document into sections, each with its own orientation, margins, header and numbering.",
        "For mixed orientation, insert section breaks before and after the landscape part and change only that section's orientation.",
        "Restarting numbering at 1 for the body also needs a section: set 'Start at 1' for the body section.",
        "Quick check: double-click a header and look for 'Same as previous' — if shown, the link is not broken yet."
      ],
      code: "常见需求 → 做法：\n  封面无页码       → 布局 → 分隔符 → 分节符（下一页）→ 取消「链接到前一节」\n  横竖混排         → 前后各插分节符 → 该节改横向\n  正文页码从 1 起  → 该节页码格式 → 起始页码 1",
      pit: "用回车把内容顶到下一页——增删文字后全乱；换页要用分页符，换「规则」要用分节符。",
      pit_en: "Using Enter to push content to the next page breaks as soon as text changes; use a page break for position and a section break for rules.",
      ex: {
        q: "为什么「封面不要页码」必须用分节符？",
        a: "页码是节的属性：只有把封面单独分成一节并断开与后一节的链接，才能只在该节取消页码而不影响正文。",
        q_en: "Why does removing the cover page number require a section break?",
        a_en: "Numbering is a per-section property: only a separate, unlinked cover section can drop it without affecting the body."
      }
    },

    "c1l4": {
      title: "查找替换：批量处理的重武器", title_en: "Find & Replace: Bulk Editing",
      summary: [
        "普通替换只是起点；打开「更多」后可以替换格式（把某样式的字统一改格式）、替换特殊字符，以及使用通配符。",
        "最实用的特殊字符：^p 段落标记、^t 制表符、^l 手动换行符（来自网页复制）、^m 分页符。",
        "高频场景一：清理从网页复制来的多余空行——查找 ^p^p 替换为 ^p，反复执行直到不再替换。",
        "高频场景二：统一标点或空格——把全角空格换成半角、把手动换行换成真正的段落。",
        "通配符能做更强的匹配，例如 [0-9]{2,} 匹配两位以上数字，用它批量给数字加格式。",
        "安全习惯：大范围替换前先另存副本，或先在小范围内试一次确认结果——替换是不可逆的批量操作。",
        "替换后务必通读一遍：尤其是替换了格式或标点的情况，很容易误伤公式、英文缩写与代码。"
      ],
      summary_en: [
        "Plain replace is only the start: expand the dialog to replace formatting, special characters, or use wildcards.",
        "Useful special characters: ^p paragraph mark, ^t tab, ^l manual line break (from web copy), ^m page break.",
        "Pattern one: clean doubled blank lines from web copy — find ^p^p, replace with ^p, repeat until no more replacements.",
        "Pattern two: normalise punctuation and spaces, and turn manual line breaks into real paragraphs.",
        "Wildcards enable stronger matching, e.g. [0-9]{2,} for numbers with two or more digits, useful for bulk formatting.",
        "Safety: save a copy before a large replace, or trial it on a small range — replacement is an irreversible bulk operation.",
        "Always proofread afterwards, especially after replacing formatting or punctuation — formulas and abbreviations get damaged easily."
      ],
      code: "清空多余空行：查找 ^p^p → 替换为 ^p（反复执行到无替换为止）\n统一空格：查找 ^t → 替换为 4 个半角空格\n删除多余换行：查找 ^l → 替换为 ^p",
      pit: "在正式文档上直接做全范围替换且不备份：一旦替换错，撤销只能救回最近一步，之前的结果已经覆盖。",
      pit_en: "Doing a global replace on a real document without a backup: undo only recovers recent steps, and earlier results are already overwritten.",
      ex: {
        q: "批量清理网页复制来的多余空行怎么做？",
        a: "查找两个连续段落标记 ^p^p，替换为一个 ^p，重复执行直到不再产生替换。",
        q_en: "How do you bulk-clean blank lines copied from a web page?",
        a_en: "Find two consecutive paragraph marks ^p^p and replace with one ^p, repeating until no further replacements occur."
      }
    },

    /* ========== c2 Word 长文档 ========== */
    "c2l1": {
      title: "样式：长文档的地基", title_en: "Styles: The Foundation",
      summary: [
        "样式 = 一组格式的命名集合（字体 + 段落 + 编号），改一次样式，所有套用它的段落一起变——这是长文档唯一可持续的排版方式。",
        "层级必须守住：标题 1 用于章、标题 2 用于节、标题 3 用于小节；层级一乱，目录、导航、题注编号会全部跟着错。",
        "正文样式要「修改」而不是新建一堆：把内置的「正文」改成本书的正文参数，比手动排 200 段强得多。",
        "判断该不该建新样式：如果未来可能需要「一次性全改」，就应该是样式；只出现一次的特殊格式，手动即可。",
        "样式的传递价值在于协作：同事拿到文档只要用同样的样式名，格式天然统一，不需要口头对齐。",
        "改完样式后要回头看：如果某一段没跟着变，多半是它被手工格式覆盖过，用「清除格式」再套样式即可。",
        "把样式存进模板（c8-2 会讲），以后新建文档自动带上这套规范，等于把「排版经验」固化下来。"
      ],
      summary_en: [
        "A style is a named bundle of formatting (font + paragraph + numbering); changing it updates every paragraph using it — the only sustainable way to format long documents.",
        "Keep the hierarchy: Heading 1 for chapters, 2 for sections, 3 for subsections; a broken hierarchy breaks the TOC, navigation and caption numbering.",
        "Modify built-in styles rather than inventing many: adapt 'Normal' to your body parameters instead of formatting 200 paragraphs by hand.",
        "Rule for creating a style: if you might ever need to change it everywhere at once, it should be a style; one-off formatting can stay manual.",
        "Styles also carry collaboration value: colleagues using the same style names get consistent output with no verbal alignment needed.",
        "After changing a style, look back: a paragraph that did not change was probably overridden by manual formatting — clear formatting and reapply.",
        "Save styles into a template (see c8-2) so new documents inherit the standard — that is how you freeze layout know-how."
      ],
      code: "推荐层级：\n  标题 1 → 章（如「第三章 …」）\n  标题 2 → 节（如「3.1 …」）\n  标题 3 → 小节        正文 → 所有普通段落",
      pit: "看到标题就加粗放大——短期没问题，长期意味着没有目录、没有导航、无法批量改版式，重排一次等于重写。",
      pit_en: "Bolding and enlarging headings by hand works today but means no TOC, no navigation and no bulk restyling later.",
      ex: {
        q: "为什么长文档必须用样式而不是手动格式化？",
        a: "样式可全局一次性修改并支撑目录、导航、题注编号等自动化功能；手动格式既无法维护，也无法被这些功能识别。",
        q_en: "Why must long documents use styles instead of manual formatting?",
        a_en: "Styles can be changed globally and drive automation (TOC, navigation, caption numbering); manual formatting maintains neither."
      }
    },

    "c2l2": {
      title: "多级列表、目录与页码", title_en: "Multilevel Lists, TOC & Page Numbers",
      summary: [
        "多级列表把「1 / 1.1 / 1.1.1」这种编号绑定到标题样式上，于是增删章节时编号自动重排——它解决的是「编号维护」这件事。",
        "设置的关键是「链接到标题样式」：只定义列表不绑定样式，编号就不会跟着标题走。",
        "自动目录的本质是抓取带标题样式的段落生成一个域；改完内容后在目录上右键「更新域」即可同步。",
        "更新方式二选一：只改了页码选「只更新页码」；标题文字也变了就选「更新整个目录」。",
        "目录页码错乱通常不是目录坏了，而是标题层级错了——先检查有没有把正文误设成标题样式。",
        "页码要分节控制：封面与目录用罗马数字或不显示，正文从 1 重新开始，需要分节 + 页码格式两件事配合（见 c1-3）。",
        "目录本身也是排版对象：可以设置制表前导符与显示级别（一般显示到标题 3 即可，太深会显得杂乱）。"
      ],
      summary_en: [
        "A multilevel list binds numbering like 1 / 1.1 / 1.1.1 to heading styles, so numbers renumber themselves when chapters move — it solves numbering maintenance.",
        "The crucial step is linking the list to heading styles; defining a list without binding does nothing for headings.",
        "An automatic TOC grabs heading-styled paragraphs into a field; right-click and update the field after content changes.",
        "Choose the update mode: 'Update page numbers only' if only pagination changed; 'Update entire table' if heading text changed too.",
        "Wrong page numbers in a TOC usually mean wrong heading levels — check whether body text was accidentally styled as a heading.",
        "Page numbering is per section: Roman or none for front matter, restart at 1 for the body, which needs both sections and numbering format (see c1-3).",
        "The TOC is also a layout object: set tab leaders and the display level (usually up to Heading 3; deeper looks cluttered)."
      ],
      code: "流程：\n  1) 定义多级列表并链接到「标题 1/2/3」\n  2) 引用 → 目录 → 自动目录（插入域）\n  3) 正文前插分节符 → 该节页码格式设为「起始页码 1」",
      pit: "手打目录页码：内容一动页码全错，而且没有任何自动化价值——目录必须是域。",
      pit_en: "Typing TOC page numbers by hand breaks with any content change and gives zero automation — the TOC must be a field.",
      ex: {
        q: "自动目录更新时应该选哪种更新方式？",
        a: "内容与标题都变过就选「更新整个目录」；只改了页码可选「只更新页码」。",
        q_en: "Which TOC update mode should you choose?",
        a_en: "If headings or text changed, update the entire table; if only pagination changed, update page numbers only."
      }
    },

    "c2l3": {
      title: "题注、交叉引用与脚注", title_en: "Captions, Cross-references & Footnotes",
      summary: [
        "题注给图片/表格自动编号（图 3-1、表 3-2），增删图表后编号自动重排——它是「编号」这件事的自动化入口。",
        "交叉引用负责正文里的「如图 3-1 所示」：它引用的是题注本身，所以编号变了正文会跟着更新。",
        "两者配合才完整：先插入题注，再在正文用交叉引用引用该题注，缺一步就会出现「手工同步编号」的返工。",
        "域的更新时机：大改之后按 Ctrl+A 再按 F9 可整体刷新所有域（目录、页码、题注、交叉引用）。",
        "脚注用于页内补充说明，尾注用于章末或文末参考文献；两者都会随正文自动编号与分页。",
        "题注的编号可以包含章节号（图 3-1 这种形式），设置时勾选「包含章节号」并指定章节起始样式。",
        "常见失误是给图表手打编号：一旦中间插入一张图，后面所有编号和正文引用都得人工改一遍。"
      ],
      summary_en: [
        "A caption numbers figures/tables automatically (Figure 3-1, Table 3-2) and renumbers when items move — the automation entry point for numbering.",
        "A cross-reference handles in-text mentions like 'as Figure 3-1 shows'; it references the caption, so renumbering propagates.",
        "Both are needed: insert the caption first, then cross-reference it in the body; skipping one means manual renumbering later.",
        "Refresh fields after big edits: Ctrl+A then F9 updates every field (TOC, page numbers, captions, cross-references).",
        "Footnotes annotate within a page; endnotes collect notes or references at the end — both number and paginate automatically.",
        "Captions can include the chapter number (Figure 3-1) — enable 'Include chapter number' and pick the chapter's heading style.",
        "The classic mistake is typing figure numbers by hand: inserting one figure forces manual edits to every later reference."
      ],
      code: "顺序：先给对象插入题注 → 正文用「交叉引用」引用该题注\n注意：引用后需 Ctrl+A → F9 更新所有域",
      pit: "图片编号手写：图一多，插入或删除后就得逐个改编号与正文引用，交叉引用能自动解决这件事。",
      pit_en: "Typing figure numbers means every insert or delete forces manual edits to numbers and references — cross-references automate it.",
      ex: {
        q: "题注 + 交叉引用解决了什么问题？",
        a: "让图表编号与正文引用都自动生成与更新，内容增删时无需手工同步。",
        q_en: "What do captions plus cross-references solve?",
        a_en: "Both figure numbering and in-text references update automatically, so content changes need no manual syncing."
      }
    },

    "c2l4": {
      title: "修订、批注与文档对比", title_en: "Track Changes, Comments & Compare",
      summary: [
        "修订模式记录每一次增删改（谁、什么时候、改了什么），是多人改稿的标准做法；审阅时逐条接受或拒绝。",
        "批注用于「提出意见但不改正文」：讨论清楚后再决定是否落到正文，避免边议边改导致版本混乱。",
        "两者的分工很清晰：**修订 = 真实改动，批注 = 讨论**；混用会让对方分不清哪些已经是定稿。",
        "两份文档合并差异用「比较/合并」：把原稿与改稿丢进去，直接生成带修订标记的合并稿。",
        "审阅流程建议：先全部批注 → 逐条讨论 → 对方按结论用修订改 → 最后接受所有修订出定稿。",
        "注意隐私：发送前检查是否残留批注与修订记录，必要时「接受所有修订」并删除批注再外发。",
        "修订视图可以按「显示标记/最终稿」切换，写稿时用最终稿视图更接近读者视角。"
      ],
      summary_en: [
        "Track Changes records every edit (who, when, what), the standard for multi-author revision; reviewers accept or reject item by item.",
        "Comments raise points without touching the body: decide later whether they become edits, which keeps versions from tangling.",
        "The split is clear: tracked changes are real edits, comments are discussion; mixing them leaves reviewers unsure what is settled.",
        "To merge two versions use Compare: it produces a merged document carrying revision marks.",
        "A workable flow: comments first → discuss → author applies changes with tracking on → accept all to produce the final copy.",
        "Mind privacy: before sending out, check for leftover comments and tracked changes; accept and delete them if needed.",
        "Toggle between markup and final view — writing in final view approximates the reader's perspective."
      ],
      code: "协作流程建议：\n  1) 打开「修订」再动手\n  2) 意见用「新建批注」而不是直接改\n  3) 汇总时用「比较」核对，最后「接受所有修订」出定稿",
      pit: "在别人发来的原稿上直接改且不开修订，对方根本看不出你动了哪里，等于把审阅权从对方手里拿走。",
      pit_en: "Editing someone's draft with tracking off hides every change and takes the review decision away from them.",
      ex: {
        q: "「修订」和「批注」分别适合什么场景？",
        a: "修订用于记录真实改动；批注用于提出意见或疑问而不动正文。",
        q_en: "When should you use tracked changes vs comments?",
        a_en: "Tracked changes record real edits; comments raise questions without altering the text."
      }
    },

    /* ========== c3 Excel 表格与公式 ========== */
    "c3l1": {
      title: "数据结构：一列一属性", title_en: "Tidy Data: One Column, One Attribute",
      summary: [
        "能被自动分析的前提是数据规范：一行一条记录、一列一个属性、首行是字段名、不合并单元格、不留空行空列。",
        "最常见的破规范操作是「合并单元格」与「标题占两行」——这两件事会让排序、筛选、透视表、公式全部失效或错位。",
        "需要视觉分组时用「跨列居中」代替合并：看起来一样，但底层结构保持完整。",
        "需要多层表头时，把说明写进字段名（如「2024 销售额」）而不是再占一行。",
        "字段名要唯一且不含斜杠、空格结尾等易错字符，后续公式与透视表里引用起来才不会出问题。",
        "数值不要写成文本（如带单位的「100 元」）：把单位放字段名，单元格只放纯数字，否则无法求和。",
        "养成习惯：拿到表格先做三件事——检查合并、检查空行空列、检查数字是不是真数字。"
      ],
      summary_en: [
        "Automation requires tidy data: one record per row, one attribute per column, a header row, no merged cells, no blank rows or columns.",
        "The two most common violations are merged cells and two-row headers — they break sorting, filtering, pivot tables and formulas.",
        "For visual grouping use 'centre across selection' instead of merging: same look, intact structure.",
        "For multi-level headers, put the qualifier into the field name (e.g. 'Sales 2024') instead of adding a row.",
        "Field names should be unique and free of slashes or trailing spaces, so formulas and pivot tables stay reliable.",
        "Never store numbers as text ('100 USD'); put the unit in the header and keep pure numbers in cells, or sums fail.",
        "Habit: on receiving a sheet, check merges, blank rows/columns, and whether the numbers are truly numeric."
      ],
      code: "规范样例：\n  日期         产品    数量   单价     金额\n  2026-03-01   A4纸    10     25.0    250.0\n  2026-03-01   签字笔  20     3.5     70.0",
      pit: "为了好看而合并单元格——后续所有分析功能都会因此出错或罢工，而且往往要等做透视表时才暴露。",
      pit_en: "Merging cells for looks breaks every downstream analysis, usually surfacing only when you build a pivot table.",
      ex: {
        q: "为什么强烈建议不要合并单元格？",
        a: "合并会让行列结构失真，排序、筛选、透视表与公式引用都会错位或报错。",
        q_en: "Why avoid merged cells?",
        a_en: "They distort the grid, so sorting, filtering, pivots and formula references shift or fail."
      }
    },

    "c3l2": {
      title: "公式与引用：相对、绝对、跨表", title_en: "Formulas & References",
      summary: [
        "公式以 = 开头；引用分三种：A1 相对引用（拖动会变）、$A$1 绝对引用（拖动不变）、A$1 混合引用（只锁行或只锁列）。",
        "把公式往下拖时，如果参数的来源必须固定，就必须用绝对引用——这是「公式一拖就错」的头号原因。",
        "记忆方法：$ 像图钉，钉住谁谁就不动：$A1 钉住列、A$1 钉住行、$A$1 两个都钉住。",
        "编辑公式时按 F4 可以在四种引用方式之间循环切换，比手打 $ 快且不易错。",
        "跨表引用写成 表名!单元格，跨工作簿写成 [文件名]表名!单元格；名字太长时用「定义名称」简化。",
        "复制公式时要区分「相对位移」与「固定参数」：前者用相对引用，后者用绝对引用，混在一起时最容易出错。",
        "排查公式错误的有效手段：用「公式求值」逐步看中间结果，或用 F2 进入编辑看引用的高亮框是否指向了预期区域。"
      ],
      summary_en: [
        "Formulas start with =; references come in three flavours: A1 relative (shifts when filled), $A$1 absolute (never shifts), A$1 mixed (locks row or column).",
        "When filling down, any argument that must stay put needs an absolute reference — the number one cause of 'formula broke when dragged'.",
        "Mnemonic: $ is a pin — $A1 pins the column, A$1 pins the row, $A$1 pins both.",
        "Press F4 while editing to cycle through the four reference styles; faster and safer than typing $.",
        "Cross-sheet references use Sheet!Cell; across workbooks [File]Sheet!Cell. Use defined names for long references.",
        "Distinguish relative offsets from fixed parameters: the former take relative references, the latter absolute; mixing them is where bugs live.",
        "Debug tools: use Evaluate Formula to step through, or F2 to inspect the highlighted ranges."
      ],
      code: "=B2*C2              相对引用：拖动时行列都会变\n=$B$2*C2            绝对引用：参数固定在 B2\n=B$2*C2             混合引用：只锁行\n=单价表!$B$2        跨表 + 绝对引用",
      pit: "该锁的没锁：公式往下拖一行，参数也跟着跑，结果整列都错——而且前几行往往恰好是对的，极具迷惑性。",
      pit_en: "Forgetting to lock a parameter makes every filled row drift; the first rows often look fine, which makes it deceptive.",
      ex: {
        q: "什么时候必须用绝对引用？",
        a: "当某个参数（汇率、单价表、阈值）在所有行都取自同一个固定单元格时。",
        q_en: "When is an absolute reference required?",
        a_en: "When a parameter (exchange rate, price table, threshold) must come from one fixed cell for every row."
      }
    },

    "c3l3": {
      title: "常用函数：够用的那一小撮", title_en: "The Functions You Actually Need",
      summary: [
        "真正高频的只有十来个：SUM/AVERAGE/COUNT、IF/IFS、SUMIFS/COUNTIFS、ROUND、TEXT、LEFT/RIGHT/MID，以及查找用的 VLOOKUP / XLOOKUP。",
        "带条件求和用 SUMIFS（多条件）比「先筛选再求和」可靠得多，而且源数据变化时结果自动更新。",
        "查找优先 XLOOKUP：能向左查、找不到时可给默认值；需要兼容旧版本或同事环境时才用 VLOOKUP。",
        "用 VLOOKUP 时最后一个参数务必写 FALSE（精确匹配），否则会匹配到近似值，数据静默出错。",
        "嵌套公式不要一口气写到底：先拆成几列中间结果，验证正确后再合并，出错时也能定位到具体步骤。",
        "数值显示的坑：计算用 ROUND 控制精度，展示用单元格格式控制小数位——只改显示不会改变真实值。",
        "把常用公式写成模板并配绝对引用，比每次重新想一遍更快，也更容易复用。"
      ],
      summary_en: [
        "Only about a dozen functions are truly frequent: SUM/AVERAGE/COUNT, IF/IFS, SUMIFS/COUNTIFS, ROUND, TEXT, LEFT/RIGHT/MID, plus VLOOKUP/XLOOKUP.",
        "Use SUMIFS for conditional totals rather than filter-then-sum: it updates automatically when data changes.",
        "Prefer XLOOKUP (can search left, can return a default); use VLOOKUP only for compatibility with older setups.",
        "With VLOOKUP always pass FALSE for exact match, otherwise you silently get approximate results.",
        "Don't write deeply nested formulas in one shot: build intermediate columns, verify, then combine — and failures are traceable.",
        "Precision vs display: ROUND changes the value; number formatting only changes appearance.",
        "Write recurring formulas into a template with absolute references — faster and reusable."
      ],
      code: "=SUMIFS(金额列, 产品列, \"A4纸\", 月份列, \"3月\")\n=XLOOKUP(A2, 编码表!A:A, 编码表!C:C, \"未找到\")\n=IF(D2>=90,\"优\",IF(D2>=60,\"及格\",\"不及格\"))\n=ROUND(E2/F2, 2)",
      pit: "用 VLOOKUP 时忘了给最后参数写 FALSE（精确匹配），结果匹配到近似值——不报错、只是错，最难发现。",
      pit_en: "Omitting FALSE in VLOOKUP matches approximately: no error, just wrong numbers — the hardest bug to spot.",
      ex: {
        q: "多条件求和应该用哪个函数？",
        a: "SUMIFS：把求和区域放在第一个参数，随后成对给出条件区域与条件。",
        q_en: "Which function for multi-condition sums?",
        a_en: "SUMIFS: the sum range first, then condition ranges and conditions in pairs."
      }
    },

    "c3l4": {
      title: "排序、筛选与分列", title_en: "Sort, Filter & Text-to-Columns",
      summary: [
        "排序前先确认「区域是否完整」：只要有一列没被选中，行就会错位（A 列排了、B 列没动），数据瞬间被毁。",
        "最稳妥的做法是选中整张表（或 Ctrl+A / 先转成表格 Ctrl+T），让软件知道这是一个整体。",
        "筛选是「临时隐藏不满足条件的行」，不改变数据；取消筛选后数据全部回来。",
        "对筛选结果统计要用 SUBTOTAL(109,…) 而不是 SUM——否则被隐藏的行仍会被算进去。",
        "SUBTOTAL 的第一个参数是功能码：109 求和（忽略隐藏行）、102 计数；这也是它与 SUM 的关键区别。",
        "分列把一列拆成多列（如「北京市-朝阳区」按 - 拆分），也能把文本型数字一次性转成数值。",
        "排序后一定要检查首行是否被当成数据：有标题时应勾选「数据包含标题」，否则字段名会跑到数据里。"
      ],
      summary_en: [
        "Before sorting, confirm the range is complete: if one column is left out, rows misalign and data is destroyed instantly.",
        "Safest: select the whole table (Ctrl+A, or convert to a table with Ctrl+T) so the software knows it is one object.",
        "Filtering hides non-matching rows temporarily; the data itself is unchanged and comes back when cleared.",
        "To aggregate filtered results use SUBTOTAL(109,…) instead of SUM — otherwise hidden rows are still counted.",
        "SUBTOTAL's first argument is a function code: 109 sums ignoring hidden rows, 102 counts — that is its key difference from SUM.",
        "Text-to-Columns splits one column into several ('Beijing-Chaoyang' by '-'), and can convert text numbers to real numbers.",
        "After sorting, check the header: tick 'My data has headers' or the header row gets sorted into the body."
      ],
      code: "筛选后求和：=SUBTOTAL(109, E2:E100)      109 = 忽略隐藏行求和\n分列：数据 → 分列 → 分隔符号（如「-」「,」）或固定宽度",
      pit: "只选中一列就点排序：整行数据被打散，A 列与 B 列不再对应，而且往往在保存之后才发现。",
      pit_en: "Sorting a single column scrambles rows against each other, often noticed only after saving.",
      ex: {
        q: "为什么排序前要确保整行被选中？",
        a: "排序是按行重排的；只排一列会让该列与其他列错位，数据被彻底打乱。",
        q_en: "Why select the whole range before sorting?",
        a_en: "Sorting moves whole rows; sorting one column desynchronises it from the others."
      }
    },

    /* ========== c4 Excel 分析与可视化 ========== */
    "c4l1": {
      title: "数据透视表：三步拖出汇总", title_en: "PivotTables in Three Drags",
      summary: [
        "透视表把「行、列、值、筛选」四个区域用拖拽组织起来，几秒钟做出按产品/按月/按地区的交叉汇总，不需要写公式。",
        "使用前提仍然是数据规范：单行表头、无合并、无空行；否则字段会缺失或分组错误。",
        "值区域默认是求和，双击可改成计数、平均值、最大值；想看占比就再拖一次同一字段并把显示方式设为「占总计的百分比」。",
        "源数据变化后必须点「刷新」——透视表缓存的是快照，不刷新就会对着过期汇总下结论。",
        "分组是透视表的强项：日期可按月/季/年自动分组，数值可分段（如年龄区间），省掉大量公式。",
        "切片器与日程表是透视表的交互控件，加上之后报表可以「点一下就换维度」，适合给非技术同事看。",
        "透视表的定位是「快速探索」：先用它看清结构，再决定要不要写固定公式或做成固定报表。"
      ],
      summary_en: [
        "A pivot table organises Row/Column/Value/Filter by dragging, producing cross-tab summaries in seconds without formulas.",
        "It still requires tidy data: single header row, no merges, no blank rows, or fields go missing or group wrongly.",
        "Values default to Sum; change to Count/Average/Max by double-clicking. For shares, add the same field again and set 'Show values as % of grand total'.",
        "After source data changes you must click Refresh — a pivot caches a snapshot and will otherwise show stale totals.",
        "Grouping is its strength: dates group by month/quarter/year, numbers can band into ranges, replacing many formulas.",
        "Slicers and timelines make pivots interactive — colleagues can switch dimensions with one click.",
        "Use pivots to explore structure first, then decide whether to fix formulas or build a static report."
      ],
      code: "典型布局：\n  行：产品        列：月份\n  值：金额（求和）  筛选：地区\n刷新：数据透视表工具 → 刷新（源数据变了必须刷新）",
      pit: "源数据增删后忘记刷新，对着一份过期汇总下结论——这是透视表最常见也最危险的失误。",
      pit_en: "Forgetting to refresh after data changes means deciding on stale totals — the most common and dangerous pivot mistake.",
      ex: {
        q: "透视表相比手写公式的最大优势是什么？",
        a: "用拖拽在几秒内完成多维交叉汇总，且能一键切换分组维度与刷新源数据。",
        q_en: "What is the big advantage of a pivot over hand-written formulas?",
        a_en: "Drag-and-drop cross-tabs in seconds, with one-click dimension changes and refresh."
      }
    },

    "c4l2": {
      title: "图表：先选对，再美化", title_en: "Charts: Choose Right, Then Polish",
      summary: [
        "选型规则：比较类别用柱状图、看趋势用折线图、看构成用饼图（类别最好不超过 5 个）或堆积柱、看两变量关系用散点图。",
        "选错类型比画得难看更致命——趋势用柱状图会掩盖变化节奏，构成用折线图会让人误以为随时间变化。",
        "美化只做四件事：删掉多余网格线与图例、柱状图纵轴从 0 开始、数据标签只标关键点、标题写结论而不是字段名。",
        "标题要「一图一结论」：写成「3 月销售额 128 万，环比 +12%」，而不是「销售额」。",
        "柱状图纵轴必须从 0 开始——截断纵轴会夸大差异，是最典型的误导性图表。",
        "配色建议：一个主色 + 一个强调色 + 中性灰阶，强调色只用于要突出的那一两根。",
        "图表与数据表保持一致：改了数据要确认坐标轴刻度是否自动更新，避免刻度停留在旧范围导致图形失真。"
      ],
      summary_en: [
        "Choosing: bars compare categories, lines show trends, pie/stacked bars show composition (pie ≤ 5 slices), scatter shows relationships.",
        "Wrong type is worse than ugly: bars hide trend tempo; lines imply time where there is none.",
        "Polish in four steps: remove excess gridlines and legends, start bar axes at zero, label only key points, and write a conclusion in the title.",
        "One chart, one conclusion: 'March sales ¥1.28M, +12% MoM', not 'Sales'.",
        "Bar axes must start at zero — truncated axes exaggerate differences and mislead.",
        "Colour: one primary, one accent, neutrals; use the accent only for the series you want noticed.",
        "Keep charts in sync with data: after changes, check axis scales did not stay stale."
      ],
      code: "标题写法对比：\n  ✗ 销售额\n  ✓ 3 月销售额 128 万，环比 +12%（华东贡献最大）",
      pit: "用截断纵轴的柱状图夸大差异——这是最常见也最容易通过审核的误导性图表。",
      pit_en: "Truncating a bar chart's axis exaggerates differences — common, and easy to slip past review.",
      ex: {
        q: "柱状图的纵轴为什么必须从 0 开始？",
        a: "柱长代表绝对量；截断纵轴会让视觉比例与实际比例不符，造成严重误导。",
        q_en: "Why must bar chart axes start at zero?",
        a_en: "Bar length encodes magnitude; a truncated axis makes the visual ratio differ from the real one."
      }
    },

    "c4l3": {
      title: "条件格式：让异常自己跳出来", title_en: "Conditional Formatting: Surface the Outliers",
      summary: [
        "条件格式按规则自动上色：高于/低于阈值标红、数据条显示相对大小、色阶显示分布、重复值高亮。",
        "最实用的三类：①重复值（查重）②超过阈值或高于平均（找异常）③数据条/色阶（看体量与分布）。",
        "它的价值是「把需要人工扫视才能发现的异常变成一眼可见」，所以规则要少而准。",
        "规则要能解释：颜色代表什么必须写在表头或批注里，否则三个月后连自己都忘了红色是什么意思。",
        "管理规则：多条规则冲突时按优先级生效，可以在「管理规则」里调整顺序与适用范围。",
        "与筛选联动：可以按颜色筛选，把标红的异常行单独拎出来处理。",
        "别把整列刷满颜色——等于没重点；条件格式的边界是「少数异常被看见」。"
      ],
      summary_en: [
        "Conditional formatting colours cells by rule: above/below a threshold, data bars for relative size, colour scales for distribution, duplicates highlighted.",
        "Three most useful: duplicates, above threshold/average, and data bars or colour scales.",
        "Its value is turning anomalies you would otherwise scan for into something visible at a glance — so keep rules few and precise.",
        "Rules must be explainable: note what a colour means, or in three months nobody remembers.",
        "Manage rules: conflicts resolve by priority; adjust order and scope in the rule manager.",
        "It pairs with filtering: filter by colour to pull out the flagged rows.",
        "Don't flood a column with colour — that removes the emphasis that makes it useful."
      ],
      code: "常用规则：\n  突出显示单元格规则 → 大于 100000 → 浅红填充\n  突出显示 → 重复值 → 深红文本\n  数据条 / 色阶 / 图标集",
      pit: "给整列刷满颜色，等于没重点；条件格式的价值在于「少数异常被看见」。",
      pit_en: "Colouring an entire column destroys the emphasis that makes conditional formatting useful.",
      ex: {
        q: "条件格式最核心的价值是什么？",
        a: "把需要人工扫视才能发现的异常（超标、重复、极值）变成一眼可见的视觉信号。",
        q_en: "What is the core value of conditional formatting?",
        a_en: "Turning anomalies you would have to scan for into instantly visible signals."
      }
    },

    "c4l4": {
      title: "数据校验与工作表保护", title_en: "Validation & Protection",
      summary: [
        "数据校验限制「能填什么」：只能填整数、只能从下拉列表选、日期必须在某区间——它是保证数据质量最省事的办法。",
        "下拉列表（序列）尤其有用：把产品名、部门名做成固定选项，从源头消灭错别字与同义词。",
        "保护工作表可以只锁定公式单元格而放行录入区：先取消录入区的「锁定」，再开启保护。",
        "顺序不能反：先设置好哪些单元格放行、哪些锁定，最后才开启保护；先保护再改公式会发现自己也改不了。",
        "重要表格建议三件套：**数据校验（防填错）+ 保护工作表（防误改公式）+ 备份（防意外）**。",
        "保护可以加密码，也可以不加——不加密码主要起「防手滑」作用，加了则要注意密码丢失无法恢复。",
        "校验与保护之外还有一层：把模板存成单独文件，每次填写另存为新文件，原始模板永远干净。"
      ],
      summary_en: [
        "Data validation restricts what can be entered: integers only, a list, or a date range — the cheapest way to keep data clean.",
        "Dropdown lists are especially useful: fix product or department names and you kill typos and synonyms at the source.",
        "Sheet protection can lock formulas while leaving entry cells open: unlock the entry range first, then protect.",
        "Order matters: decide what is open and what is locked, then protect — protect first and you lock yourself out too.",
        "For important sheets use all three: validation, protection, and a backup.",
        "Protection can be with or without a password: without, it prevents slips; with, remember that a lost password is unrecoverable.",
        "One more layer: keep a clean template file and save each round as a new copy."
      ],
      code: "步骤：\n  1) 选中要放行的单元格 → 设置单元格格式 → 保护 → 取消「锁定」\n  2) 审阅 → 保护工作表 → 设密码\n  效果：只有放行区可编辑，公式区被锁死",
      pit: "先保护工作表再去改公式，会发现自己也改不了；顺序应是先设好锁定与放行，再开启保护。",
      pit_en: "Protecting the sheet before finishing edits locks you out too; set lock/unlock ranges first, then protect.",
      ex: {
        q: "只允许别人填数值、不许改公式，怎么实现？",
        a: "先取消录入区的单元格锁定、保留公式区锁定，再开启工作表保护。",
        q_en: "How do you let others enter values but not touch formulas?",
        a_en: "Unlock the entry range, keep formulas locked, then enable sheet protection."
      }
    }
  }
};
