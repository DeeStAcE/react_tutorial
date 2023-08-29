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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(['Anna Kowalska', 'Jan Kowalski', 'Maciej von Handerburg', 'Jurand ze Spychowa']),
    _useState2 = _slicedToArray(_useState, 2),
    selectFrom = _useState2[0],
    setSelectFrom = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    selected = _useState4[0],
    setSelected = _useState4[1];
  var handleChange = function handleChange(e) {
    var updatedSelectFrom = selectFrom.filter(function (el) {
      return el !== e.target.value;
    });
    console.log(updatedSelectFrom);
    setSelected(updatedSelectFrom);
    setSelected([].concat(_toConsumableArray(selected), [e.target.value]));
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
/******/ 	__webpack_require__.h = () => ("f6441b26e1e79d568523")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zMDI4MTQ1Zjk4MGI5MGIwZGFmYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ007QUFFNUMsU0FBU0csWUFBWUEsQ0FBQSxFQUFHO0VBRXBCLElBQUFDLFNBQUEsR0FBb0NILCtDQUFRLENBQUMsQ0FBQyxlQUFlLEVBQUUsY0FBYyxFQUFFLHVCQUF1QixFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFBQUksVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBdkhHLFVBQVUsR0FBQUYsVUFBQTtJQUFFRyxhQUFhLEdBQUFILFVBQUE7RUFDaEMsSUFBQUksVUFBQSxHQUFnQ1IsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQVMsVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBckNFLFFBQVEsR0FBQUQsVUFBQTtJQUFFRSxXQUFXLEdBQUFGLFVBQUE7RUFFNUIsSUFBTUcsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUlDLENBQUMsRUFBSztJQUN4QixJQUFNQyxpQkFBaUIsR0FBR1IsVUFBVSxDQUFDUyxNQUFNLENBQUMsVUFBQUMsRUFBRTtNQUFBLE9BQUlBLEVBQUUsS0FBS0gsQ0FBQyxDQUFDSSxNQUFNLENBQUNDLEtBQUs7SUFBQSxFQUFDO0lBQ3hFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ04saUJBQWlCLENBQUM7SUFDOUJILFdBQVcsQ0FBQ0csaUJBQWlCLENBQUM7SUFDOUJILFdBQVcsSUFBQVUsTUFBQSxDQUFBQyxrQkFBQSxDQUFLWixRQUFRLElBQUVHLENBQUMsQ0FBQ0ksTUFBTSxDQUFDQyxLQUFLLEVBQUMsQ0FBQztFQUM5QyxDQUFDO0VBRUQsb0JBQ0luQiwwREFBQSw0QkFDSUEsMERBQUE7SUFBUXlCLFFBQVEsRUFBRVo7RUFBYSxHQUMxQk4sVUFBVSxDQUFDbUIsR0FBRyxDQUFDLFVBQUNULEVBQUUsRUFBRVUsS0FBSyxFQUFLO0lBQzNCLG9CQUFPM0IsMERBQUE7TUFBUTRCLEdBQUcsRUFBRUQ7SUFBTSxHQUFFVixFQUFXLENBQUM7RUFDNUMsQ0FBQyxDQUNHLENBQUMsZUFDVGpCLDBEQUFBLGFBQ0tXLFFBQVEsQ0FBQ2UsR0FBRyxDQUFDLFVBQUNULEVBQUUsRUFBRVUsS0FBSztJQUFBLG9CQUFLM0IsMERBQUE7TUFBSTRCLEdBQUcsRUFBRUQ7SUFBTSxHQUFFVixFQUFPLENBQUM7RUFBQSxFQUN0RCxDQUNGLENBQUM7QUFFZjtBQUVBLFNBQVNZLEdBQUdBLENBQUEsRUFBRztFQUNYLG9CQUFPN0IsMERBQUEsQ0FBQ0csWUFBWSxNQUFDLENBQUM7QUFDMUI7QUFFQSxJQUFNMkIsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHL0IsNERBQVUsQ0FBQzRCLFNBQVMsQ0FBQztBQUNsQ0csSUFBSSxDQUFDQyxNQUFNLGVBQUNsQywwREFBQSxDQUFDNkIsR0FBRyxNQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7VUNuQ25CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTJfRHppZW5fMTktMjEvMDFfWmFkYW5pYV9wb2RzdW1vd3VqYWNlLzAxX1phZGFuaWVfMS9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5cbmZ1bmN0aW9uIFdob0lzUHJlc2VudCgpIHtcblxuICAgIGNvbnN0IFtzZWxlY3RGcm9tLCBzZXRTZWxlY3RGcm9tXSA9IHVzZVN0YXRlKFsnQW5uYSBLb3dhbHNrYScsICdKYW4gS293YWxza2knLCAnTWFjaWVqIHZvbiBIYW5kZXJidXJnJywgJ0p1cmFuZCB6ZSBTcHljaG93YSddKVxuICAgIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoW10pXG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCB1cGRhdGVkU2VsZWN0RnJvbSA9IHNlbGVjdEZyb20uZmlsdGVyKGVsID0+IGVsICE9PSBlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgY29uc29sZS5sb2codXBkYXRlZFNlbGVjdEZyb20pXG4gICAgICAgIHNldFNlbGVjdGVkKHVwZGF0ZWRTZWxlY3RGcm9tKVxuICAgICAgICBzZXRTZWxlY3RlZChbLi4uc2VsZWN0ZWQsIGUudGFyZ2V0LnZhbHVlXSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+XG4gICAgICAgICAgICAgICAge3NlbGVjdEZyb20ubWFwKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxvcHRpb24ga2V5PXtpbmRleH0+e2VsfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge3NlbGVjdGVkLm1hcCgoZWwsIGluZGV4KSA9PiA8bGkga2V5PXtpbmRleH0+e2VsfTwvbGk+KX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZm9ybT5cbiAgICApXG59XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgICByZXR1cm4gPFdob0lzUHJlc2VudC8+XG59XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKDxBcHAvPik7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmNjQ0MWIyNmUxZTc5ZDU2ODUyM1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY3JlYXRlUm9vdCIsIldob0lzUHJlc2VudCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInNlbGVjdEZyb20iLCJzZXRTZWxlY3RGcm9tIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInVwZGF0ZWRTZWxlY3RGcm9tIiwiZmlsdGVyIiwiZWwiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJjcmVhdGVFbGVtZW50Iiwib25DaGFuZ2UiLCJtYXAiLCJpbmRleCIsImtleSIsIkFwcCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==