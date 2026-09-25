/* ================================================================
 * R0:hello office · 深化配套扩展层（office-expand.js）
 * 制作者 / Creator:    Bilibili 黄豆666 (huangdouplone)
 * 版权所有 / Copyright: (c) 2026 黄豆666 / huangdouplone. All rights reserved.
 * 隶属 / Series:        隶属于拾色造梦企划 EDU 系列
 *
 * 深化带来知识点增加，本层负责「同步扩展」四类学习资产，避免出现
 * 「课变深了、题库/关系图/词典/成就还停在深化前」的割裂：
 *   ① 题库（每章 +3 题，全部针对深化后新增的知识点）
 *   ② 关系图（+8 节点 / +12 边，节点与词典一一对应）
 *   ③ 词典（+10 条，含中英 short / detail / vs）
 *   ④ 学习节奏（为每节补 min 建议时长）
 *   ⑤ 成就（+5 个，见 OFFICE_EXPAND.achievements，由主页面合并进 ACHIEVEMENTS）
 *
 * ⚠️ 名词与概念图节点必须「原地 push」：模块加载时已持有数组引用，
 *    concat 生成新数组会导致条数不增长 / 标签显示旧值。
 * ================================================================ */

const OFFICE_EXPAND = {

  /* ---------- ① 题库：每章 +3 题（针对深化后新增的知识点） ---------- */
  quizAdd: {
    c1: [
      { q: "想排查文档中间是否夹了整页空白，应该切到哪个视图？", o: ["页面视图", "大纲视图", "多页视图", "阅读视图"], a: 2,
        why: "单页视图只能看到局部，空白页要在多页视图下才看得出来。", type: "choice" },
      { q: "行距与「段前段后」是同一个设置，改其中一个就能同时控制段落内部与段落之间的距离。", o: ["正确", "错误"], a: 1,
        why: "行距管段落内部的疏密，段前段后管段落之间的距离，两者相互独立。", type: "judge" },
      { q: "清理网页复制来的多余空行时，查找两个连续的段落标记，应填写的代码是___。", o: [], a: "^p^p",
        why: "^p 代表段落标记，两个连续段落标记即多余空行，替换为一个 ^p 后反复执行。", type: "fill" }
    ],
    c2: [
      { q: "自动目录的页码错乱，首先应检查什么？", o: ["目录域坏了", "标题层级是否用错样式", "页码格式不对", "打印机设置"], a: 1,
        why: "目录页码错乱大多源于标题层级错误，例如把正文误设成了标题样式。", type: "choice" },
      { q: "修改正文样式后，某一段没有跟着变化，多半是因为这一段被手工格式覆盖过。", o: ["正确", "错误"], a: 0,
        why: "手工格式会形成局部覆盖，需要用「清除格式」再套样式，把它交回样式管理。", type: "judge" },
      { q: "题注编号变化后，要让正文里的「如图 3-1 所示」同步更新，应使用___。", o: [], a: "交叉引用",
        why: "交叉引用引用的是题注本身，编号变化时随域更新，避免手工逐个改。", type: "fill" }
    ],
    c3: [
      { q: "公式向下填充时希望某个参数固定不变，应使用哪种引用？", o: ["相对引用", "绝对引用", "混合引用", "不写引用"], a: 1,
        why: "绝对引用用 $ 锁定行列，填充时不会跟着移动。", type: "choice" },
      { q: "把「100 元」直接写进单元格，之后仍然可以直接对它求和。", o: ["正确", "错误"], a: 1,
        why: "带单位会变成文本，无法参与计算；单位应写进字段名，单元格只放纯数字。", type: "judge" },
      { q: "对筛选后的结果求和、且要忽略被隐藏的行，SUBTOTAL 的功能码应填___。", o: [], a: "109",
        why: "109 表示忽略隐藏行求和，这是 SUBTOTAL 与 SUM 的关键区别。", type: "fill" }
    ],
    c4: [
      { q: "源数据增删之后，数据透视表应该怎么处理？", o: ["重新建一张", "点刷新", "重启软件", "不用管"], a: 1,
        why: "透视表缓存的是快照，不刷新就会对着过期汇总下结论。", type: "choice" },
      { q: "为了突出差异，柱状图的纵轴可以从任意数值开始。", o: ["正确", "错误"], a: 1,
        why: "柱长代表绝对量，截断纵轴会让视觉比例失真，是最典型的误导性图表。", type: "judge" },
      { q: "限制单元格只能从下拉列表中选择，应使用___功能。", o: [], a: "数据校验",
        why: "数据校验的「序列」可做成下拉列表，从源头消灭错别字与同义词。", type: "fill" }
    ],
    c5: [
      { q: "母版里改了设置，某一页却没跟着变，应该怎么做？", o: ["手动逐页改", "用「重置」交回母版", "删掉重做", "换一个主题"], a: 1,
        why: "该页多半被手工格式覆盖过，重置即可让它重新服从母版。", type: "choice" },
      { q: "把整段 Word 文字粘进幻灯片当讲稿，是一种合适的做法。", o: ["正确", "错误"], a: 1,
        why: "观众会低头读而不听你讲；讲稿应写进备注，页面只留关键词。", type: "judge" },
      { q: "排版四原则中，用间距表达分组关系的是___。", o: [], a: "亲密",
        why: "亲密原则：相关内容放得近、不相关拉开距离，靠间距而非边框表达分组。", type: "fill" }
    ],
    c6: [
      { q: "交付给对方阅读的材料，优先导出成什么？", o: ["源文件", "PDF", "图片", "视频"], a: 1,
        why: "PDF 版式固化、跨设备一致且不易被误改；源文件只在需要对方编辑时才发。", type: "choice" },
      { q: "视频用「链接到文件」的方式插入，换一台电脑也能正常播放。", o: ["正确", "错误"], a: 1,
        why: "链接方式换机即失效；必须使用「嵌入」。", type: "judge" },
      { q: "放映时按下___键可以黑屏，把注意力拉回讲述者。", o: [], a: "B",
        why: "B 黑屏、W 白屏，是放映时最常用的两个应急键。", type: "fill" }
    ],
    c7: [
      { q: "扫描件 PDF 无法搜索内容，需要先做什么？", o: ["压缩", "OCR 识别", "合并", "加密"], a: 1,
        why: "扫描件本质是图片、没有文字层，必须 OCR 之后才能检索与复制。", type: "choice" },
      { q: "用黑色矩形盖住敏感信息后，复制粘贴仍然能看到原文。", o: ["正确", "错误"], a: 0,
        why: "色块只是视觉覆盖，底层文字还在；必须用「密文/Redact」真正删除。", type: "judge" },
      { q: "PDF 的权限控制分两层：打开密码与___密码。", o: [], a: "权限",
        why: "打开密码控制谁能看，权限密码控制能否打印、复制与编辑。", type: "fill" }
    ],
    c8: [
      { q: "只想收集意见、不想让对方改正文，应给什么权限？", o: ["编辑", "评论", "查看", "所有者"], a: 1,
        why: "评论权限可批注但不能改动正文，是收集意见时的正确选择。", type: "choice" },
      { q: "备份只放在云端一份，就已经足够安全。", o: ["正确", "错误"], a: 1,
        why: "单点不是备份；应遵循多点原则：云端一份、本地一份。", type: "judge" },
      { q: "把重复出现的格式与结构固化为默认行为，依靠的是___。", o: [], a: "模板",
        why: "模板把统一格式从「靠人自觉」变成「默认就正确」，降低对个人经验的依赖。", type: "fill" }
    ]
  },

  /* ---------- ② 关系图扩展（+8 节点 / +12 边） ---------- */
  mapAdd: {
    nodes: [
      { id: "视图与导航", tier: 1 },
      { id: "字符与段落格式", tier: 2 },
      { id: "查找替换", tier: 2 },
      { id: "题注与交叉引用", tier: 3 },
      { id: "引用方式", tier: 2 },
      { id: "常用函数", tier: 2 },
      { id: "排序与筛选", tier: 2 },
      { id: "数据校验", tier: 3 }
    ],
    edges: [
      { a: "视图与导航", b: "办公文档", zh: "找到功能与结构", en: "find features & structure" },
      { a: "字符与段落格式", b: "文字处理", zh: "排版的两层设置", en: "two formatting levels" },
      { a: "查找替换", b: "文字处理", zh: "批量处理", en: "bulk editing" },
      { a: "题注与交叉引用", b: "目录", zh: "编号与正文同步", en: "numbers synced with text" },
      { a: "引用方式", b: "公式与函数", zh: "决定填充时是否漂移", en: "decides drift when filled" },
      { a: "常用函数", b: "公式与函数", zh: "高频的那一小撮", en: "the frequent handful" },
      { a: "排序与筛选", b: "数据规范", zh: "依赖规范结构", en: "depends on tidy data" },
      { a: "数据校验", b: "数据规范", zh: "从源头保证质量", en: "quality at the source" },
      { a: "题注与交叉引用", b: "修订", zh: "长文档的编号与审阅", en: "numbering & review" },
      { a: "排序与筛选", b: "数据透视表", zh: "探索前的预处理", en: "pre-processing before pivots" },
      { a: "常用函数", b: "数据透视表", zh: "固定报表才写公式", en: "formulas for fixed reports" },
      { a: "数据校验", b: "协作", zh: "多人填写不出错", en: "error-free multi-user entry" }
    ]
  },

  /* ---------- ③ 词典扩展（+10 条，与新增节点一一对应） ---------- */
  terms: [
    { term: "视图与导航", term_en: "Views & Navigation", cat: "通用与协作",
      short: "页面/大纲/阅读视图与导航窗格，决定你「怎么看」和「怎么跳」。",
      short_en: "Page/Outline/Reading views plus the navigation pane: how you look and how you jump.",
      detail: ["多页视图用于排版检查，单页视图只适合写作。", "导航窗格靠标题样式生成，是长文档的目录式入口。"],
      vs: "视图管「怎么看」，导航管「怎么跳」。", vs_en: "Views decide how you look; navigation decides how you jump." },
    { term: "字符与段落格式", term_en: "Character & Paragraph Formatting", cat: "文档与格式",
      short: "字符级管单字外观，段落级管整段版式，两层不能混用。",
      short_en: "Character level styles glyphs; paragraph level styles the block — never mix them.",
      detail: ["字符级：字体、字号、加粗、颜色。", "段落级：行距、段间距、缩进、对齐、编号。"],
      vs: "字符改「字」，段落改「块」。", vs_en: "Character level changes glyphs; paragraph level changes blocks." },
    { term: "查找替换", term_en: "Find & Replace", cat: "文档与格式",
      short: "按内容、格式或通配符批量改，是长文档最省时的工具。",
      short_en: "Bulk editing by content, formatting or wildcards — the biggest time saver in long documents.",
      detail: ["^p 段落标记、^t 制表符、^l 手动换行。", "大范围替换前先备份或先小范围试一次。"],
      vs: "查找是定位，替换是批量改。", vs_en: "Find locates; replace edits in bulk." },
    { term: "题注与交叉引用", term_en: "Captions & Cross-references", cat: "文档与格式",
      short: "题注自动给图表编号，交叉引用让正文里的引用随之更新。",
      short_en: "Captions number figures automatically; cross-references keep in-text mentions in sync.",
      detail: ["大改后 Ctrl+A 再 F9 可整体刷新域。", "题注可包含章节号（图 3-1）。"],
      vs: "题注编号，交叉引用引用这个编号。", vs_en: "Captions number; cross-references cite the number." },
    { term: "引用方式", term_en: "Reference Types", cat: "数据与表格",
      short: "相对 / 绝对 / 混合引用，决定公式填充时是否跟着漂移。",
      short_en: "Relative / absolute / mixed references decide whether a formula drifts when filled.",
      detail: ["$ 像图钉：$A1 钉列、A$1 钉行、$A$1 钉住两者。", "编辑时按 F4 可循环切换。"],
      vs: "相对随位置变，绝对固定不动。", vs_en: "Relative moves; absolute stays." },
    { term: "常用函数", term_en: "Common Functions", cat: "数据与表格",
      short: "高频只有十来个：SUM/IF/SUMIFS/XLOOKUP/ROUND 等。",
      short_en: "Only about a dozen are frequent: SUM, IF, SUMIFS, XLOOKUP, ROUND and friends.",
      detail: ["条件求和用 SUMIFS 而不是先筛选再求和。", "VLOOKUP 最后参数务必写 FALSE 精确匹配。"],
      vs: "函数解决计算，透视表解决汇总。", vs_en: "Functions compute; pivots summarise." },
    { term: "排序与筛选", term_en: "Sort & Filter", cat: "数据与表格",
      short: "排序按行重排、筛选临时隐藏；统计筛选结果要用 SUBTOTAL。",
      short_en: "Sorting reorders rows; filtering hides rows temporarily — use SUBTOTAL to aggregate filtered data.",
      detail: ["排序前必须选中完整区域，否则行会错位。", "SUBTOTAL(109,…) 忽略隐藏行求和。"],
      vs: "筛选不改数据，排序改变顺序。", vs_en: "Filtering hides; sorting reorders." },
    { term: "数据校验", term_en: "Data Validation", cat: "数据与表格",
      short: "限制「能填什么」，从源头保证数据质量。",
      short_en: "Restricting what may be entered, guaranteeing quality at the source.",
      detail: ["下拉列表可消灭错别字与同义词。", "与工作表保护配合：先放行录入区再开启保护。"],
      vs: "校验防错于输入前，条件格式提醒于出错后。", vs_en: "Validation prevents; formatting warns." },
    { term: "版式", term_en: "Slide Layout", cat: "呈现与交付",
      short: "母版下的布局模板，新建页选版式而不是自己拖文本框。",
      short_en: "Templates under the master — pick a layout instead of dragging text boxes.",
      detail: ["用版式的内容天然对齐、便于统一改版。", "不跟随母版时用「重置」交回管理。"],
      vs: "母版定全局，版式定单页骨架。", vs_en: "The master sets globals; layouts set per-slide skeletons." },
    { term: "排版四原则", term_en: "Four Layout Principles", cat: "呈现与交付",
      short: "对齐、对比、重复、亲密——共同目标是降低阅读成本。",
      short_en: "Alignment, contrast, repetition, proximity — all serving one goal: lower reading cost.",
      detail: ["分组靠间距表达，不靠边框。", "缩到 25% 还能看出层次，说明排版成立。"],
      vs: "四原则是判断标准，主题是执行手段。", vs_en: "The four principles judge; the theme implements." }
  ],

  /* ---------- ④ 学习节奏：每节建议时长（分钟） ---------- */
  minMap: {
    "c1l1": 12, "c1l2": 12, "c1l3": 14, "c1l4": 12,
    "c2l1": 14, "c2l2": 14, "c2l3": 14, "c2l4": 12,
    "c3l1": 14, "c3l2": 12, "c3l3": 14, "c3l4": 14,
    "c4l1": 14, "c4l2": 14, "c4l3": 12, "c4l4": 14,
    "c5l1": 14, "c5l2": 14, "c5l3": 12, "c5l4": 14,
    "c6l1": 12, "c6l2": 14, "c6l3": 14, "c6l4": 14,
    "c7l1": 12, "c7l2": 12, "c7l3": 14, "c7l4": 14,
    "c8l1": 12, "c8l2": 14, "c8l3": 12, "c8l4": 14
  },

  /* ---------- ⑤ 成就扩展（由主页面 push 进 ACHIEVEMENTS） ---------- */
  achievements: [
    { id: "doc_master", icon: "📄", name: "文档能手", name_en: "Document Hand",
      desc: "完成 c1 · Word 文字 与 c2 · 长文档 的全部课节", desc_en: "Finish all lessons of c1 Word and c2 Long Documents",
      check: "doc_master" },
    { id: "sheet_master", icon: "📊", name: "表格能手", name_en: "Sheet Hand",
      desc: "完成 c3 · 表格公式 与 c4 · 分析可视化 的全部课节", desc_en: "Finish all lessons of c3 Formulas and c4 Analysis",
      check: "sheet_master" },
    { id: "deck_master", icon: "🖼️", name: "演示能手", name_en: "Deck Hand",
      desc: "完成 c5 · 演示设计 与 c6 · 演示交付 的全部课节", desc_en: "Finish all lessons of c5 Design and c6 Delivery",
      check: "deck_master" },
    { id: "quiz_five", icon: "✅", name: "测评达人", name_en: "Quiz Veteran",
      desc: "完成 5 个章节的测评", desc_en: "Complete quizzes for 5 chapters",
      check: "quiz_five" },
    { id: "dual_route", icon: "🔀", name: "双路线体验", name_en: "Both Routes",
      desc: "切换到 WPS 路线后至少完成 1 节", desc_en: "Switch to the WPS route and finish at least one lesson",
      check: "dual_route" }
  ]
};

/* ================================================================
 * 合并（本文件在 office-data.js / lang-en.js / office-extra-data.js 之后执行）
 * ================================================================ */
(function () {
  "use strict";
  var C = window.OFFICE_CURRICULUM || [];

  /* ① 题库：按章追加（原地 push，保持抽题池与深化内容同步） */
  Object.keys(OFFICE_EXPAND.quizAdd).forEach(function (sid) {
    var st = C.filter(function (x) { return x.id === sid; })[0];
    if (!st) return;
    if (!st.quiz) st.quiz = [];
    OFFICE_EXPAND.quizAdd[sid].forEach(function (q) { st.quiz.push(q); });
  });

  /* ② 关系图：原地 push 节点与边 */
  var M = window.OFFICE_CONCEPT_MAP;
  if (M) {
    OFFICE_EXPAND.mapAdd.nodes.forEach(function (n) { M.nodes.push(n); });
    OFFICE_EXPAND.mapAdd.edges.forEach(function (e) { M.edges.push(e); });
  }

  /* ③ 词典：原地 push + 同步英文表（lang-en.js 已生成 OFFICE_TERM_EN，新词需补登记） */
  if (window.OFFICE_TERMS) {
    OFFICE_EXPAND.terms.forEach(function (t) {
      window.OFFICE_TERMS.push(t);
      if (window.OFFICE_TERM_EN) {
        window.OFFICE_TERM_EN[t.term] = { term: t.term_en, short: t.short_en, vs: t.vs_en };
      }
    });
  }

  /* ④ 学习节奏：为每节补建议时长（暴露为函数，供页面在深化层替换课节后再调用） */
  window.OFS_applyMin = function () {
    (window.OFFICE_CURRICULUM || []).forEach(function (s) {
      (s.lessons || []).forEach(function (l) {
        var m = OFFICE_EXPAND.minMap[l.id];
        if (m) l.min = m;
      });
    });
  };
  window.OFS_applyMin();
})();
