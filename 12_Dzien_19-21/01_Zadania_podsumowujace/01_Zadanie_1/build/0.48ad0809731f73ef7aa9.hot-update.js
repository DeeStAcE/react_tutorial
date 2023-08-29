"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function WhoIsPresent() {
  var initialValue = ['Anna Kowalska', 'Jan Kowalski', 'Maciej von Handerburg', 'Jurand ze Spychowa'];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue),
    _useState2 = _slicedToArray(_useState, 2),
    selectFrom = _useState2[0],
    setSelectFrom = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    selected = _useState4[0],
    setSelected = _useState4[1];
  var handleChange = function handleChange(e) {
    setSelected([].concat(_toConsumableArray(selected), [e.target.value]));
    var updatedSelectFrom = initialValue.filter(function (el) {
      return el !== e.target.value;
    });
    setSelectFrom(updatedSelectFrom);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    onChange: handleChange
  }, selectFrom.map(function (el, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      key: index
    }, el);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, selected.map(function (el, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: index
    }, el);
  })));
}
function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(WhoIsPresent, null);
}
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3e419f7ea5e48225cdf1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40OGFkMDgwOTczMWY3M2VmN2FhOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ007QUFFNUMsU0FBU0csWUFBWUEsQ0FBQSxFQUFHO0VBRXBCLElBQU1DLFlBQVksR0FBRyxDQUFDLGVBQWUsRUFBRSxjQUFjLEVBQUUsdUJBQXVCLEVBQUUsb0JBQW9CLENBQUM7RUFFckcsSUFBQUMsU0FBQSxHQUFvQ0osK0NBQVEsQ0FBQ0csWUFBWSxDQUFDO0lBQUFFLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQW5ERyxVQUFVLEdBQUFGLFVBQUE7SUFBRUcsYUFBYSxHQUFBSCxVQUFBO0VBQ2hDLElBQUFJLFVBQUEsR0FBZ0NULCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFVLFVBQUEsR0FBQUosY0FBQSxDQUFBRyxVQUFBO0lBQXJDRSxRQUFRLEdBQUFELFVBQUE7SUFBRUUsV0FBVyxHQUFBRixVQUFBO0VBRTVCLElBQU1HLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFJQyxDQUFDLEVBQUs7SUFDeEJGLFdBQVcsSUFBQUcsTUFBQSxDQUFBQyxrQkFBQSxDQUFLTCxRQUFRLElBQUVHLENBQUMsQ0FBQ0csTUFBTSxDQUFDQyxLQUFLLEVBQUMsQ0FBQztJQUMxQyxJQUFNQyxpQkFBaUIsR0FBR2hCLFlBQVksQ0FBQ2lCLE1BQU0sQ0FBQyxVQUFBQyxFQUFFO01BQUEsT0FBSUEsRUFBRSxLQUFLUCxDQUFDLENBQUNHLE1BQU0sQ0FBQ0MsS0FBSztJQUFBLEVBQUM7SUFDMUVWLGFBQWEsQ0FBQ1csaUJBQWlCLENBQUM7RUFDcEMsQ0FBQztFQUVELG9CQUNJcEIsMERBQUEsNEJBQ0lBLDBEQUFBO0lBQVF3QixRQUFRLEVBQUVWO0VBQWEsR0FDMUJOLFVBQVUsQ0FBQ2lCLEdBQUcsQ0FBQyxVQUFDSCxFQUFFLEVBQUVJLEtBQUssRUFBSztJQUMzQixvQkFBTzFCLDBEQUFBO01BQVEyQixHQUFHLEVBQUVEO0lBQU0sR0FBRUosRUFBVyxDQUFDO0VBQzVDLENBQUMsQ0FDRyxDQUFDLGVBQ1R0QiwwREFBQSxhQUNLWSxRQUFRLENBQUNhLEdBQUcsQ0FBQyxVQUFDSCxFQUFFLEVBQUVJLEtBQUs7SUFBQSxvQkFBSzFCLDBEQUFBO01BQUkyQixHQUFHLEVBQUVEO0lBQU0sR0FBRUosRUFBTyxDQUFDO0VBQUEsRUFDdEQsQ0FDRixDQUFDO0FBRWY7QUFFQSxTQUFTTSxHQUFHQSxDQUFBLEVBQUc7RUFDWCxvQkFBTzVCLDBEQUFBLENBQUNHLFlBQVksTUFBQyxDQUFDO0FBQzFCO0FBRUEsSUFBTTBCLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBRzlCLDREQUFVLENBQUMyQixTQUFTLENBQUM7QUFDbENHLElBQUksQ0FBQ0MsTUFBTSxlQUFDakMsMERBQUEsQ0FBQzRCLEdBQUcsTUFBQyxDQUFDLENBQUM7Ozs7Ozs7O1VDcENuQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzEyX0R6aWVuXzE5LTIxLzAxX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wMV9aYWRhbmllXzEvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5mdW5jdGlvbiBXaG9Jc1ByZXNlbnQoKSB7XG5cbiAgICBjb25zdCBpbml0aWFsVmFsdWUgPSBbJ0FubmEgS293YWxza2EnLCAnSmFuIEtvd2Fsc2tpJywgJ01hY2llaiB2b24gSGFuZGVyYnVyZycsICdKdXJhbmQgemUgU3B5Y2hvd2EnXVxuXG4gICAgY29uc3QgW3NlbGVjdEZyb20sIHNldFNlbGVjdEZyb21dID0gdXNlU3RhdGUoaW5pdGlhbFZhbHVlKVxuICAgIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoW10pXG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBzZXRTZWxlY3RlZChbLi4uc2VsZWN0ZWQsIGUudGFyZ2V0LnZhbHVlXSlcbiAgICAgICAgY29uc3QgdXBkYXRlZFNlbGVjdEZyb20gPSBpbml0aWFsVmFsdWUuZmlsdGVyKGVsID0+IGVsICE9PSBlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgc2V0U2VsZWN0RnJvbSh1cGRhdGVkU2VsZWN0RnJvbSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+XG4gICAgICAgICAgICAgICAge3NlbGVjdEZyb20ubWFwKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxvcHRpb24ga2V5PXtpbmRleH0+e2VsfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge3NlbGVjdGVkLm1hcCgoZWwsIGluZGV4KSA9PiA8bGkga2V5PXtpbmRleH0+e2VsfTwvbGk+KX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZm9ybT5cbiAgICApXG59XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgICByZXR1cm4gPFdob0lzUHJlc2VudC8+XG59XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKDxBcHAvPik7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzZTQxOWY3ZWE1ZTQ4MjI1Y2RmMVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY3JlYXRlUm9vdCIsIldob0lzUHJlc2VudCIsImluaXRpYWxWYWx1ZSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInNlbGVjdEZyb20iLCJzZXRTZWxlY3RGcm9tIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwiaGFuZGxlQ2hhbmdlIiwiZSIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsInRhcmdldCIsInZhbHVlIiwidXBkYXRlZFNlbGVjdEZyb20iLCJmaWx0ZXIiLCJlbCIsImNyZWF0ZUVsZW1lbnQiLCJvbkNoYW5nZSIsIm1hcCIsImluZGV4Iiwia2V5IiwiQXBwIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9