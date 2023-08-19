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
/******/ 	__webpack_require__.h = () => ("17e00e4a5b0516730937")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44ODg3ZWVkZGRjMjFhYjk2MzcyZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUVqRCxTQUFTRyxnQkFBZ0JBLENBQUEsRUFBRztFQUN4QixJQUFBQyxTQUFBLEdBQWdDSCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBSSxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUFyQ0csUUFBUSxHQUFBRixVQUFBO0lBQUVHLFdBQVcsR0FBQUgsVUFBQTtFQUM1QixJQUFBSSxVQUFBLEdBQWtDUiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBUyxVQUFBLEdBQUFKLGNBQUEsQ0FBQUcsVUFBQTtJQUF2Q0UsU0FBUyxHQUFBRCxVQUFBO0lBQUVFLFlBQVksR0FBQUYsVUFBQTtFQUM5QixJQUFBRyxVQUFBLEdBQXdCWiwrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUFBYSxVQUFBLEdBQUFSLGNBQUEsQ0FBQU8sVUFBQTtJQUE1QkUsSUFBSSxHQUFBRCxVQUFBO0lBQUVFLE9BQU8sR0FBQUYsVUFBQTtFQUNwQixJQUFBRyxVQUFBLEdBQXdCaEIsK0NBQVEsQ0FBQyxDQUFDLENBQUM7SUFBQWlCLFVBQUEsR0FBQVosY0FBQSxDQUFBVyxVQUFBO0lBQTVCRSxJQUFJLEdBQUFELFVBQUE7SUFBRUUsT0FBTyxHQUFBRixVQUFBO0VBQ3BCLElBQUFHLFVBQUEsR0FBNEJwQiwrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUFBcUIsV0FBQSxHQUFBaEIsY0FBQSxDQUFBZSxVQUFBO0lBQWhDRSxNQUFNLEdBQUFELFdBQUE7SUFBRUUsU0FBUyxHQUFBRixXQUFBO0VBQ3hCLElBQUFHLFdBQUEsR0FBOEJ4QiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBeUIsV0FBQSxHQUFBcEIsY0FBQSxDQUFBbUIsV0FBQTtJQUFuQ0UsT0FBTyxHQUFBRCxXQUFBO0lBQUVFLFVBQVUsR0FBQUYsV0FBQTtFQUMxQixJQUFBRyxXQUFBLEdBQThCNUIsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQTZCLFdBQUEsR0FBQXhCLGNBQUEsQ0FBQXVCLFdBQUE7SUFBbkNFLE9BQU8sR0FBQUQsV0FBQTtJQUFFRSxVQUFVLEdBQUFGLFdBQUE7RUFDMUIsSUFBQUcsV0FBQSxHQUFnQ2hDLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQUFpQyxXQUFBLEdBQUE1QixjQUFBLENBQUEyQixXQUFBO0lBQXhDRSxRQUFRLEdBQUFELFdBQUE7SUFBRUUsV0FBVyxHQUFBRixXQUFBO0VBRTVCaEMsZ0RBQVMsQ0FBQyxZQUFNO0lBQ1osSUFBTW1DLGVBQWUsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQ3ZDLElBQU1DLGNBQWMsR0FBR0QsZUFBZSxDQUFDRSxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxHQUFHSixlQUFlLENBQUNLLE1BQU0sQ0FBQyxDQUFDO0lBQzFGLElBQU1DLE9BQU8sR0FBR0osSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hELElBQU1HLE9BQU8sR0FBR0wsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRXhEekIsT0FBTyxDQUFDMkIsT0FBTyxDQUFDO0lBQ2hCdkIsT0FBTyxDQUFDd0IsT0FBTyxDQUFDO0lBQ2hCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsT0FBTyxDQUFDO0lBQ3BCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQzNCLElBQUksQ0FBQztJQUNqQlAsWUFBWSxDQUFDMEIsY0FBYyxDQUFDO0lBRTVCLFFBQVFBLGNBQWM7TUFDbEIsS0FBSyxHQUFHO1FBQ0pkLFNBQVMsQ0FBQ21CLE9BQU8sR0FBR0MsT0FBTyxDQUFDO1FBQzVCO01BQ0osS0FBSyxHQUFHO1FBQ0pwQixTQUFTLENBQUNtQixPQUFPLEdBQUdDLE9BQU8sQ0FBQztRQUM1QjtNQUNKLEtBQUssR0FBRztRQUNKcEIsU0FBUyxDQUFDbUIsT0FBTyxHQUFHQyxPQUFPLENBQUM7UUFDNUI7SUFDUjtJQUNBQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ3ZCLE1BQU0sQ0FBQztJQUVuQixJQUFNd0IsWUFBWSxHQUFHLEVBQUU7SUFDdkIsT0FBT0EsWUFBWSxDQUFDTCxNQUFNLEdBQUcsQ0FBQyxFQUFFO01BQzVCLElBQU1NLGlCQUFpQixHQUFHVCxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7TUFDNUQsSUFBSU8saUJBQWlCLEtBQUt6QixNQUFNLElBQUksQ0FBQ3dCLFlBQVksQ0FBQ0UsUUFBUSxDQUFDRCxpQkFBaUIsQ0FBQyxFQUFFO1FBQzNFRCxZQUFZLENBQUNHLElBQUksQ0FBQ0YsaUJBQWlCLENBQUM7TUFDeEM7SUFDSjtJQUNBSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsWUFBWSxDQUFDO0lBRXpCLElBQU1JLFVBQVUsTUFBQUMsTUFBQSxDQUFPTCxZQUFZLEdBQUV4QixNQUFNLEVBQUM7SUFDNUNzQixPQUFPLENBQUNDLEdBQUcsQ0FBQ0ssVUFBVSxDQUFDO0lBQ3ZCRSxPQUFPLENBQUNGLFVBQVUsQ0FBQztJQUNuQnZCLFVBQVUsQ0FBQ3VCLFVBQVUsQ0FBQztJQUV0QixJQUFNRyxVQUFVLEdBQUdDLFdBQVcsQ0FBQyxZQUFNO01BQ2pDL0MsV0FBVyxDQUFDLFVBQUFnRCxRQUFRO1FBQUEsT0FBSUEsUUFBUSxHQUFHLENBQUM7TUFBQSxFQUFDO0lBQ3pDLENBQUMsRUFBRSxJQUFJLENBQUM7SUFFUixPQUFPLFlBQU07TUFDVEMsYUFBYSxDQUFDSCxVQUFVLENBQUM7SUFDN0IsQ0FBQztFQUNMLENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTnBELGdEQUFTLENBQUMsWUFBTTtJQUNaLElBQUlLLFFBQVEsSUFBSSxDQUFDLEVBQUU7TUFDZjZCLFdBQVcsQ0FBQyxJQUFJLENBQUM7TUFDakJKLFVBQVUsQ0FBQyxhQUFhLENBQUM7SUFDN0I7RUFDSixDQUFDLEVBQUUsQ0FBQ3pCLFFBQVEsQ0FBQyxDQUFDO0VBRWQsU0FBUzhDLE9BQU9BLENBQUNLLENBQUMsRUFBRTtJQUNoQixLQUFLLElBQUlDLENBQUMsR0FBR0QsQ0FBQyxDQUFDaEIsTUFBTSxFQUFFaUIsQ0FBQyxFQUFFQSxDQUFDLEVBQUUsRUFBRTtNQUMzQixJQUFJQyxDQUFDLEdBQUdyQixJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxHQUFHa0IsQ0FBQyxDQUFDO01BQUMsSUFBQUUsSUFBQSxHQUNuQixDQUFDSCxDQUFDLENBQUNFLENBQUMsQ0FBQyxFQUFFRixDQUFDLENBQUNDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztNQUFsQ0QsQ0FBQyxDQUFDQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUFFLElBQUE7TUFBRUgsQ0FBQyxDQUFDRSxDQUFDLENBQUMsR0FBQUMsSUFBQTtJQUNuQjtFQUNKO0VBRUEsU0FBU0MsV0FBV0EsQ0FBQ0MsS0FBSyxFQUFFO0lBQ3hCLElBQUksQ0FBQzVCLFFBQVEsRUFBRTtNQUNYLElBQUk0QixLQUFLLEtBQUt4QyxNQUFNLEVBQUU7UUFDbEJTLFVBQVUsQ0FBQyxZQUFZLENBQUM7TUFDNUIsQ0FBQyxNQUFNO1FBQ0hBLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQztNQUNyQztNQUNBSSxXQUFXLENBQUMsSUFBSSxDQUFDO0lBQ3JCO0VBQ0o7RUFFQSxvQkFDSXBDLDBEQUFBLDJCQUNJQSwwREFBQSxhQUFLZSxJQUFJLEVBQUMsR0FBQyxFQUFDSixTQUFTLEVBQUMsR0FBQyxFQUFDUSxJQUFJLEVBQUMsSUFBTSxDQUFDLGVBQ3BDbkIsMERBQUEsY0FDSzJCLE9BQU8sQ0FBQ3NDLEdBQUcsQ0FBQyxVQUFDRixLQUFLLEVBQUVHLEtBQUssRUFBSztJQUMzQixvQkFDSWxFLDBEQUFBO01BQVFtRSxHQUFHLEVBQUVELEtBQU07TUFBQ0UsT0FBTyxFQUFFLFNBQUFBLFFBQUE7UUFBQSxPQUFNTixXQUFXLENBQUNDLEtBQUssQ0FBQztNQUFBLENBQUM7TUFBQ00sUUFBUSxFQUFFbEM7SUFBUyxHQUNyRTRCLEtBQ0csQ0FBQztFQUVqQixDQUFDLENBQ0EsQ0FBQyxlQUNOL0QsMERBQUEsYUFBS21DLFFBQVEsR0FBR0osT0FBTyxTQUFBcUIsTUFBQSxDQUFTN0MsUUFBUSxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxFQUFBNkMsTUFBQSxDQUFHN0MsUUFBUSxDQUFPLENBQ3pFLENBQUM7QUFFZDtBQUVBLGlFQUFlSixnQkFBZ0I7Ozs7Ozs7O1VDdEcvQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA4X0R6aWVuXzEyLTE0LzAyX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wMl9aYWRhbmllXzIvanMvTWF0aFF1ZXN0aW9uR2FtZS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBNYXRoUXVlc3Rpb25HYW1lKCkge1xuICAgIGNvbnN0IFt0aW1lTGVmdCwgc2V0VGltZUxlZnRdID0gdXNlU3RhdGUoMTApXG4gICAgY29uc3QgW29wZXJhdGlvbiwgc2V0T3BlcmF0aW9uXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbbnVtMSwgc2V0TnVtMV0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbbnVtMiwgc2V0TnVtMl0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW2J1dHRvbnMsIHNldEJ1dHRvbnNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZ2FtZU92ZXIsIHNldEdhbWVPdmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFycmF5T2ZFcXVhdGlvbiA9IFtcIitcIiwgXCItXCIsIFwiKlwiXVxuICAgICAgICBjb25zdCB0eXBlT2ZFcXVhdGlvbiA9IGFycmF5T2ZFcXVhdGlvbltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnJheU9mRXF1YXRpb24ubGVuZ3RoKV1cbiAgICAgICAgY29uc3QgbnVtYmVyMSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMCAtIDEpICsgMSlcbiAgICAgICAgY29uc3QgbnVtYmVyMiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMCAtIDEpICsgMSlcblxuICAgICAgICBzZXROdW0xKG51bWJlcjEpXG4gICAgICAgIHNldE51bTIobnVtYmVyMilcbiAgICAgICAgY29uc29sZS5sb2cobnVtYmVyMilcbiAgICAgICAgY29uc29sZS5sb2cobnVtMilcbiAgICAgICAgc2V0T3BlcmF0aW9uKHR5cGVPZkVxdWF0aW9uKVxuXG4gICAgICAgIHN3aXRjaCAodHlwZU9mRXF1YXRpb24pIHtcbiAgICAgICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgICAgICAgIHNldFJlc3VsdChudW1iZXIxICsgbnVtYmVyMilcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgICAgICAgIHNldFJlc3VsdChudW1iZXIxIC0gbnVtYmVyMilcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJyonOlxuICAgICAgICAgICAgICAgIHNldFJlc3VsdChudW1iZXIxICogbnVtYmVyMilcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXG5cbiAgICAgICAgY29uc3Qgd3JvbmdBbnN3ZXJzID0gW11cbiAgICAgICAgd2hpbGUgKHdyb25nQW5zd2Vycy5sZW5ndGggPCAzKSB7XG4gICAgICAgICAgICBjb25zdCByYW5kb21Xcm9uZ0Fuc3dlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIwKSArIDE7XG4gICAgICAgICAgICBpZiAocmFuZG9tV3JvbmdBbnN3ZXIgIT09IHJlc3VsdCAmJiAhd3JvbmdBbnN3ZXJzLmluY2x1ZGVzKHJhbmRvbVdyb25nQW5zd2VyKSkge1xuICAgICAgICAgICAgICAgIHdyb25nQW5zd2Vycy5wdXNoKHJhbmRvbVdyb25nQW5zd2VyKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHdyb25nQW5zd2VycylcblxuICAgICAgICBjb25zdCBhbGxBbnN3ZXJzID0gWy4uLndyb25nQW5zd2VycywgcmVzdWx0XVxuICAgICAgICBjb25zb2xlLmxvZyhhbGxBbnN3ZXJzKVxuICAgICAgICBzaHVmZmxlKGFsbEFuc3dlcnMpXG4gICAgICAgIHNldEJ1dHRvbnMoYWxsQW5zd2VycylcblxuICAgICAgICBjb25zdCBteUludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZUxlZnQocHJldlRpbWUgPT4gcHJldlRpbWUgLSAxKVxuICAgICAgICB9LCAxMDAwKVxuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKG15SW50ZXJ2YWwpXG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAodGltZUxlZnQgPD0gMCkge1xuICAgICAgICAgICAgc2V0R2FtZU92ZXIodHJ1ZSlcbiAgICAgICAgICAgIHNldE1lc3NhZ2UoXCJDemFzIG1pbsSFxYIhXCIpXG4gICAgICAgIH1cbiAgICB9LCBbdGltZUxlZnRdKTtcblxuICAgIGZ1bmN0aW9uIHNodWZmbGUoYSkge1xuICAgICAgICBmb3IgKGxldCBpID0gYS5sZW5ndGg7IGk7IGktLSkge1xuICAgICAgICAgICAgbGV0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpKTtcbiAgICAgICAgICAgIFthW2kgLSAxXSwgYVtqXV0gPSBbYVtqXSwgYVtpIC0gMV1dO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2sodmFsdWUpIHtcbiAgICAgICAgaWYgKCFnYW1lT3Zlcikge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBzZXRNZXNzYWdlKFwiR3JhdHVsYWNqZVwiKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRNZXNzYWdlKFwiQsWCxJlkbmEgb2Rwb3dpZWTFuiA6KFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0R2FtZU92ZXIodHJ1ZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+e251bTF9IHtvcGVyYXRpb259IHtudW0yfSA9PC9oMT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge2J1dHRvbnMubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PXtpbmRleH0gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2sodmFsdWUpfSBkaXNhYmxlZD17Z2FtZU92ZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxoMz57Z2FtZU92ZXIgPyBtZXNzYWdlIDogYDAwOiR7dGltZUxlZnQgPCAxMCA/IFwiMFwiIDogXCJcIn0ke3RpbWVMZWZ0fWB9PC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXRoUXVlc3Rpb25HYW1lIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMTdlMDBlNGE1YjA1MTY3MzA5MzdcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk1hdGhRdWVzdGlvbkdhbWUiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJ0aW1lTGVmdCIsInNldFRpbWVMZWZ0IiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJvcGVyYXRpb24iLCJzZXRPcGVyYXRpb24iLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsIm51bTEiLCJzZXROdW0xIiwiX3VzZVN0YXRlNyIsIl91c2VTdGF0ZTgiLCJudW0yIiwic2V0TnVtMiIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUxMCIsInJlc3VsdCIsInNldFJlc3VsdCIsIl91c2VTdGF0ZTExIiwiX3VzZVN0YXRlMTIiLCJidXR0b25zIiwic2V0QnV0dG9ucyIsIl91c2VTdGF0ZTEzIiwiX3VzZVN0YXRlMTQiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsIl91c2VTdGF0ZTE1IiwiX3VzZVN0YXRlMTYiLCJnYW1lT3ZlciIsInNldEdhbWVPdmVyIiwiYXJyYXlPZkVxdWF0aW9uIiwidHlwZU9mRXF1YXRpb24iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJudW1iZXIxIiwibnVtYmVyMiIsImNvbnNvbGUiLCJsb2ciLCJ3cm9uZ0Fuc3dlcnMiLCJyYW5kb21Xcm9uZ0Fuc3dlciIsImluY2x1ZGVzIiwicHVzaCIsImFsbEFuc3dlcnMiLCJjb25jYXQiLCJzaHVmZmxlIiwibXlJbnRlcnZhbCIsInNldEludGVydmFsIiwicHJldlRpbWUiLCJjbGVhckludGVydmFsIiwiYSIsImkiLCJqIiwiX3JlZiIsImhhbmRsZUNsaWNrIiwidmFsdWUiLCJjcmVhdGVFbGVtZW50IiwibWFwIiwiaW5kZXgiLCJrZXkiLCJvbkNsaWNrIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9