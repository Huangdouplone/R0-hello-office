/* R0:hello office Service Worker —— 提供离线缓存
 * 制作者 / Creator:    Bilibili 黄豆666 (huangdouplone)
 * 版权所有 / Copyright: (c) 2026 黄豆666 / huangdouplone. All rights reserved.
 * 隶属 / Series:        隶属于拾色造梦企划 EDU 系列
 * 通过 http(s) 托管本目录时自动生效；file:// 直接打开时浏览器会拒绝注册，属正常现象。
 */
const CACHE = "r0-hello-office-v16";
/* ASSETS 必须与 index.html 里 <script src> 的 URL 逐字符一致（含 ?v=N 查询串）：
   缓存以「完整请求 URL」为键，裸文件名匹配不上带查询串的请求，会导致离线时取不到这些资源。 */
const ASSETS = [
  "./", "index.html",
  "office-data.js?v=1", "lang-en.js?v=2", "office-extra-data.js?v=1", "office-deepen-a.js?v=1", "office-deepen-b.js?v=1", "office-expand.js?v=1",
  "office-sw.js", "README.md", "LICENSE.md"
];
self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) {
      return Promise.all(ASSETS.map(function (u) {
        return c.add(u).catch(function () {});
      }));
    }).then(function () { return self.skipWaiting(); })
  );
});
self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (ks) {
      return Promise.all(ks.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});
self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then(function (r) {
      return r || fetch(e.request).then(function (resp) {
        var cp = resp.clone();
        caches.open(CACHE).then(function (c) { c.put(e.request, cp); });
        return resp;
      }).catch(function () { return caches.match("index.html"); });
    })
  );
});
