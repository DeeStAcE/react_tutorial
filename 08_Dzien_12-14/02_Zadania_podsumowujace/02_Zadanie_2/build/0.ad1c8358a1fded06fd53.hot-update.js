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

  // const result = number1 + typeOfEquation + number2
  var result = {
    number1: number1
  } + {
    typeOfEquation: typeOfEquation
  } + {
    number2: number2
  };
  console.log(result);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MathQuestionGame);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c1465e66f7fab4f49963")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hZDFjODM1OGExZmRlZDA2ZmQ1My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFpRDtBQUVqRCxTQUFTRyxnQkFBZ0JBLENBQUEsRUFBRztFQUN4QixJQUFNQyxlQUFlLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztFQUN2QyxJQUFNQyxjQUFjLEdBQUdELGVBQWUsQ0FBQ0UsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsR0FBR0osZUFBZSxDQUFDSyxNQUFNLENBQUMsQ0FBQztFQUMxRixJQUFNQyxPQUFPLEdBQUdKLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztFQUN4RCxJQUFNRyxPQUFPLEdBQUdMLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7RUFFeEQ7RUFDQSxJQUFNSSxNQUFNLEdBQUc7SUFBQ0YsT0FBTyxFQUFQQTtFQUFPLENBQUMsR0FBRztJQUFDTCxjQUFjLEVBQWRBO0VBQWMsQ0FBQyxHQUFHO0lBQUNNLE9BQU8sRUFBUEE7RUFBTyxDQUFDO0VBQ3ZERSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsTUFBTSxDQUFDO0FBRXZCO0FBRUEsaUVBQWVULGdCQUFnQjs7Ozs7Ozs7VUNkL0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOF9Eemllbl8xMi0xNC8wMl9aYWRhbmlhX3BvZHN1bW93dWphY2UvMDJfWmFkYW5pZV8yL2pzL01hdGhRdWVzdGlvbkdhbWUuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gTWF0aFF1ZXN0aW9uR2FtZSgpIHtcbiAgICBjb25zdCBhcnJheU9mRXF1YXRpb24gPSBbXCIrXCIsIFwiLVwiLCBcIipcIl1cbiAgICBjb25zdCB0eXBlT2ZFcXVhdGlvbiA9IGFycmF5T2ZFcXVhdGlvbltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnJheU9mRXF1YXRpb24ubGVuZ3RoKV1cbiAgICBjb25zdCBudW1iZXIxID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwIC0gMSkgKyAxKVxuICAgIGNvbnN0IG51bWJlcjIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAgLSAxKSArIDEpXG5cbiAgICAvLyBjb25zdCByZXN1bHQgPSBudW1iZXIxICsgdHlwZU9mRXF1YXRpb24gKyBudW1iZXIyXG4gICAgY29uc3QgcmVzdWx0ID0ge251bWJlcjF9ICsge3R5cGVPZkVxdWF0aW9ufSArIHtudW1iZXIyfVxuICAgIGNvbnNvbGUubG9nKHJlc3VsdClcblxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXRoUXVlc3Rpb25HYW1lIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYzE0NjVlNjZmN2ZhYjRmNDk5NjNcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk1hdGhRdWVzdGlvbkdhbWUiLCJhcnJheU9mRXF1YXRpb24iLCJ0eXBlT2ZFcXVhdGlvbiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsIm51bWJlcjEiLCJudW1iZXIyIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=