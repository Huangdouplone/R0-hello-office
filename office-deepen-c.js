/* ================================================================
 * R0:hello office · 课程深化层 ③（R5 深化轮）
 * 制作者 / Creator:    Bilibili 黄豆666 (huangdouplone)
 * 版权所有 / Copyright: (c) 2026 黄豆666 / huangdouplone. All rights reserved.
 * 隶属 / Series:        隶属于拾色造梦企划 EDU 系列
 *
 * 这一层做三件事（机制见 index.html 的 ofsMergeLesson / OFS_LAYERS）：
 *   O1  c8「办公协作与效率」4 节 → 6 节：补邮件与会议纪要、补一份跨软件综合交付
 *   O2  newStages 新增 c9「AI 助手与办公提效」5 节（c9l1–c9l5）+ 9 道测评题（全站此前 0 处 AI 内容）
 *   O3  修 D5 遗留的双路线操作路径：c3l1 / c3l2 / c4l1 / c7l2 此前 ms 与 wps
 *       两条路径字节级相同或只差一个字，等于没有双路线；同时补 path_en。
 * 规格同深化层①②：每节 6~7 个要点，中英条数一致；不写死版本号与付费断言。
 * ================================================================ */

const DEEPEN_OFFICE_C = {

  newStages: [
    {
      id: "c9", icon: "🤖", insertAfter: "c8",
      name: "AI 助手与办公提效",
      name_en: "AI Assistants & Office Productivity",
      desc: "把 AI 当成办公流水线里的一环：起草、汇总、改写、核对。关键不是会喊口号，而是知道该喂它什么、怎么验收、哪些事不能交给它。",
      desc_en: "Treat AI as one station in the office pipeline: draft, summarise, rewrite, check. The skill is knowing what to feed it, how to accept the output, and what must stay with a human."
    }
  ],

  stages: ["c9", "c3", "c4", "c7", "c8"],

  order: {
    c8: ["c8l1", "c8l2", "c8l3", "c8l4", "c8l5", "c8l6"],
    c9: ["c9l1", "c9l2", "c9l3", "c9l4", "c9l5"]
  },

  lessons: {

    /* ========== O3-1 · c3l1 数据结构（同时修双路线路径） ========== */
    "c3l1": {
      path: {
        ms: "取消合并：开始 → 对齐方式 → 合并后居中（再点一次即取消）\n替代方案：右键 → 设置单元格格式 → 对齐 → 水平 → 跨列居中\n规范化：选中区域 → 插入 → 表格（Ctrl+T），表头会自动固定\n批量清洗：数据 → 获取数据（Power Query）→ 删除空行 / 重命名列",
        wps: "取消合并：开始 → 合并居中（下拉里有 合并单元格 / 合并居中 / 跨列居中 / 仅移除合并）\n「跨列居中」在 WPS 的下拉里直接可见，MS 要进设置单元格格式才找得到\n规范化：选中区域 → 插入 → 表格\n批量清洗：没有 Power Query，用 数据 → 分列 拆完再按空值筛选、手工删行"
      },
      path_en: {
        ms: "Unmerge: Home → Alignment → Merge & Center (click again to undo)\nBetter: right-click → Format Cells → Alignment → Horizontal → Center Across Selection\nNormalise: select the range → Insert → Table (Ctrl+T), the header row then sticks\nBulk cleaning: Data → Get Data (Power Query) → remove blank rows / rename columns",
        wps: "Unmerge: Home → Merge & Center dropdown (Merge Cells / Merge & Center / Center Across / Remove Merge Only)\n'Center Across' sits right in that dropdown; in MS you must enter Format Cells to find it\nNormalise: select the range → Insert → Table\nBulk cleaning: no Power Query — split with Data → Text to Columns, filter for blanks, delete rows by hand"
      },
      pit: "为了好看而合并单元格——后续所有分析功能都会因此出错或罢工，而且往往要等做透视表时才暴露。WPS 把「合并居中」摆在工具栏一级、MS 把它藏进「合并后居中」下拉里，两条路线上它都太容易误点。",
      pit_en: "Merging cells for looks breaks every downstream analysis, and it usually surfaces only when you build the pivot table. WPS puts Merge & Center on the ribbon while MS hides it inside a dropdown — on both routes it is far too easy to click by accident."
    },

    /* ========== O3-2 · c3l2 公式与引用 ========== */
    "c3l2": {
      path: {
        ms: "公式 → 名称管理器 → 新建，给参数区起个名字\n编辑公式时按 F4 循环切换 A1 → $A$1 → A$1 → $A$1\n跨表引用：表名!$B$2；长公式用 公式 → 求值 一步一步查",
        wps: "公式 → 名称管理器（较早版本的入口叫 公式 → 定义名称）\n同样按 F4 循环切换引用方式\n较新的函数（如 XLOOKUP）能不能用取决于你的版本，不确定就改用 VLOOKUP 或 INDEX+MATCH 这类到处都成立的写法"
      },
      path_en: {
        ms: "Formulas → Name Manager → New, to give a parameter range a name\nPress F4 while editing to cycle A1 → $A$1 → A$1 → $A$1\nCross-sheet references: SheetName!$B$2; step through long formulas with Formulas → Evaluate",
        wps: "Formulas → Name Manager (older builds label it Formulas → Define Name)\nF4 cycles the reference modes the same way\nNewer functions such as XLOOKUP depend on your build; when unsure fall back to VLOOKUP or INDEX+MATCH, which work everywhere"
      }
    },

    /* ========== O3-3 · c4l1 数据透视表 ========== */
    "c4l1": {
      path: {
        ms: "插入 → 数据透视表 → 选表或区域 → 新工作表\n创建后顶部出现两个上下文选项卡：「数据透视表分析」与「设计」\n值字段：拖入后点 值字段设置，「汇总方式」与「显示方式」分在两个标签里（占比选 占总计的百分比）\n刷新：数据透视表分析 → 全部刷新",
        wps: "插入 → 数据透视表 → 选区域 → 确定\n创建后是单个「数据透视表」工具选项卡，不像 MS 那样分成两个\n值字段：右键字段 → 值字段设置，「汇总方式」与「值显示方式」在同一个弹窗里\n刷新：右键透视表 → 刷新"
      },
      path_en: {
        ms: "Insert → PivotTable → pick the table or range → New Worksheet\nTwo contextual tabs appear afterwards: PivotTable Analyze and Design\nValue field: after dropping it in, open Value Field Settings — Summarize Values By and Show Values As are separate tabs (use % of Grand Total for shares)\nRefresh: PivotTable Analyze → Refresh All",
        wps: "Insert → PivotTable → pick the range → OK\nA single PivotTable tool tab appears instead of MS's two\nValue field: right-click the field → Value Field Settings, where Summarize By and Show Values As share one dialog\nRefresh: right-click the pivot table → Refresh"
      }
    },

    /* ========== O3-4 · c7l2 PDF 阅读与批注 ========== */
    "c7l2": {
      path: {
        ms: "注释 → 高亮 / 下划线 / 便签（图钉）/ 签名\n视图 → 页面缩览图 与 书签面板\n留痕交付：注释 → 将注释导出到数据文件（FDF），或打印时勾选「打印注释」",
        wps: "WPS PDF 的入口标签叫「批注」而不是「注释」：批注 → 高亮 / 下划线 / 便签\n左侧「目录」面板就是书签列表\n签名：插入 → 签名 → 创建签名（可存下来复用）"
      },
      path_en: {
        ms: "Comment → Highlight / Underline / Note (pin) / Signature\nView → Page Thumbnails and Bookmarks panels\nHanding annotations over: Comment → Export All Annotations to Data File (FDF), or tick Include Comments when printing",
        wps: "The WPS PDF tab is labelled Annotate, not Comment: Annotate → Highlight / Underline / Note\nThe left-hand Contents panel is the bookmark list\nSignature: Insert → Signature → Create Signature (save it for reuse)"
      },
      pit: "把签名做成图片贴上去当正式签署——图片可被随意复制，正式场合应使用数字签名或电子签平台。另一件容易误判的事：MS 侧这一排功能叫「注释」、WPS PDF 里叫「批注」，换阅读器时别以为功能被砍了。",
      pit_en: "Pasting an image of your signature onto a contract is not a real signature — images copy freely; use a digital signature or an e-sign platform for anything formal. The other trap is naming: this row of tools is called Comment on the MS side and Annotate in WPS PDF, so the feature has not been removed when you switch readers."
    },

    /* ========== O1-1 · c8l5 邮件与会议纪要 ========== */
    "c8l5": {
      title: "邮件与会议纪要：把结论写清楚",
      title_en: "Email & Meeting Minutes: Make Conclusions Stick",
      summary: [
        "邮件的成败在正文之前就决定了：主题行要让人不打开也知道要不要动手——动词开头、带上事项、写清截止日，必要时加 [需决策] / [请回复] 前缀。",
        "正文用「结论先行」：第一句就说明你要对方做什么（确认 / 决定 / 提供资源 / 仅告知），依据和过程放在后面，重要事项一行一条。",
        "行动项必须显式列出「谁 · 做什么 · 什么时候前」，写在邮件末尾而不是埋在段落里；写「请相关同事跟进」等于没有布置任务。",
        "收件人是执行者，抄送（CC）是需要知情的人，密送（BCC）是不能互相看到的收件人。把领导放 CC 而不是 TO，本身就是一种分工信号。",
        "会议纪要不是发言记录，而是三张表：已定结论、行动项、待决事项。能被追溯的只有写下来的结论，口头一致不算达成。",
        "纪要在会后 24 小时内发出，标题带日期与项目名，正文附到会名单；每条行动项落到具体人名与日期，避免「大家」这类主语。",
        "转发长线程前先重整现场：把无关内容删到只剩必要往来，另起新邮件并在主题注明「承接 X 月 X 日讨论」，别让对方在二十层引用里考古。"
      ],
      summary_en: [
        "An email is won or lost before the body: the subject line must tell people whether they need to act — start with a verb, name the item, state the deadline, prefix with [Decision needed] / [Please reply] when useful.",
        "Lead with the ask: the first sentence says what you want the reader to do (confirm / decide / provide / just note). Evidence and process come after, one point per line.",
        "List action items explicitly as who · what · by when at the end of the mail, not buried in a paragraph. 'Please follow up, team' assigns the task to nobody.",
        "To = the executor, CC = people who need to know, BCC = recipients who must not see each other. Putting your manager in CC rather than To is itself a statement about ownership.",
        "Minutes are not a transcript but three tables: decisions made, action items, open questions. Only written decisions can be traced back; verbal agreement counts as nothing.",
        "Send minutes within 24 hours with the date and project in the subject, list who attended, and attach a named owner and a date to every action item — avoid subjects like 'everyone'.",
        "Tidy the thread before forwarding: cut the exchange down to what matters, or start a fresh mail noting 'follow-up to the discussion on <date>'. Do not make people do archaeology through twenty layers of quotes."
      ],
      code: "邮件骨架：\n  主题：【需决策】A 项目报价口径确认 · 9 月 28 日前\n  1) 请确认按含税价报，还是拆分为不含税 + 税额（本周五前）\n  2) 依据：财务 9 月新规，见附表\n  3) 行动项：张三 · 出两版报价 · 9 月 27 日；李四 · 核对税率 · 9 月 26 日\n  CC：项目经理、财务\n\n纪要骨架：\n  结论（3 条） | 行动项（人 · 事 · 期限） | 待决（谁在何时前给答案）",
      code_en: "Mail skeleton:\n  Subject: [Decision needed] Project A pricing basis - by 28 Sep\n  1) Confirm: quote tax-inclusive, or split net + VAT? (by this Friday)\n  2) Basis: finance's September rule, see attachment\n  3) Actions: Zhang San - two quote versions - 27 Sep; Li Si - verify tax rate - 26 Sep\n  CC: project manager, finance\n\nMinutes skeleton:\n  Decisions (3) | Action items (owner / task / deadline) | Open questions (who answers by when)",
      path: {
        ms: "邮件：Outlook → 新建邮件 → 主题写「【需决策】… · 9/28 前」；收件人 / 抄送(CC) / 密送(BCC) 分栏填\n行动项：把邮件拖到 Outlook 任务并设截止日期，或在邮件上标记旗标\n纪要载体：Teams 会议记录（决议与行动项分开写）；或 Word → 插入 → 表格，三列填 人 · 事 · 期限",
        wps: "邮件：系统里装的是哪个客户端都行，主题与前缀的写法和 MS 路线完全一致\n行动项：金山文档表格加一列「状态」→ 数据 → 下拉列表（未开始 / 进行中 / 已完成）\n纪要载体：WPS 文字 → 插入 → 表格；或用 WPS 智能文档的待办清单块，逐条指派给具体人名\n共享纪要：金山文档 → 分享 → 权限给「可评论」而不是「可编辑」"
      },
      path_en: {
        ms: "Mail: Outlook → New Mail, subject '[Decision needed] ... by 28 Sep'; fill To / CC / BCC in their own fields\nAction items: drag the mail onto Outlook Tasks and set a due date, or flag it\nWhere minutes live: Teams meeting notes (decisions and actions written separately); or Word → Insert → Table with columns owner / task / deadline",
        wps: "Mail: whichever client is installed works - the subject and prefix conventions are identical to the MS route\nAction items: add a Status column in a Kingsoft Docs sheet → Data → Dropdown list (Not started / In progress / Done)\nWhere minutes live: WPS Writer → Insert → Table; or a to-do block in WPS Smart Document, each line assigned to a named person\nSharing minutes: Kingsoft Docs → Share → grant 'can comment', not 'can edit'"
      },
      pit: "纪要写成流水账（谁说了什么），既没有决议也没有负责人——两周后没人记得当时定过什么，也无法追溯是谁的承诺。",
      pit_en: "Minutes written as a transcript of who said what, with no decision and no owner: two weeks later nobody remembers what was agreed and nobody can be pointed to.",
      ex: {
        q: "为什么行动项不能写成「请相关同事跟进」？",
        a: "没有具体人名和期限的任务等于没人负责；一旦延误既无法追问，也没法在复盘时追溯承诺。",
        q_en: "Why is 'please follow up, relevant colleagues' not an action item?",
        a_en: "Without a named owner and a date nobody owns it; when it slips you cannot chase anyone or trace the commitment in the retrospective."
      },
      min: 12
    },

    /* ========== O1-2 · c8l6 综合交付全链路 ========== */
    "c8l6": {
      title: "综合交付：一份周报的 Excel → PPT → PDF → 云协作",
      title_en: "End-to-End Delivery: One Weekly Report",
      summary: [
        "把交付看成一条链：源数据（表格）→ 结论（透视与图表）→ 讲法（幻灯）→ 存档与分发（PDF）→ 协作与留痕（云文档）。每一环只保留这一环需要的信息。",
        "单一数据源原则：一个数字只在表格里存一次，图表从它生成，幻灯从图表来。任何一处手抄的数字，都会在下一周变成两个互相矛盾的版本。",
        "Excel → PPT 有三种粘法：粘贴链接（数据更新会跟着变）、嵌入对象（可双击回去编辑）、图片（只有外观）。按「对方需不需要改、你担不担心链接断」来选。",
        "链接与嵌入都有代价：链接文件移动或改名就断，嵌入会让 PPT 体积膨胀。对外发出去的版本通常定格成图片，内部滚动更新的版本才用链接。",
        "PPT → PDF 前做三查：图形有没有溢出页边（用「适合可打印区域」再看一遍）、图表文字在小屏上是否可读、导出时是否带上文档属性与辅助功能标签。",
        "交付物命名要有机器可排序的时间：项目_对象_日期_版本（2026Q3_周报_0925_v2），别用「最终版 3 / 真的最终版」；日期统一 8 位数字，文件列表自动按时间排。",
        "分发方式按受众定：要讨论给云链接 + 评论权限，要留档给 PDF 附件，要归档给只读 + 链接有效期。每次留三件东西——源文件、成品、一页说明（口径 / 假设 / 数据截止日）。"
      ],
      summary_en: [
        "Read delivery as a chain: source data (spreadsheet) → conclusions (pivot and charts) → narrative (deck) → archive and distribution (PDF) → collaboration and evidence (cloud doc). Each link carries only what that link needs.",
        "Single source of truth: each number is stored once in the sheet, charts derive from it, slides derive from the charts. Any figure hand-copied along the way becomes two contradictory versions next week.",
        "Excel → PPT has three pastes: Paste Link (follows data updates), Embed Object (double-click to edit), Picture (appearance only). Choose by whether the receiver must change it and whether you can trust the link to survive.",
        "Links and embeds both cost something: a moved or renamed source breaks the link, an embed inflates the file. Outgoing versions usually freeze to pictures; only the internally rolling version keeps links.",
        "Three checks before PPT → PDF: shapes overflowing the page edge (re-view with 'Scale to Fit Paper'), whether chart labels stay readable on a small screen, and whether document properties and accessibility tags are exported.",
        "Name deliverables so a machine can sort them: project_object_date_version (2026Q3_weekly_0925_v2). Never 'final 3 / really final'. Always eight-digit dates and the file list sorts itself by time.",
        "Pick distribution by audience: a cloud link with comment rights for discussion, a PDF attachment for the record, read-only plus an expiry for archiving. Leave three artefacts every time — source file, finished file, and a one-page note on definitions, assumptions and data cut-off date."
      ],
      code: "一条链的检查点：\n  表格：口径行注明「数据截止 0925，含退货」\n  图表：标题含指标与单位，不依赖颜色区分\n  PPT：放映前对所有链接对象执行一次「更新链接」\n  PDF：导出时勾选文档属性与辅助功能标签\n  云协作：链接权限给「评论」，另存一份 PDF 附件留档\n交付三件套：源文件 · 成品 · 一页说明（口径 / 假设 / 截止日）",
      code_en: "Checkpoints along the chain:\n  Sheet: state the basis - 'data cut-off 0925, returns included'\n  Chart: title carries the metric and unit, never relies on colour alone\n  Deck: run Update Link on every linked object before presenting\n  PDF: tick document properties and accessibility labels on export\n  Cloud: share as 'comment', and keep a PDF copy for the record\nThree artefacts every time: source file / finished file / one-page note (basis, assumptions, cut-off date)",
      path: {
        ms: "链接图表：Excel 复制图表 → PPT 右键 → 粘贴选项 → 保留源格式并链接数据\n更新确认：PPT 里右键链接对象 → 更新链接（放映前必做）\n导出：文件 → 导出 → 创建 PDF/XPS → 选项里勾选辅助功能与文档属性标签\n云端留痕：OneDrive / SharePoint → 共享 → 权限「可审阅」+ 版本历史",
        wps: "链接图表：WPS 表格复制图表 → WPS 演示里右键 → 选择性粘贴 → 粘贴链接（入口在右键菜单，不在粘贴选项图标下）\n更新确认：右键链接对象 → 更新链接；没有该入口就改用 插入 → 对象 重新嵌入\n导出：文件 → 输出为 PDF → 高级设置里勾选文档属性\n云端留痕：金山文档 → 分享 → 权限「可评论」+ 查看历史版本"
      },
      path_en: {
        ms: "Linked chart: copy it in Excel → right-click in PPT → Paste Options → Keep Source Formatting and Link Data\nRefresh before presenting: right-click the linked object in PPT → Update Link\nExport: File → Export → Create PDF/XPS → tick the accessibility and document-properties options\nCloud trail: OneDrive / SharePoint → Share → 'can review' rights plus version history",
        wps: "Linked chart: copy it in WPS Spreadsheet → right-click in WPS Presentation → Paste Special → Paste Link (the entry sits in the right-click menu, not under the paste icons)\nRefresh before presenting: right-click the linked object → Update Link; if that entry is missing, re-embed via Insert → Object\nExport: File → Export as PDF → tick document properties under Advanced Settings\nCloud trail: Kingsoft Docs → Share → 'can comment' rights plus version history"
      },
      pit: "把表格截图贴进 PPT 就当「已经同步好了」——源数据改了，图片不会动，于是公司里同时存在两套数字，而且两套都有人拿去汇报过。",
      pit_en: "Pasting a screenshot of the sheet into the deck and calling it 'in sync': the picture never updates, so two sets of numbers circulate in the company — and someone has reported from each.",
      ex: {
        q: "什么场景选「粘贴链接」，什么场景选「图片」？",
        a: "内部滚动更新、源文件位置稳定时用粘贴链接；要对外发出或归档时定格成图片，避免对方打开时链接已断或数据已变。",
        q_en: "When should you paste a link and when a picture?",
        a_en: "Paste a link for internal versions that keep rolling with a stable source file; freeze to a picture for anything outgoing or archived, so the receiver never hits a broken link or shifted data."
      },
      min: 14
    },

    /* ========== O2-1 · c9l1 让 AI 起草 ========== */
    "c9l1": {
      title: "让 AI 起草：从空白页到有结构的初稿",
      title_en: "Let AI Draft: From Blank Page to Structured First Draft",
      summary: [
        "AI 在办公场景里的强项是「从零到六十分」：搭结构、列目录、写出通顺的段落骨架。它不擅长的是给你可信的数字与事实——这两件事必须分开看。",
        "任务描述给四要素：角色与受众、目标与用途、已有材料、限制（篇幅 / 口径 / 格式）。缺任何一项，产出就会滑向「通用模板腔」，看着完整却用不上。",
        "先要结构，再要内容：让 AI 只输出大纲并逐条确认，然后按小节展开。一次性索要「整份报告」，换来的是无法控制的平均质量。",
        "起草阶段最值钱的用法是反向提问：让它列出「完成这份材料还需要哪些信息」。这份清单本质上一份访谈提纲，能帮你把需求问齐。",
        "语气与格式用样本约束，不用形容词：贴 2~3 段你满意的旧文档，要求「照此语气与句长写」，比说「专业一点、简洁一点」有效得多。",
        "表格与清单类任务要求结构化返回（先给表头，再逐行给内容），拿到后仍要粘进纯文本编辑器检查分隔符与列对齐，别直接贴进正式表格。",
        "初稿到手立刻做三件事：每个数字标注来源、每个专有名词核对拼写、每条结论追问一句「依据是什么」。这三步是起草环节的验收清单。"
      ],
      summary_en: [
        "In office work AI is strong at going from zero to sixty: building structure, listing sections, writing a fluent skeleton. It is not strong at supplying trustworthy numbers and facts — treat those as two different jobs.",
        "Give four things in the brief: role and audience, goal and use, material you already have, constraints (length, definitions, format). Miss any one and the output drifts into generic template voice — complete-looking but unusable.",
        "Ask for structure before prose: have it output an outline, confirm it line by line, then expand section by section. Asking for 'the whole report' in one go buys you uncontrollable average quality.",
        "The most valuable drafting move is the reverse question: 'list what information you still need to finish this'. That list is effectively an interview guide for gathering requirements.",
        "Constrain tone with examples, not adjectives: paste two or three paragraphs of your own that you like and ask for the same voice and sentence length — far more effective than 'make it professional and concise'.",
        "For table and checklist tasks, require a structured return (header row first, then rows). Still paste through a plain-text editor to check separators and column alignment before it enters a real sheet.",
        "As soon as the draft lands, do three checks: annotate a source for every number, verify the spelling of every proper noun, and ask 'on what basis' for every conclusion. That is the acceptance list for drafting."
      ],
      code: "起草提示骨架（四要素）：\n  角色/受众：写给部门负责人的内部汇报读者\n  目标：说明本月进度、风险、下月计划，用于月度例会\n  材料：以下 3 段是我的原始记录（粘贴）\n  限制：小标题不超过 5 个，每节 120 字内，保留原口径名词不改写\n先要大纲 → 确认 → 再逐节展开",
      code_en: "Drafting brief (four elements):\n  Role / audience: an internal report read by department heads\n  Goal: this month's progress, risks and next month's plan for the monthly review\n  Material: my three raw notes below (pasted)\n  Constraints: at most 5 sub-headings, under 120 words each, keep my terminology untouched\nOutline first -> confirm -> then expand section by section",
      path: {
        ms: "入口：Word / Excel / PPT 首页或顶部工具栏 → Copilot；或在文档里直接唤起提示框\n当前文档内起草：新建空白文档 → 把角色受众、目标用途、原始材料、篇幅与口径限制一次说全，先要大纲\n若你的版本看不到该入口：用任意对话式 AI 做同一件事，产出再粘回文档——方法与厂商无关",
        wps: "入口：WPS 首页或顶部标签 → WPS AI；在正文选中段落后也能请求改写、扩写与生成目录\n批量起草：新建空白文档 → 把四要素与原始记录一并贴进去，先要大纲、确认后逐节展开\n若看不到 WPS AI：任意对话式 AI 走同样流程，差别只在复制粘贴这一步"
      },
      path_en: {
        ms: "Entry: Copilot on the Word / Excel / PPT start page or top ribbon; or summon the prompt box inside the open document\nDrafting in place: new blank document, state role and audience, goal and use, your material, length and definition limits, and ask for the outline first\nIf your build shows no such entry: use any conversational AI for the same step and paste the result back - the method is vendor-independent",
        wps: "Entry: WPS AI on the WPS start page or top tab; select a paragraph to ask for a rewrite, expansion or a generated table of contents\nBulk drafting: new blank document, paste the four elements together with your raw notes, ask for the outline, confirm, then expand section by section\nIf WPS AI is not visible: any conversational AI runs the same flow - the only difference is one extra copy-paste"
      },
      pit: "对 AI 说「帮我写份专业点的报告」，拿到一篇没有你业务口径的漂亮废话。形容词不是约束，材料、口径和篇幅才是。",
      pit_en: "Telling AI 'write me a professional-ish report' and getting polished nonsense with none of your business definitions. Adjectives are not constraints — material, definitions and length are.",
      ex: {
        q: "为什么说「让 AI 先给大纲再展开」比一次要整份报告更可控？",
        a: "大纲是唯一一处你能低成本否决的结构层；结构错了再展开，返工成本从改几行变成改全文。",
        q_en: "Why is 'outline first, then expand' more controllable than asking for the whole report at once?",
        a_en: "The outline is the one layer where you can reject structure cheaply; expand a wrong structure and the rework jumps from editing a few lines to rewriting everything."
      },
      min: 13
    },

    /* ========== O2-2 · c9l2 喂材料与可复现 ========== */
    "c9l2": {
      title: "把材料喂给 AI：上下文组织与可复现提示",
      title_en: "Feeding AI: Context Organisation and Reproducible Prompts",
      summary: [
        "上下文窗口的大小有限，上下文质量决定产出质量，顺序很重要：先筛信息（哪些是结论依据、哪些只是背景），再给结构（编号分节），最后才给任务。一上来就倒材料，模型只能猜你的重点。",
        "长材料先做分层摘要：让 AI 先出要点清单，你删掉错的，再基于修正后的清单要求成文。一步到位的长文最容易在中段失控——那正是没人细看的地方。",
        "给材料编号并要求指认来源：「依据请注明第几条材料」。可指认的位置会显著减少凭空生成；只写「根据资料」等于没有约束。",
        "把提示词当文件管理：任务描述 + 口径定义 + 禁用项 + 输出格式，四段固定。只有结构稳定，两次产出的差异才可比、可迭代。",
        "同一任务两次结果不同是常态。满意的那一次要连同提示词与输入一起存档并标日期；需要复现时拿存档重放，而不是「再试一次 hopefully」。",
        "分批给料优于一次性倾倒：按 背景 / 数据 / 要求 三批，并在开头声明「先接收不输出，我说开始你再答」。长上下文里被忽略的中段是真实存在的。",
        "敏感材料不上传是底线判断：合同、人事、客户名单、含个人信息的表格，先确认公司是否允许、是否已脱敏（去掉姓名、手机号、账号、内部编号、地址）。"
      ],
      summary_en: [
        "The context window is finite, and context quality decides output quality; order matters: filter the information first (what is evidence for the conclusion versus mere background), then structure it (numbered sections), and only then state the task. Dump raw material and the model can only guess your priorities.",
        "For long material, summarise in layers: ask for a bullet list, delete what is wrong, then request the prose from the corrected list. One-shot long documents lose control in the middle — exactly the part nobody reads closely.",
        "Number your inputs and demand attribution: 'cite which item you relied on'. Pointable sources measurably reduce invented content; 'based on the material provided' is no constraint at all.",
        "Manage prompts like files: task description + definitions + forbidden items + output format, those four blocks fixed. Only with a stable structure can differences between two runs be compared and iterated.",
        "Getting different results twice for the same task is normal. Archive the good run together with its prompt and input, dated; to reproduce, replay the archive rather than 'let's try again and hope'.",
        "Feed in batches rather than one dump: background / data / requirements, prefaced with 'acknowledge only, do not output until I say go'. The neglected middle of a long context is real.",
        "Not uploading sensitive material is the bottom line: contracts, HR data, customer lists, any table containing personal information — check first whether policy allows it and whether it has been scrubbed (names, phone numbers, accounts, internal IDs, addresses)."
      ],
      code: "提示词存档（四段固定，改名即复用）：\n  [任务] 把下列会议记录整理成决议 + 行动项\n  [口径] '完成率' = 已交付/计划项，不含顺延项\n  [禁用] 不新增材料里没有的数字；不推测负责人\n  [格式] 三张表：结论 / 行动项（人·事·期限）/ 待决\n存档：提示词 + 输入 + 输出 + 日期，同名放一个文件夹",
      code_en: "Prompt archive (four fixed blocks, reusable once you rename it):\n  [Task] Turn the meeting notes below into decisions + action items\n  [Basis] 'completion rate' = delivered / planned items, deferred ones excluded\n  [Forbidden] No numbers that are not in the material; no guessing owners\n  [Format] Three tables: decisions / actions (owner, task, deadline) / open questions\nArchive: prompt + input + output + date, one folder per task",
      path: {
        ms: "材料准备：把散在邮件、表格、文档里的依据汇总进一份 Word 材料清单并逐条编号（1、2、3…），标注出处\n对话内引用：Copilot 可读取已登录账号下的 OneDrive 文档，先指定文件再提问\n提示词存档：OneDrive 建 _prompts 目录，文件名用 项目_任务_日期，输入与输出同目录存放",
        wps: "材料准备：在 WPS 智能文档或金山文档表格里建材料清单，逐条编号并填「出处」列\n对话内引用：把清单整段粘贴进对话，比让模型自己去翻文件更可控\n提示词存档：金山文档建 _prompts 目录，一份文档固定四段（任务 / 口径 / 禁用 / 格式）并标日期\n上传前脱敏：先删掉或替换姓名列、手机号、账号、内部编号，再粘进任何 AI 入口"
      },
      path_en: {
        ms: "Prepare material: consolidate evidence scattered across mail, sheets and docs into one Word material list, number every item (1, 2, 3 ...) and note its source\nIn-conversation reference: Copilot can read OneDrive files under the signed-in account - name the file first, then ask\nPrompt archive: a _prompts folder on OneDrive, files named project_task_date, with input and output kept beside them",
        wps: "Prepare material: build a material list in a WPS Smart Document or Kingsoft Docs sheet, numbering items and filling a Source column\nIn-conversation reference: paste the whole list into the conversation instead of letting the model hunt for files - more controllable\nPrompt archive: a _prompts folder in Kingsoft Docs, one note with the four fixed blocks (task / definitions / forbidden / format) plus a date\nScrub before uploading: remove or replace names, phone numbers, accounts and internal IDs before pasting into any AI entry"
      },
      pit: "提示词随手改、结果随手丢，下次想要同样的产出只能重新试。不可复现的 AI 产出在办公场景里没有生产价值——它连「上周那版」都找不回来。",
      pit_en: "Tweaking prompts on the fly and discarding outputs as you go, so next time you must start over. Irreproducible AI output has no production value at work — you cannot even recover last week's version.",
      ex: {
        q: "为什么要求「注明依据来自第几条材料」能提升可靠性？",
        a: "它把生成压成「定位 + 复述」，模型必须指到可核对的位置；无法指认的句子会当场暴露，比事后逐句核查便宜得多。",
        q_en: "Why does demanding 'cite which numbered item this came from' improve reliability?",
        a_en: "It turns generation into locate-and-restates: the model must point at a checkable place, and unpointable sentences expose themselves on the spot — far cheaper than auditing line by line afterwards."
      },
      min: 14
    },

    /* ========== O2-3 · c9l3 把关与责任边界 ========== */
    "c9l3": {
      title: "AI 产出的把关：核对、留痕与责任边界",
      title_en: "Accepting AI Output: Checks, Evidence and Accountability",
      summary: [
        "AI 幻觉是这一章的底色：模型会生成「看似合理」却没有依据的内容，责任不因为用了 AI 而转移——署名的人对每个数字和每条结论负责。在评审场合，「这是 AI 写的」不是解释，只是把一个未核对的内容又交了一遍手。",
        "三类必查：数字（回到源表复算一遍）、引用与出处（找到原文和页码）、时间与名称（日期、人名、产品名最容易被写成「看似合理」的版本）。",
        "把 AI 稿与你的手工稿并排 diff。它删掉的往往正是关键限定条件——「在 X 前提下」「截至 Y 日」「不含退货」，去掉这些句子，结论就从准确变成漂亮。",
        "校验型用法比生成型更稳：让 AI 检查已有草稿的口径不一致、遗漏项、歧义句、逻辑冲突，比让它凭空写一份安全得多，因为判断锚点仍在你自己的材料上。",
        "表格里用了 AI 结果就要抽样回算：随机抽 10% 的行手工核对，并要求它同时给出计算过程而不只是结果；只有结果的回算等于没回算。",
        "养成标注 AI 参与度的习惯：交付物附一行说明「哪些部分由 AI 起草、哪些经过人工核对」。这既是对读者负责，也是对自己留证据。",
        "不要让它做决策，让它做决策的展开：列选项、列代价、列你没想到的是它可以干的；取舍与结论由人写。把判断外包给模型，是最典型也最难察觉的误用。"
      ],
      summary_en: [
        "AI hallucination is the backdrop of this chapter: models produce plausible-sounding but ungrounded content. Using AI does not move accountability: whoever signs the document owns every number and conclusion. In a review, 'the AI wrote it' is not an explanation — it is just handing over unchecked content one more time.",
        "Three categories to check always: figures (recompute from the source table), citations (find the original text and page), and time and names (dates, people, product names are the most likely to be written into a plausible-looking version).",
        "Diff the AI draft against your own side by side. What it deletes is usually the qualifying clause — 'assuming X', 'as of date Y', 'excluding returns'. Remove those and a correct conclusion becomes a smooth one.",
        "Verification uses are steadier than generation uses: have AI audit an existing draft for inconsistent definitions, missing items, ambiguous sentences and internal contradictions. It is safer than writing from nothing, because the anchor stays in your own material.",
        "If AI produced spreadsheet results, sample-audit them: hand-check a random 10% of rows and require the calculation steps, not just the answer. Recomputing an answer without its working is no audit at all.",
        "Build the habit of declaring AI involvement: one line on the deliverable saying which parts AI drafted and which were human-verified. That is accountability to the reader and evidence for yourself.",
        "Do not let it decide; let it unpack a decision. Listing options, costs and things you missed is its job; the trade-off and the conclusion stay human. Outsourcing judgement to the model is the most typical and hardest-to-notice misuse."
      ],
      code: "验收清单（交付前逐条打勾）：\n  □ 每个数字能回指到源表单元格\n  □ 每条引用能指到材料与页码\n  □ 日期 / 人名 / 产品名逐个核对过\n  □ 与自己的手工稿 diff 过，限定条件未被删除\n  □ 表格结果抽样回算 ≥10%\n  □ 附一行 AI 参与度说明",
      code_en: "Audit list (tick every line before delivery):\n  [ ] Every figure traces back to a cell in the source table\n  [ ] Every citation names its material item and page\n  [ ] Dates / people / product names checked one by one\n  [ ] Diffed against my own draft - no qualifying clause dropped\n  [ ] At least 10% of AI-made table rows recomputed by hand\n  [ ] One line declaring how much AI was involved",
      path: {
        ms: "回源复算：Excel → 公式 → 追踪引用单元格，沿箭头一路回到源行；再抽 10% 手工核对\n并排比对：Word → 审阅 → 比较，选自己的手工稿与 AI 稿，重点看被删掉的限定条件\n留痕：文件 → 信息 → 属性里写明数据来源与口径；对外版本导出 PDF 并附一页说明",
        wps: "回源复算：WPS 表格 → 公式 → 追踪引用单元格（入口同组，箭头样式不同）；没有该功能时用 筛选 + 随机抽 10% 行手工核对\n并排比对：WPS 文字 → 审阅 → 比较，同样能列出删改与新增条目\n留痕：金山文档 → 历史版本 记录改动时间线；交付说明写进文档首页或另附一页"
      },
      path_en: {
        ms: "Recompute from source: Excel → Formulas → Trace Precedents, follow the arrows back to the source rows, then hand-check a 10% sample\nSide-by-side diff: Word → Review → Compare, your own draft against the AI draft, watching for qualifying clauses it deleted\nEvidence: File → Info → Properties records data source and definitions; the outgoing version exports to PDF with a one-page note attached",
        wps: "Recompute from source: WPS Spreadsheet → Formulas → Trace Precedents (same group, different arrow styling); where it is missing, filter and hand-check a random 10% of rows\nSide-by-side diff: WPS Writer → Review → Compare also lists deletions and insertions\nEvidence: Kingsoft Docs → Version history keeps the change timeline; put the delivery note on the first page or attach it separately"
      },
      pit: "让 AI 汇总出来的数字直接进周报，没有回源表复算。第一次被追问「这个 37% 怎么来的」答不上来，之后所有交付物的可信度都要重新证明。",
      pit_en: "Pushing AI-summarised figures straight into the weekly report without recomputing them from the source. The first time someone asks 'where does 37% come from' and you cannot answer, every later deliverable has to re-prove itself.",
      ex: {
        q: "为什么说「让 AI 检查已有草稿」比「让 AI 从零写」更安全？",
        a: "前者的判断锚点是自己的材料，错了好识别、也好回滚；后者没有锚点，错误会以流畅的文字形态混在正确内容里。",
        q_en: "Why is 'have AI review an existing draft' safer than 'have AI write from scratch'?",
        a_en: "The first keeps your own material as the anchor, so errors are visible and reversible; the second has no anchor, and mistakes arrive fluent, mixed in with what is right."
      },
      min: 13
    },

  /* ========== O2 续批 · c9l4 / c9l5（批量数据处理与团队复用） ========== */
    "c9l4": {
      title: "批量数据交给 AI：提取、清洗、分类与汇总",
      title_en: "Bulk Data with AI: Extract, Clean, Classify, Summarise",
      summary: [
        "批量任务的第一步不是给数据，而是「定字段」：先把「我要的表头」写死，再要求它按这张表填行。没有表头的批量任务一定跑偏。",
        "四类高胜率任务：从非结构化文本抽取字段（合同要点、发票、简历）、格式规范化（日期 / 编号 / 地址统一）、按规则分类打标签、把多份材料并成一张表。共同点是「判据明确」。",
        "不要让它做算术汇总：要它写公式或脚本。公式与脚本可复核、可回滚、源数据一改就重算；直接要数字，错在哪一行永远查不出来。",
        "分批投喂并留校验行：一次 20~50 行，每批末尾追加一行手工算好的合计；下一批开始前先对一次，漂移会当场暴露，而不是在第三百行才发现。",
        "抽取结果必须保留来源定位：让它同时输出「来自第几条材料」。回查成本从「逐条重读原文」降到「跳过去看一眼」。",
        "分类体系先冻结再打标：类别数量、命名、互斥规则、「其他」的使用条件先定稿。边打边改类别，等于把同一批数据标两遍。",
        "输出格式先约定分隔符与列：要求 CSV / TSV 或 Markdown 表，粘进表格后再用「分列」二次确认列结构。从聊天窗口直接粘带格式的文本，是最常见的错列来源。"
      ],
      summary_en: [
        "The first move in a bulk task is not the data but the schema: fix the header row you want, then ask for rows that match it. A bulk job without a header always drifts.",
        "Four high-hit-rate uses: extracting fields from unstructured text (contract terms, invoices, résumés), normalising formats (dates / IDs / addresses), rule-based labelling, and merging several sources into one table. They all share one trait: clear pass criteria.",
        "Never let it do the arithmetic: make it write a formula or a script. Formulas are checkable, reversible and recompute when the source changes; a number it states has no traceable working, so a wrong row is unfindable.",
        "Feed in batches with a check row: 20-50 rows at a time, ending each batch with a total you computed by hand. Compare before the next batch and drift shows up immediately instead of at row 300.",
        "Keep source pointers on extracted rows: require 'which item did this come from'. Auditing drops from re-reading everything to jumping to one line.",
        "Freeze the taxonomy before labelling: settle the number of classes, their names, the mutual-exclusion rules and when 'Other' applies. Revising classes mid-run means labelling the same data twice.",
        "Agree the delimiter and columns up front: ask for CSV / TSV or a Markdown table, then confirm column structure with Text to Columns after pasting. Copying formatted text out of a chat window is the top cause of misaligned columns."
      ],
      code: "批量抽取提示骨架：\n  任务：从下列每份合同摘要中抽取字段\n  表头：签约方 | 金额 | 起止日 | 付款节点 | 来源条号\n  规则：缺失写 N/A，不允许推测；日期统一 YYYY-MM-DD；金额只写数字\n  批次：每次 20 条，末行给出「本批条数」合计\n  输出：TSV（制表符分隔），不要包在代码块里",
      code_en: "Bulk extraction brief skeleton:\n  Task: pull fields from each contract summary below\n  Header: parties | amount | start-end dates | payment milestones | source item no.\n  Rules: missing = N/A, no guessing; dates as YYYY-MM-DD; amount as digits only\n  Batch: 20 items at a time, end with a 'rows in this batch' total\n  Output: TSV (tab separated), not wrapped in a code block",
      pit: "把 300 行一次性丢进去说「帮我汇总」——前 30 行像模像样，越往后越像猜；又没有来源定位，错在哪一行根本查不到，最后只能全部人工重做。",
      pit_en: "Dumping 300 rows in with 'just summarise this' - the first 30 rows look fine and the rest gets guessy, and with no source pointers you cannot find the bad row, so everything ends up redone by hand.",
      ex: {
        q: "为什么批量汇总要让它写公式，而不是直接要结果？",
        a: "公式可复核、可回滚，源数据改了会自动重算；模型直接给的数字没有计算过程，一行错就让整表不可信。",
        q_en: "Why make it write a formula for bulk totals instead of asking for the number?",
        a_en: "A formula is checkable, reversible and recomputes when the source changes. A number stated by the model carries no working, so one bad row discredits the whole table."
      },
      min: 14,
      path: {
        ms: "落地抽取结果：Excel 粘贴 → 数据 → 分列（选分隔符）确认列结构\n核对：公式 → 追踪引用单元格；或 视图 → 新建窗口 并排比对两份表\n批量分类：数据 → 获取数据（Power Query）→ 分组依据 / 替换值，规则可复放",
        wps: "落地抽取结果：WPS 表格 粘贴 → 数据 → 分列，入口同名但预览窗更窄，先用 5 行小批试一次\n核对：视图 → 并排查看 + 同步滚动（WPS 都在 视图 选项卡下）\n批量分类：没有 Power Query，用 数据 → 有效性 的下拉列表锁死类别，再按类别筛选逐类核对"
      },
      path_en: {
        ms: "Land the extraction: paste in Excel → Data → Text to Columns (pick the delimiter) to confirm structure\nVerify: Formulas → Trace Precedents, or View → New Window to compare two sheets side by side\nBulk classification: Data → Get Data (Power Query) → Group By / Replace Values, rules replay cleanly",
        wps: "Land the extraction: paste in WPS Spreadsheet → Data → Text to Columns - same name, narrower preview, so trial it on 5 rows first\nVerify: View → Side by Side plus Synchronous Scrolling (both under the View tab in WPS)\nBulk classification: no Power Query - lock the classes with Data → Validation dropdown lists, then filter class by class to check"
      }
    },

    "c9l5": {
      title: "把 AI 固化进流程：模板、清单与团队复用",
      title_en: "Pinning AI into the Process: Templates, Checklists, Team Reuse",
      summary: [
        "自己用一次是好点子，团队能复用才是资产。任何「这次效果不错」的 AI 用法，要在当天变成三样东西：提示词模板、输入样例、验收清单。",
        "模板要带占位符和口径：[任务] / [受众] / [口径] / [禁用] / [格式] 五段留空。别人填的是内容，而不是重新发明一遍指令。",
        "把口径写进模板，别靠人记：同一家公司的「完成率」「含税价」若不锁定义，十个人用同一个模板会得到十种答案。",
        "格式交给模板文档（.dotx / .xltx / .potx），生成逻辑交给提示词，两件事不要混：格式靠模板保证，内容靠指令保证。",
        "另存一份失败样例：把跑偏的产出连同触发它的输入一起归档。只有成功模板会让人以为万能，失败样例才标出指令的边界。",
        "划定必须人签的边界：对外文件、含个人信息的表格、财务口径、法律条款这四类不因模板而豁免 —— 模板降低的是操作成本，不是责任等级。",
        "收益要用同一基准度量：改前耗时、改后耗时、返工率三项。只报「快了很多」的收益，下一轮评估时无法比较，也就保不住。"
      ],
      summary_en: [
        "One personal use is a good idea; team reuse makes it an asset. Any AI trick that worked well must become three things that same day: a prompt template, an input sample, an acceptance checklist.",
        "Ship templates with placeholders and definitions: task / audience / definitions / forbidden / format, left blank. Others fill in content instead of reinventing the instruction.",
        "Put definitions inside the template, not in people's memory: if 'completion rate' or 'tax-inclusive price' is unlocked, ten people using one template produce ten answers.",
        "Formatting belongs in template files (.dotx / .xltx / .potx), generation logic belongs in the prompt - never mix them. Templates guarantee layout; instructions guarantee content.",
        "Archive the failures too: store the bad output together with the input that triggered it. A library of only successes implies the tool is universal; failures mark where the instruction ends.",
        "Draw the human-signature boundary: outgoing documents, tables with personal data, financial definitions and legal clauses are not exempt because a template exists. Templates lower effort, not accountability.",
        "Measure gains on one fixed baseline: time before, time after, rework rate. A saving reported only as 'much faster' cannot be compared next quarter, so it will not survive."
      ],
      code: "复用包三件套：\n  1) 提示词模板（占位符 + 口径 + 禁用项 + 输出格式）\n  2) 输入样例（一份已脱敏的真实材料）\n  3) 验收清单（数字回源 / 引用可指认 / 限定条件未被删）\n命名：AI模板_周报_v2_0925，放在团队共享目录，改动记在文档首页变更表",
      code_en: "Reusable bundle, three parts:\n  1) Prompt template (placeholders + definitions + forbidden + output format)\n  2) Input sample (one real, already-scrubbed piece of material)\n  3) Acceptance checklist (figures trace to source / citations pointable / qualifiers not deleted)\nNaming: AI-template_weekly_v2_0925 in the team folder, with changes logged in the table on page one",
      pit: "把 AI 当个人小技巧：每次现写提示词、好坏靠运气，同事既无法复现也无法接手——人一请假，这条效率就消失了。",
      pit_en: "Treating AI as a personal hack: prompts rewritten from scratch each time, quality left to luck, colleagues unable to reproduce or take over. The productivity vanishes the moment you take leave.",
      ex: {
        q: "为什么复用包里必须有失败样例？",
        a: "失败样例标出了指令失效的边界条件，别人一看就知道哪种输入不能用；只有成功样例的模板会被当成万能工具误用。",
        q_en: "Why must the bundle include failure samples?",
        a_en: "Failures mark the boundary conditions where the instruction stops working, so others see which inputs to avoid. A bundle of successes alone gets misused as a universal tool."
      },
      min: 12,
      path: {
        ms: "共享：OneDrive / SharePoint 建 _AI模板 目录，权限给「可审阅」，口径段落用 审阅 → 限制编辑 锁住\n版本：文件 → 信息 → 版本历史记录；提示词的每次改动写进文档首页变更表\n审批边界：对外文件走 审阅 → 要求批准，签署前不得由模板直接导出"
      ,
        wps: "共享：金山文档建 _AI模板 目录，权限「可查看 / 可评论」，口径段落用 审阅 → 限制编辑 保护\n版本：金山文档 → 历史版本；每次改提示词在文档开头补一行日期与改动点\n审批边界：WPS 文字 → 审阅 → 修订 + 批注 走完整流程，对外版本再导出 PDF 定格"
      },
      path_en: {
        ms: "Sharing: an _AI-templates folder on OneDrive / SharePoint at 'can review' rights, with the definitions block locked via Review → Restrict Editing\nVersioning: File → Info → Version History; every prompt change logged in the change table on page one\nSign-off boundary: outgoing files go through Review → Require Approval; never export straight from a template before sign-off",
        wps: "Sharing: an _AI-templates folder in Kingsoft Docs at 'view / comment' rights, definitions block protected via Review → Restrict Editing\nVersioning: Kingsoft Docs → Version History; prepend one dated line per prompt change at the top of the document\nSign-off boundary: WPS Writer → Review → Track Changes plus comments for the full loop, then freeze the outgoing version as PDF"
      }
    }
  },

  /* ========== O2 配套：c9 测评题（题内自带 *_en，新章从第一天就是双语） ========== */
  quizAdd: {
    c9: [
      {
        q: "让 AI 起草一份内部汇报，最有效的约束方式是什么？",
        o: ["加形容词，比如「更专业、更精炼」", "给出角色受众、目标用途、已有材料和篇幅口径限制", "要求它尽量写长以显充分", "让它自己补充行业常识作为背景"],
        a: 1,
        why: "形容词不是约束。四要素齐了，产出才会贴合你的口径；缺哪一项，就会在那一项上滑向通用模板。",
        q_en: "What constrains an AI-drafted internal report most effectively?",
        o_en: ["Adding adjectives such as 'more professional, more concise'", "Supplying role and audience, goal and use, your material, plus length and definition limits", "Asking it to write as long as possible to look thorough", "Telling it to fill in industry common knowledge itself"],
        why_en: "Adjectives are not constraints. With all four elements present the output fits your definitions; whatever you omit is exactly where it drifts into template voice.",
        type: "choice"
      },
      {
        q: "同一提示词两次运行得到不同结果，正确的做法是什么？",
        o: ["反复重试直到满意为止", "把提示词改成更复杂的版本", "接受差异，因为模型本就不稳定", "把满意那次的提示词、输入与输出一起存档，之后重放存档"],
        a: 3,
        why: "办公场景要求可复现。存档重放能拿回同一版；反复重试只会攒出一堆无法追溯的版本。",
        q_en: "The same prompt gives different results on two runs. What should you do?",
        o_en: ["Keep retrying until you like one", "Rewrite the prompt to be more complicated", "Accept the variance, models are unstable anyway", "Archive the satisfying run's prompt, input and output together, then replay the archive"],
        why_en: "Office work needs reproducibility. Replaying an archive returns that version; retrying only accumulates untraceable variants.",
        type: "choice"
      },
      {
        q: "AI 汇总出的关键指标可以直接写进对外周报。",
        o: ["正确", "错误"],
        a: 1,
        why: "必须回到源表复算，并确认口径与数据截止日一致。署名人对每个数字负责，与它由谁生成无关。",
        q_en: "Key metrics summarised by AI can go straight into an external weekly report.",
        o_en: ["True", "False"],
        why_en: "Recompute from the source table and confirm definitions and data cut-off date. The signer owns every number regardless of what produced it.",
        type: "judge"
      },
      {
        q: "验收 AI 起草的表格结果时，通常要求随机抽样回算不低于 ____%。",
        o: [],
        a: "10",
        why: "抽 10% 手工核对是底线，同时要求模型给出计算过程而不只是结果；只有结果的回算等于没回算。",
        q_en: "When auditing AI-produced spreadsheet results, sample-check at least ____% of rows at random.",
        o_en: [],
        a_en: "10",
        why_en: "A 10% manual sample is the floor, and you should also require the calculation steps rather than only the answer — recomputing a bare answer is no audit.",
        type: "fill"
      },
      {
        q: "用 AI 从 200 份合同摘要里批量抽取字段，下列哪种做法最能防错？",
        o: ["一次性把 200 条全贴进去，让它连贯处理", "先固定表头，并分批投喂、每批末尾留一行手工合计", "让它顺便把金额总计算出来省一步", "把要求写成「尽量准确、别出错」"],
        a: 1,
        why: "表头定字段、分批 + 校验行才能及时发现漂移；顺便要总计等于把最不可追溯的算术交给它，而「尽量准确」不是约束。",
        q_en: "Extracting fields from 200 contract summaries in bulk - which practice prevents the most errors?",
        o_en: ["Paste all 200 at once so it works in one flow", "Fix the header first, feed in batches, and end each batch with a hand-computed total row", "Ask it to compute the grand total too, to save a step", "Write the requirement as 'be accurate, no mistakes'"],
        why_en: "A header fixes the schema and batch totals expose drift immediately; asking for grand totals hands the least traceable arithmetic to the model, and 'be accurate' is not a constraint.",
        type: "choice"
      },
      {
        q: "AI 用法要成为团队资产，必须同时留下提示词模板、输入样例和验收清单。",
        o: ["正确", "错误"],
        a: 0,
        why: "三件套缺一不可：只有模板别人不知道喂什么，只有样例别人无法复现指令，没有验收清单则好坏全靠运气。",
        q_en: "For an AI practice to become a team asset you need a prompt template, an input sample and an acceptance checklist.",
        o_en: ["True", "False"],
        why_en: "All three are required: a template alone leaves people unsure what to feed it, a sample alone cannot reproduce the instruction, and without a checklist quality is left to luck.",
        type: "judge"
      },
      /* —— 补批 3 题（F5，池 6→9 对齐「每章 ≥9」）：覆盖 c9l2 上下文窗口 / c9l3 幻觉判据 / c9l5 口径入模板 —— */
      {
        q: "长材料一次性贴给 AI 后，结论只反映开头和结尾，中段像没读过。最对症的做法是？",
        o: ["把要求写得更长更详细", "分层摘要 + 分批投喂（背景 / 数据 / 要求分开给，先接收不输出）", "换个更强的模型再原样贴一次", "把中段重复贴两遍"],
        a: 1,
        why: "上下文窗口限制的是「一次能被看到多少」；分批投喂并声明先接收不输出，中段才会被真正读到。",
        q_en: "After pasting long material in one go, conclusions only reflect the start and end - the middle reads as untouched. What is the right fix?",
        o_en: ["Write an even longer, more detailed request", "Layered summarising plus batched feeding (background / data / requirements separately, acknowledge before output)", "Switch to a stronger model and paste the same way", "Paste the middle section twice"],
        why_en: "The context window bounds what can be seen at once; batched feeding with an acknowledge-first instruction gets the middle actually read.",
        type: "choice"
      },
      {
        q: "判断 AI 产出的一段内容是不是幻觉，最可靠的判据是？",
        o: ["读起来是否流畅", "能否回指到源材料的具体位置", "字数是否足够多", "是否使用了专业术语"],
        a: 1,
        why: "幻觉往往比真话更流畅；无法指认出处的内容都可疑——核对方式是「能不能指到出处」，不是「读着顺不顺」。",
        q_en: "What is the most reliable test for whether an AI-produced passage is a hallucination?",
        o_en: ["Whether it reads fluently", "Whether it can be traced back to a specific place in the source material", "Whether the word count is large enough", "Whether it uses technical terminology"],
        why_en: "Hallucinations usually read smoother than the truth; anything that cannot be pointed to a source is suspect - the test is traceability, not fluency.",
        type: "choice"
      },
      {
        q: "团队共用同一个 AI 提示词模板时，最应该写进模板、而不是靠每个人记住的是？",
        o: ["各自的用词偏好", "口径定义与禁用项（如「完成率」怎么算、不许新增材料里没有的数字）", "模型的名字与版本号", "输出的字数上限"],
        a: 1,
        why: "口径不锁进模板，十个人用同一个模板会得到十种答案；模板降低的是操作成本，不是责任等级。",
        q_en: "When a team shares one AI prompt template, what belongs inside the template rather than in each person's memory?",
        o_en: ["Everyone's personal wording preferences", "Definitions and forbidden items (how 'completion rate' is computed, no numbers absent from the material)", "The model's name and version", "An output word-count cap"],
        why_en: "If definitions stay unlocked, ten people using one template produce ten answers. Templates lower operating cost, not accountability.",
        type: "choice"
      }
    ]
  },

  /* ========== D27 修复：新章必须同时进名词库与概念地图 ==========
     词条由合并层原地 push，并同步登记 OFFICE_TERM_EN / OFFICE_TERM_DETAIL_EN；
     概念地图的节点 id 必须是词库里的词条名（cmapLabel 按词条取英文名）。 */
  terms: [
    {
      term: "AI 助手", term_en: "AI Assistant", cat: "通用与协作",
      short: "嵌在办公套件里的生成式工具：起草、汇总、改写、核对。强项是结构与语言，不是事实与数字。",
      short_en: "A generative tool inside the office suite: draft, summarise, rewrite, check. Its strength is structure and language, not facts and figures.",
      detail: [
        "适合从零搭结构、改写语气、按规则批量处理；不适合给出可信的数字、日期与出处。",
        "入口在两条路线上不同名（Microsoft 365 Copilot / WPS AI），但用法一致：给材料、提要求、定格式。"
      ],
      detail_en: [
        "Good at building structure from nothing, rewriting tone and rule-based bulk work; not a source of trustworthy numbers, dates or citations.",
        "The entry is named differently on each route (Microsoft 365 Copilot / WPS AI), but the workflow is identical: supply material, state requirements, fix the format."
      ],
      vs: "会写内容的是 AI 助手，会重复动作的是宏与脚本；前者的产出必须核对，后者的产出可以复现。",
      vs_en: "AI assistants write content; macros and scripts repeat actions. The first needs verification, the second is reproducible."
    },
    {
      term: "提示词", term_en: "Prompt", cat: "通用与协作",
      short: "给 AI 的任务说明。可复用的提示词是固定结构：任务、口径、禁用项、输出格式。",
      short_en: "The instruction you give an AI. A reusable prompt has fixed blocks: task, definitions, forbidden items, output format.",
      detail: [
        "形容词不是约束：「专业一点」无法验收，「每节 120 字内、保留原口径名词」才可以。",
        "提示词要当文件管理并存档，连同输入与输出一起标日期，否则下次只能重新试。"
      ],
      detail_en: [
        "Adjectives are not constraints: 'be professional' cannot be accepted against, while 'under 120 words per section, keep my terminology' can.",
        "Manage prompts like files: archive them with their input and output, dated, or next time you are back to trial and error."
      ],
      vs: "模板文档固定格式，提示词固定生成逻辑；混在一起写，两头都失控。",
      vs_en: "Template files pin down layout, prompts pin down generation logic. Write them in one place and you lose control of both."
    },
    {
      term: "上下文窗口", term_en: "Context Window", cat: "通用与协作",
      short: "一次能被模型同时看到的材料量上限，超出部分会被截断或直接忽略。",
      short_en: "How much material the model can see at once; anything past the limit is truncated or simply ignored.",
      detail: [
        "限制的是「一次能被看到多少」，不是「能上传多大的文件」，两者常被混为一谈。",
        "典型症状是长材料的中段被忽略：结论只反映开头与结尾，看起来却像读完了全部。"
      ],
      detail_en: [
        "It bounds how much can be *seen* at once, not how large a file you may upload - the two are frequently conflated.",
        "The classic symptom is the middle of long material being ignored: conclusions reflect only the opening and the ending, while reading as if it covered everything."
      ],
      vs: "窗口不足时该做的是分层摘要与分批投喂，而不是把要求写得更长。",
      vs_en: "When the window is tight, summarise in layers and feed in batches - do not respond by writing a longer request."
    },
    {
      term: "AI 幻觉", term_en: "AI Hallucination", cat: "通用与协作",
      short: "模型把不存在的事实、数字、出处编得看似可信。判据：无法回指到源材料的内容都可疑。",
      short_en: "The model invents facts, figures or citations that look plausible. Test: anything that cannot be traced back to source material is suspect.",
      detail: [
        "与笔误不同：笔误能在原文找到依据，幻觉找不到，所以核对方式是「能不能指到出处」。",
        "抑制手段是约束而不是提醒：要求逐条指认来源、限定只用给定材料、缺信息时回答「未知」。"
      ],
      detail_en: [
        "Unlike a typo, which has an origin in the source, a hallucination has none - hence the check is 'can it be pointed to', not 'does it read well'.",
        "It is suppressed by constraints, not reminders: require per-item sourcing, restrict to the supplied material, and let it answer 'unknown' when information is missing."
      ],
      vs: "读起来顺不顺与对不对无关；幻觉往往比真话更流畅。",
      vs_en: "Fluency says nothing about correctness - hallucinations usually read smoother than the truth."
    },
    /* —— F3 补批：c8l5（邮件与会议纪要）/ c8l6（综合交付全链路）新增概念入典 —— */
    {
      term: "会议纪要", term_en: "Meeting Minutes", cat: "通用与协作",
      short: "会议产出的三张表：已定结论、行动项、待决事项——不是发言记录。",
      short_en: "A meeting's three tables: decisions made, action items, open questions - not a transcript.",
      detail: [
        "纪要在会后 24 小时内发出，标题带日期与项目名，正文附到会名单。",
        "口头一致不算达成：能被追溯的只有写下来的结论与负责人。"
      ],
      detail_en: [
        "Send within 24 hours with the date and project in the subject, and list who attended.",
        "Verbal agreement counts as nothing: only written conclusions with named owners can be traced."
      ],
      vs: "纪要记「决定与责任」，发言记录记「谁说了什么」——前者能追溯，后者不能。",
      vs_en: "Minutes record decisions and owners; a transcript records who said what. Only the former is traceable."
    },
    {
      term: "行动项", term_en: "Action Item", cat: "通用与协作",
      short: "显式的「谁 · 做什么 · 什么时候前」；写在纪要或邮件末尾，不埋进段落。",
      short_en: "An explicit owner · task · deadline, listed at the end - never buried in a paragraph.",
      detail: [
        "「请相关同事跟进」等于没有布置任务：没有具体人名和期限，延误时无法追问。",
        "每条行动项落到一个具体人；需要多人协作时拆成多条，各自有期限。"
      ],
      detail_en: [
        "'Please follow up, team' assigns nothing: without a named owner and a date, a slipping task has no one to chase.",
        "One action item, one named person; split multi-person work into several items, each with its own deadline."
      ],
      vs: "行动项是承诺，讨论是过程；只有行动项能在复盘时对账。",
      vs_en: "Action items are commitments; discussion is process. Only action items can be audited in a retrospective."
    },
    {
      term: "单一数据源", term_en: "Single Source of Truth", cat: "数据与表格",
      short: "一个数字只在表格里存一次，图表与幻灯都从它生成。",
      short_en: "Each number lives once in the sheet; charts and slides derive from it.",
      detail: [
        "任何一处手抄的数字，都会在下一周变成两个互相矛盾的版本。",
        "落地方法：图表引用表格、幻灯引用图表；口径与截止日写进表头附近，随数据一起被引用。"
      ],
      detail_en: [
        "Any figure hand-copied along the way becomes two contradictory versions next week.",
        "How: charts reference the sheet, slides reference charts; state definitions and the data cut-off near the header so they travel with the data."
      ],
      vs: "粘贴链接保持单一来源，截图制造第二来源——两套数字就是这么来的。",
      vs_en: "Paste Link preserves the single source; a screenshot creates a second one - that is how conflicting numbers start."
    },
    {
      term: "粘贴链接", term_en: "Paste Link", cat: "数据与表格",
      short: "Excel→PPT 的三种粘法：链接（随源更新）、嵌入（可双击回编辑）、图片（仅外观）。",
      short_en: "Three pastes from Excel to slides: link (follows the source), embed (double-click to edit), picture (looks only).",
      detail: [
        "按「对方需不需要改、你担不担心链接断」来选：内部滚动更新用链接，对外发出或归档定格成图片。",
        "链接的代价是源文件移动或改名就断；嵌入的代价是文件体积膨胀。放映前对所有链接对象执行一次「更新链接」。"
      ],
      detail_en: [
        "Choose by whether the receiver must edit and whether the link survives: links for internally rolling versions, freeze to pictures for outgoing or archived copies.",
        "A link breaks if the source moves or is renamed; an embed inflates the file. Run Update Link on every linked object before presenting."
      ],
      vs: "链接怕文件挪动，嵌入怕体积膨胀，图片怕数据变——三者各有一条命门。",
      vs_en: "Links fear moved files, embeds fear bloat, pictures fear changed data - each has its own weak spot."
    }
  ],

  /* 概念地图：c9 全部 4 个词条都进图（AI 助手 + 提示词 + 上下文窗口 + AI 幻觉）。
     此前只敢加 2 个节点——画布是 780×428 固定椭圆环，26 节点时英文态已有 2 处胶囊相碰。
     F4 容量解法（index.html 的 cmapGeom：环半径/画布随「节点数 × 胶囊宽」自适应）
     落地后瓶颈解除，本批补齐剩余 2 节点 + 2 边。 */
  mapAdd: {
    nodes: [
      { id: "AI 助手", tier: 1 },
      { id: "提示词", tier: 2 },
      { id: "上下文窗口", tier: 2 },
      { id: "AI 幻觉", tier: 2 }
    ],
    edges: [
      { a: "AI 助手", b: "办公文档", zh: "生成与核对", en: "generate and check" },
      { a: "AI 助手", b: "协作", zh: "重复劳动下沉", en: "absorbs routine work" },
      { a: "提示词", b: "AI 助手", zh: "任务四要素", en: "four-element brief" },
      { a: "上下文窗口", b: "AI 助手", zh: "一次能看多少", en: "bounds what it sees" },
      { a: "AI 幻觉", b: "AI 助手", zh: "不可指认即可疑", en: "untraceable = suspect" }
    ]
  }
};
