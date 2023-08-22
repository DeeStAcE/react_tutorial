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
    var newToDoItem = {
      name: newItem,
      done: false
    };
    setArray([].concat(_toConsumableArray(toDoArray), [newToDoItem]));
    setNewItem("");
  };
  var handleToDoItem = function handleToDoItem(e) {
    console.log(e.target.key);
    toDoArray.forEach(function (el, index) {});
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
  }, "Dodaj")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, toDoArray.map(function (el, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      onClick: handleToDoItem,
      key: index,
      className: el.done ? "done" : ""
    }, el.name);
  })));
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
/******/ 	__webpack_require__.h = () => ("6850dae46b7b893217c4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mMzU1NWQyZTg2ZDlhNWQ0MjZmZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ007QUFFNUMsU0FBU0csUUFBUUEsQ0FBQSxFQUFHO0VBRWhCLElBQUFDLFNBQUEsR0FBOEJILCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFJLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQW5DRyxTQUFTLEdBQUFGLFVBQUE7SUFBRUcsUUFBUSxHQUFBSCxVQUFBO0VBQzFCLElBQUFJLFVBQUEsR0FBOEJSLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFTLFVBQUEsR0FBQUosY0FBQSxDQUFBRyxVQUFBO0lBQW5DRSxPQUFPLEdBQUFELFVBQUE7SUFBRUUsVUFBVSxHQUFBRixVQUFBO0VBRTFCLElBQU1HLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFJQyxDQUFDLEVBQUs7SUFDdkJBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7SUFDbEIsSUFBTUMsV0FBVyxHQUFHO01BQ2hCQyxJQUFJLEVBQUVOLE9BQU87TUFDYk8sSUFBSSxFQUFFO0lBQ1YsQ0FBQztJQUNEVixRQUFRLElBQUFXLE1BQUEsQ0FBQUMsa0JBQUEsQ0FBS2IsU0FBUyxJQUFFUyxXQUFXLEVBQUMsQ0FBQztJQUNyQ0osVUFBVSxDQUFDLEVBQUUsQ0FBQztFQUNsQixDQUFDO0VBRUQsSUFBTVMsY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFJUCxDQUFDLEVBQUs7SUFDMUJRLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVCxDQUFDLENBQUNVLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDO0lBQ3pCbEIsU0FBUyxDQUFDbUIsT0FBTyxDQUFDLFVBQUNDLEVBQUUsRUFBRUMsS0FBSyxFQUFLLENBRWpDLENBQUMsQ0FBQztFQUNOLENBQUM7RUFFRCxvQkFDSTVCLDBEQUFBO0lBQUs4QixTQUFTLEVBQUM7RUFBVSxnQkFDckI5QiwwREFBQTtJQUFNOEIsU0FBUyxFQUFDO0VBQVEsZ0JBQ3BCOUIsMERBQUEsYUFBSSx3QkFBcUIsQ0FBQyxlQUMxQkEsMERBQUE7SUFBTytCLElBQUksRUFBQyxNQUFNO0lBQUNDLFdBQVcsRUFBQyx3QkFBbUI7SUFBQ0MsS0FBSyxFQUFFdEIsT0FBUTtJQUMzRHVCLFFBQVEsRUFBRSxTQUFBQSxTQUFDcEIsQ0FBQztNQUFBLE9BQUtGLFVBQVUsQ0FBQ0UsQ0FBQyxDQUFDVSxNQUFNLENBQUNTLEtBQUssQ0FBQztJQUFBO0VBQUMsQ0FBQyxDQUFDLGVBQ3JEakMsMERBQUE7SUFBUThCLFNBQVMsRUFBQyxTQUFTO0lBQUNLLE9BQU8sRUFBRXRCO0VBQVksR0FBQyxPQUFhLENBQzdELENBQUMsZUFFUGIsMERBQUEsYUFDS08sU0FBUyxDQUFDNkIsR0FBRyxDQUFDLFVBQUNULEVBQUUsRUFBRUMsS0FBSyxFQUFLO0lBQzFCLG9CQUFPNUIsMERBQUE7TUFBSW1DLE9BQU8sRUFBRWQsY0FBZTtNQUFDSSxHQUFHLEVBQUVHLEtBQU07TUFBQ0UsU0FBUyxFQUFFSCxFQUFFLENBQUNULElBQUksR0FBRyxNQUFNLEdBQUc7SUFBRyxHQUFFUyxFQUFFLENBQUNWLElBQVMsQ0FBQztFQUNwRyxDQUFDLENBQ0QsQ0FDSCxDQUFDO0FBR2Q7QUFFQSxTQUFTb0IsR0FBR0EsQ0FBQSxFQUFHO0VBQ1gsb0JBQU9yQywwREFBQSxDQUFDRyxRQUFRLE1BQUMsQ0FBQztBQUN0QjtBQUVBLElBQU1tQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUd2Qyw0REFBVSxDQUFDb0MsU0FBUyxDQUFDO0FBQ2xDRyxJQUFJLENBQUNDLE1BQU0sZUFBQzFDLDBEQUFBLENBQUNxQyxHQUFHLE1BQUMsQ0FBQyxDQUFDOzs7Ozs7OztVQ2xEbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMF9Eemllbl8xNi0xNy8wMV9Gb3JtdWxhcnplLzA0X1phZGFuaWVfNC9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5cbmZ1bmN0aW9uIFRvRG9MaXN0KCkge1xuXG4gICAgY29uc3QgW3RvRG9BcnJheSwgc2V0QXJyYXldID0gdXNlU3RhdGUoW10pXG4gICAgY29uc3QgW25ld0l0ZW0sIHNldE5ld0l0ZW1dID0gdXNlU3RhdGUoXCJcIilcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGNvbnN0IG5ld1RvRG9JdGVtID0ge1xuICAgICAgICAgICAgbmFtZTogbmV3SXRlbSxcbiAgICAgICAgICAgIGRvbmU6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgc2V0QXJyYXkoWy4uLnRvRG9BcnJheSwgbmV3VG9Eb0l0ZW1dKVxuICAgICAgICBzZXROZXdJdGVtKFwiXCIpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlVG9Eb0l0ZW0gPSAoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5rZXkpXG4gICAgICAgIHRvRG9BcnJheS5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9Eb0xpc3RcIj5cbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxoMj5Ud29qYSBsaXN0YSB6YWRhxYQ8L2gyPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwibnAuIFpyb2JpxIcgemFrdXB5XCIgdmFsdWU9e25ld0l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3SXRlbShlLnRhcmdldC52YWx1ZSl9Lz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1hZGRcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+RG9kYWo8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHt0b0RvQXJyYXkubWFwKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBvbkNsaWNrPXtoYW5kbGVUb0RvSXRlbX0ga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtlbC5kb25lID8gXCJkb25lXCIgOiBcIlwifT57ZWwubmFtZX08L2xpPlxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICApXG59XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgICByZXR1cm4gPFRvRG9MaXN0Lz5cbn1cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xucm9vdC5yZW5kZXIoPEFwcC8+KTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2ODUwZGFlNDZiN2I4OTMyMTdjNFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY3JlYXRlUm9vdCIsIlRvRG9MaXN0IiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwidG9Eb0FycmF5Iiwic2V0QXJyYXkiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsIm5ld0l0ZW0iLCJzZXROZXdJdGVtIiwiaGFuZGxlQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJuZXdUb0RvSXRlbSIsIm5hbWUiLCJkb25lIiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiaGFuZGxlVG9Eb0l0ZW0iLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0Iiwia2V5IiwiZm9yRWFjaCIsImVsIiwiaW5kZXgiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsIm9uQ2xpY2siLCJtYXAiLCJBcHAiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=