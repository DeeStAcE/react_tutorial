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
    // const updatedSelectFrom = initialValue.filter(el => el !== e.target.value)
    var updatedSelectFrom = selectFrom.filter(function (el) {
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
/******/ 	__webpack_require__.h = () => ("8c5338e5c190818b36d0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40YjMzN2Y5MzlmOTJkNTY4ZThhZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ007QUFFNUMsU0FBU0csWUFBWUEsQ0FBQSxFQUFHO0VBRXBCLElBQU1DLFlBQVksR0FBRyxDQUFDLGVBQWUsRUFBRSxjQUFjLEVBQUUsdUJBQXVCLEVBQUUsb0JBQW9CLENBQUM7RUFFckcsSUFBQUMsU0FBQSxHQUFvQ0osK0NBQVEsQ0FBQ0csWUFBWSxDQUFDO0lBQUFFLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQW5ERyxVQUFVLEdBQUFGLFVBQUE7SUFBRUcsYUFBYSxHQUFBSCxVQUFBO0VBQ2hDLElBQUFJLFVBQUEsR0FBZ0NULCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFVLFVBQUEsR0FBQUosY0FBQSxDQUFBRyxVQUFBO0lBQXJDRSxRQUFRLEdBQUFELFVBQUE7SUFBRUUsV0FBVyxHQUFBRixVQUFBO0VBRTVCLElBQU1HLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFJQyxDQUFDLEVBQUs7SUFDeEJGLFdBQVcsSUFBQUcsTUFBQSxDQUFBQyxrQkFBQSxDQUFLTCxRQUFRLElBQUVHLENBQUMsQ0FBQ0csTUFBTSxDQUFDQyxLQUFLLEVBQUMsQ0FBQztJQUMxQztJQUNBLElBQU1DLGlCQUFpQixHQUFHWixVQUFVLENBQUNhLE1BQU0sQ0FBQyxVQUFBQyxFQUFFO01BQUEsT0FBSUEsRUFBRSxLQUFLUCxDQUFDLENBQUNHLE1BQU0sQ0FBQ0MsS0FBSztJQUFBLEVBQUM7SUFDeEVWLGFBQWEsQ0FBQ1csaUJBQWlCLENBQUM7RUFDcEMsQ0FBQztFQUVELG9CQUNJcEIsMERBQUEsNEJBQ0lBLDBEQUFBO0lBQVF3QixRQUFRLEVBQUVWO0VBQWEsR0FDMUJOLFVBQVUsQ0FBQ2lCLEdBQUcsQ0FBQyxVQUFDSCxFQUFFLEVBQUVJLEtBQUssRUFBSztJQUMzQixvQkFBTzFCLDBEQUFBO01BQVEyQixHQUFHLEVBQUVEO0lBQU0sR0FBRUosRUFBVyxDQUFDO0VBQzVDLENBQUMsQ0FDRyxDQUFDLGVBQ1R0QiwwREFBQSxhQUNLWSxRQUFRLENBQUNhLEdBQUcsQ0FBQyxVQUFDSCxFQUFFLEVBQUVJLEtBQUs7SUFBQSxvQkFBSzFCLDBEQUFBO01BQUkyQixHQUFHLEVBQUVEO0lBQU0sR0FBRUosRUFBTyxDQUFDO0VBQUEsRUFDdEQsQ0FDRixDQUFDO0FBRWY7QUFFQSxTQUFTTSxHQUFHQSxDQUFBLEVBQUc7RUFDWCxvQkFBTzVCLDBEQUFBLENBQUNHLFlBQVksTUFBQyxDQUFDO0FBQzFCO0FBRUEsSUFBTTBCLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBRzlCLDREQUFVLENBQUMyQixTQUFTLENBQUM7QUFDbENHLElBQUksQ0FBQ0MsTUFBTSxlQUFDakMsMERBQUEsQ0FBQzRCLEdBQUcsTUFBQyxDQUFDLENBQUM7Ozs7Ozs7O1VDckNuQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzEyX0R6aWVuXzE5LTIxLzAxX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wMV9aYWRhbmllXzEvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5mdW5jdGlvbiBXaG9Jc1ByZXNlbnQoKSB7XG5cbiAgICBjb25zdCBpbml0aWFsVmFsdWUgPSBbJ0FubmEgS293YWxza2EnLCAnSmFuIEtvd2Fsc2tpJywgJ01hY2llaiB2b24gSGFuZGVyYnVyZycsICdKdXJhbmQgemUgU3B5Y2hvd2EnXVxuXG4gICAgY29uc3QgW3NlbGVjdEZyb20sIHNldFNlbGVjdEZyb21dID0gdXNlU3RhdGUoaW5pdGlhbFZhbHVlKVxuICAgIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoW10pXG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBzZXRTZWxlY3RlZChbLi4uc2VsZWN0ZWQsIGUudGFyZ2V0LnZhbHVlXSlcbiAgICAgICAgLy8gY29uc3QgdXBkYXRlZFNlbGVjdEZyb20gPSBpbml0aWFsVmFsdWUuZmlsdGVyKGVsID0+IGVsICE9PSBlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgY29uc3QgdXBkYXRlZFNlbGVjdEZyb20gPSBzZWxlY3RGcm9tLmZpbHRlcihlbCA9PiBlbCAhPT0gZS50YXJnZXQudmFsdWUpXG4gICAgICAgIHNldFNlbGVjdEZyb20odXBkYXRlZFNlbGVjdEZyb20pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PlxuICAgICAgICAgICAgICAgIHtzZWxlY3RGcm9tLm1hcCgoZWwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIGtleT17aW5kZXh9PntlbH08L29wdGlvbj5cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHtzZWxlY3RlZC5tYXAoKGVsLCBpbmRleCkgPT4gPGxpIGtleT17aW5kZXh9PntlbH08L2xpPil9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Zvcm0+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBBcHAoKSB7XG4gICAgcmV0dXJuIDxXaG9Jc1ByZXNlbnQvPlxufVxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5yb290LnJlbmRlcig8QXBwLz4pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOGM1MzM4ZTVjMTkwODE4YjM2ZDBcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZVJvb3QiLCJXaG9Jc1ByZXNlbnQiLCJpbml0aWFsVmFsdWUiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJzZWxlY3RGcm9tIiwic2V0U2VsZWN0RnJvbSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0Iiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImhhbmRsZUNoYW5nZSIsImUiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJ0YXJnZXQiLCJ2YWx1ZSIsInVwZGF0ZWRTZWxlY3RGcm9tIiwiZmlsdGVyIiwiZWwiLCJjcmVhdGVFbGVtZW50Iiwib25DaGFuZ2UiLCJtYXAiLCJpbmRleCIsImtleSIsIkFwcCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==