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
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    buttons = _useState4[0],
    setButtons = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    message = _useState6[0],
    setMessage = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    gameOver = _useState8[0],
    setGameOver = _useState8[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState10 = _slicedToArray(_useState9, 2),
      operation = _useState10[0],
      setOperation = _useState10[1];
    var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState12 = _slicedToArray(_useState11, 2),
      num1 = _useState12[0],
      setNum1 = _useState12[1];
    var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState14 = _slicedToArray(_useState13, 2),
      num2 = _useState14[0],
      setNum2 = _useState14[1];
    var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState16 = _slicedToArray(_useState15, 2),
      result = _useState16[0],
      setResult = _useState16[1];
    var arrayOfEquation = ["+", "-", "*"];
    var typeOfEquation = arrayOfEquation[Math.floor(Math.random() * arrayOfEquation.length)];
    var number1 = Math.floor(Math.random() * (10 - 1) + 1);
    var number2 = Math.floor(Math.random() * (10 - 1) + 1);
    setNum1(number1);
    setNum2(number2);
    console.log(number2);
    console.log(num2);
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
    console.log(result);
    var wrongAnswers = [];
    while (wrongAnswers.length < 3) {
      var randomWrongAnswer = Math.floor(Math.random() * 20) + 1;
      if (randomWrongAnswer !== result && !wrongAnswers.includes(randomWrongAnswer)) {
        wrongAnswers.push(randomWrongAnswer);
      }
    }
    console.log(wrongAnswers);
    var allAnswers = [].concat(wrongAnswers, [result]);
    console.log(allAnswers);
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
/******/ 	__webpack_require__.h = () => ("c01735e3c48a00293dcb")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xN2UwMGU0YTViMDUxNjczMDkzNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUVqRCxTQUFTRyxnQkFBZ0JBLENBQUEsRUFBRztFQUN4QixJQUFBQyxTQUFBLEdBQWdDSCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBSSxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUFyQ0csUUFBUSxHQUFBRixVQUFBO0lBQUVHLFdBQVcsR0FBQUgsVUFBQTtFQUM1QixJQUFBSSxVQUFBLEdBQThCUiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBUyxVQUFBLEdBQUFKLGNBQUEsQ0FBQUcsVUFBQTtJQUFuQ0UsT0FBTyxHQUFBRCxVQUFBO0lBQUVFLFVBQVUsR0FBQUYsVUFBQTtFQUMxQixJQUFBRyxVQUFBLEdBQThCWiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBYSxVQUFBLEdBQUFSLGNBQUEsQ0FBQU8sVUFBQTtJQUFuQ0UsT0FBTyxHQUFBRCxVQUFBO0lBQUVFLFVBQVUsR0FBQUYsVUFBQTtFQUMxQixJQUFBRyxVQUFBLEdBQWdDaEIsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQWlCLFVBQUEsR0FBQVosY0FBQSxDQUFBVyxVQUFBO0lBQXhDRSxRQUFRLEdBQUFELFVBQUE7SUFBRUUsV0FBVyxHQUFBRixVQUFBO0VBRTVCaEIsZ0RBQVMsQ0FBQyxZQUFNO0lBQ1osSUFBQW1CLFVBQUEsR0FBa0NwQiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztNQUFBcUIsV0FBQSxHQUFBaEIsY0FBQSxDQUFBZSxVQUFBO01BQXZDRSxTQUFTLEdBQUFELFdBQUE7TUFBRUUsWUFBWSxHQUFBRixXQUFBO0lBQzlCLElBQUFHLFdBQUEsR0FBd0J4QiwrQ0FBUSxDQUFDLENBQUMsQ0FBQztNQUFBeUIsV0FBQSxHQUFBcEIsY0FBQSxDQUFBbUIsV0FBQTtNQUE1QkUsSUFBSSxHQUFBRCxXQUFBO01BQUVFLE9BQU8sR0FBQUYsV0FBQTtJQUNwQixJQUFBRyxXQUFBLEdBQXdCNUIsK0NBQVEsQ0FBQyxDQUFDLENBQUM7TUFBQTZCLFdBQUEsR0FBQXhCLGNBQUEsQ0FBQXVCLFdBQUE7TUFBNUJFLElBQUksR0FBQUQsV0FBQTtNQUFFRSxPQUFPLEdBQUFGLFdBQUE7SUFDcEIsSUFBQUcsV0FBQSxHQUE0QmhDLCtDQUFRLENBQUMsQ0FBQyxDQUFDO01BQUFpQyxXQUFBLEdBQUE1QixjQUFBLENBQUEyQixXQUFBO01BQWhDRSxNQUFNLEdBQUFELFdBQUE7TUFBRUUsU0FBUyxHQUFBRixXQUFBO0lBQ3hCLElBQU1HLGVBQWUsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQ3ZDLElBQU1DLGNBQWMsR0FBR0QsZUFBZSxDQUFDRSxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxHQUFHSixlQUFlLENBQUNLLE1BQU0sQ0FBQyxDQUFDO0lBQzFGLElBQU1DLE9BQU8sR0FBR0osSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hELElBQU1HLE9BQU8sR0FBR0wsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRXhEYixPQUFPLENBQUNlLE9BQU8sQ0FBQztJQUNoQlgsT0FBTyxDQUFDWSxPQUFPLENBQUM7SUFDaEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixPQUFPLENBQUM7SUFDcEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDZixJQUFJLENBQUM7SUFDakJQLFlBQVksQ0FBQ2MsY0FBYyxDQUFDO0lBRTVCLFFBQVFBLGNBQWM7TUFDbEIsS0FBSyxHQUFHO1FBQ0pGLFNBQVMsQ0FBQ08sT0FBTyxHQUFHQyxPQUFPLENBQUM7UUFDNUI7TUFDSixLQUFLLEdBQUc7UUFDSlIsU0FBUyxDQUFDTyxPQUFPLEdBQUdDLE9BQU8sQ0FBQztRQUM1QjtNQUNKLEtBQUssR0FBRztRQUNKUixTQUFTLENBQUNPLE9BQU8sR0FBR0MsT0FBTyxDQUFDO1FBQzVCO0lBQ1I7SUFDQUMsT0FBTyxDQUFDQyxHQUFHLENBQUNYLE1BQU0sQ0FBQztJQUVuQixJQUFNWSxZQUFZLEdBQUcsRUFBRTtJQUN2QixPQUFPQSxZQUFZLENBQUNMLE1BQU0sR0FBRyxDQUFDLEVBQUU7TUFDNUIsSUFBTU0saUJBQWlCLEdBQUdULElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQztNQUM1RCxJQUFJTyxpQkFBaUIsS0FBS2IsTUFBTSxJQUFJLENBQUNZLFlBQVksQ0FBQ0UsUUFBUSxDQUFDRCxpQkFBaUIsQ0FBQyxFQUFFO1FBQzNFRCxZQUFZLENBQUNHLElBQUksQ0FBQ0YsaUJBQWlCLENBQUM7TUFDeEM7SUFDSjtJQUNBSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsWUFBWSxDQUFDO0lBRXpCLElBQU1JLFVBQVUsTUFBQUMsTUFBQSxDQUFPTCxZQUFZLEdBQUVaLE1BQU0sRUFBQztJQUM1Q1UsT0FBTyxDQUFDQyxHQUFHLENBQUNLLFVBQVUsQ0FBQztJQUN2QkUsT0FBTyxDQUFDRixVQUFVLENBQUM7SUFDbkJ2QyxVQUFVLENBQUN1QyxVQUFVLENBQUM7SUFFdEIsSUFBTUcsVUFBVSxHQUFHQyxXQUFXLENBQUMsWUFBTTtNQUNqQy9DLFdBQVcsQ0FBQyxVQUFBZ0QsUUFBUTtRQUFBLE9BQUlBLFFBQVEsR0FBRyxDQUFDO01BQUEsRUFBQztJQUN6QyxDQUFDLEVBQUUsSUFBSSxDQUFDO0lBRVIsT0FBTyxZQUFNO01BQ1RDLGFBQWEsQ0FBQ0gsVUFBVSxDQUFDO0lBQzdCLENBQUM7RUFDTCxDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU5wRCxnREFBUyxDQUFDLFlBQU07SUFDWixJQUFJSyxRQUFRLElBQUksQ0FBQyxFQUFFO01BQ2ZhLFdBQVcsQ0FBQyxJQUFJLENBQUM7TUFDakJKLFVBQVUsQ0FBQyxhQUFhLENBQUM7SUFDN0I7RUFDSixDQUFDLEVBQUUsQ0FBQ1QsUUFBUSxDQUFDLENBQUM7RUFFZCxTQUFTOEMsT0FBT0EsQ0FBQ0ssQ0FBQyxFQUFFO0lBQ2hCLEtBQUssSUFBSUMsQ0FBQyxHQUFHRCxDQUFDLENBQUNoQixNQUFNLEVBQUVpQixDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFFO01BQzNCLElBQUlDLENBQUMsR0FBR3JCLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLEdBQUdrQixDQUFDLENBQUM7TUFBQyxJQUFBRSxJQUFBLEdBQ25CLENBQUNILENBQUMsQ0FBQ0UsQ0FBQyxDQUFDLEVBQUVGLENBQUMsQ0FBQ0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO01BQWxDRCxDQUFDLENBQUNDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBQUUsSUFBQTtNQUFFSCxDQUFDLENBQUNFLENBQUMsQ0FBQyxHQUFBQyxJQUFBO0lBQ25CO0VBQ0o7RUFFQSxTQUFTQyxXQUFXQSxDQUFDQyxLQUFLLEVBQUU7SUFDeEIsSUFBSSxDQUFDNUMsUUFBUSxFQUFFO01BQ1gsSUFBSTRDLEtBQUssS0FBSzVCLE1BQU0sRUFBRTtRQUNsQm5CLFVBQVUsQ0FBQyxZQUFZLENBQUM7TUFDNUIsQ0FBQyxNQUFNO1FBQ0hBLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQztNQUNyQztNQUNBSSxXQUFXLENBQUMsSUFBSSxDQUFDO0lBQ3JCO0VBQ0o7RUFFQSxvQkFDSXBCLDBEQUFBLDJCQUNJQSwwREFBQSxhQUFLMkIsSUFBSSxFQUFDLEdBQUMsRUFBQ0osU0FBUyxFQUFDLEdBQUMsRUFBQ1EsSUFBSSxFQUFDLElBQU0sQ0FBQyxlQUNwQy9CLDBEQUFBLGNBQ0tXLE9BQU8sQ0FBQ3NELEdBQUcsQ0FBQyxVQUFDRixLQUFLLEVBQUVHLEtBQUssRUFBSztJQUMzQixvQkFDSWxFLDBEQUFBO01BQVFtRSxHQUFHLEVBQUVELEtBQU07TUFBQ0UsT0FBTyxFQUFFLFNBQUFBLFFBQUE7UUFBQSxPQUFNTixXQUFXLENBQUNDLEtBQUssQ0FBQztNQUFBLENBQUM7TUFBQ00sUUFBUSxFQUFFbEQ7SUFBUyxHQUNyRTRDLEtBQ0csQ0FBQztFQUVqQixDQUFDLENBQ0EsQ0FBQyxlQUNOL0QsMERBQUEsYUFBS21CLFFBQVEsR0FBR0osT0FBTyxTQUFBcUMsTUFBQSxDQUFTN0MsUUFBUSxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxFQUFBNkMsTUFBQSxDQUFHN0MsUUFBUSxDQUFPLENBQ3pFLENBQUM7QUFFZDtBQUVBLGlFQUFlSixnQkFBZ0I7Ozs7Ozs7O1VDdEcvQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA4X0R6aWVuXzEyLTE0LzAyX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wMl9aYWRhbmllXzIvanMvTWF0aFF1ZXN0aW9uR2FtZS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBNYXRoUXVlc3Rpb25HYW1lKCkge1xuICAgIGNvbnN0IFt0aW1lTGVmdCwgc2V0VGltZUxlZnRdID0gdXNlU3RhdGUoMTApXG4gICAgY29uc3QgW2J1dHRvbnMsIHNldEJ1dHRvbnNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZ2FtZU92ZXIsIHNldEdhbWVPdmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IFtvcGVyYXRpb24sIHNldE9wZXJhdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgICAgIGNvbnN0IFtudW0xLCBzZXROdW0xXSA9IHVzZVN0YXRlKDApO1xuICAgICAgICBjb25zdCBbbnVtMiwgc2V0TnVtMl0gPSB1c2VTdGF0ZSgwKTtcbiAgICAgICAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKDApO1xuICAgICAgICBjb25zdCBhcnJheU9mRXF1YXRpb24gPSBbXCIrXCIsIFwiLVwiLCBcIipcIl1cbiAgICAgICAgY29uc3QgdHlwZU9mRXF1YXRpb24gPSBhcnJheU9mRXF1YXRpb25bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyYXlPZkVxdWF0aW9uLmxlbmd0aCldXG4gICAgICAgIGNvbnN0IG51bWJlcjEgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAgLSAxKSArIDEpXG4gICAgICAgIGNvbnN0IG51bWJlcjIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAgLSAxKSArIDEpXG5cbiAgICAgICAgc2V0TnVtMShudW1iZXIxKVxuICAgICAgICBzZXROdW0yKG51bWJlcjIpXG4gICAgICAgIGNvbnNvbGUubG9nKG51bWJlcjIpXG4gICAgICAgIGNvbnNvbGUubG9nKG51bTIpXG4gICAgICAgIHNldE9wZXJhdGlvbih0eXBlT2ZFcXVhdGlvbilcblxuICAgICAgICBzd2l0Y2ggKHR5cGVPZkVxdWF0aW9uKSB7XG4gICAgICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICAgICAgICBzZXRSZXN1bHQobnVtYmVyMSArIG51bWJlcjIpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICAgICAgICBzZXRSZXN1bHQobnVtYmVyMSAtIG51bWJlcjIpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICcqJzpcbiAgICAgICAgICAgICAgICBzZXRSZXN1bHQobnVtYmVyMSAqIG51bWJlcjIpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxuXG4gICAgICAgIGNvbnN0IHdyb25nQW5zd2VycyA9IFtdXG4gICAgICAgIHdoaWxlICh3cm9uZ0Fuc3dlcnMubGVuZ3RoIDwgMykge1xuICAgICAgICAgICAgY29uc3QgcmFuZG9tV3JvbmdBbnN3ZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyMCkgKyAxO1xuICAgICAgICAgICAgaWYgKHJhbmRvbVdyb25nQW5zd2VyICE9PSByZXN1bHQgJiYgIXdyb25nQW5zd2Vycy5pbmNsdWRlcyhyYW5kb21Xcm9uZ0Fuc3dlcikpIHtcbiAgICAgICAgICAgICAgICB3cm9uZ0Fuc3dlcnMucHVzaChyYW5kb21Xcm9uZ0Fuc3dlcilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyh3cm9uZ0Fuc3dlcnMpXG5cbiAgICAgICAgY29uc3QgYWxsQW5zd2VycyA9IFsuLi53cm9uZ0Fuc3dlcnMsIHJlc3VsdF1cbiAgICAgICAgY29uc29sZS5sb2coYWxsQW5zd2VycylcbiAgICAgICAgc2h1ZmZsZShhbGxBbnN3ZXJzKVxuICAgICAgICBzZXRCdXR0b25zKGFsbEFuc3dlcnMpXG5cbiAgICAgICAgY29uc3QgbXlJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVMZWZ0KHByZXZUaW1lID0+IHByZXZUaW1lIC0gMSlcbiAgICAgICAgfSwgMTAwMClcblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChteUludGVydmFsKVxuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHRpbWVMZWZ0IDw9IDApIHtcbiAgICAgICAgICAgIHNldEdhbWVPdmVyKHRydWUpXG4gICAgICAgICAgICBzZXRNZXNzYWdlKFwiQ3phcyBtaW7EhcWCIVwiKVxuICAgICAgICB9XG4gICAgfSwgW3RpbWVMZWZ0XSk7XG5cbiAgICBmdW5jdGlvbiBzaHVmZmxlKGEpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IGEubGVuZ3RoOyBpOyBpLS0pIHtcbiAgICAgICAgICAgIGxldCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaSk7XG4gICAgICAgICAgICBbYVtpIC0gMV0sIGFbal1dID0gW2Fbal0sIGFbaSAtIDFdXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKHZhbHVlKSB7XG4gICAgICAgIGlmICghZ2FtZU92ZXIpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgc2V0TWVzc2FnZShcIkdyYXR1bGFjamVcIilcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0TWVzc2FnZShcIkLFgsSZZG5hIG9kcG93aWVkxbogOihcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldEdhbWVPdmVyKHRydWUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPntudW0xfSB7b3BlcmF0aW9ufSB7bnVtMn0gPTwvaDE+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtidXR0b25zLm1hcCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT17aW5kZXh9IG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKHZhbHVlKX0gZGlzYWJsZWQ9e2dhbWVPdmVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aDM+e2dhbWVPdmVyID8gbWVzc2FnZSA6IGAwMDoke3RpbWVMZWZ0IDwgMTAgPyBcIjBcIiA6IFwiXCJ9JHt0aW1lTGVmdH1gfTwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWF0aFF1ZXN0aW9uR2FtZSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImMwMTczNWUzYzQ4YTAwMjkzZGNiXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJNYXRoUXVlc3Rpb25HYW1lIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwidGltZUxlZnQiLCJzZXRUaW1lTGVmdCIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiYnV0dG9ucyIsInNldEJ1dHRvbnMiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiX3VzZVN0YXRlNyIsIl91c2VTdGF0ZTgiLCJnYW1lT3ZlciIsInNldEdhbWVPdmVyIiwiX3VzZVN0YXRlOSIsIl91c2VTdGF0ZTEwIiwib3BlcmF0aW9uIiwic2V0T3BlcmF0aW9uIiwiX3VzZVN0YXRlMTEiLCJfdXNlU3RhdGUxMiIsIm51bTEiLCJzZXROdW0xIiwiX3VzZVN0YXRlMTMiLCJfdXNlU3RhdGUxNCIsIm51bTIiLCJzZXROdW0yIiwiX3VzZVN0YXRlMTUiLCJfdXNlU3RhdGUxNiIsInJlc3VsdCIsInNldFJlc3VsdCIsImFycmF5T2ZFcXVhdGlvbiIsInR5cGVPZkVxdWF0aW9uIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwibnVtYmVyMSIsIm51bWJlcjIiLCJjb25zb2xlIiwibG9nIiwid3JvbmdBbnN3ZXJzIiwicmFuZG9tV3JvbmdBbnN3ZXIiLCJpbmNsdWRlcyIsInB1c2giLCJhbGxBbnN3ZXJzIiwiY29uY2F0Iiwic2h1ZmZsZSIsIm15SW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInByZXZUaW1lIiwiY2xlYXJJbnRlcnZhbCIsImEiLCJpIiwiaiIsIl9yZWYiLCJoYW5kbGVDbGljayIsInZhbHVlIiwiY3JlYXRlRWxlbWVudCIsIm1hcCIsImluZGV4Iiwia2V5Iiwib25DbGljayIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==