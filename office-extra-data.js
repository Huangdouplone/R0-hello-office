/* R0:hello office · 扩展包（叠加层）
 * 制作者 / Creator:    Bilibili 黄豆666 (huangdouplone)
 * 版权所有 / Copyright: (c) 2026 黄豆666 / huangdouplone. All rights reserved.
 * 隶属 / Series:        隶属于拾色造梦企划 EDU 系列
 *
 * 叠加层模式：不改 office-data.js，启动期 concat 进对应字段；旧进度键零迁移。
 * ⚠️ 本文件必须加载在 lang-en.js 之后：新增名词/课节后要自己重建标题级英文表。
 */
(function () {
"use strict";

/* ---------- 一、给既有章节补充题目（让「题库抽题」的随机性更足） ---------- */
var EXTRA_QUIZ = {
  c1: [
    { q: "想让整篇文档的正文同时变成 1.5 倍行距，最省事的做法是？", o: ["逐段选中改行距", "修改「正文」样式的段落设置", "用格式刷逐段刷", "全选后按回车"], a: 1, why: "样式是全局开关，改样式即改所有套用它的段落。", type: "choice" },
    { q: "在 Word / WPS 文字里，Ctrl+H 打开的是「查找替换」对话框。", o: ["正确", "错误"], a: 0, why: "Ctrl+F 查找，Ctrl+H 替换。", type: "judge" }
  ],
  c4: [
    { q: "数据透视表建好后修改了源数据，应该？", o: ["重新建一张透视表", "点「刷新」同步", "重启软件", "重新插一遍数据"], a: 1, why: "透视表不会自动跟随源数据，必须刷新。", type: "choice" },
    { q: "想让图表标题表达结论，应该写成？", o: ["销售额", "3 月销售额 128 万，环比 +12%", "Sheet1 图 1", "数据统计"], a: 1, why: "标题应写结论而非字段名，读者一眼就懂。", type: "choice" }
  ],
  c6: [
    { q: "放映中按下 B 键的效果是？", o: ["回到第一页", "黑屏", "打开备注", "结束放映"], a: 1, why: "B 黑屏、W 白屏，常用于把注意力拉回讲述者。", type: "choice" },
    { q: "给页面里所有元素都加上动画，能显著提升演示效果。", o: ["错误", "正确"], a: 0, why: "动画应服务于节奏与视线引导，过量只会拖慢演示。", type: "judge" }
  ],
  c8: [
    { q: "在表格里开关「筛选」的快捷键是？", o: ["Ctrl+F", "Ctrl+Shift+L", "Alt+=", "F4"], a: 1, why: "Ctrl+Shift+L 可快速切换筛选。", type: "choice" },
    { q: "收集同事意见时，只给「评论」权限比给「编辑」权限更合适。", o: ["正确", "错误"], a: 0, why: "评论能满足意见收集，同时避免正文被任意改动。", type: "judge" }
  ]
};

/* ---------- 二、补充名词 ---------- */
var EXTRA_TERMS = [
  { term: "打印设置", term_en: "Print Setup", cat: "文档与格式", short: "纸张、边距、缩放与双面打印等输出设置。", short_en: "Paper, margins, scaling and duplexing for output.",
    detail: ["「缩放到一页」是解决表格零星跑到第二页的常用手段。", "打印前务必用打印预览确认分页位置。"],
    vs: "页面设置管文档本身，打印设置管这次输出。", vs_en: "Page setup changes the document; print setup changes one output." },
  { term: "命名区域", term_en: "Named Range", cat: "数据与表格", short: "给单元格区域起名字，公式里用名字代替地址。", short_en: "A name for a cell range, usable in formulas instead of addresses.",
    detail: ["把「单价表!$B$2:$B$20」写成「单价表」，公式可读性大幅提升。", "名称是绝对引用，天然不受拖动影响。"],
    vs: "命名区域让公式说人话，也让引用天然锁死。", vs_en: "Named ranges make formulas readable and inherently absolute." },
  { term: "排练计时", term_en: "Rehearsal Timing", cat: "呈现与交付", short: "记录每页停留时间，用于校准讲稿长度与自动播放。", short_en: "Records per-slide time to calibrate your script or auto-play.",
    detail: ["能提前发现「内容太多讲不完」。", "展台自动播放依赖排练计时。"],
    vs: "排练计时量的是时间，备注装的是内容。", vs_en: "Rehearsal timing measures minutes; notes carry content." },
  { term: "数字签名", term_en: "Digital Signature", cat: "通用与协作", short: "可验证签署人身份与文件是否被篡改的签名。", short_en: "A signature proving signer identity and document integrity.",
    detail: ["正式签署应使用数字签名或专业电子签平台。", "图片式签名可被任意复制，不具备法律意义上的可靠性。"],
    vs: "图片签名只是好看，数字签名能验真与防篡改。", vs_en: "An image signature is cosmetic; a digital signature verifies and protects." }
];

/* ---------- 三、合并（必须在 lang-en.js 之后执行，故自建标题级英文表） ---------- */
window.OFFICE_CURRICULUM.forEach(function (s) {
  if (EXTRA_QUIZ[s.id]) s.quiz = (s.quiz || []).concat(EXTRA_QUIZ[s.id]);
});
window.OFFICE_TERMS = (window.OFFICE_TERMS || []).concat(EXTRA_TERMS);
/* 重建名词英文表（覆盖 lang-en.js 的初始版本，把新词条也纳入） */
window.OFFICE_TERM_EN = {};
window.OFFICE_TERMS.forEach(function (x) {
  window.OFFICE_TERM_EN[x.term] = { term: x.term_en, short: x.short_en, vs: x.vs_en };
});

})();
