"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function MathQuestionGame() {
  var arrayOfEquation = ["+", "-", "*"];
  var typeOfEquation = arrayOfEquation[Math.floor(Math.random() * arrayOfEquation.length)];
  var number1 = Math.floor(Math.random() * (10 - 1) + 1);
  var number2 = Math.floor(Math.random() * (10 - 1) + 1);
  var result = 0;
  switch (typeOfEquation) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
  }
  console.log(result);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MathQuestionGame);

/***/ }),

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _MathQuestionGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);



function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MathQuestionGame__WEBPACK_IMPORTED_MODULE_2__["default"], null));
}
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e40213053fc37b7cf61a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44Yzc1OTk0ZGViOTUzYzc4ZTJjOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFpRDtBQUVqRCxTQUFTRyxnQkFBZ0JBLENBQUEsRUFBRztFQUN4QixJQUFNQyxlQUFlLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztFQUN2QyxJQUFNQyxjQUFjLEdBQUdELGVBQWUsQ0FBQ0UsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsR0FBR0osZUFBZSxDQUFDSyxNQUFNLENBQUMsQ0FBQztFQUMxRixJQUFNQyxPQUFPLEdBQUdKLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztFQUN4RCxJQUFNRyxPQUFPLEdBQUdMLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztFQUN4RCxJQUFJSSxNQUFNLEdBQUcsQ0FBQztFQUVkLFFBQVFQLGNBQWM7SUFDbEIsS0FBSyxHQUFHO01BQ0pPLE1BQU0sR0FBR0YsT0FBTyxHQUFHQyxPQUFPO01BQzFCO0lBQ0osS0FBSyxHQUFHO01BQ0pDLE1BQU0sR0FBR0YsT0FBTyxHQUFHQyxPQUFPO01BQzFCO0lBQ0osS0FBSyxHQUFHO01BQ0pDLE1BQU0sR0FBR0YsT0FBTyxHQUFHQyxPQUFPO01BQzFCO0VBQ1I7RUFDQUUsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE1BQU0sQ0FBQztBQUN2QjtBQUlBLGlFQUFlVCxnQkFBZ0I7Ozs7Ozs7Ozs7OztBQ3pCUTtBQUNLO0FBQ0s7QUFFakQsU0FBU2MsR0FBR0EsQ0FBQSxFQUFHO0VBQ1gsb0JBQ0lqQiwwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUEsQ0FBQ0cseURBQWdCLE1BQUMsQ0FDcEIsQ0FBQztBQUVYO0FBRUEsSUFBTWlCLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBR1AsNERBQVUsQ0FBQ0ksU0FBUyxDQUFDO0FBQ2xDRyxJQUFJLENBQUNDLE1BQU0sZUFBQ3hCLDBEQUFBLENBQUNpQixHQUFHLE1BQUMsQ0FBQyxDQUFDOzs7Ozs7OztVQ2RuQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA4X0R6aWVuXzEyLTE0LzAyX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wMl9aYWRhbmllXzIvanMvTWF0aFF1ZXN0aW9uR2FtZS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOF9Eemllbl8xMi0xNC8wMl9aYWRhbmlhX3BvZHN1bW93dWphY2UvMDJfWmFkYW5pZV8yL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBNYXRoUXVlc3Rpb25HYW1lKCkge1xuICAgIGNvbnN0IGFycmF5T2ZFcXVhdGlvbiA9IFtcIitcIiwgXCItXCIsIFwiKlwiXVxuICAgIGNvbnN0IHR5cGVPZkVxdWF0aW9uID0gYXJyYXlPZkVxdWF0aW9uW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFycmF5T2ZFcXVhdGlvbi5sZW5ndGgpXVxuICAgIGNvbnN0IG51bWJlcjEgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAgLSAxKSArIDEpXG4gICAgY29uc3QgbnVtYmVyMiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMCAtIDEpICsgMSlcbiAgICBsZXQgcmVzdWx0ID0gMFxuXG4gICAgc3dpdGNoICh0eXBlT2ZFcXVhdGlvbikge1xuICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICAgIHJlc3VsdCA9IG51bWJlcjEgKyBudW1iZXIyXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgICByZXN1bHQgPSBudW1iZXIxIC0gbnVtYmVyMlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJyonOlxuICAgICAgICAgICAgcmVzdWx0ID0gbnVtYmVyMSAqIG51bWJlcjJcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpXG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBNYXRoUXVlc3Rpb25HYW1lIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCBNYXRoUXVlc3Rpb25HYW1lIGZyb20gXCIuL01hdGhRdWVzdGlvbkdhbWVcIlxuXG5mdW5jdGlvbiBBcHAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxNYXRoUXVlc3Rpb25HYW1lLz5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5yb290LnJlbmRlcig8QXBwLz4pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZTQwMjEzMDUzZmMzN2I3Y2Y2MWFcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk1hdGhRdWVzdGlvbkdhbWUiLCJhcnJheU9mRXF1YXRpb24iLCJ0eXBlT2ZFcXVhdGlvbiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsIm51bWJlcjEiLCJudW1iZXIyIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsIkNvbXBvbmVudCIsImNyZWF0ZVJvb3QiLCJBcHAiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=