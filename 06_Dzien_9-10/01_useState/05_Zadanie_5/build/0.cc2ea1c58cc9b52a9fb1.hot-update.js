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

function Numbers() {
  var originalArray = [54, 76, 24, 63, 4, 54, 82, 36, 13, 80, 10, 69, 4, 23, 40];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(originalArray),
    _useState2 = _slicedToArray(_useState, 2),
    array = _useState2[0],
    setArray = _useState2[1];
  var handleParzyste = function handleParzyste() {
    var newArray = originalArray.filter(function (number) {
      return number % 2 === 0;
    });
    setArray(newArray);
  };
  var handleNieparzyste = function handleNieparzyste() {
    var newArray = originalArray.filter(function (number) {
      return number % 2 !== 0;
    });
    setArray(newArray);
  };
  var handleWszystkie = function handleWszystkie() {
    setArray(originalArray);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleWszystkie
  }, "Poka\u017C wszystkie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleParzyste
  }, "Poka\u017C parzyste"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleNieparzyste
  }, "Poka\u017C nieparzyste"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, array.map(function (number, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: index
    }, number);
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Numbers);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e358e033e3803d6f653b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jYzJlYTFjNThjYzliNTJhOWZiMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUV0QyxTQUFTRSxPQUFPQSxDQUFBLEVBQUc7RUFDZixJQUFNQyxhQUFhLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztFQUNoRixJQUFBQyxTQUFBLEdBQTBCSCwrQ0FBUSxDQUFDRSxhQUFhLENBQUM7SUFBQUUsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBMUNHLEtBQUssR0FBQUYsVUFBQTtJQUFFRyxRQUFRLEdBQUFILFVBQUE7RUFHdEIsSUFBTUksY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFBLEVBQVM7SUFDekIsSUFBTUMsUUFBUSxHQUFHUCxhQUFhLENBQUNRLE1BQU0sQ0FBQyxVQUFBQyxNQUFNO01BQUEsT0FBSUEsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDO0lBQUEsRUFBQztJQUNqRUosUUFBUSxDQUFDRSxRQUFRLENBQUM7RUFDdEIsQ0FBQztFQUVELElBQU1HLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBaUJBLENBQUEsRUFBUztJQUM1QixJQUFNSCxRQUFRLEdBQUdQLGFBQWEsQ0FBQ1EsTUFBTSxDQUFDLFVBQUFDLE1BQU07TUFBQSxPQUFJQSxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUM7SUFBQSxFQUFDO0lBQ2pFSixRQUFRLENBQUNFLFFBQVEsQ0FBQztFQUN0QixDQUFDO0VBRUQsSUFBTUksZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFBLEVBQVM7SUFDMUJOLFFBQVEsQ0FBQ0wsYUFBYSxDQUFDO0VBQzNCLENBQUM7RUFFRCxvQkFDSUgsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBO0lBQVFpQixPQUFPLEVBQUVIO0VBQWdCLEdBQUMsc0JBQXVCLENBQUMsZUFDMURkLDBEQUFBO0lBQVFpQixPQUFPLEVBQUVSO0VBQWUsR0FBQyxxQkFBc0IsQ0FBQyxlQUN4RFQsMERBQUE7SUFBUWlCLE9BQU8sRUFBRUo7RUFBa0IsR0FBQyx3QkFBeUIsQ0FBQyxlQUM5RGIsMERBQUEsYUFDS08sS0FBSyxDQUFDVyxHQUFHLENBQUMsVUFBQ04sTUFBTSxFQUFFTyxLQUFLLEVBQUs7SUFDMUIsb0JBQU9uQiwwREFBQTtNQUFJb0IsR0FBRyxFQUFFRDtJQUFNLEdBQUVQLE1BQVcsQ0FBQztFQUN4QyxDQUFDLENBQ0QsQ0FDTixDQUFDO0FBRVg7QUFFQSxpRUFBZVYsT0FBTzs7Ozs7Ozs7VUNuQ3RCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDZfRHppZW5fOS0xMC8wMV91c2VTdGF0ZS8wNV9aYWRhbmllXzUvanMvTnVtYmVycy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gTnVtYmVycygpIHtcbiAgICBjb25zdCBvcmlnaW5hbEFycmF5ID0gWzU0LCA3NiwgMjQsIDYzLCA0LCA1NCwgODIsIDM2LCAxMywgODAsIDEwLCA2OSwgNCwgMjMsIDQwXVxuICAgIGNvbnN0IFthcnJheSwgc2V0QXJyYXldID0gdXNlU3RhdGUob3JpZ2luYWxBcnJheSlcblxuXG4gICAgY29uc3QgaGFuZGxlUGFyenlzdGUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0FycmF5ID0gb3JpZ2luYWxBcnJheS5maWx0ZXIobnVtYmVyID0+IG51bWJlciAlIDIgPT09IDApXG4gICAgICAgIHNldEFycmF5KG5ld0FycmF5KVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZU5pZXBhcnp5c3RlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdBcnJheSA9IG9yaWdpbmFsQXJyYXkuZmlsdGVyKG51bWJlciA9PiBudW1iZXIgJSAyICE9PSAwKVxuICAgICAgICBzZXRBcnJheShuZXdBcnJheSlcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVXc3p5c3RraWUgPSAoKSA9PiB7XG4gICAgICAgIHNldEFycmF5KG9yaWdpbmFsQXJyYXkpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlV3N6eXN0a2llfT5Qb2thxbwgd3N6eXN0a2llPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVBhcnp5c3RlfT5Qb2thxbwgcGFyenlzdGU8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTmllcGFyenlzdGV9PlBva2HFvCBuaWVwYXJ6eXN0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHthcnJheS5tYXAoKG51bWJlciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2luZGV4fT57bnVtYmVyfTwvbGk+XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlcnMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlMzU4ZTAzM2UzODAzZDZmNjUzYlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTnVtYmVycyIsIm9yaWdpbmFsQXJyYXkiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJhcnJheSIsInNldEFycmF5IiwiaGFuZGxlUGFyenlzdGUiLCJuZXdBcnJheSIsImZpbHRlciIsIm51bWJlciIsImhhbmRsZU5pZXBhcnp5c3RlIiwiaGFuZGxlV3N6eXN0a2llIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50Iiwib25DbGljayIsIm1hcCIsImluZGV4Iiwia2V5Il0sInNvdXJjZVJvb3QiOiIifQ==