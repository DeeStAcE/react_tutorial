"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function PropsToState(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.text),
    _useState2 = _slicedToArray(_useState, 2),
    stateText = _useState2[0],
    setStateText = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var myInterval = setInterval(function () {
      setStateText(stateText + ".");
    }, 1000);
    return function () {
      clearInterval(myInterval);
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ShowInfo, {
    info: stateText
  }));
}
function ShowInfo(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, props.info);
}
function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PropsToState, {
    text: "Witam"
  }));
}
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1ba81eddb8bec04848c3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lYjllOGVlZWZjNThlM2NlOGUzNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDTDtBQUU1QyxTQUFTSSxZQUFZQSxDQUFDQyxLQUFLLEVBQUU7RUFDekIsSUFBQUMsU0FBQSxHQUFrQ0wsK0NBQVEsQ0FBQ0ksS0FBSyxDQUFDRSxJQUFJLENBQUM7SUFBQUMsVUFBQSxHQUFBQyxjQUFBLENBQUFILFNBQUE7SUFBL0NJLFNBQVMsR0FBQUYsVUFBQTtJQUFFRyxZQUFZLEdBQUFILFVBQUE7RUFFOUJOLGdEQUFTLENBQUMsWUFBTTtJQUNaLElBQU1VLFVBQVUsR0FBR0MsV0FBVyxDQUFDLFlBQU07TUFDakNGLFlBQVksQ0FBQ0QsU0FBUyxHQUFHLEdBQUcsQ0FBQztJQUNqQyxDQUFDLEVBQUUsSUFBSSxDQUFDO0lBRVIsT0FBTyxZQUFNO01BQ1RJLGFBQWEsQ0FBQ0YsVUFBVSxDQUFDO0lBQzdCLENBQUM7RUFDTCxDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU4sb0JBQ0laLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNJQSwwREFBQSxDQUFDaUIsUUFBUTtJQUFDQyxJQUFJLEVBQUVSO0VBQVUsQ0FBQyxDQUM3QixDQUFDO0FBRVg7QUFFQSxTQUFTTyxRQUFRQSxDQUFDWixLQUFLLEVBQUU7RUFFckIsb0JBQ0lMLDBEQUFBLGFBQUtLLEtBQUssQ0FBQ2EsSUFBUyxDQUFDO0FBRTdCO0FBRUEsU0FBU0MsR0FBR0EsQ0FBQSxFQUFHO0VBQ1gsb0JBQ0luQiwwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUEsQ0FBQ0ksWUFBWTtJQUFDRyxJQUFJLEVBQUM7RUFBTyxDQUFDLENBQzdCLENBQUM7QUFFWDtBQUVBLElBQU1hLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBR3BCLDREQUFVLENBQUNpQixTQUFTLENBQUM7QUFDbENHLElBQUksQ0FBQ0MsTUFBTSxlQUFDeEIsMERBQUEsQ0FBQ21CLEdBQUcsTUFBQyxDQUFDLENBQUM7Ozs7Ozs7O1VDeENuQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA4X0R6aWVuXzEyLTE0LzAxX3VzZUVmZmVjdF8tX2NpYWdfZGFsc3p5X3phZGFuLzAxX1phZGFuaWVfMS9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcblxuZnVuY3Rpb24gUHJvcHNUb1N0YXRlKHByb3BzKSB7XG4gICAgY29uc3QgW3N0YXRlVGV4dCwgc2V0U3RhdGVUZXh0XSA9IHVzZVN0YXRlKHByb3BzLnRleHQpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBteUludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgc2V0U3RhdGVUZXh0KHN0YXRlVGV4dCArIFwiLlwiKVxuICAgICAgICB9LCAxMDAwKVxuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKG15SW50ZXJ2YWwpXG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFNob3dJbmZvIGluZm89e3N0YXRlVGV4dH0vPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmZ1bmN0aW9uIFNob3dJbmZvKHByb3BzKSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8aDE+e3Byb3BzLmluZm99PC9oMT5cbiAgICApXG59XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFByb3BzVG9TdGF0ZSB0ZXh0PVwiV2l0YW1cIi8+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xucm9vdC5yZW5kZXIoPEFwcC8+KTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjFiYTgxZWRkYjhiZWMwNDg0OGMzXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjcmVhdGVSb290IiwiUHJvcHNUb1N0YXRlIiwicHJvcHMiLCJfdXNlU3RhdGUiLCJ0ZXh0IiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic3RhdGVUZXh0Iiwic2V0U3RhdGVUZXh0IiwibXlJbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIlNob3dJbmZvIiwiaW5mbyIsIkFwcCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==