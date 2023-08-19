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
  console.log(result);
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
    var wrongAnswers = [];
    while (wrongAnswers.length < 3) {
      var randomWrongAnswer = Math.floor(Math.random() * (10 - 1) + 1);
      if (randomWrongAnswer !== result && !wrongAnswers.includes(randomWrongAnswer)) {
        wrongAnswers.push(randomWrongAnswer);
      }
    }
    console.log(wrongAnswers);
    var allAnswers = [].concat(wrongAnswers, [result]);
    console.log(allAnswers);
    console.log(result);
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
/******/ 	__webpack_require__.h = () => ("e30670338f50419eeada")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxFQUFFLFNBQUFBLFFBQUE7UUFBQSxPQUFNTixXQUFXLENBQUNDLEtBQUssQ0FBQztNQUFBLENBQUM7TUFBQ00sUUFBUSxFQUFFbEM7SUFBUyxHQUNyRTRCLEtBQ0csQ0FBQztFQUVqQixDQUFDLENBQ0EsQ0FBQyxlQUNOL0QsMERBQUEsYUFBS21DLFFBQVEsR0FBR0osT0FBTyxTQUFBcUIsTUFBQSxDQUFTN0MsUUFBUSxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxFQUFBNkMsTUFBQSxDQUFHN0MsUUFBUSxDQUFPLENBQ3pFLENBQUM7QUFFZDtBQUVBLGlFQUFlSixnQkFBZ0I7Ozs7Ozs7O1VDcEcvQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA4X0R6aWVuXzEyLTE0LzAyX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wMl9aYWRhbmllXzIvanMvTWF0aFF1ZXN0aW9uR2FtZS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBNYXRoUXVlc3Rpb25HYW1lKCkge1xuICAgIGNvbnN0IFt0aW1lTGVmdCwgc2V0VGltZUxlZnRdID0gdXNlU3RhdGUoMTApXG4gICAgY29uc3QgW29wZXJhdGlvbiwgc2V0T3BlcmF0aW9uXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbbnVtMSwgc2V0TnVtMV0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbbnVtMiwgc2V0TnVtMl0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW2J1dHRvbnMsIHNldEJ1dHRvbnNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZ2FtZU92ZXIsIHNldEdhbWVPdmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgYXJyYXlPZkVxdWF0aW9uID0gW1wiK1wiLCBcIi1cIiwgXCIqXCJdXG4gICAgICAgIGNvbnN0IHR5cGVPZkVxdWF0aW9uID0gYXJyYXlPZkVxdWF0aW9uW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFycmF5T2ZFcXVhdGlvbi5sZW5ndGgpXVxuICAgICAgICBjb25zdCBudW1iZXIxID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwIC0gMSkgKyAxKVxuICAgICAgICBjb25zdCBudW1iZXIyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwIC0gMSkgKyAxKVxuXG4gICAgICAgIHNldE51bTEobnVtYmVyMSlcbiAgICAgICAgc2V0TnVtMihudW1iZXIyKVxuICAgICAgICBzZXRPcGVyYXRpb24odHlwZU9mRXF1YXRpb24pXG5cbiAgICAgICAgc3dpdGNoICh0eXBlT2ZFcXVhdGlvbikge1xuICAgICAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICAgICAgc2V0UmVzdWx0KG51bWJlcjEgKyBudW1iZXIyKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgICAgICAgc2V0UmVzdWx0KG51bWJlcjEgLSBudW1iZXIyKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnKic6XG4gICAgICAgICAgICAgICAgc2V0UmVzdWx0KG51bWJlcjEgKiBudW1iZXIyKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgd3JvbmdBbnN3ZXJzID0gW11cbiAgICAgICAgd2hpbGUgKHdyb25nQW5zd2Vycy5sZW5ndGggPCAzKSB7XG4gICAgICAgICAgICBjb25zdCByYW5kb21Xcm9uZ0Fuc3dlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMCAtIDEpICsgMSlcbiAgICAgICAgICAgIGlmIChyYW5kb21Xcm9uZ0Fuc3dlciAhPT0gcmVzdWx0ICYmICF3cm9uZ0Fuc3dlcnMuaW5jbHVkZXMocmFuZG9tV3JvbmdBbnN3ZXIpKSB7XG4gICAgICAgICAgICAgICAgd3JvbmdBbnN3ZXJzLnB1c2gocmFuZG9tV3JvbmdBbnN3ZXIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2cod3JvbmdBbnN3ZXJzKVxuXG4gICAgICAgIGNvbnN0IGFsbEFuc3dlcnMgPSBbLi4ud3JvbmdBbnN3ZXJzLCByZXN1bHRdXG4gICAgICAgIGNvbnNvbGUubG9nKGFsbEFuc3dlcnMpXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcbiAgICAgICAgc2h1ZmZsZShhbGxBbnN3ZXJzKVxuICAgICAgICBzZXRCdXR0b25zKGFsbEFuc3dlcnMpXG5cbiAgICAgICAgY29uc3QgbXlJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVMZWZ0KHByZXZUaW1lID0+IHByZXZUaW1lIC0gMSlcbiAgICAgICAgfSwgMTAwMClcblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChteUludGVydmFsKVxuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHRpbWVMZWZ0IDw9IDApIHtcbiAgICAgICAgICAgIHNldEdhbWVPdmVyKHRydWUpXG4gICAgICAgICAgICBzZXRNZXNzYWdlKFwiQ3phcyBtaW7EhcWCIVwiKVxuICAgICAgICB9XG4gICAgfSwgW3RpbWVMZWZ0XSk7XG5cbiAgICBmdW5jdGlvbiBzaHVmZmxlKGEpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IGEubGVuZ3RoOyBpOyBpLS0pIHtcbiAgICAgICAgICAgIGxldCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaSk7XG4gICAgICAgICAgICBbYVtpIC0gMV0sIGFbal1dID0gW2Fbal0sIGFbaSAtIDFdXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKHZhbHVlKSB7XG4gICAgICAgIGlmICghZ2FtZU92ZXIpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgc2V0TWVzc2FnZShcIkdyYXR1bGFjamVcIilcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0TWVzc2FnZShcIkLFgsSZZG5hIG9kcG93aWVkxbogOihcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldEdhbWVPdmVyKHRydWUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPntudW0xfSB7b3BlcmF0aW9ufSB7bnVtMn0gPTwvaDE+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtidXR0b25zLm1hcCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT17aW5kZXh9IG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKHZhbHVlKX0gZGlzYWJsZWQ9e2dhbWVPdmVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aDM+e2dhbWVPdmVyID8gbWVzc2FnZSA6IGAwMDoke3RpbWVMZWZ0IDwgMTAgPyBcIjBcIiA6IFwiXCJ9JHt0aW1lTGVmdH1gfTwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWF0aFF1ZXN0aW9uR2FtZSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImUzMDY3MDMzOGY1MDQxOWVlYWRhXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJNYXRoUXVlc3Rpb25HYW1lIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwidGltZUxlZnQiLCJzZXRUaW1lTGVmdCIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0Iiwib3BlcmF0aW9uIiwic2V0T3BlcmF0aW9uIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJudW0xIiwic2V0TnVtMSIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwibnVtMiIsInNldE51bTIiLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMTAiLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJfdXNlU3RhdGUxMSIsIl91c2VTdGF0ZTEyIiwiYnV0dG9ucyIsInNldEJ1dHRvbnMiLCJfdXNlU3RhdGUxMyIsIl91c2VTdGF0ZTE0IiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJfdXNlU3RhdGUxNSIsIl91c2VTdGF0ZTE2IiwiZ2FtZU92ZXIiLCJzZXRHYW1lT3ZlciIsImNvbnNvbGUiLCJsb2ciLCJhcnJheU9mRXF1YXRpb24iLCJ0eXBlT2ZFcXVhdGlvbiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsIm51bWJlcjEiLCJudW1iZXIyIiwid3JvbmdBbnN3ZXJzIiwicmFuZG9tV3JvbmdBbnN3ZXIiLCJpbmNsdWRlcyIsInB1c2giLCJhbGxBbnN3ZXJzIiwiY29uY2F0Iiwic2h1ZmZsZSIsIm15SW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInByZXZUaW1lIiwiY2xlYXJJbnRlcnZhbCIsImEiLCJpIiwiaiIsIl9yZWYiLCJoYW5kbGVDbGljayIsInZhbHVlIiwiY3JlYXRlRWxlbWVudCIsIm1hcCIsImluZGV4Iiwia2V5Iiwib25DbGljayIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==