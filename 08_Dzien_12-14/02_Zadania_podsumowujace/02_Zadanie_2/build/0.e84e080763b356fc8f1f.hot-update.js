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
    var result = 0;
    setNum1(number1);
    setNum2(number2);
    setOperation(typeOfEquation);
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
    setResult(result);
    var wrongAnswers = [];
    while (wrongAnswers.length < 3) {
      var randomWrongAnswer = Math.floor(Math.random() * 20) + 1;
      if (randomWrongAnswer !== result && !wrongAnswers.includes(randomWrongAnswer)) {
        wrongAnswers.push(randomWrongAnswer);
      }
    }
    var allAnswers = [].concat(wrongAnswers, [result]);
    shuffle(allAnswers);
    setButtons(allAnswers);
    var myInterval = setInterval(function () {
      setTimeLeft(function (prevTime) {
        return prevTime - 1;
      });
    }, 1000);
    return function () {
      clearInterval(myInterval);
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (timeLeft <= 0) {
      setGameOver(true);
      setMessage("Czas minął!");
    }
  }, [timeLeft]);
  function shuffle(a) {
    for (var i = a.length; i; i--) {
      var j = Math.floor(Math.random() * i);
      var _ref = [a[j], a[i - 1]];
      a[i - 1] = _ref[0];
      a[j] = _ref[1];
    }
  }
  function handleClick(value) {
    if (!gameOver) {
      if (value === result) {
        setMessage("Gratulacje");
      } else {
        setMessage("Błędna odpowiedź :(");
      }
      setGameOver(true);
    }
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, num1, " ", operation, " ", num2, " ="), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, buttons.map(function (value, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      key: index,
      onClick: function onClick() {
        return handleClick(value);
      },
      disabled: gameOver
    }, value);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, gameOver ? message : "00:".concat(timeLeft < 10 ? "0" : "").concat(timeLeft)));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MathQuestionGame);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2e0676c60f40e84b34fc")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDBEQUFBLGFBQUttQyxRQUFRLEdBQUdKLE9BQU8sU0FBQW1CLE1BQUEsQ0FBUzNDLFFBQVEsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsRUFBQTJDLE1BQUEsQ0FBRzNDLFFBQVEsQ0FBTyxDQUN6RSxDQUFDO0FBRWQ7QUFFQSxpRUFBZUosZ0JBQWdCOzs7Ozs7OztVQ3BHL0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOF9Eemllbl8xMi0xNC8wMl9aYWRhbmlhX3BvZHN1bW93dWphY2UvMDJfWmFkYW5pZV8yL2pzL01hdGhRdWVzdGlvbkdhbWUuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gTWF0aFF1ZXN0aW9uR2FtZSgpIHtcbiAgICBjb25zdCBbdGltZUxlZnQsIHNldFRpbWVMZWZ0XSA9IHVzZVN0YXRlKDEwKVxuICAgIGNvbnN0IFtvcGVyYXRpb24sIHNldE9wZXJhdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW251bTEsIHNldE51bTFdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW251bTIsIHNldE51bTJdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtidXR0b25zLCBzZXRCdXR0b25zXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2dhbWVPdmVyLCBzZXRHYW1lT3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBhcnJheU9mRXF1YXRpb24gPSBbXCIrXCIsIFwiLVwiLCBcIipcIl1cbiAgICAgICAgY29uc3QgdHlwZU9mRXF1YXRpb24gPSBhcnJheU9mRXF1YXRpb25bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyYXlPZkVxdWF0aW9uLmxlbmd0aCldXG4gICAgICAgIGNvbnN0IG51bWJlcjEgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAgLSAxKSArIDEpXG4gICAgICAgIGNvbnN0IG51bWJlcjIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAgLSAxKSArIDEpXG4gICAgICAgIGxldCByZXN1bHQgPSAwXG5cbiAgICAgICAgc2V0TnVtMShudW1iZXIxKVxuICAgICAgICBzZXROdW0yKG51bWJlcjIpXG4gICAgICAgIHNldE9wZXJhdGlvbih0eXBlT2ZFcXVhdGlvbilcblxuICAgICAgICBzd2l0Y2ggKHR5cGVPZkVxdWF0aW9uKSB7XG4gICAgICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBudW1iZXIxICsgbnVtYmVyMlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbnVtYmVyMSAtIG51bWJlcjJcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJyonOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IG51bWJlcjEgKiBudW1iZXIyXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRSZXN1bHQocmVzdWx0KVxuXG4gICAgICAgIGNvbnN0IHdyb25nQW5zd2VycyA9IFtdXG4gICAgICAgIHdoaWxlICh3cm9uZ0Fuc3dlcnMubGVuZ3RoIDwgMykge1xuICAgICAgICAgICAgY29uc3QgcmFuZG9tV3JvbmdBbnN3ZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyMCkgKyAxO1xuICAgICAgICAgICAgaWYgKHJhbmRvbVdyb25nQW5zd2VyICE9PSByZXN1bHQgJiYgIXdyb25nQW5zd2Vycy5pbmNsdWRlcyhyYW5kb21Xcm9uZ0Fuc3dlcikpIHtcbiAgICAgICAgICAgICAgICB3cm9uZ0Fuc3dlcnMucHVzaChyYW5kb21Xcm9uZ0Fuc3dlcilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFsbEFuc3dlcnMgPSBbLi4ud3JvbmdBbnN3ZXJzLCByZXN1bHRdXG4gICAgICAgIHNodWZmbGUoYWxsQW5zd2VycylcbiAgICAgICAgc2V0QnV0dG9ucyhhbGxBbnN3ZXJzKVxuXG4gICAgICAgIGNvbnN0IG15SW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lTGVmdChwcmV2VGltZSA9PiBwcmV2VGltZSAtIDEpXG4gICAgICAgIH0sIDEwMDApXG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwobXlJbnRlcnZhbClcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICh0aW1lTGVmdCA8PSAwKSB7XG4gICAgICAgICAgICBzZXRHYW1lT3Zlcih0cnVlKVxuICAgICAgICAgICAgc2V0TWVzc2FnZShcIkN6YXMgbWluxIXFgiFcIilcbiAgICAgICAgfVxuICAgIH0sIFt0aW1lTGVmdF0pO1xuXG4gICAgZnVuY3Rpb24gc2h1ZmZsZShhKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBhLmxlbmd0aDsgaTsgaS0tKSB7XG4gICAgICAgICAgICBsZXQgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGkpO1xuICAgICAgICAgICAgW2FbaSAtIDFdLCBhW2pdXSA9IFthW2pdLCBhW2kgLSAxXV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVDbGljayh2YWx1ZSkge1xuICAgICAgICBpZiAoIWdhbWVPdmVyKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHNldE1lc3NhZ2UoXCJHcmF0dWxhY2plXCIpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldE1lc3NhZ2UoXCJCxYLEmWRuYSBvZHBvd2llZMW6IDooXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRHYW1lT3Zlcih0cnVlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT57bnVtMX0ge29wZXJhdGlvbn0ge251bTJ9ID08L2gxPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7YnV0dG9ucy5tYXAoKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9e2luZGV4fSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayh2YWx1ZSl9IGRpc2FibGVkPXtnYW1lT3Zlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGgzPntnYW1lT3ZlciA/IG1lc3NhZ2UgOiBgMDA6JHt0aW1lTGVmdCA8IDEwID8gXCIwXCIgOiBcIlwifSR7dGltZUxlZnR9YH08L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hdGhRdWVzdGlvbkdhbWUiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyZTA2NzZjNjBmNDBlODRiMzRmY1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTWF0aFF1ZXN0aW9uR2FtZSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInRpbWVMZWZ0Iiwic2V0VGltZUxlZnQiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsIm9wZXJhdGlvbiIsInNldE9wZXJhdGlvbiIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwibnVtMSIsInNldE51bTEiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsIm51bTIiLCJzZXROdW0yIiwiX3VzZVN0YXRlOSIsIl91c2VTdGF0ZTEwIiwicmVzdWx0Iiwic2V0UmVzdWx0IiwiX3VzZVN0YXRlMTEiLCJfdXNlU3RhdGUxMiIsImJ1dHRvbnMiLCJzZXRCdXR0b25zIiwiX3VzZVN0YXRlMTMiLCJfdXNlU3RhdGUxNCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiX3VzZVN0YXRlMTUiLCJfdXNlU3RhdGUxNiIsImdhbWVPdmVyIiwic2V0R2FtZU92ZXIiLCJhcnJheU9mRXF1YXRpb24iLCJ0eXBlT2ZFcXVhdGlvbiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsIm51bWJlcjEiLCJudW1iZXIyIiwid3JvbmdBbnN3ZXJzIiwicmFuZG9tV3JvbmdBbnN3ZXIiLCJpbmNsdWRlcyIsInB1c2giLCJhbGxBbnN3ZXJzIiwiY29uY2F0Iiwic2h1ZmZsZSIsIm15SW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInByZXZUaW1lIiwiY2xlYXJJbnRlcnZhbCIsImEiLCJpIiwiaiIsIl9yZWYiLCJoYW5kbGVDbGljayIsInZhbHVlIiwiY3JlYXRlRWxlbWVudCIsIm1hcCIsImluZGV4Iiwia2V5Iiwib25DbGljayIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==