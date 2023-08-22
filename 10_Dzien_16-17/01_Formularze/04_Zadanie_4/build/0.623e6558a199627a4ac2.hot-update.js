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


function ToDoList() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    toDoArray = _useState2[0],
    setArray = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    newItem = _useState4[0],
    setNewItem = _useState4[1];
  var handleClick = function handleClick(e) {
    e.preventDefault();
    setNewItem("");
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "toDoList"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Twoja lista zada\u0144"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    placeholder: "np. Zrobi\u0107 zakupy",
    value: newItem,
    onChange: function onChange(e) {
      return setNewItem(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn-add",
    onClick: handleClick
  }, "Dodaj")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, toDoArray.map(function (el) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      className: el.done ? "done" : ""
    }, el.name);
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Kupi\u0107 mleko"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "done"
  }, "Zrobi\u0107 prezentacj\u0119")));
}
function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ToDoList, null);
}
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2b3ee4255d1b6c6dc944")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42MjNlNjU1OGExOTk2MjdhNGFjMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDTTtBQUU1QyxTQUFTRyxRQUFRQSxDQUFBLEVBQUc7RUFFaEIsSUFBQUMsU0FBQSxHQUE4QkgsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQUksVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBbkNHLFNBQVMsR0FBQUYsVUFBQTtJQUFFRyxRQUFRLEdBQUFILFVBQUE7RUFDMUIsSUFBQUksVUFBQSxHQUE4QlIsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQVMsVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBbkNFLE9BQU8sR0FBQUQsVUFBQTtJQUFFRSxVQUFVLEdBQUFGLFVBQUE7RUFFMUIsSUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUlDLENBQUMsRUFBSztJQUN2QkEsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztJQUNsQkgsVUFBVSxDQUFDLEVBQUUsQ0FBQztFQUNsQixDQUFDO0VBRUQsb0JBQ0laLDBEQUFBO0lBQUtpQixTQUFTLEVBQUM7RUFBVSxnQkFDckJqQiwwREFBQTtJQUFNaUIsU0FBUyxFQUFDO0VBQVEsZ0JBQ3BCakIsMERBQUEsYUFBSSx3QkFBcUIsQ0FBQyxlQUMxQkEsMERBQUE7SUFBT2tCLElBQUksRUFBQyxNQUFNO0lBQUNDLFdBQVcsRUFBQyx3QkFBbUI7SUFBQ0MsS0FBSyxFQUFFVCxPQUFRO0lBQzNEVSxRQUFRLEVBQUUsU0FBQUEsU0FBQ1AsQ0FBQztNQUFBLE9BQUtGLFVBQVUsQ0FBQ0UsQ0FBQyxDQUFDUSxNQUFNLENBQUNGLEtBQUssQ0FBQztJQUFBO0VBQUMsQ0FBQyxDQUFDLGVBQ3JEcEIsMERBQUE7SUFBUWlCLFNBQVMsRUFBQyxTQUFTO0lBQUNNLE9BQU8sRUFBRVY7RUFBWSxHQUFDLE9BQWEsQ0FDN0QsQ0FBQyxlQUVQYiwwREFBQSxhQUNLTyxTQUFTLENBQUNpQixHQUFHLENBQUMsVUFBQUMsRUFBRSxFQUFJO0lBQ2pCLG9CQUFPekIsMERBQUE7TUFBSWlCLFNBQVMsRUFBRVEsRUFBRSxDQUFDQyxJQUFJLEdBQUcsTUFBTSxHQUFHO0lBQUcsR0FBRUQsRUFBRSxDQUFDRSxJQUFTLENBQUM7RUFDL0QsQ0FBQyxDQUFDLGVBQ0YzQiwwREFBQSxhQUFJLGtCQUFlLENBQUMsZUFDcEJBLDBEQUFBO0lBQUlpQixTQUFTLEVBQUM7RUFBTSxHQUFDLDhCQUFzQixDQUMzQyxDQUNILENBQUM7QUFHZDtBQUVBLFNBQVNXLEdBQUdBLENBQUEsRUFBRztFQUNYLG9CQUFPNUIsMERBQUEsQ0FBQ0csUUFBUSxNQUFDLENBQUM7QUFDdEI7QUFFQSxJQUFNMEIsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHOUIsNERBQVUsQ0FBQzJCLFNBQVMsQ0FBQztBQUNsQ0csSUFBSSxDQUFDQyxNQUFNLGVBQUNqQywwREFBQSxDQUFDNEIsR0FBRyxNQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7VUN4Q25CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTBfRHppZW5fMTYtMTcvMDFfRm9ybXVsYXJ6ZS8wNF9aYWRhbmllXzQvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5mdW5jdGlvbiBUb0RvTGlzdCgpIHtcblxuICAgIGNvbnN0IFt0b0RvQXJyYXksIHNldEFycmF5XSA9IHVzZVN0YXRlKFtdKVxuICAgIGNvbnN0IFtuZXdJdGVtLCBzZXROZXdJdGVtXSA9IHVzZVN0YXRlKFwiXCIpXG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBzZXROZXdJdGVtKFwiXCIpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b0RvTGlzdFwiPlxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGgyPlR3b2phIGxpc3RhIHphZGHFhDwvaDI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJucC4gWnJvYmnEhyB6YWt1cHlcIiB2YWx1ZT17bmV3SXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdJdGVtKGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLWFkZFwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5Eb2RhajwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge3RvRG9BcnJheS5tYXAoZWwgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGNsYXNzTmFtZT17ZWwuZG9uZSA/IFwiZG9uZVwiIDogXCJcIn0+e2VsLm5hbWV9PC9saT5cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8bGk+S3VwacSHIG1sZWtvPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZG9uZVwiPlpyb2JpxIcgcHJlemVudGFjasSZPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgKVxufVxuXG5mdW5jdGlvbiBBcHAoKSB7XG4gICAgcmV0dXJuIDxUb0RvTGlzdC8+XG59XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKDxBcHAvPik7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMmIzZWU0MjU1ZDFiNmM2ZGM5NDRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZVJvb3QiLCJUb0RvTGlzdCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInRvRG9BcnJheSIsInNldEFycmF5IiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJuZXdJdGVtIiwic2V0TmV3SXRlbSIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJvbkNsaWNrIiwibWFwIiwiZWwiLCJkb25lIiwibmFtZSIsIkFwcCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==