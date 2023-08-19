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
      setStateText(stateText + "123");
    }, 1000);
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
/******/ 	__webpack_require__.h = () => ("b77ff095430199428f54")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40ZGYwMjY5ZDE5NWNiNWZkOGEyNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDTDtBQUU1QyxTQUFTSSxZQUFZQSxDQUFDQyxLQUFLLEVBQUU7RUFDekIsSUFBQUMsU0FBQSxHQUFrQ0wsK0NBQVEsQ0FBQ0ksS0FBSyxDQUFDRSxJQUFJLENBQUM7SUFBQUMsVUFBQSxHQUFBQyxjQUFBLENBQUFILFNBQUE7SUFBL0NJLFNBQVMsR0FBQUYsVUFBQTtJQUFFRyxZQUFZLEdBQUFILFVBQUE7RUFFOUJOLGdEQUFTLENBQUMsWUFBTTtJQUNaLElBQU1VLFVBQVUsR0FBR0MsV0FBVyxDQUFDLFlBQU07TUFDakNGLFlBQVksQ0FBQ0QsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUNuQyxDQUFDLEVBQUUsSUFBSSxDQUFDO0VBQ1osQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVOLG9CQUNJViwwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUEsQ0FBQ2dCLFFBQVE7SUFBQ0MsSUFBSSxFQUFFUDtFQUFVLENBQUMsQ0FDN0IsQ0FBQztBQUVYO0FBRUEsU0FBU00sUUFBUUEsQ0FBQ1gsS0FBSyxFQUFFO0VBRXJCLG9CQUNJTCwwREFBQSxhQUFLSyxLQUFLLENBQUNZLElBQVMsQ0FBQztBQUU3QjtBQUVBLFNBQVNDLEdBQUdBLENBQUEsRUFBRztFQUNYLG9CQUNJbEIsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBLENBQUNJLFlBQVk7SUFBQ0csSUFBSSxFQUFDO0VBQU8sQ0FBQyxDQUM3QixDQUFDO0FBRVg7QUFFQSxJQUFNWSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUduQiw0REFBVSxDQUFDZ0IsU0FBUyxDQUFDO0FBQ2xDRyxJQUFJLENBQUNDLE1BQU0sZUFBQ3ZCLDBEQUFBLENBQUNrQixHQUFHLE1BQUMsQ0FBQyxDQUFDOzs7Ozs7OztVQ3BDbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOF9Eemllbl8xMi0xNC8wMV91c2VFZmZlY3RfLV9jaWFnX2RhbHN6eV96YWRhbi8wMV9aYWRhbmllXzEvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5cbmZ1bmN0aW9uIFByb3BzVG9TdGF0ZShwcm9wcykge1xuICAgIGNvbnN0IFtzdGF0ZVRleHQsIHNldFN0YXRlVGV4dF0gPSB1c2VTdGF0ZShwcm9wcy50ZXh0KVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgbXlJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHNldFN0YXRlVGV4dChzdGF0ZVRleHQgKyBcIjEyM1wiKVxuICAgICAgICB9LCAxMDAwKVxuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8U2hvd0luZm8gaW5mbz17c3RhdGVUZXh0fS8+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZnVuY3Rpb24gU2hvd0luZm8ocHJvcHMpIHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxoMT57cHJvcHMuaW5mb308L2gxPlxuICAgIClcbn1cblxuZnVuY3Rpb24gQXBwKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8UHJvcHNUb1N0YXRlIHRleHQ9XCJXaXRhbVwiLz5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5yb290LnJlbmRlcig8QXBwLz4pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYjc3ZmYwOTU0MzAxOTk0MjhmNTRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNyZWF0ZVJvb3QiLCJQcm9wc1RvU3RhdGUiLCJwcm9wcyIsIl91c2VTdGF0ZSIsInRleHQiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJzdGF0ZVRleHQiLCJzZXRTdGF0ZVRleHQiLCJteUludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJTaG93SW5mbyIsImluZm8iLCJBcHAiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=