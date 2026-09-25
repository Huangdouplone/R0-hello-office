# R0:hello office

**R0：从0开始的Office**

> © **制作者 / Creator: Bilibili 黄豆666 (huangdouplone)** · 版权所有 / All rights reserved.
>
> 内容与代码由 **AI 辅助生成 / 组装**；菜单路径与功能名随版本迭代会变，请以你所用软件的实际界面为准。

**Microsoft Office 与 WPS Office 双路线**的办公软件自学课程：Word/文字、Excel/表格、PPT/演示、PDF 四大件，从排版、算数到汇报与交付。同一个概念在两条路线里各给一条**操作路径**，切一下路线就能对照着找菜单。纯静态单文件应用 + 外部数据脚本，无后端、无构建步骤、无第三方运行时依赖。

*A self-study course for office software with two routes — Microsoft Office and WPS Office — covering Word, Excel, PowerPoint and PDF from layout and numbers to delivery. Every lesson carries an operating path for each route. Purely static, dependency-free and offline-capable.*

---

## 中文

### 1. 项目边界

| 维度 | 说明 |
| --- | --- |
| 形态 | 单文件 `index.html`（UI + 全部逻辑）+ 2 个数据 / 英文脚本 + 1 个扩展包 + 1 个 Service Worker |
| 运行 | 双击 `index.html` 即可运行；通过 http(s) 托管时自动启用离线缓存（PWA） |
| 存储 | 全部学习数据存于浏览器 `localStorage`，无服务端、无账号体系 |
| 依赖 | 零外部依赖。不引用任何 CDN、字体、图表库或前端框架，概念图为手写内联 SVG |
| 适配 | PC / 移动端响应式；桌面常驻侧边栏（≥980px），窄屏转为抽屉 + 汉堡按钮 |
| 定位 | 不追求「软件全部功能」的穷举，目标是把**每天都用到的那 20% 讲透、并把重复劳动自动化** |

### 2. 内容规模（实测）

| 指标 | 数值 |
| --- | --- |
| 章节 / 课节 | **8 / 32** |
| 阶段测评题 | **80**（choice 43 · judge 25 · fill 12） |
| 抽题数 | 全站 12 题；**每章另有独立测评**（从该章 9~11 题的题库里抽 4 题） |
| 动手实战 | **8**（每章 1 个） |
| 名词库 | **52 条**（分 4 类：文档与格式 12 / 数据与表格 10 / 呈现与交付 11 / 通用与协作 10），支持搜索 + 默认 9 条折叠 |
| 概念地图 | **26 节点 / 36 关系**，可交互（总图 ↔ 单点聚焦） |
| 端到端工作流 | **8 步** + 一条完整示例（季度经营分析材料） |
| 主页配色风格 | **16 套**（1 套默认 + 15 套星币解锁） |
| 成就徽章 | **15**（含「文档/表格/演示能手」「测评达人」「双路线体验」） |

章节编排：

| 章 | 名称 | 课节 | 题 |
| --- | --- | ---: | ---: |
| c1 | 📄 Word 文字：从输入到排版 | 4 | 11 |
| c2 | 📚 Word 长文档：样式、目录与协作 | 4 | 9 |
| c3 | 📊 Excel 表格与公式 | 4 | 9 |
| c4 | 📈 Excel 分析与可视化 | 4 | 11 |
| c5 | 🖼️ PPT 演示设计基础 | 4 | 9 |
| c6 | 🎬 PPT 演示与交付 | 4 | 11 |
| c7 | 📕 PDF：阅读、编辑与转换 | 4 | 9 |
| c8 | 🔄 办公协作与效率 | 4 | 11 |

课程节奏：**c1–c2 把「文档」做规范**（排版 → 长文档结构）→ **c3–c4 把「数据」算明白**（公式 → 分析可视化）→ **c5–c6 把「汇报」讲清楚**（设计 → 交付）→ **c7–c8 把「交付与协作」收好**（PDF → 权限与效率）。

### 3. 双路线设计（MS Office / WPS Office）

顶栏的路线按钮可在 **Microsoft Office** 与 **WPS Office** 之间切换：

- **概念与要点两条路线共用**（样式就是样式、透视表就是透视表），差别集中在**菜单路径与功能命名**上；
- 每个课节的数据里各写一条 `path.ms` 与 `path.wps`，打开课节时显示**当前路线**的操作路径，并在下方提示另一条路线的对应路径；
- 路线记在 `data.settings.route`，刷新后保持；切换时会同步刷新课程区、侧边栏与顶栏徽标。

> 这样设计的好处是：内容只维护一份，两条路线不会「越更新越不一致」；切换路线只改变「去哪儿点」，不改变「为什么这么做」。

### 4. 技术架构

#### 4.1 加载顺序与脚本职责

`index.html` 依赖 4 个外部脚本按固定顺序注入，数据层与逻辑层严格分离：

```
① office-data.js         课程数据（8 章 32 节 + 题库 + 实战 + 名词 + 工作流 + 概念图拓扑）
② lang-en.js             由 *_en 字段派生标题级英文表（STAGE/LESSON/LAB/TERM/WORKFLOW_EN）
③ office-extra-data.js   扩展包：给既有章节追加题目 / 名词，并**重建**名词英文表
④ office-sw.js           Service Worker 离线缓存
        ↓  启动期合并
内存态：CUR(章节) / LABS / TERMS / WF / CONCEPT_MAP + 五张 *_EN 英文表
        ↓  单向读取
渲染层：applyLang() → renderAll() → renderDash / renderChapters / renderTerms / renderLabs / renderSidebar …
```

关键约定：**章节与概念图容器由 JS 用 `innerHTML` 重建**，因此需要被脚本寻址的 `id` 一律挂在内层容器上，`<h2>` 等外壳留在静态 HTML 中；交互按钮统一走 `data-act` 全局事件委派。

#### 4.2 数据模型

```js
stage = {
  id, icon, name, name_en, desc, desc_en,
  lessons: [{ id, title, title_en, summary[], code, path:{ms,wps}, pit, ex:{q,a} }],
  quiz:    [{ q, o:[选项], a: 正确下标 | 填空答案, why, type: "choice"|"judge"|"fill" }]
}
lab  = { id, t, t_en, req[], starter, hint, xp }
term = { term, term_en, short, short_en, cat, detail[], vs, vs_en }
cmap = { nodes:[{ id, tier }], edges:[{ a, b, zh, en }] }
```

> ⚠️ **填空题的答案写在 `a`（与选择题共用同一字段），不是 `ans`。** 判分与错题记录统一按 `q.ans != null ? q.ans : q.a` 兼容读取。

#### 4.3 题库与抽题算法

- **题型**：`choice`（单选）/ `judge`（判断）/ `fill`（填空）。
- **抽题**：`buildQuiz(scope)` 先对**每种已存在题型各保底抽 1 题**，再随机补足；`scope="all"` 抽 12 题，`scope=<章节 id>` 从该章题库抽 4 题。
- **选项乱序**：为每题生成显示顺序 `perm`，把正确项的新位置记为 `ca`；判分与高亮都比 `ca`，错题本记录的是选项**文本**（与顺序无关）。中文与英文选项共用同一个 `perm`，切换语言不会改变选项顺序。

#### 4.4 国际化（i18n）

- **界面文案**：`t(zh)` —— 中文串即 key，`LANG === "en"` 时查 `I18N_EN` 映射，缺 key 原样返回。
- **标题级内容**：章节名 / 课节标题 / 实战标题 / 名词卡 / 工作流步骤均为双语，由 `lang-en.js` 从 `*_en` 字段派生（单一事实源，不重复抄写）。
- **正文与题目**：中文（与 AGI 站同约定）；课节的 `summary/code/pit/ex` 与题库在 EN 模式下保持中文。

#### 4.5 侧边栏 / 进度 / 版权

- **侧边栏**（对齐系列基准站）：桌面 ≥980px 常驻 264px（`body{padding-left:284px}`），`<980px` 转为抽屉；`body.sbCollapsed` 可收起；右缘可拖拽调宽。
- **进度与激励**：完成进度、XP / 等级、星币、连续打卡、复习队列、错题本、热力图、成就、笔记、日报；主题皮肤仅解锁配色，**不做 pay-to-win**。
- **版权注释**：代码块通过 `crAttr()` 注入 `<span class="cr-attr">`（`display:none`）——**页面不展示、复制随行带走**。

### 5. 运行与部署

```bash
# 本地直接运行
双击 index.html

# 或起一个静态服务（推荐，可验证 PWA 离线缓存）
python -m http.server 8080
```

**部署到 GitHub Pages**：将本目录推送至仓库**根目录**，然后在 *Settings → Pages → Build and deployment → Source* 选择 `Deploy from a branch`、分支 `main`、目录 `/ (root)`。

> 仓库名仅允许字母、数字与 `.` `-` `_`，建议 `R0-hello-office`，把「**R0:hello office**」写进仓库 About。

#### 5.1 仓库简介（可直接粘贴到 GitHub 的 About / Description）

| 字段 | 值 |
| --- | --- |
| About（一行） | `R0:hello office · 从0开始的Office` |
| Description（中文） | Word / Excel / PPT / PDF 四件套的办公软件自学课程，**Microsoft Office 与 WPS 双路线**——同一个概念，两条软件路线各给一条操作路径，点一下路线就能对照着找菜单。8 章 32 节 · 测评 80 题 · 实战 8 个 · 名词库 52 条 · 概念地图 26 节点；纯静态单文件应用，零依赖、可离线。 |
| Description (English) | A self-study course for office software — Word, Excel, PowerPoint and PDF — with a Microsoft Office route and a WPS route: every lesson carries its own ribbon path, so switching shows exactly where to click. 8 chapters / 32 lessons, 80 questions, 8 labs, 52 terms, 26-node concept map. |
| Website | `https://huangdouplone.github.io/R0-hello-office/` |
| Topics | 见文末 [🏷️ Topics](#-topics) |

### 6. 文件清单

| 文件 | 作用 |
| --- | --- |
| `index.html` | 单文件应用：全部 UI、样式、状态与逻辑（含路线切换） |
| `office-data.js` | 课程数据：章节 / 课节 / 题库 / 实战 / 名词 / 工作流 / 概念图 |
| `lang-en.js` | 由 `*_en` 字段派生标题级英文表 |
| `office-extra-data.js` | 扩展包：追加题目与名词，并重建名词英文表 |
| `office-deepen-a.js` / `office-deepen-b.js` | **课程深化层**：把每节从 3 要点扩到 6~7 要点（id 与标题不变，进度零迁移） |
| `office-expand.js` | **深化配套扩展层**：题库 +24 题、概念图 +8 节点/+12 边、词典 +10 条、每节建议时长、+5 成就 |
| `office-sw.js` | Service Worker（离线缓存） |
| `README.md` / `LICENSE.md` | 说明与许可 |

### 7. 已知边界

- **正文与题库为中文**：界面 / 章节 / 课节标题 / 实战标题 / 名词卡均为双语，课节正文与题目在 EN 模式下保持中文（系列已知约定）。
- **菜单路径随版本变化**：MS Office 与 WPS 的菜单项在不同版本里可能被移动或改名，路径给的是**主流版本的常见位置**；找不到时用软件内的功能搜索（如输入「分节符」「数据透视表」）比翻菜单更快。
- Service Worker 在 `file://` 下会被浏览器拒绝注册，属正常现象；经由 http(s) 托管才会真正生效。

---

## English

### 1. Scope

| Aspect | Notes |
| --- | --- |
| Form | Single `index.html` (UI + all logic) + 2 data/i18n scripts + 1 overlay + 1 Service Worker |
| Run | Double-click `index.html`; served over http(s) it enables offline caching (PWA) |
| Storage | All progress in browser `localStorage`; no backend, no accounts |
| Deps | Zero. No CDN, fonts, chart libraries or frameworks |
| Layout | Responsive; persistent 264px sidebar on ≥980px, drawer below |
| Goal | Not an exhaustive feature tour — **master the 20% you use daily and automate the repetition** |

### 2. Scale (measured)

| Metric | Value |
| --- | --- |
| Chapters / lessons | **8 / 32** |
| Quiz questions | **80** (choice 43 · judge 25 · fill 12) |
| Quiz length | 12 site-wide; **plus a per-chapter quiz** drawing 4 from that chapter's bank |
| Hands-on labs | **8** |
| Term library | **52 entries** in 4 categories, with search and a 9-item collapsed default |
| Concept map | **26 nodes / 36 relations**, interactive |
| Workflow | **8 steps** + a quarterly review pack example |
| Themes / achievements | 16 / 15 |

### 3. Two routes

A route button switches between **Microsoft Office** and **WPS Office**. Concepts and key points are shared; the difference lives in the ribbon paths (`path.ms` / `path.wps` per lesson). Opening a lesson shows the current route's path plus a hint for the other one. The choice is persisted in `data.settings.route`.

### 4. Architecture

- **Overlay pattern**: `office-extra-data.js` appends questions and terms at startup without touching `office-data.js`, and rebuilds the derived term EN map (it must load *after* `lang-en.js`).
- **Draw + option shuffle**: `buildQuiz()` guarantees ≥1 question per existing type, draws N, then shuffles each question's options while recording the new correct index.
- **i18n**: `t(zh)` for UI; title-level content derived from `*_en` fields; lesson bodies and quiz items stay Chinese.

### 5. Run & deploy

Open `index.html`, or `python -m http.server 8080` to exercise the PWA. For GitHub Pages, push this folder as the repository **root** (repo name `R0-hello-office`; put `R0:hello office` in the repo *About*).

> ⚠️ SW `ASSETS` must match the `<script src>` URLs **character for character, including `?v=N`**. Bump both the `?v=` and the SW `CACHE` version after changing any cached file.

---

隶属于拾色造梦企划 EDU 系列 · Part of the 「Shise Zaomeng」EDU series
系列其他项目 / Other projects in the series：
- 🌱 [R0:hello world · 从零开始的编程之路](https://huangdouplone.github.io/R0-hello-world/)
- 🔗 [R0:hello agi · 从零开始的 AGI 之路](https://huangdouplone.github.io/R0-hello-agi/)
- 🗂️ [R0:hello agent · 从零开始的大模型](https://huangdouplone.github.io/R0-hello-agent/)

## 🏷️ Topics

`office` · `microsoft-office` · `wps-office` · `word` · `excel` · `powerpoint` · `ppt` · `pdf` · `spreadsheet` · `productivity` · `office-skills` · `document-formatting` · `pivottable` · `slide-master` · `self-study` · `learning-roadmap` · `static-site` · `pwa` · `no-build` · `i18n`
