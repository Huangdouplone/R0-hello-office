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

})();
