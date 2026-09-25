/* ================================================================
 * R0:hello office · 课程深化层 ②（c5–c8：PPT、PDF 与协作）
 * 制作者 / Creator:    Bilibili 黄豆666 (huangdouplone)
 * 版权所有 / Copyright: (c) 2026 黄豆666 / huangdouplone. All rights reserved.
 * 隶属 / Series:        隶属于拾色造梦企划 EDU 系列
 * 规格同深化层①：每节 6~7 个要点 + 代码/操作示例 + 易错 + 思考题，中英条数一致。
 * ================================================================ */

const DEEPEN_OFFICE_B = {
  stages: ["c5", "c6", "c7", "c8"],
  lessons: {

    /* ========== c5 PPT 演示设计基础 ========== */
    "c5l1": {
      title: "母版与版式：一次改全局", title_en: "Master & Layouts: Change Once",
      summary: [
        "母版决定「所有幻灯片共有的东西」：背景、标题位置、正文字体字号、页脚与页码；它是整套幻灯片的唯一真相来源。",
        "版式是母版下的若干布局模板（标题页、标题+内容、两栏、仅标题…），新建页时选版式，而不是自己拖文本框。",
        "正确姿势：先在母版里定好标题与正文的字号、位置、颜色，再回到普通视图只填内容——新增一页自动保持一致。",
        "用版式的内容天然对齐、便于统一改版；自由拖文本框的页面在改主题时最容易错位。",
        "母版里改了设置、普通视图里却不变，多半是那一页被手工改过格式（局部覆盖），用「重置」把它交回母版管理。",
        "页脚与页码要在母版里加，逐页加等于给自己制造 N 倍的维护量。",
        "判断母版做得好不好：新建一页什么都不做，看它的标题位置、字号、颜色是不是已经是对的。"
      ],
      summary_en: [
        "The slide master defines everything shared by all slides: background, title position, body font and size, footer and page numbers — the single source of truth.",
        "Layouts are templates under the master (title, title+content, two-column, title-only). Choose a layout instead of dragging your own text boxes.",
        "Workflow: set titles and body text in the master first, then fill content in normal view — every new slide then matches automatically.",
        "Layout-based slides stay aligned and restyle cleanly; free text boxes drift when the theme changes.",
        "If a master change does not reach a slide, that slide was manually overridden — use Reset to hand it back to the master.",
        "Add footers and page numbers in the master; adding them slide by slide multiplies maintenance.",
        "Test: create a blank slide and check whether title position, size and colour are already correct."
      ],
      code: "顺序：视图 → 幻灯片母版 → 设置背景/字体/占位符位置 → 关闭母版视图 → 选用版式填充内容",
      pit: "在每一页手工拖标题位置——改一次主题就得重排几十页；母版就是为这件事存在的。",
      pit_en: "Dragging titles on every slide means re-doing dozens of pages when the theme changes — that is what the master is for.",
      ex: {
        q: "为什么推荐「先改母版，再填内容」？",
        a: "母版控制全局统一性，先定母版可以让后续每页自动保持一致，避免逐页调整。",
        q_en: "Why 'master first, content second'?",
        a_en: "The master carries global consistency, so every later slide matches automatically."
      }
    },

    "c5l2": {
      title: "图文排版四原则", title_en: "Four Principles of Slide Layout",
      summary: [
        "对齐（Alignment）：所有元素对齐到同一条看不见的线，页面立刻显得专业；靠眼估永远对不齐，要用参考线与智能对齐。",
        "对比（Contrast）：标题与正文要有明确的字号/字重/颜色差别，否则读者不知道该先看什么。",
        "重复（Repetition）：同一层级的元素保持一致的样式与位置（同样的字号、相同的位置、统一的色块），形成节奏感。",
        "亲密（Proximity）：相关的内容放得近、不相关的拉开距离——分组靠间距表达，不靠边框。",
        "四原则的共同目标只有一个：**降低读者的阅读成本**，让视线按你设计的顺序移动。",
        "实用骨架：标题 24~32pt、正文 18~24pt、四周留白不小于页宽的 5%、一页一个观点且要点不超过 6 条。",
        "检验方法：把页面缩到 25% 看——如果这时还能看出区块分组与重点，说明排版是成立的。"
      ],
      summary_en: [
        "Alignment: everything lines up on invisible shared lines; use guides and smart alignment, never eyeballing.",
        "Contrast: titles and body must differ clearly in size, weight or colour, or the eye does not know where to start.",
        "Repetition: same-level elements share style and position, creating rhythm.",
        "Proximity: related items sit close and unrelated ones apart — grouping through spacing, not borders.",
        "All four serve one goal: **lowering the reader's cost**, moving the eye in the order you designed.",
        "Practical skeleton: titles 24–32pt, body 18–24pt, margins ≥5% of page width, one idea per slide and ≤6 bullets.",
        "Test: zoom out to 25% — if grouping and emphasis still read, the layout works."
      ],
      code: "页面骨架建议：\n  标题：24~32pt   正文：18~24pt   页面留白：四周 ≥ 5% 宽度\n  一页一个观点，要点不超过 6 条",
      pit: "把整段 Word 文字粘进一页当讲稿——观众只会低头读，不会听你讲，幻灯片也就失去了意义。",
      pit_en: "Pasting a whole paragraph as the slide makes the audience read instead of listen — the slide stops doing its job.",
      ex: {
        q: "「亲密」原则解决的是什么问题？",
        a: "用间距表达分组关系，让读者一眼看出哪些内容属于同一组。",
        q_en: "What does proximity solve?",
        a_en: "It expresses grouping through spacing so readers instantly see what belongs together."
      }
    },

    "c5l3": {
      title: "配色与字体：少即是多", title_en: "Colour & Type: Less Is More",
      summary: [
        "配色的极简方案：**一个主色 + 一个强调色 + 中性灰阶**；主色承担结构与品牌，强调色只给需要跳出来的重点。",
        "强调色的面积建议不超过 10%——用得越多，重点越不突出。",
        "字体最多两种：一种标题、一种正文；中文可用思源黑体/微软雅黑，西文可用 Calibri/Inter，同层级字号必须一致。",
        "对比度是底线：深色背景用够亮的浅字，浅色背景用够黑的深字；投影仪的对比损失比显示器大得多，宁可保守。",
        "避免高饱和撞色（如纯红配纯绿），容易产生视觉疲劳，也色弱不友好。",
        "通过「主题」改配色与字体，一次改动全局生效；逐页手工改既慢又容易漏。",
        "检查方法：把幻灯片转成灰度看——如果灰度下层次依然清楚，说明不是靠颜色在撑结构。"
      ],
      summary_en: [
        "Minimal colour scheme: **one primary + one accent + neutrals**; the primary carries structure and brand, the accent marks emphasis.",
        "Keep the accent under about 10% of the area — more emphasis means less emphasis.",
        "At most two typefaces: one for headings, one for body; keep sizes consistent within a level.",
        "Contrast is the floor: light text on dark must be bright enough and dark text on light dark enough; projectors lose more contrast than monitors.",
        "Avoid saturated clashes (pure red with pure green): tiring and unfriendly to colour-vision differences.",
        "Change colours and fonts through the theme so it applies globally; per-slide edits are slow and error-prone.",
        "Check: convert to greyscale — if hierarchy still reads, structure does not depend on colour."
      ],
      code: "安全配色：\n  主色 #2F7ED8   强调 #F0A020   正文 #1F2733   次要 #6B7785   底 #FFFFFF\n字号阶梯：40 / 28 / 22 / 18 pt",
      pit: "一页里出现四种字体、六种颜色——注意力被稀释，重点反而看不见，还会显得不专业。",
      pit_en: "Four typefaces and six colours dilute attention, hide the point and look unprofessional.",
      ex: {
        q: "为什么建议通过「主题」改配色和字体？",
        a: "主题改动会全局生效，保证整套一致；逐页手工改既慢又容易漏。",
        q_en: "Why change colour and fonts through the theme?",
        a_en: "Theme edits apply globally and keep the deck consistent; per-slide edits are slow and easy to miss."
      }
    },

    "c5l4": {
      title: "把数据变成一张图", title_en: "Turn Data into a Diagram",
      summary: [
        "幻灯片里的图表服务于「一个结论」，不是数据仓库：**先把结论写出来，再决定用哪种图**。",
        "常用图示与结论的对应：流程用箭头/流程图、结构用层级图、对比用双栏或表、时间用时间线、占比用饼或环图。",
        "图表必须可被一句话讲清：如果一张图需要解释三分钟才能懂，说明它承载了太多。",
        "正文只放提炼后的图，完整表格放附录页备查——否则正文字号被迫缩到看不清。",
        "数据要标注来源与时间口径，避免被追问时无从回答。",
        "图表美化与 c4-2 同标准：删冗余元素、纵轴从 0、标关键值、标题写结论。",
        "一页放多张小图时，要保证它们对齐且尺寸一致，否则页面立刻显得凌乱。"
      ],
      summary_en: [
        "Charts in slides serve one conclusion, not a warehouse of data: **write the conclusion first, then pick the chart**.",
        "Conclusion-to-shape mapping: process → arrows/flow, structure → hierarchy, comparison → two columns or a table, time → timeline, share → pie or donut.",
        "A chart must be explainable in one sentence; three minutes of explanation means it carries too much.",
        "Keep the distilled chart in the body and the full table in an appendix — otherwise body text shrinks to illegibility.",
        "Always note the source and the time basis, or you cannot answer follow-up questions.",
        "Polish per c4-2: remove clutter, start axes at zero, label key values, and put the conclusion in the title.",
        "When several small charts share a slide, align them and keep sizes equal or the slide looks messy immediately."
      ],
      code: "结论 → 图形：\n  「先做什么后做什么」→ 流程图\n  「谁在谁下面」    → 层级图\n  「A 比 B 好在哪」  → 对比表\n  「分几步走」       → 时间线",
      pit: "把 Excel 二十列表格直接贴进幻灯片——字号被迫缩到 8pt，投影后完全读不清。",
      pit_en: "Pasting a 20-column Excel table forces 8pt text that nobody can read when projected.",
      ex: {
        q: "为什么建议先写结论再选图形？",
        a: "图形是为表达结论服务的；先有结论才能选出最贴合的表达形式，而不是把数据硬塞进某个图。",
        q_en: "Why write the conclusion before choosing the chart?",
        a_en: "Charts exist to express a conclusion; knowing it first lets you pick the right form instead of forcing data into a shape."
      }
    },

    /* ========== c6 PPT 演示与交付 ========== */
    "c6l1": {
      title: "动画与切换：只用来引导视线", title_en: "Animation: Guide the Eye Only",
      summary: [
        "切换是「页与页之间」的效果，动画是「页内元素」的出现/强调/消失——两者都应服务节奏，而不是炫技。",
        "最实用的两类：**进入**（按顺序逐条出现，控制讲述节奏）与**强调**（变色/放大，指出重点）。",
        "旋转、弹跳这类效果在正式汇报里通常是负分：观众的注意力被引到效果上，而不是内容上。",
        "同类元素要用同一动画并统一「随上一动画之后」，避免每页的方向与时长都不一样。",
        "时长建议 0.3~0.5 秒：太慢拖节奏、太快看不出顺序。",
        "动画的价值是「控制信息出现的时机」——让讲述与画面同步，避免观众提前把整页读完。",
        "自检：如果删掉所有动画，这页的顺序还能靠你讲清楚吗？能的话，动画就是多余的。"
      ],
      summary_en: [
        "A transition acts between slides; an animation acts on elements within a slide. Both should serve pacing, not showmanship.",
        "The two useful kinds: **entrance** (reveal items in order, controlling rhythm) and **emphasis** (highlight a point).",
        "Spins and bounces usually cost credibility: attention goes to the effect, not the message.",
        "Give similar elements the same animation and consistent timing so pages feel coherent.",
        "Keep durations around 0.3–0.5s: slower drags, faster hides the order.",
        "Animation's real value is controlling *when* information appears, so narration and visuals stay in sync.",
        "Test: if you removed all animations and could still explain the order, they were unnecessary."
      ],
      code: "推荐：进入 → 淡入 / 擦除（自上而下）；时长 0.3~0.5s\n成套使用：动画窗格 → 全选 → 设置相同的开始方式与时长",
      pit: "给每个元素都加动画：一页播 20 秒，观众的耐心先耗尽，讲述节奏也被动画牵着走。",
      pit_en: "Animating every element makes a 20-second slide; patience runs out and the animation drives your pacing.",
      ex: {
        q: "「进入」动画最实际的作用是什么？",
        a: "控制信息出现的顺序与节奏，让讲述与画面同步，避免观众提前读完所有内容。",
        q_en: "What is the practical purpose of an entrance animation?",
        a_en: "It controls the order and timing of information so narration and visuals stay in sync."
      }
    },

    "c6l2": {
      title: "放映、备注与排练计时", title_en: "Presenting, Notes & Rehearsal",
      summary: [
        "放映三件套要提前熟悉：**演讲者视图**（看备注与下一页）、激光笔/画笔、以及快捷键（B 黑屏、数字+回车跳页）。",
        "把要讲的话写进「备注」而不是幻灯片正文——观众看画面、你看备注，两者不打架。",
        "演讲者视图需要正确连接外接显示：一台给观众看全屏放映，一台给你看备注与计时。",
        "排练计时记录每页用时，既能校准讲稿长度，也能在展台自动播放时使用。",
        "演讲前的校准方法：用排练计时跑一遍，如果总时长超出规定 20% 以上，就要删页而不是讲快一点。",
        "应急准备：提前导出一份 PDF 备份，放映软件出问题时仍可继续。",
        "现场最常见的失误是「照着幻灯片念」——因为把讲稿写进了正文；请务必只把关键词放页面上。"
      ],
      summary_en: [
        "Know three things before presenting: **Presenter View** (notes and next slide), the laser/pen tools, and shortcuts (B for black screen, number+Enter to jump).",
        "Put what you will say into the notes, not the slide — the audience sees the slide, you see your notes.",
        "Presenter View needs the external display set up correctly: full-screen for the audience, notes and timer for you.",
        "Rehearse with timing: it calibrates length and can drive an unattended kiosk loop.",
        "If the run-through exceeds the slot by more than 20%, cut slides rather than speaking faster.",
        "Always carry a PDF backup so a presentation-software failure does not stop you.",
        "The most common live mistake is reading the slide, which happens when the script lives on the slide — keep only keywords there."
      ],
      code: "放映常用键：\n  F5 从头放映        Shift+F5 从当前页放映\n  B 黑屏 / W 白屏    数字 + Enter 跳到该页\n  演讲者视图：幻灯片放映 → 使用演讲者视图",
      pit: "把讲稿全写在幻灯片上然后照着念——观众会直接读屏，你变成配音，现场也失去互动。",
      pit_en: "Putting the script on the slide makes the audience read it while you narrate; interaction dies.",
      ex: {
        q: "讲稿应该写在哪里？",
        a: "写在备注里；幻灯片正文只保留关键词与图，避免观众抢读。",
        q_en: "Where should the script live?",
        a_en: "In the notes; keep only keywords and visuals on the slide."
      }
    },

    "c6l3": {
      title: "导出与分发：别让字体和比例坑你", title_en: "Export & Share: Fonts and Ratios",
      summary: [
        "交付阅读的材料优先导 PDF：版式固化、任何设备一致、不会被随手改动；源文件只在对方要编辑时才发。",
        "用了特殊字体必须「嵌入字体」，否则对方打开会被替换成默认字体，换行与位置全变。",
        "嵌入前确认字体允许嵌入——部分商业字体禁止嵌入，这时应改用 PDF 而非强行嵌入。",
        "需要放网页或聊天工具时导出图片（每页一张）；需要录讲解时导出视频（可含旁白与计时）。",
        "导出前检查画布比例（16:9 还是 4:3）与投影仪一致，比例不匹配会出现黑边或变形。",
        "体积过大时压缩图片：优先用「压缩图片」功能，而不是直接降低分辨率到看不清。",
        "交付清单：PDF 一份 + 源文件一份 + 字体说明（如未嵌入）——三者齐备最稳妥。"
      ],
      summary_en: [
        "Deliver read-only material as PDF: fixed layout, identical everywhere, hard to alter; send source files only when editing is required.",
        "With custom fonts you must embed them, or the recipient's system substitutes and reflows everything.",
        "Check that the licence permits embedding; some commercial fonts forbid it — then export PDF instead.",
        "For web or chat, export images (one per slide); for narrated playback, export video with timings.",
        "Match the canvas ratio (16:9 vs 4:3) with the projector, or you get bars or distortion.",
        "If the file is too large, compress pictures via the built-in tool rather than degrading resolution beyond legibility.",
        "Delivery set: one PDF + one source file + font notes (if not embedded)."
      ],
      code: "导出建议：\n  交付阅读 → PDF（嵌入字体）\n  需要编辑 → 发源文件 + 附字体说明\n  网页/聊天 → 导出图片或压缩后的 PDF\n  录屏讲解 → 导出视频（含旁白与排练计时）",
      pit: "发出源文件却用了对方没装的字体，对方看到的和你做的完全是两个样子。",
      pit_en: "Sending the source with fonts the recipient lacks makes your deck look completely different on their machine.",
      ex: {
        q: "交付阅读用的材料为什么优先 PDF？",
        a: "PDF 版式固化、跨设备一致且不易被误改；源文件只适合对方需要继续编辑时发送。",
        q_en: "Why prefer PDF for read-only delivery?",
        a_en: "PDF fixes the layout, matches across devices and resists accidental edits; source is for editing."
      }
    },

    "c6l4": {
      title: "演示前检查清单", title_en: "Pre-flight Checklist",
      summary: [
        "放映前逐项过一遍：比例、字体是否嵌入、超链接与视频是否可用、是否误留备注、页码与总页数、投影仪分辨率。",
        "视频是最容易出问题的元素：优先「嵌入」而不是「链接到文件」，换台电脑链接就失效。",
        "超链接要确认指向的是线上地址，而不是你本机的路径——否则在别人机器上全部点不开。",
        "浅色文字在投影仪上最容易消失：如果现场投影偏亮，宁可加深文字颜色也不要冒险。",
        "准备一份 PDF 作为最终备份：任何播放问题都能用 PDF 讲完。",
        "提前到场试一次：接上投影、放两页、听一次声音，五分钟能消掉八成的意外。",
        "把检查清单固化成自己的习惯动作，比临场记忆可靠得多。"
      ],
      summary_en: [
        "Before presenting, walk the list: aspect ratio, embedded fonts, working links and video, no leftover notes, page count, projector resolution.",
        "Video fails most often: embed it rather than linking to a file, or it breaks on another machine.",
        "Confirm hyperlinks point to online addresses, not paths on your disk.",
        "Light text disappears first on projectors: if the room is bright, darken the text rather than gamble.",
        "Keep a PDF as the ultimate backup — it can carry the whole talk if playback fails.",
        "Arrive early and test: connect, show two slides, play a sound — five minutes removes most surprises.",
        "Make the checklist a habit; it beats relying on memory under pressure."
      ],
      code: "检查清单：\n  □ 画布比例与投影仪一致\n  □ 特殊字体已嵌入\n  □ 视频/音频为嵌入而非链接\n  □ 超链接可点开、无本地路径\n  □ 关键页有 PDF 备份",
      pit: "把视频用「链接到文件」的方式插入——换台电脑就播不出来；一定要选「嵌入」。",
      pit_en: "Inserting video as a link breaks on any other machine — choose embed.",
      ex: {
        q: "为什么建议额外准备一份 PDF 备份？",
        a: "PDF 不依赖字体与媒体解码环境，任何设备都能稳定放映，是最可靠的兜底方案。",
        q_en: "Why keep a PDF backup?",
        a_en: "PDF depends on neither fonts nor media codecs and plays reliably anywhere — the safest fallback."
      }
    },

    /* ========== c7 PDF ========== */
    "c7l1": {
      title: "PDF 是什么：为什么它不可编辑", title_en: "What PDF Is and Why It Resists Editing",
      summary: [
        "PDF 记录的是「每一页上每个元素画在哪」，而不是「一段可以重排的文字」——所以它在任何设备上版式完全一致。",
        "这正是它适合交付的原因：合同、报告、简历、论文都要求版式固定、不被随手改动。",
        "「不可编辑」不是缺陷而是特性：它保证接收方看到的就是你发出去的那个样子。",
        "但它同时也意味着：要改内容，通常得回到源文件（Word/PPT）改完再导，而不是在 PDF 上硬改。",
        "PDF 也有「文字层」：带文字层的可以用查找、复制与检索；扫描件没有，只有图像。",
        "判断该给哪种格式的简单规则：**要对方看 → PDF；要一起改 → 源文件**。",
        "长期归档还有 PDF/A 这一档：为长期保存而标准化，禁止依赖外部字体与加密等内容。"
      ],
      summary_en: [
        "PDF records where each element is drawn on each page, not reflowable text — so layout is identical everywhere.",
        "That is exactly why it suits delivery: contracts, reports, CVs and papers must look fixed and unalterable.",
        "Resisting edits is a feature, not a flaw: recipients see precisely what you sent.",
        "It also means content changes should happen in the source file and be re-exported, not patched in the PDF.",
        "PDFs can carry a text layer — searchable and copyable — while scans are pure images.",
        "Simple rule: **for reading → PDF; for co-editing → source**.",
        "For long-term archiving there is PDF/A, a standardised subset that avoids external dependencies."
      ],
      code: "选择格式的判断：\n  要给对方看、要固定版式 → PDF\n  要一起改、要复用内容   → Word / Excel / PPT 源文件\n  要长期归档、要求规范   → PDF/A",
      pit: "在 PDF 上大段涂改文字：字体、行距、对齐都会和原文不一致，一眼就能看出是补丁。",
      pit_en: "Patching text directly in a PDF mismatches fonts and spacing — the patch is always visible.",
      ex: {
        q: "为什么交付用 PDF、协作改稿用源文件？",
        a: "PDF 版式固定适合交付阅读；源文件保留结构，适合继续编辑与复用。",
        q_en: "Why PDF for delivery and source for collaboration?",
        a_en: "PDF fixes layout for reading; source keeps structure for editing and reuse."
      }
    },

    "c7l2": {
      title: "阅读与批注：书签、注释与签署", title_en: "Reading & Annotating",
      summary: [
        "长 PDF 用「书签/目录」跳转、用「查找」定位——有文字层是这两件事的前提。",
        "阅读器提供高亮、下划线、删除线与便签，形成你自己的批注层，且不改动原文。",
        "批注可以导出为单独文件（注释汇总），方便逐条回复，而不必来回传整份文档。",
        "手写签名可以用注释里的签名工具，也可以插入签名图片；但图片签名不具备法律效力意义上的可靠性。",
        "正式签署应使用数字签名或专业电子签平台：它能验证签署人身份并证明文件未被篡改。",
        "批注是协作工具：审合同时把修改意见写成批注，比直接改正文更容易达成共识。",
        "外发前记得检查批注：不留神会把内部意见一并发给对方。"
      ],
      summary_en: [
        "Navigate long PDFs with bookmarks and search — both need a text layer.",
        "Readers offer highlight, underline, strikethrough and sticky notes, adding an annotation layer without touching the original.",
        "Annotations can be exported as a summary for item-by-item replies, avoiding round-tripping the whole document.",
        "Handwritten signatures can be drawn or inserted as an image, but image signatures carry no real assurance.",
        "Use digital signatures or an e-signature platform when it matters: they verify identity and integrity.",
        "Annotation is a collaboration tool: reviewing a contract in comments reaches agreement faster than editing the text.",
        "Check annotations before sending — internal comments leak easily."
      ],
      code: "常用操作：\n  高亮 / 下划线 / 删除线     → 注释工具\n  手写签名 / 图片签名        → 签名工具\n  导出注释汇总               → 注释 → 导出 / 打印含注释",
      pit: "把签名做成图片贴上去当正式签署——图片可被随意复制，正式场合应使用数字签名或电子签平台。",
      pit_en: "An image signature can be copied by anyone; use digital signatures or an e-sign platform for anything formal.",
      ex: {
        q: "正式签署为什么不用「签名图片」？",
        a: "图片签名可被任意复制粘贴，无法证明签署人身份与内容完整性；正式场景应使用数字签名。",
        q_en: "Why not use an image signature for formal signing?",
        a_en: "It can be copied and proves neither identity nor integrity — use a digital signature instead."
      }
    },

    "c7l3": {
      title: "转换、合并、拆分与压缩", title_en: "Convert, Merge, Split & Compress",
      summary: [
        "四大高频操作：Office ↔ PDF 互转、多份 PDF 合并、一份拆成多份（按页或按书签）、压缩体积。",
        "扫描件是「图片型 PDF」，不能直接选文字，需要 OCR（文字识别）之后才能检索与复制。",
        "OCR 后建议人工抽检关键数字与编号——识别准确率并非 100%，尤其是手写与表格。",
        "合并前统一页面方向与顺序，合并后补一次书签与页码，否则长文档很难用。",
        "压缩优先降图片分辨率：这是体积的大头，通常能降到原来的 1/3 而仍可阅读。",
        "拆分可按固定页数、按书签层级或按指定页码区间，按需选择即可。",
        "处理顺序建议：扫描件先 OCR → 再合并 → 统一书签/页码 → 最后压缩。"
      ],
      summary_en: [
        "Four frequent operations: Office ↔ PDF conversion, merging several PDFs, splitting one (by page or bookmark), and compressing.",
        "A scan is an image-only PDF: you must run OCR before text can be searched or copied.",
        "After OCR, spot-check key numbers and IDs — accuracy is not 100%, especially for handwriting and tables.",
        "Before merging, unify orientation and order; afterwards rebuild bookmarks and page numbers or long documents become unusable.",
        "Compress by reducing image resolution: images dominate size and usually shrink to a third while staying legible.",
        "Split by page count, bookmark level, or page ranges as needed.",
        "Order: OCR first, then merge, then bookmarks/page numbers, then compress."
      ],
      code: "处理顺序建议：\n  扫描件 → OCR 识别 → 可检索 PDF\n  多文件 → 合并 → 统一页码/书签\n  体积大 → 压缩图片（先看是否可接受清晰度）",
      pit: "把扫描件直接当可检索资料归档：既搜不到内容，也无法引用其中的文字。",
      pit_en: "Archiving scans as if searchable means nothing can be found or quoted later.",
      ex: {
        q: "扫描版 PDF 为什么需要 OCR？",
        a: "扫描件本质是图片，没有文字层，不 OCR 就无法检索、复制与引用。",
        q_en: "Why do scanned PDFs need OCR?",
        a_en: "They are images with no text layer, so nothing can be searched, copied or quoted."
      }
    },

    "c7l4": {
      title: "表单、密码与脱敏", title_en: "Forms, Passwords & Redaction",
      summary: [
        "PDF 表单可以填写与提交，也能批量汇总数据；前提是「表单域」确实存在，纯打印稿无法填写。",
        "权限控制有两层：**打开密码**（谁能看）与**权限密码**（能否打印/复制/编辑），两者目的不同，别设混了。",
        "还可以单独限制复制文本与提取页面，用于只供阅读的材料。",
        "对外发送前要脱敏：隐藏身份证号、手机号、账号等敏感字段。",
        "⚠️ **画黑色矩形覆盖是无效的**——底层文字仍在，复制粘贴就能看到原文；必须使用「密文/涂黑（Redact）」功能真正删除。",
        "验证脱敏是否生效的最简单方法：试着复制被遮盖的位置，能复制出原文就说明没做好。",
        "图片型 PDF 的脱敏还要注意：图像里的文字不会被文字层脱敏处理，需要单独处理图像区域。"
      ],
      summary_en: [
        "PDF forms can be filled and submitted, and responses aggregated — but only if real form fields exist; a printed layout cannot be filled.",
        "There are two permission layers: a **document open password** (who can view) and a **permissions password** (print/copy/edit).",
        "You can also disable text copying and page extraction for read-only material.",
        "Redact sensitive fields before sending: ID numbers, phone numbers, account numbers.",
        "⚠️ **Drawing a black rectangle is useless** — the text layer remains and copying reveals it. Use the Redact tool to actually delete it.",
        "Test: copy the covered area; if text comes out, redaction failed.",
        "For image-only PDFs, text inside images is not covered by text-layer redaction — handle those areas separately."
      ],
      code: "脱敏的正确做法：\n  ✓ 使用「密文/Redact」功能，永久删除该区域文字\n  ✗ 画黑色矩形覆盖 —— 复制粘贴仍能看到原文\n  ✗ 截图后贴回去 —— 画质变差且易被还原",
      pit: "用黑色色块盖住敏感信息就发出去——复制粘贴或提取文本仍能拿到原文，属于严重泄密。",
      pit_en: "Covering sensitive text with a black box still leaves it copyable — a serious leak.",
      ex: {
        q: "遮盖敏感信息为什么不能用黑色色块？",
        a: "色块只是视觉覆盖，底层文字仍可被复制或提取；必须用密文（Redact）功能真正删除。",
        q_en: "Why not cover sensitive text with a black box?",
        a_en: "It is only visual; the text layer is still copyable. Use Redact to delete it."
      }
    },

    /* ========== c8 协作与效率 ========== */
    "c8l1": {
      title: "云文档与实时协作", title_en: "Cloud Docs & Real-time Co-editing",
      summary: [
        "云文档的核心价值是「一份文件、一个版本」：多人同时编辑、实时看到彼此光标、自动保存、随时回滚。",
        "分享时按需给权限：**查看 / 评论 / 编辑** 三档；给「编辑」等于给了改动权与删除权，能只给评论就别给编辑。",
        "「获得链接的人」这一档要格外小心：它可能包含外部人员，公开分享前务必确认范围。",
        "版本历史是安全带：改坏了可以直接回滚到某个时点，重要节点还能命名保存。",
        "协作礼仪：先在评论里对齐，再落到正文；直接在别人段落上大改最伤协作效率。",
        "外发供阅读的内容仍建议导 PDF（见 c6-3），避免对方误改或看到未定稿内容。",
        "离线与同步：出差前确认文档已同步到本地，避免现场打不开。"
      ],
      summary_en: [
        "The core value is one file, one version: simultaneous editing, live cursors, autosave and rollback.",
        "Grant by need: **view / comment / edit**. Editing grants modification and deletion rights — comment is safer.",
        "Be careful with 'anyone with the link': it may include outsiders.",
        "Version history is the safety belt: roll back to any point and name key milestones.",
        "Etiquette: align in comments first, then edit; rewriting someone's section wrecks collaboration.",
        "For read-only distribution still export PDF (see c6-3) to avoid accidental edits or exposing drafts.",
        "Before travelling offline, confirm the document is synced locally."
      ],
      code: "权限建议：\n  只读通知      → 查看\n  需要收集意见  → 评论\n  共同撰写      → 编辑（并开启版本历史）\n  对外发布      → 导出 PDF 再发",
      pit: "为了省事把「任何人可编辑」的链接发到群里——文档很快被改得面目全非且难以追责。",
      pit_en: "Sharing an 'anyone can edit' link in a group gets the document mangled with no accountability.",
      ex: {
        q: "只想收集意见不想被改内容，应给什么权限？",
        a: "评论权限：对方可批注但不能改动正文。",
        q_en: "You want feedback but no edits — which permission?",
        a_en: "Comment: they can annotate but not modify the text."
      }
    },

    "c8l2": {
      title: "模板与样式库：一次配置，长期复用", title_en: "Templates & Style Libraries",
      summary: [
        "把反复用到的东西做成模板：公司文档模板（含样式、页眉页脚、logo）、周报模板、报价表模板、汇报 PPT 模板。",
        "模板的价值在于「约束」：新文档一打开就带着正确的样式与结构，新人也能产出统一的格式。",
        "维护方式：模板放在共享位置，标注**版本与更新日期**；改版时统一替换，避免多份来源不明的模板并行。",
        "值得模板化的三类：文档（周报/会议纪要/方案/报告）、表格（预算/报销/台账/排期）、演示（汇报/提案/复盘）。",
        "模板要「够用就好」：塞满所有可能的章节反而没人愿意用，留出可删减的空间更实用。",
        "把样式、主题色、字体方案一起固化进模板，等于把排版经验变成了默认行为。",
        "定期回顾：一年至少清理一次旧模板，避免团队里出现五个互相冲突的「最新版」。"
      ],
      summary_en: [
        "Turn recurring artefacts into templates: company documents (styles, headers, logo), weekly reports, quotes, decks.",
        "Templates constrain: new files start correct, so even newcomers produce consistent output.",
        "Maintain them centrally with a **version and update date**; replace in one go when revising.",
        "Three good categories: documents (reports, minutes, proposals), sheets (budget, ledger, schedule), decks (review, pitch, retro).",
        "Keep them lean: a template stuffed with every possible section gets ignored.",
        "Freeze styles, theme colours and fonts into the template — that turns layout know-how into a default.",
        "Review yearly and retire stale copies, so the team is not running five conflicting 'latest' versions."
      ],
      code: "值得模板化的东西：\n  文档：周报 / 会议纪要 / 方案 / 报告\n  表格：预算 / 报销 / 台账 / 排期\n  演示：汇报 / 提案 / 复盘",
      pit: "每个人各自留一份「我的模板」，三个月后出现五个版本，格式怎么都对不齐。",
      pit_en: "Everyone keeping 'my template' leaves five variants in three months and formats never match.",
      ex: {
        q: "模板这个机制真正的价值是什么？",
        a: "它把统一格式从「靠人自觉」变成「默认就正确」，降低对个人经验的依赖。",
        q_en: "What is the real value of templates?",
        a_en: "They make consistency a default instead of a matter of individual discipline."
      }
    },

    "c8l3": {
      title: "快捷键与效率习惯", title_en: "Shortcuts & Working Habits",
      summary: [
        "通用快捷键：Ctrl+C/V/X/Z/Y、Ctrl+F 查找、Ctrl+H 替换、Ctrl+S 保存、Ctrl+A 全选、F4 重复上一步（在 Excel 里还是切换引用方式）。",
        "表格里最省时的几个：**Alt+=** 自动求和、**Ctrl+Shift+L** 筛选开关、**Ctrl+E** 快速填充、双击填充柄向下填充。",
        "文档里最省时的几个：Ctrl+Enter 插入分页符、格式刷双击可连续刷、Ctrl+Shift+C/V 复制/粘贴格式。",
        "演示里：Ctrl+D 复制对象、Shift+F5 从当前页放映、B/W 黑屏白屏。",
        "效率的本质不是手快，而是**不做重复劳动**：能自动就自动（样式、模板、透视表、条件格式、公式），能批量就不逐个。",
        "习惯比技巧重要：把每隔几天就要做一次的操作记下来，逐个找它的快捷键或自动化办法，一年能省下几十小时。",
        "别一次背二十个：每周练熟两个，一个月后自然形成肌肉记忆。"
      ],
      summary_en: [
        "Universal: Ctrl+C/V/X/Z/Y, Ctrl+F, Ctrl+H, Ctrl+S, Ctrl+A, F4 (repeat last action; in Excel also cycles references).",
        "In sheets: **Alt+=** autosum, **Ctrl+Shift+L** toggles filters, **Ctrl+E** flash fill, double-click the fill handle to fill down.",
        "In documents: Ctrl+Enter page break, double-click Format Painter for repeated use, Ctrl+Shift+C/V for format copy/paste.",
        "In slides: Ctrl+D duplicate, Shift+F5 present from current slide, B/W for black/white screen.",
        "Efficiency is not fast hands; it is **not doing repeated work** — automate (styles, templates, pivots, conditional formatting) and batch.",
        "Habits beat tricks: list operations you repeat every few days and find a shortcut or automation for each.",
        "Don't learn twenty at once — two per week and it becomes muscle memory in a month."
      ],
      code: "通用：Ctrl+Z 撤销 / Ctrl+Y 重做 / Ctrl+S 保存 / F4 重复上一步\n表格：Alt+= 自动求和 / Ctrl+Shift+L 筛选 / Ctrl+E 快速填充\n页面：Ctrl+Enter 插入分页符（文字），Ctrl+D 复制对象（演示）",
      pit: "手工重复做同一件事一百遍，却从没想过问一句「这个能不能自动」。",
      pit_en: "Repeating a task a hundred times without ever asking whether it can be automated.",
      ex: {
        q: "效率提升的第一原则是什么？",
        a: "消除重复劳动：能交给样式、模板、公式、透视表自动完成的，就不要手工逐个做。",
        q_en: "What is the first principle of efficiency?",
        a_en: "Eliminate repetition: anything styles, templates, formulas or pivots can do, do not do by hand."
      }
    },

    "c8l4": {
      title: "数据安全与合规", title_en: "Data Safety & Compliance",
      summary: [
        "三条底线：**本地留备份、敏感信息不外发、共享链接给最小范围**；云文档很方便，但方便与边界要同时考虑。",
        "敏感文件对外前做脱敏（见 c7-4）；内部共享也要看权限，尤其避免「获得链接的人均可编辑」。",
        "重要交付要留痕：导出 PDF、记录发送时间与对象，必要时要求回执。",
        "合同类文件用专业电子签平台，而不是图片签名（见 c7-2）。",
        "备份要遵循多点原则：云端一份、本地一份；只放在一个地方等于没有备份。",
        "离职/换设备前检查云端文件所有权与共享状态，避免资料随账号一起失联。",
        "发文件前三个问题：要不要脱敏？接收范围是否最小？是否需要留痕与回执？"
      ],
      summary_en: [
        "Three bottom lines: **keep a local backup, never send sensitive data out, share with the smallest scope**. Convenience and boundaries must be weighed together.",
        "Redact before external sharing (see c7-4); even internal sharing needs the right permissions, especially avoid 'anyone with the link'.",
        "Keep evidence for important deliveries: export PDF, log time and recipients, request receipts when needed.",
        "Use an e-signature platform for contracts, not an image signature (see c7-2).",
        "Back up in more than one place: cloud plus local. One copy is no backup.",
        "Before leaving a role or changing devices, review cloud ownership and sharing so files do not disappear with an account.",
        "Three questions before sending: redact? smallest audience? need evidence?"
      ],
      code: "发文件前的三问：\n  1) 有没有不该外发的字段？（脱敏）\n  2) 接收范围是否最小？（别发群）\n  3) 是否需要留痕/回执？（PDF + 记录）",
      pit: "把含客户名单的表格发到三四十人的大群里——一旦外流无法追回，且违反了最小必要原则。",
      pit_en: "Sending a customer list to a large group cannot be undone and violates least-necessary sharing.",
      ex: {
        q: "对外发送文件前的三个核心问题是什么？",
        a: "要不要脱敏、接收范围是否最小、是否需要留痕与回执。",
        q_en: "What are the three questions before sending a file out?",
        a_en: "Redact? Smallest audience? Need evidence and receipt?"
      }
    }
  }
};
