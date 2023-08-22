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


function SelectOrType(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Inne"),
    _useState2 = _slicedToArray(_useState, 2),
    last = _useState2[0],
    setLast = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isLastSelected = _useState4[0],
    setIsLastSelected = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    newLast = _useState6[0],
    setNewLast = _useState6[1];
  var handleChange = function handleChange(e) {
    if (e.target.value === last) {
      setIsLastSelected(true);
    }
  };
  var handleClick = function handleClick(e) {
    e.preventDefault();
    setNewLast(last);
    setIsLastSelected(false);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    onChange: handleChange
  }, props.items.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      value: item
    }, item);
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: newLast ? newLast : last
  }, newLast ? newLast : last)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    hidden: !isLastSelected
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: last,
    onChange: function onChange(e) {
      return setLast(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleClick
  }, "Zmie\u0144")));
}
function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SelectOrType, {
    items: ["BMW", "Jaguar", "Porsche"]
  });
}
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("bb0270212881f5895ea3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mNDY1ZWFmNDc5OGY3M2IwMzg0Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDTTtBQUU1QyxTQUFTRyxZQUFZQSxDQUFDQyxLQUFLLEVBQUU7RUFFekIsSUFBQUMsU0FBQSxHQUF3QkosK0NBQVEsQ0FBQyxNQUFNLENBQUM7SUFBQUssVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBakNHLElBQUksR0FBQUYsVUFBQTtJQUFFRyxPQUFPLEdBQUFILFVBQUE7RUFDcEIsSUFBQUksVUFBQSxHQUE0Q1QsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQVUsVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBcERFLGNBQWMsR0FBQUQsVUFBQTtJQUFFRSxpQkFBaUIsR0FBQUYsVUFBQTtFQUN4QyxJQUFBRyxVQUFBLEdBQThCYiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBYyxVQUFBLEdBQUFSLGNBQUEsQ0FBQU8sVUFBQTtJQUFuQ0UsT0FBTyxHQUFBRCxVQUFBO0lBQUVFLFVBQVUsR0FBQUYsVUFBQTtFQUUxQixJQUFNRyxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBSUMsQ0FBQyxFQUFLO0lBQ3hCLElBQUlBLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLEtBQUtiLElBQUksRUFBRTtNQUN6QkssaUJBQWlCLENBQUMsSUFBSSxDQUFDO0lBQzNCO0VBQ0osQ0FBQztFQUVELElBQU1TLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFJSCxDQUFDLEVBQUs7SUFDdkJBLENBQUMsQ0FBQ0ksY0FBYyxDQUFDLENBQUM7SUFDbEJOLFVBQVUsQ0FBQ1QsSUFBSSxDQUFDO0lBQ2hCSyxpQkFBaUIsQ0FBQyxLQUFLLENBQUM7RUFDNUIsQ0FBQztFQUVELG9CQUNJYiwwREFBQSw0QkFDSUEsMERBQUE7SUFBUXlCLFFBQVEsRUFBRVA7RUFBYSxHQUMxQmQsS0FBSyxDQUFDc0IsS0FBSyxDQUFDQyxHQUFHLENBQUMsVUFBQUMsSUFBSTtJQUFBLG9CQUFJNUIsMERBQUE7TUFBUXFCLEtBQUssRUFBRU87SUFBSyxHQUFFQSxJQUFhLENBQUM7RUFBQSxFQUFDLGVBQzlENUIsMERBQUE7SUFBUXFCLEtBQUssRUFBRUwsT0FBTyxHQUFHQSxPQUFPLEdBQUdSO0VBQUssR0FBRVEsT0FBTyxHQUFHQSxPQUFPLEdBQUdSLElBQWEsQ0FDdkUsQ0FBQyxlQUNUUiwwREFBQTtJQUFLNkIsTUFBTSxFQUFFLENBQUNqQjtFQUFlLGdCQUN6QlosMERBQUE7SUFBTzhCLElBQUksRUFBQyxNQUFNO0lBQUNULEtBQUssRUFBRWIsSUFBSztJQUFDaUIsUUFBUSxFQUFFLFNBQUFBLFNBQUNOLENBQUM7TUFBQSxPQUFLVixPQUFPLENBQUNVLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUM7SUFBQTtFQUFDLENBQUMsQ0FBQyxlQUMzRXJCLDBEQUFBO0lBQVErQixPQUFPLEVBQUVUO0VBQVksR0FBQyxZQUFhLENBQzFDLENBQ0gsQ0FBQztBQUVmO0FBRUEsU0FBU1UsR0FBR0EsQ0FBQSxFQUFHO0VBQ1gsb0JBQU9oQywwREFBQSxDQUFDRyxZQUFZO0lBQUN1QixLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFNBQVM7RUFBRSxDQUFDLENBQUM7QUFDL0Q7QUFFQSxJQUFNTyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdsQyw0REFBVSxDQUFDK0IsU0FBUyxDQUFDO0FBQ2xDRyxJQUFJLENBQUNDLE1BQU0sZUFBQ3JDLDBEQUFBLENBQUNnQyxHQUFHLE1BQUMsQ0FBQyxDQUFDOzs7Ozs7OztVQ3pDbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMF9Eemllbl8xNi0xNy8wMV9Gb3JtdWxhcnplLzAzX1phZGFuaWVfMy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5cbmZ1bmN0aW9uIFNlbGVjdE9yVHlwZShwcm9wcykge1xuXG4gICAgY29uc3QgW2xhc3QsIHNldExhc3RdID0gdXNlU3RhdGUoXCJJbm5lXCIpXG4gICAgY29uc3QgW2lzTGFzdFNlbGVjdGVkLCBzZXRJc0xhc3RTZWxlY3RlZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbbmV3TGFzdCwgc2V0TmV3TGFzdF0gPSB1c2VTdGF0ZShcIlwiKVxuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSBsYXN0KSB7XG4gICAgICAgICAgICBzZXRJc0xhc3RTZWxlY3RlZCh0cnVlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgc2V0TmV3TGFzdChsYXN0KVxuICAgICAgICBzZXRJc0xhc3RTZWxlY3RlZChmYWxzZSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+XG4gICAgICAgICAgICAgICAge3Byb3BzLml0ZW1zLm1hcChpdGVtID0+IDxvcHRpb24gdmFsdWU9e2l0ZW19PntpdGVtfTwvb3B0aW9uPil9XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17bmV3TGFzdCA/IG5ld0xhc3QgOiBsYXN0fT57bmV3TGFzdCA/IG5ld0xhc3QgOiBsYXN0fTwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8ZGl2IGhpZGRlbj17IWlzTGFzdFNlbGVjdGVkfT5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17bGFzdH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRMYXN0KGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9PlptaWXFhDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICApXG59XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgICByZXR1cm4gPFNlbGVjdE9yVHlwZSBpdGVtcz17W1wiQk1XXCIsIFwiSmFndWFyXCIsIFwiUG9yc2NoZVwiXX0vPlxufVxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5yb290LnJlbmRlcig8QXBwLz4pOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImJiMDI3MDIxMjg4MWY1ODk1ZWEzXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJjcmVhdGVSb290IiwiU2VsZWN0T3JUeXBlIiwicHJvcHMiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJsYXN0Iiwic2V0TGFzdCIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiaXNMYXN0U2VsZWN0ZWQiLCJzZXRJc0xhc3RTZWxlY3RlZCIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwibmV3TGFzdCIsInNldE5ld0xhc3QiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVDbGljayIsInByZXZlbnREZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIm9uQ2hhbmdlIiwiaXRlbXMiLCJtYXAiLCJpdGVtIiwiaGlkZGVuIiwidHlwZSIsIm9uQ2xpY2siLCJBcHAiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=