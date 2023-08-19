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
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    operation = _useState4[0],
    setOperation = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState6 = _slicedToArray(_useState5, 2),
    num1 = _useState6[0],
    setNum1 = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState8 = _slicedToArray(_useState7, 2),
    num2 = _useState8[0],
    setNum2 = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState10 = _slicedToArray(_useState9, 2),
    result = _useState10[0],
    setResult = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    buttons = _useState12[0],
    setButtons = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState14 = _slicedToArray(_useState13, 2),
    message = _useState14[0],
    setMessage = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    gameOver = _useState16[0],
    setGameOver = _useState16[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var arrayOfEquation = ["+", "-", "*"];
    var typeOfEquation = arrayOfEquation[Math.floor(Math.random() * arrayOfEquation.length)];
    var number1 = Math.floor(Math.random() * (10 - 1) + 1);
    var number2 = Math.floor(Math.random() * (10 - 1) + 1);
    setNum1(number1);
    setNum2(number2);
    setOperation(typeOfEquation);
    switch (typeOfEquation) {
      case '+':
        setResult(number1 + number2);
        break;
      case '-':
        setResult(number1 - number2);
        break;
      case '*':
        setResult(number1 * number2);
        break;
    }
    var allAnswers = [result];
    shuffle(allAnswers);
    setButtons(allAnswers);
    var myInterval = setInterval(function () {
      if (timeLeft > 0) {
        setTimeLeft(function (prevTime) {
          return prevTime - 1;
        });
      } else {
        clearInterval(myInterval);
        setGameOver(true);
        setMessage("Czas minął!");
      }
    }, 1000);
    return function () {
      clearInterval(myInterval);
    };
  }, []);
  function shuffle(a) {
    for (var i = a.length; i; i--) {
      var j = Math.floor(Math.random() * i);
      var _ref = [a[j], a[i - 1]];
      a[i - 1] = _ref[0];
      a[j] = _ref[1];
    }
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, num1, " ", operation, " ", num2, " ="), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, gameOver ? message : "00:".concat(timeLeft < 10 ? "0" : "").concat(timeLeft)));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MathQuestionGame);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("da7d951f488fb9e63216")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSxFQUFDLEdBQUMsRUFBQ0osU0FBUyxFQUFDLEdBQUMsRUFBQ1EsSUFBSSxFQUFDLElBQU0sQ0FBQyxlQUNwQ25CLDBEQUFBLFlBRUssQ0FBQyxlQUNOQSwwREFBQSxhQUFLbUMsUUFBUSxHQUFHSixPQUFPLFNBQUF5QixNQUFBLENBQVNqRCxRQUFRLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEVBQUFpRCxNQUFBLENBQUdqRCxRQUFRLENBQU8sQ0FDekUsQ0FBQztBQUVkO0FBRUEsaUVBQWVKLGdCQUFnQjs7Ozs7Ozs7VUN2RS9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDhfRHppZW5fMTItMTQvMDJfWmFkYW5pYV9wb2RzdW1vd3VqYWNlLzAyX1phZGFuaWVfMi9qcy9NYXRoUXVlc3Rpb25HYW1lLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIE1hdGhRdWVzdGlvbkdhbWUoKSB7XG4gICAgY29uc3QgW3RpbWVMZWZ0LCBzZXRUaW1lTGVmdF0gPSB1c2VTdGF0ZSgxMClcbiAgICBjb25zdCBbb3BlcmF0aW9uLCBzZXRPcGVyYXRpb25dID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtudW0xLCBzZXROdW0xXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtudW0yLCBzZXROdW0yXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbYnV0dG9ucywgc2V0QnV0dG9uc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtnYW1lT3Zlciwgc2V0R2FtZU92ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgYXJyYXlPZkVxdWF0aW9uID0gW1wiK1wiLCBcIi1cIiwgXCIqXCJdXG4gICAgICAgIGNvbnN0IHR5cGVPZkVxdWF0aW9uID0gYXJyYXlPZkVxdWF0aW9uW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFycmF5T2ZFcXVhdGlvbi5sZW5ndGgpXVxuICAgICAgICBjb25zdCBudW1iZXIxID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwIC0gMSkgKyAxKVxuICAgICAgICBjb25zdCBudW1iZXIyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwIC0gMSkgKyAxKVxuXG4gICAgICAgIHNldE51bTEobnVtYmVyMSlcbiAgICAgICAgc2V0TnVtMihudW1iZXIyKVxuICAgICAgICBzZXRPcGVyYXRpb24odHlwZU9mRXF1YXRpb24pXG5cbiAgICAgICAgc3dpdGNoICh0eXBlT2ZFcXVhdGlvbikge1xuICAgICAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICAgICAgc2V0UmVzdWx0KG51bWJlcjEgKyBudW1iZXIyKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgICAgICAgc2V0UmVzdWx0KG51bWJlcjEgLSBudW1iZXIyKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnKic6XG4gICAgICAgICAgICAgICAgc2V0UmVzdWx0KG51bWJlcjEgKiBudW1iZXIyKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWxsQW5zd2VycyA9IFtyZXN1bHRdXG4gICAgICAgIHNodWZmbGUoYWxsQW5zd2VycylcbiAgICAgICAgc2V0QnV0dG9ucyhhbGxBbnN3ZXJzKVxuXG4gICAgICAgIGNvbnN0IG15SW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGltZUxlZnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZUxlZnQocHJldlRpbWUgPT4gcHJldlRpbWUgLSAxKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKG15SW50ZXJ2YWwpXG4gICAgICAgICAgICAgICAgc2V0R2FtZU92ZXIodHJ1ZSlcbiAgICAgICAgICAgICAgICBzZXRNZXNzYWdlKFwiQ3phcyBtaW7EhcWCIVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDAwKVxuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKG15SW50ZXJ2YWwpXG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG5cbiAgICBmdW5jdGlvbiBzaHVmZmxlKGEpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IGEubGVuZ3RoOyBpOyBpLS0pIHtcbiAgICAgICAgICAgIGxldCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaSk7XG4gICAgICAgICAgICBbYVtpIC0gMV0sIGFbal1dID0gW2Fbal0sIGFbaSAtIDFdXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+e251bTF9IHtvcGVyYXRpb259IHtudW0yfSA9PC9oMT5cbiAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGgzPntnYW1lT3ZlciA/IG1lc3NhZ2UgOiBgMDA6JHt0aW1lTGVmdCA8IDEwID8gXCIwXCIgOiBcIlwifSR7dGltZUxlZnR9YH08L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hdGhRdWVzdGlvbkdhbWUiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkYTdkOTUxZjQ4OGZiOWU2MzIxNlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTWF0aFF1ZXN0aW9uR2FtZSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInRpbWVMZWZ0Iiwic2V0VGltZUxlZnQiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsIm9wZXJhdGlvbiIsInNldE9wZXJhdGlvbiIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwibnVtMSIsInNldE51bTEiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsIm51bTIiLCJzZXROdW0yIiwiX3VzZVN0YXRlOSIsIl91c2VTdGF0ZTEwIiwicmVzdWx0Iiwic2V0UmVzdWx0IiwiX3VzZVN0YXRlMTEiLCJfdXNlU3RhdGUxMiIsImJ1dHRvbnMiLCJzZXRCdXR0b25zIiwiX3VzZVN0YXRlMTMiLCJfdXNlU3RhdGUxNCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiX3VzZVN0YXRlMTUiLCJfdXNlU3RhdGUxNiIsImdhbWVPdmVyIiwic2V0R2FtZU92ZXIiLCJhcnJheU9mRXF1YXRpb24iLCJ0eXBlT2ZFcXVhdGlvbiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsIm51bWJlcjEiLCJudW1iZXIyIiwiYWxsQW5zd2VycyIsInNodWZmbGUiLCJteUludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJwcmV2VGltZSIsImNsZWFySW50ZXJ2YWwiLCJhIiwiaSIsImoiLCJfcmVmIiwiY3JlYXRlRWxlbWVudCIsImNvbmNhdCJdLCJzb3VyY2VSb290IjoiIn0=