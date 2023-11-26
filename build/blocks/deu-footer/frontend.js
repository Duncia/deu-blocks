/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!*******************************************!*\
  !*** ./src/blocks/deu-footer/frontend.js ***!
  \*******************************************/
document.addEventListener("DOMContentLoaded", () => {
  const footerYear = document.querySelector("#footerYear");
  const d = new Date();
  function showYear() {
    let yearNow = d.getFullYear();
    footerYear.innerHTML = `${yearNow}`;
  }
  showYear();
});
/******/ })()
;
//# sourceMappingURL=frontend.js.map