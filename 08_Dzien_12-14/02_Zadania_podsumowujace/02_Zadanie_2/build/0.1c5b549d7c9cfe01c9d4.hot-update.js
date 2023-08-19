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
    var wrongAnswers = [];
    while (wrongAnswers.length < 3) {
      var randomWrongAnswer = Math.floor(Math.random() * (10 - 1) + 1);
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
      clearInterval(myInterval);
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
  function handleClick() {}
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, num1, " ", operation, " ", num2, " ="), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, buttons.map(function (value, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      key: index,
      onClick: handleClick,
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
/******/ 	__webpack_require__.h = () => ("b79bc32a4530f6260822")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xYzViNTQ5ZDdjOWNmZTAxYzlkNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUVqRCxTQUFTRyxnQkFBZ0JBLENBQUEsRUFBRztFQUN4QixJQUFBQyxTQUFBLEdBQWdDSCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBSSxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUFyQ0csUUFBUSxHQUFBRixVQUFBO0lBQUVHLFdBQVcsR0FBQUgsVUFBQTtFQUM1QixJQUFBSSxVQUFBLEdBQWtDUiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBUyxVQUFBLEdBQUFKLGNBQUEsQ0FBQUcsVUFBQTtJQUF2Q0UsU0FBUyxHQUFBRCxVQUFBO0lBQUVFLFlBQVksR0FBQUYsVUFBQTtFQUM5QixJQUFBRyxVQUFBLEdBQXdCWiwrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUFBYSxVQUFBLEdBQUFSLGNBQUEsQ0FBQU8sVUFBQTtJQUE1QkUsSUFBSSxHQUFBRCxVQUFBO0lBQUVFLE9BQU8sR0FBQUYsVUFBQTtFQUNwQixJQUFBRyxVQUFBLEdBQXdCaEIsK0NBQVEsQ0FBQyxDQUFDLENBQUM7SUFBQWlCLFVBQUEsR0FBQVosY0FBQSxDQUFBVyxVQUFBO0lBQTVCRSxJQUFJLEdBQUFELFVBQUE7SUFBRUUsT0FBTyxHQUFBRixVQUFBO0VBQ3BCLElBQUFHLFVBQUEsR0FBNEJwQiwrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUFBcUIsV0FBQSxHQUFBaEIsY0FBQSxDQUFBZSxVQUFBO0lBQWhDRSxNQUFNLEdBQUFELFdBQUE7SUFBRUUsU0FBUyxHQUFBRixXQUFBO0VBQ3hCLElBQUFHLFdBQUEsR0FBOEJ4QiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBeUIsV0FBQSxHQUFBcEIsY0FBQSxDQUFBbUIsV0FBQTtJQUFuQ0UsT0FBTyxHQUFBRCxXQUFBO0lBQUVFLFVBQVUsR0FBQUYsV0FBQTtFQUMxQixJQUFBRyxXQUFBLEdBQThCNUIsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQTZCLFdBQUEsR0FBQXhCLGNBQUEsQ0FBQXVCLFdBQUE7SUFBbkNFLE9BQU8sR0FBQUQsV0FBQTtJQUFFRSxVQUFVLEdBQUFGLFdBQUE7RUFDMUIsSUFBQUcsV0FBQSxHQUFnQ2hDLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQUFpQyxXQUFBLEdBQUE1QixjQUFBLENBQUEyQixXQUFBO0lBQXhDRSxRQUFRLEdBQUFELFdBQUE7SUFBRUUsV0FBVyxHQUFBRixXQUFBO0VBRTVCaEMsZ0RBQVMsQ0FBQyxZQUFNO0lBQ1osSUFBTW1DLGVBQWUsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQ3ZDLElBQU1DLGNBQWMsR0FBR0QsZUFBZSxDQUFDRSxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxHQUFHSixlQUFlLENBQUNLLE1BQU0sQ0FBQyxDQUFDO0lBQzFGLElBQU1DLE9BQU8sR0FBR0osSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hELElBQU1HLE9BQU8sR0FBR0wsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRXhEekIsT0FBTyxDQUFDMkIsT0FBTyxDQUFDO0lBQ2hCdkIsT0FBTyxDQUFDd0IsT0FBTyxDQUFDO0lBQ2hCaEMsWUFBWSxDQUFDMEIsY0FBYyxDQUFDO0lBRTVCLFFBQVFBLGNBQWM7TUFDbEIsS0FBSyxHQUFHO1FBQ0pkLFNBQVMsQ0FBQ21CLE9BQU8sR0FBR0MsT0FBTyxDQUFDO1FBQzVCO01BQ0osS0FBSyxHQUFHO1FBQ0pwQixTQUFTLENBQUNtQixPQUFPLEdBQUdDLE9BQU8sQ0FBQztRQUM1QjtNQUNKLEtBQUssR0FBRztRQUNKcEIsU0FBUyxDQUFDbUIsT0FBTyxHQUFHQyxPQUFPLENBQUM7UUFDNUI7SUFDUjtJQUVBLElBQU1DLFlBQVksR0FBRyxFQUFFO0lBQ3ZCLE9BQU9BLFlBQVksQ0FBQ0gsTUFBTSxHQUFHLENBQUMsRUFBRTtNQUM1QixJQUFNSSxpQkFBaUIsR0FBR1AsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO01BQ2xFLElBQUlLLGlCQUFpQixLQUFLdkIsTUFBTSxJQUFJLENBQUNzQixZQUFZLENBQUNFLFFBQVEsQ0FBQ0QsaUJBQWlCLENBQUMsRUFBRTtRQUMzRUQsWUFBWSxDQUFDRyxJQUFJLENBQUNGLGlCQUFpQixDQUFDO01BQ3hDO0lBQ0o7SUFFQSxJQUFNRyxVQUFVLE1BQUFDLE1BQUEsQ0FBT0wsWUFBWSxHQUFFdEIsTUFBTSxFQUFDO0lBQzVDNEIsT0FBTyxDQUFDRixVQUFVLENBQUM7SUFDbkJyQixVQUFVLENBQUNxQixVQUFVLENBQUM7SUFFdEIsSUFBTUcsVUFBVSxHQUFHQyxXQUFXLENBQUMsWUFBTTtNQUNqQzdDLFdBQVcsQ0FBQyxVQUFBOEMsUUFBUTtRQUFBLE9BQUlBLFFBQVEsR0FBRyxDQUFDO01BQUEsRUFBQztJQUN6QyxDQUFDLEVBQUUsSUFBSSxDQUFDO0lBRVIsT0FBTyxZQUFNO01BQ1RDLGFBQWEsQ0FBQ0gsVUFBVSxDQUFDO0lBQzdCLENBQUM7RUFDTCxDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU5sRCxnREFBUyxDQUFDLFlBQU07SUFDWixJQUFJSyxRQUFRLElBQUksQ0FBQyxFQUFFO01BQ2ZnRCxhQUFhLENBQUNILFVBQVUsQ0FBQztNQUN6QmhCLFdBQVcsQ0FBQyxJQUFJLENBQUM7TUFDakJKLFVBQVUsQ0FBQyxhQUFhLENBQUM7SUFDN0I7RUFDSixDQUFDLEVBQUUsQ0FBQ3pCLFFBQVEsQ0FBQyxDQUFDO0VBRWQsU0FBUzRDLE9BQU9BLENBQUNLLENBQUMsRUFBRTtJQUNoQixLQUFLLElBQUlDLENBQUMsR0FBR0QsQ0FBQyxDQUFDZCxNQUFNLEVBQUVlLENBQUMsRUFBRUEsQ0FBQyxFQUFFLEVBQUU7TUFDM0IsSUFBSUMsQ0FBQyxHQUFHbkIsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsR0FBR2dCLENBQUMsQ0FBQztNQUFDLElBQUFFLElBQUEsR0FDbkIsQ0FBQ0gsQ0FBQyxDQUFDRSxDQUFDLENBQUMsRUFBRUYsQ0FBQyxDQUFDQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7TUFBbENELENBQUMsQ0FBQ0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFBRSxJQUFBO01BQUVILENBQUMsQ0FBQ0UsQ0FBQyxDQUFDLEdBQUFDLElBQUE7SUFDbkI7RUFDSjtFQUVBLFNBQVNDLFdBQVdBLENBQUEsRUFBRyxDQUV2QjtFQUVBLG9CQUNJNUQsMERBQUEsMkJBQ0lBLDBEQUFBLGFBQUtlLElBQUksRUFBQyxHQUFDLEVBQUNKLFNBQVMsRUFBQyxHQUFDLEVBQUNRLElBQUksRUFBQyxJQUFNLENBQUMsZUFDcENuQiwwREFBQSxjQUNLMkIsT0FBTyxDQUFDbUMsR0FBRyxDQUFDLFVBQUNDLEtBQUssRUFBRUMsS0FBSyxFQUFLO0lBQzNCLG9CQUNJaEUsMERBQUE7TUFBUWlFLEdBQUcsRUFBRUQsS0FBTTtNQUFDRSxPQUFPLEVBQUVOLFdBQVk7TUFBQ08sUUFBUSxFQUFFaEM7SUFBUyxHQUN4RDRCLEtBQ0csQ0FBQztFQUVqQixDQUFDLENBQ0EsQ0FBQyxlQUNOL0QsMERBQUEsYUFBS21DLFFBQVEsR0FBR0osT0FBTyxTQUFBbUIsTUFBQSxDQUFTM0MsUUFBUSxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxFQUFBMkMsTUFBQSxDQUFHM0MsUUFBUSxDQUFPLENBQ3pFLENBQUM7QUFFZDtBQUVBLGlFQUFlSixnQkFBZ0I7Ozs7Ozs7O1VDM0YvQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA4X0R6aWVuXzEyLTE0LzAyX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wMl9aYWRhbmllXzIvanMvTWF0aFF1ZXN0aW9uR2FtZS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBNYXRoUXVlc3Rpb25HYW1lKCkge1xuICAgIGNvbnN0IFt0aW1lTGVmdCwgc2V0VGltZUxlZnRdID0gdXNlU3RhdGUoMTApXG4gICAgY29uc3QgW29wZXJhdGlvbiwgc2V0T3BlcmF0aW9uXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbbnVtMSwgc2V0TnVtMV0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbbnVtMiwgc2V0TnVtMl0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW2J1dHRvbnMsIHNldEJ1dHRvbnNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZ2FtZU92ZXIsIHNldEdhbWVPdmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFycmF5T2ZFcXVhdGlvbiA9IFtcIitcIiwgXCItXCIsIFwiKlwiXVxuICAgICAgICBjb25zdCB0eXBlT2ZFcXVhdGlvbiA9IGFycmF5T2ZFcXVhdGlvbltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnJheU9mRXF1YXRpb24ubGVuZ3RoKV1cbiAgICAgICAgY29uc3QgbnVtYmVyMSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMCAtIDEpICsgMSlcbiAgICAgICAgY29uc3QgbnVtYmVyMiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMCAtIDEpICsgMSlcblxuICAgICAgICBzZXROdW0xKG51bWJlcjEpXG4gICAgICAgIHNldE51bTIobnVtYmVyMilcbiAgICAgICAgc2V0T3BlcmF0aW9uKHR5cGVPZkVxdWF0aW9uKVxuXG4gICAgICAgIHN3aXRjaCAodHlwZU9mRXF1YXRpb24pIHtcbiAgICAgICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgICAgICAgIHNldFJlc3VsdChudW1iZXIxICsgbnVtYmVyMilcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgICAgICAgIHNldFJlc3VsdChudW1iZXIxIC0gbnVtYmVyMilcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJyonOlxuICAgICAgICAgICAgICAgIHNldFJlc3VsdChudW1iZXIxICogbnVtYmVyMilcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdyb25nQW5zd2VycyA9IFtdXG4gICAgICAgIHdoaWxlICh3cm9uZ0Fuc3dlcnMubGVuZ3RoIDwgMykge1xuICAgICAgICAgICAgY29uc3QgcmFuZG9tV3JvbmdBbnN3ZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAgLSAxKSArIDEpXG4gICAgICAgICAgICBpZiAocmFuZG9tV3JvbmdBbnN3ZXIgIT09IHJlc3VsdCAmJiAhd3JvbmdBbnN3ZXJzLmluY2x1ZGVzKHJhbmRvbVdyb25nQW5zd2VyKSkge1xuICAgICAgICAgICAgICAgIHdyb25nQW5zd2Vycy5wdXNoKHJhbmRvbVdyb25nQW5zd2VyKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWxsQW5zd2VycyA9IFsuLi53cm9uZ0Fuc3dlcnMsIHJlc3VsdF1cbiAgICAgICAgc2h1ZmZsZShhbGxBbnN3ZXJzKVxuICAgICAgICBzZXRCdXR0b25zKGFsbEFuc3dlcnMpXG5cbiAgICAgICAgY29uc3QgbXlJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVMZWZ0KHByZXZUaW1lID0+IHByZXZUaW1lIC0gMSlcbiAgICAgICAgfSwgMTAwMClcblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChteUludGVydmFsKVxuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHRpbWVMZWZ0IDw9IDApIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwobXlJbnRlcnZhbClcbiAgICAgICAgICAgIHNldEdhbWVPdmVyKHRydWUpXG4gICAgICAgICAgICBzZXRNZXNzYWdlKFwiQ3phcyBtaW7EhcWCIVwiKVxuICAgICAgICB9XG4gICAgfSwgW3RpbWVMZWZ0XSk7XG5cbiAgICBmdW5jdGlvbiBzaHVmZmxlKGEpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IGEubGVuZ3RoOyBpOyBpLS0pIHtcbiAgICAgICAgICAgIGxldCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaSk7XG4gICAgICAgICAgICBbYVtpIC0gMV0sIGFbal1dID0gW2Fbal0sIGFbaSAtIDFdXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT57bnVtMX0ge29wZXJhdGlvbn0ge251bTJ9ID08L2gxPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7YnV0dG9ucy5tYXAoKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9e2luZGV4fSBvbkNsaWNrPXtoYW5kbGVDbGlja30gZGlzYWJsZWQ9e2dhbWVPdmVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aDM+e2dhbWVPdmVyID8gbWVzc2FnZSA6IGAwMDoke3RpbWVMZWZ0IDwgMTAgPyBcIjBcIiA6IFwiXCJ9JHt0aW1lTGVmdH1gfTwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWF0aFF1ZXN0aW9uR2FtZSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImI3OWJjMzJhNDUzMGY2MjYwODIyXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJNYXRoUXVlc3Rpb25HYW1lIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwidGltZUxlZnQiLCJzZXRUaW1lTGVmdCIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0Iiwib3BlcmF0aW9uIiwic2V0T3BlcmF0aW9uIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJudW0xIiwic2V0TnVtMSIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwibnVtMiIsInNldE51bTIiLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMTAiLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJfdXNlU3RhdGUxMSIsIl91c2VTdGF0ZTEyIiwiYnV0dG9ucyIsInNldEJ1dHRvbnMiLCJfdXNlU3RhdGUxMyIsIl91c2VTdGF0ZTE0IiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJfdXNlU3RhdGUxNSIsIl91c2VTdGF0ZTE2IiwiZ2FtZU92ZXIiLCJzZXRHYW1lT3ZlciIsImFycmF5T2ZFcXVhdGlvbiIsInR5cGVPZkVxdWF0aW9uIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwibnVtYmVyMSIsIm51bWJlcjIiLCJ3cm9uZ0Fuc3dlcnMiLCJyYW5kb21Xcm9uZ0Fuc3dlciIsImluY2x1ZGVzIiwicHVzaCIsImFsbEFuc3dlcnMiLCJjb25jYXQiLCJzaHVmZmxlIiwibXlJbnRlcnZhbCIsInNldEludGVydmFsIiwicHJldlRpbWUiLCJjbGVhckludGVydmFsIiwiYSIsImkiLCJqIiwiX3JlZiIsImhhbmRsZUNsaWNrIiwiY3JlYXRlRWxlbWVudCIsIm1hcCIsInZhbHVlIiwiaW5kZXgiLCJrZXkiLCJvbkNsaWNrIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9