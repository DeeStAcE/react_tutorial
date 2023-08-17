"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);


function genNumber() {
  return Math.round(Math.random() * 9 + 1);
}
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
var numA = genNumber();
var numB = genNumber();
var userNum = +prompt("Podaj sum\u0119 liczb: ".concat(numA, " i ").concat(numB));
function checkAnswer() {
  if (numA + numB === userNum) {
    var style = {
      background: 'green'
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: style
    }, "Odpowied\u017A poprawna");
  } else {
    var _style = {
      background: 'red'
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: _style
    }, "Odpowied\u017A b\u0142\u0119dna");
  }
}
root.render(checkAnswer());

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6c5a20aba3d0ab8e28cc")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wNzRjMDU1ZDVhYWUwODg5NjllMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDa0I7QUFFNUMsU0FBU0UsU0FBU0EsQ0FBQSxFQUFHO0VBQ2pCLE9BQU9DLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM1QztBQUVBLElBQU1DLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBR1IsNERBQVUsQ0FBQ0ssU0FBUyxDQUFDO0FBR2xDLElBQU1JLElBQUksR0FBR1IsU0FBUyxDQUFDLENBQUM7QUFDeEIsSUFBTVMsSUFBSSxHQUFHVCxTQUFTLENBQUMsQ0FBQztBQUN4QixJQUFNVSxPQUFPLEdBQUcsQ0FBQ0MsTUFBTSwyQkFBQUMsTUFBQSxDQUFzQkosSUFBSSxTQUFBSSxNQUFBLENBQU1ILElBQUksQ0FBRSxDQUFDO0FBRTlELFNBQVNJLFdBQVdBLENBQUEsRUFBRztFQUNyQixJQUFJTCxJQUFJLEdBQUdDLElBQUksS0FBS0MsT0FBTyxFQUFFO0lBQ3pCLElBQU1JLEtBQUssR0FBRztNQUFDQyxVQUFVLEVBQUU7SUFBTyxDQUFDO0lBQ25DLG9CQUFPakIsMERBQUE7TUFBS2dCLEtBQUssRUFBRUE7SUFBTSxHQUFDLHlCQUF1QixDQUFDO0VBQ3RELENBQUMsTUFBTTtJQUNILElBQU1BLE1BQUssR0FBRztNQUFDQyxVQUFVLEVBQUU7SUFBSyxDQUFDO0lBQ2pDLG9CQUFPakIsMERBQUE7TUFBS2dCLEtBQUssRUFBRUE7SUFBTSxHQUFDLGlDQUFxQixDQUFDO0VBQ3BEO0FBQ0Y7QUFFQVAsSUFBSSxDQUFDVSxNQUFNLENBQUNKLFdBQVcsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7O1VDekIxQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzAyX0R6aWVuXzItMy8wMV9BdHJ5YnV0eV9lbGVtZW50b3cvMDJfWmFkYW5pZV8yL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcblxuZnVuY3Rpb24gZ2VuTnVtYmVyKCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA5ICsgMSk7XG59XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcblxuXG5jb25zdCBudW1BID0gZ2VuTnVtYmVyKCk7XG5jb25zdCBudW1CID0gZ2VuTnVtYmVyKCk7XG5jb25zdCB1c2VyTnVtID0gK3Byb21wdChgUG9kYWogc3VtxJkgbGljemI6ICR7bnVtQX0gaSAke251bUJ9YClcblxuZnVuY3Rpb24gY2hlY2tBbnN3ZXIoKSB7XG4gIGlmIChudW1BICsgbnVtQiA9PT0gdXNlck51bSkge1xuICAgICAgY29uc3Qgc3R5bGUgPSB7YmFja2dyb3VuZDogJ2dyZWVuJ31cbiAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXtzdHlsZX0+T2Rwb3dpZWTFuiBwb3ByYXduYTwvZGl2PlxuICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3R5bGUgPSB7YmFja2dyb3VuZDogJ3JlZCd9XG4gICAgICByZXR1cm4gPGRpdiBzdHlsZT17c3R5bGV9Pk9kcG93aWVkxbogYsWCxJlkbmE8L2Rpdj5cbiAgfVxufVxuXG5yb290LnJlbmRlcihjaGVja0Fuc3dlcigpKTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjZjNWEyMGFiYTNkMGFiOGUyOGNjXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlUm9vdCIsImdlbk51bWJlciIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwibnVtQSIsIm51bUIiLCJ1c2VyTnVtIiwicHJvbXB0IiwiY29uY2F0IiwiY2hlY2tBbnN3ZXIiLCJzdHlsZSIsImJhY2tncm91bmQiLCJjcmVhdGVFbGVtZW50IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==