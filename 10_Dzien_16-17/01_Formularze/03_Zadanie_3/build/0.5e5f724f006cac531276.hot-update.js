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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.items),
    _useState2 = _slicedToArray(_useState, 2),
    array = _useState2[0],
    setArray = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Inne"),
    _useState4 = _slicedToArray(_useState3, 2),
    last = _useState4[0],
    setLast = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isLastSelected = _useState6[0],
    setIsLastSelected = _useState6[1];
  var lastCar = last;
  var handleChange = function handleChange(e) {
    if (e.target.value === last) {
      setIsLastSelected(true);
    }
  };
  var handleClick = function handleClick(e) {
    e.preventDefault();
    setIsLastSelected(false);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    onChange: handleChange
  }, array.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      value: item
    }, item);
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: lastCar
  }, lastCar)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
/******/ 	__webpack_require__.h = () => ("3727f831829061b0ee22")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41ZTVmNzI0ZjAwNmNhYzUzMTI3Ni5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDTTtBQUU1QyxTQUFTRyxZQUFZQSxDQUFDQyxLQUFLLEVBQUU7RUFFekIsSUFBQUMsU0FBQSxHQUEwQkosK0NBQVEsQ0FBQ0csS0FBSyxDQUFDRSxLQUFLLENBQUM7SUFBQUMsVUFBQSxHQUFBQyxjQUFBLENBQUFILFNBQUE7SUFBeENJLEtBQUssR0FBQUYsVUFBQTtJQUFFRyxRQUFRLEdBQUFILFVBQUE7RUFDdEIsSUFBQUksVUFBQSxHQUF3QlYsK0NBQVEsQ0FBQyxNQUFNLENBQUM7SUFBQVcsVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBakNFLElBQUksR0FBQUQsVUFBQTtJQUFFRSxPQUFPLEdBQUFGLFVBQUE7RUFDcEIsSUFBQUcsVUFBQSxHQUE0Q2QsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQWUsVUFBQSxHQUFBUixjQUFBLENBQUFPLFVBQUE7SUFBcERFLGNBQWMsR0FBQUQsVUFBQTtJQUFFRSxpQkFBaUIsR0FBQUYsVUFBQTtFQUN4QyxJQUFNRyxPQUFPLEdBQUdOLElBQUk7RUFFcEIsSUFBTU8sWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUlDLENBQUMsRUFBSztJQUN4QixJQUFJQSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxLQUFLVixJQUFJLEVBQUU7TUFDekJLLGlCQUFpQixDQUFDLElBQUksQ0FBQztJQUMzQjtFQUNKLENBQUM7RUFFRCxJQUFNTSxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBSUgsQ0FBQyxFQUFLO0lBQ3ZCQSxDQUFDLENBQUNJLGNBQWMsQ0FBQyxDQUFDO0lBQ2xCUCxpQkFBaUIsQ0FBQyxLQUFLLENBQUM7RUFDNUIsQ0FBQztFQUVELG9CQUNJbEIsMERBQUEsNEJBQ0lBLDBEQUFBO0lBQVEyQixRQUFRLEVBQUVQO0VBQWEsR0FDMUJYLEtBQUssQ0FBQ21CLEdBQUcsQ0FBQyxVQUFBQyxJQUFJO0lBQUEsb0JBQUk3QiwwREFBQTtNQUFRdUIsS0FBSyxFQUFFTTtJQUFLLEdBQUVBLElBQWEsQ0FBQztFQUFBLEVBQUMsZUFDeEQ3QiwwREFBQTtJQUFRdUIsS0FBSyxFQUFFSjtFQUFRLEdBQUVBLE9BQWdCLENBQ3JDLENBQUMsZUFDVG5CLDBEQUFBO0lBQUs4QixNQUFNLEVBQUUsQ0FBQ2I7RUFBZSxnQkFDekJqQiwwREFBQTtJQUFPK0IsSUFBSSxFQUFDLE1BQU07SUFBQ1IsS0FBSyxFQUFFVixJQUFLO0lBQUNjLFFBQVEsRUFBRSxTQUFBQSxTQUFDTixDQUFDO01BQUEsT0FBS1AsT0FBTyxDQUFDTyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO0lBQUE7RUFBQyxDQUFDLENBQUMsZUFDM0V2QiwwREFBQTtJQUFRZ0MsT0FBTyxFQUFFUjtFQUFZLEdBQUMsWUFBYSxDQUMxQyxDQUNILENBQUM7QUFFZjtBQUVBLFNBQVNTLEdBQUdBLENBQUEsRUFBRztFQUNYLG9CQUFPakMsMERBQUEsQ0FBQ0csWUFBWTtJQUFDRyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFNBQVM7RUFBRSxDQUFDLENBQUM7QUFDL0Q7QUFFQSxJQUFNNEIsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHbkMsNERBQVUsQ0FBQ2dDLFNBQVMsQ0FBQztBQUNsQ0csSUFBSSxDQUFDQyxNQUFNLGVBQUN0QywwREFBQSxDQUFDaUMsR0FBRyxNQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7VUN6Q25CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTBfRHppZW5fMTYtMTcvMDFfRm9ybXVsYXJ6ZS8wM19aYWRhbmllXzMvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5mdW5jdGlvbiBTZWxlY3RPclR5cGUocHJvcHMpIHtcblxuICAgIGNvbnN0IFthcnJheSwgc2V0QXJyYXldID0gdXNlU3RhdGUocHJvcHMuaXRlbXMpXG4gICAgY29uc3QgW2xhc3QsIHNldExhc3RdID0gdXNlU3RhdGUoXCJJbm5lXCIpXG4gICAgY29uc3QgW2lzTGFzdFNlbGVjdGVkLCBzZXRJc0xhc3RTZWxlY3RlZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBsYXN0Q2FyID0gbGFzdFxuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSBsYXN0KSB7XG4gICAgICAgICAgICBzZXRJc0xhc3RTZWxlY3RlZCh0cnVlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgc2V0SXNMYXN0U2VsZWN0ZWQoZmFsc2UpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PlxuICAgICAgICAgICAgICAgIHthcnJheS5tYXAoaXRlbSA9PiA8b3B0aW9uIHZhbHVlPXtpdGVtfT57aXRlbX08L29wdGlvbj4pfVxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2xhc3RDYXJ9PntsYXN0Q2FyfTwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8ZGl2IGhpZGRlbj17IWlzTGFzdFNlbGVjdGVkfT5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17bGFzdH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRMYXN0KGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9PlptaWXFhDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICApXG59XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgICByZXR1cm4gPFNlbGVjdE9yVHlwZSBpdGVtcz17W1wiQk1XXCIsIFwiSmFndWFyXCIsIFwiUG9yc2NoZVwiXX0vPlxufVxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5yb290LnJlbmRlcig8QXBwLz4pOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjM3MjdmODMxODI5MDYxYjBlZTIyXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJjcmVhdGVSb290IiwiU2VsZWN0T3JUeXBlIiwicHJvcHMiLCJfdXNlU3RhdGUiLCJpdGVtcyIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImFycmF5Iiwic2V0QXJyYXkiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImxhc3QiLCJzZXRMYXN0IiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJpc0xhc3RTZWxlY3RlZCIsInNldElzTGFzdFNlbGVjdGVkIiwibGFzdENhciIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUNsaWNrIiwicHJldmVudERlZmF1bHQiLCJjcmVhdGVFbGVtZW50Iiwib25DaGFuZ2UiLCJtYXAiLCJpdGVtIiwiaGlkZGVuIiwidHlwZSIsIm9uQ2xpY2siLCJBcHAiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=