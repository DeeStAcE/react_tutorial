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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function MathQuestionGame() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(10),
    _useState2 = _slicedToArray(_useState, 2),
    timeLeft = _useState2[0],
    setTimeLeft = _useState2[1];
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, number1, " ", typeOfEquation, " ", number2, " ="), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, timeLeft));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MathQuestionGame);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("eabaf254be2003e23c1d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lNDAyMTMwNTNmYzM3YjdjZjYxYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUVqRCxTQUFTRyxnQkFBZ0JBLENBQUEsRUFBRztFQUN4QixJQUFBQyxTQUFBLEdBQWdDSCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBSSxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUFyQ0csUUFBUSxHQUFBRixVQUFBO0lBQUVHLFdBQVcsR0FBQUgsVUFBQTtFQUM1QixJQUFNSSxlQUFlLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztFQUN2QyxJQUFNQyxjQUFjLEdBQUdELGVBQWUsQ0FBQ0UsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsR0FBR0osZUFBZSxDQUFDSyxNQUFNLENBQUMsQ0FBQztFQUMxRixJQUFNQyxPQUFPLEdBQUdKLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztFQUN4RCxJQUFNRyxPQUFPLEdBQUdMLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztFQUN4RCxJQUFJSSxNQUFNLEdBQUcsQ0FBQztFQUVkLFFBQVFQLGNBQWM7SUFDbEIsS0FBSyxHQUFHO01BQ0pPLE1BQU0sR0FBR0YsT0FBTyxHQUFHQyxPQUFPO01BQzFCO0lBQ0osS0FBSyxHQUFHO01BQ0pDLE1BQU0sR0FBR0YsT0FBTyxHQUFHQyxPQUFPO01BQzFCO0lBQ0osS0FBSyxHQUFHO01BQ0pDLE1BQU0sR0FBR0YsT0FBTyxHQUFHQyxPQUFPO01BQzFCO0VBQ1I7RUFJQSxvQkFDSWhCLDBEQUFBLDJCQUNJQSwwREFBQSxhQUFLZSxPQUFPLEVBQUMsR0FBQyxFQUFDTCxjQUFjLEVBQUMsR0FBQyxFQUFDTSxPQUFPLEVBQUMsSUFBTSxDQUFDLGVBQy9DaEIsMERBQUEsWUFFSyxDQUFDLGVBQ05BLDBEQUFBLGFBQUtPLFFBQWEsQ0FDakIsQ0FBQztBQUVkO0FBRUEsaUVBQWVKLGdCQUFnQjs7Ozs7Ozs7VUNuQy9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDhfRHppZW5fMTItMTQvMDJfWmFkYW5pYV9wb2RzdW1vd3VqYWNlLzAyX1phZGFuaWVfMi9qcy9NYXRoUXVlc3Rpb25HYW1lLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIE1hdGhRdWVzdGlvbkdhbWUoKSB7XG4gICAgY29uc3QgW3RpbWVMZWZ0LCBzZXRUaW1lTGVmdF0gPSB1c2VTdGF0ZSgxMClcbiAgICBjb25zdCBhcnJheU9mRXF1YXRpb24gPSBbXCIrXCIsIFwiLVwiLCBcIipcIl1cbiAgICBjb25zdCB0eXBlT2ZFcXVhdGlvbiA9IGFycmF5T2ZFcXVhdGlvbltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnJheU9mRXF1YXRpb24ubGVuZ3RoKV1cbiAgICBjb25zdCBudW1iZXIxID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwIC0gMSkgKyAxKVxuICAgIGNvbnN0IG51bWJlcjIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAgLSAxKSArIDEpXG4gICAgbGV0IHJlc3VsdCA9IDBcblxuICAgIHN3aXRjaCAodHlwZU9mRXF1YXRpb24pIHtcbiAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICByZXN1bHQgPSBudW1iZXIxICsgbnVtYmVyMlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgICAgcmVzdWx0ID0gbnVtYmVyMSAtIG51bWJlcjJcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICcqJzpcbiAgICAgICAgICAgIHJlc3VsdCA9IG51bWJlcjEgKiBudW1iZXIyXG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+e251bWJlcjF9IHt0eXBlT2ZFcXVhdGlvbn0ge251bWJlcjJ9ID08L2gxPlxuICAgICAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aDM+e3RpbWVMZWZ0fTwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWF0aFF1ZXN0aW9uR2FtZSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImVhYmFmMjU0YmUyMDAzZTIzYzFkXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJNYXRoUXVlc3Rpb25HYW1lIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwidGltZUxlZnQiLCJzZXRUaW1lTGVmdCIsImFycmF5T2ZFcXVhdGlvbiIsInR5cGVPZkVxdWF0aW9uIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwibnVtYmVyMSIsIm51bWJlcjIiLCJyZXN1bHQiLCJjcmVhdGVFbGVtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==