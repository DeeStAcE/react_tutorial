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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var myInterval = setInterval(function () {
      setTimeLeft(function (prevTime) {
        return prevTime - 1;
      });
    }, 1000);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, number1, " ", typeOfEquation, " ", number2, " ="), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, timeLeft));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MathQuestionGame);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3cddf9a0079dbcdf11c0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lYWJhZjI1NGJlMjAwM2UyM2MxZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUVqRCxTQUFTRyxnQkFBZ0JBLENBQUEsRUFBRztFQUN4QixJQUFBQyxTQUFBLEdBQWdDSCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBSSxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUFyQ0csUUFBUSxHQUFBRixVQUFBO0lBQUVHLFdBQVcsR0FBQUgsVUFBQTtFQUM1QixJQUFNSSxlQUFlLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztFQUN2QyxJQUFNQyxjQUFjLEdBQUdELGVBQWUsQ0FBQ0UsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsR0FBR0osZUFBZSxDQUFDSyxNQUFNLENBQUMsQ0FBQztFQUMxRixJQUFNQyxPQUFPLEdBQUdKLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztFQUN4RCxJQUFNRyxPQUFPLEdBQUdMLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztFQUN4RCxJQUFJSSxNQUFNLEdBQUcsQ0FBQztFQUVkLFFBQVFQLGNBQWM7SUFDbEIsS0FBSyxHQUFHO01BQ0pPLE1BQU0sR0FBR0YsT0FBTyxHQUFHQyxPQUFPO01BQzFCO0lBQ0osS0FBSyxHQUFHO01BQ0pDLE1BQU0sR0FBR0YsT0FBTyxHQUFHQyxPQUFPO01BQzFCO0lBQ0osS0FBSyxHQUFHO01BQ0pDLE1BQU0sR0FBR0YsT0FBTyxHQUFHQyxPQUFPO01BQzFCO0VBQ1I7RUFFQWQsZ0RBQVMsQ0FBQyxZQUFNO0lBQ1osSUFBTWdCLFVBQVUsR0FBR0MsV0FBVyxDQUFDLFlBQU07TUFDakNYLFdBQVcsQ0FBQyxVQUFBWSxRQUFRO1FBQUEsT0FBSUEsUUFBUSxHQUFHLENBQUM7TUFBQSxFQUFDO0lBQ3pDLENBQUMsRUFBRSxJQUFJLENBQUM7RUFDWixDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU4sb0JBQ0lwQiwwREFBQSwyQkFDSUEsMERBQUEsYUFBS2UsT0FBTyxFQUFDLEdBQUMsRUFBQ0wsY0FBYyxFQUFDLEdBQUMsRUFBQ00sT0FBTyxFQUFDLElBQU0sQ0FBQyxlQUMvQ2hCLDBEQUFBLFlBRUssQ0FBQyxlQUNOQSwwREFBQSxhQUFLTyxRQUFhLENBQ2pCLENBQUM7QUFFZDtBQUVBLGlFQUFlSixnQkFBZ0I7Ozs7Ozs7O1VDdkMvQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA4X0R6aWVuXzEyLTE0LzAyX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wMl9aYWRhbmllXzIvanMvTWF0aFF1ZXN0aW9uR2FtZS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBNYXRoUXVlc3Rpb25HYW1lKCkge1xuICAgIGNvbnN0IFt0aW1lTGVmdCwgc2V0VGltZUxlZnRdID0gdXNlU3RhdGUoMTApXG4gICAgY29uc3QgYXJyYXlPZkVxdWF0aW9uID0gW1wiK1wiLCBcIi1cIiwgXCIqXCJdXG4gICAgY29uc3QgdHlwZU9mRXF1YXRpb24gPSBhcnJheU9mRXF1YXRpb25bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyYXlPZkVxdWF0aW9uLmxlbmd0aCldXG4gICAgY29uc3QgbnVtYmVyMSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMCAtIDEpICsgMSlcbiAgICBjb25zdCBudW1iZXIyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwIC0gMSkgKyAxKVxuICAgIGxldCByZXN1bHQgPSAwXG5cbiAgICBzd2l0Y2ggKHR5cGVPZkVxdWF0aW9uKSB7XG4gICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgICAgcmVzdWx0ID0gbnVtYmVyMSArIG51bWJlcjJcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICAgIHJlc3VsdCA9IG51bWJlcjEgLSBudW1iZXIyXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnKic6XG4gICAgICAgICAgICByZXN1bHQgPSBudW1iZXIxICogbnVtYmVyMlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgbXlJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVMZWZ0KHByZXZUaW1lID0+IHByZXZUaW1lIC0gMSlcbiAgICAgICAgfSwgMTAwMClcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPntudW1iZXIxfSB7dHlwZU9mRXF1YXRpb259IHtudW1iZXIyfSA9PC9oMT5cbiAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGgzPnt0aW1lTGVmdH08L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hdGhRdWVzdGlvbkdhbWUiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzY2RkZjlhMDA3OWRiY2RmMTFjMFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTWF0aFF1ZXN0aW9uR2FtZSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInRpbWVMZWZ0Iiwic2V0VGltZUxlZnQiLCJhcnJheU9mRXF1YXRpb24iLCJ0eXBlT2ZFcXVhdGlvbiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsIm51bWJlcjEiLCJudW1iZXIyIiwicmVzdWx0IiwibXlJbnRlcnZhbCIsInNldEludGVydmFsIiwicHJldlRpbWUiLCJjcmVhdGVFbGVtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==