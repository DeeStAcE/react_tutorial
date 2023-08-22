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
  var handleToDoItem = function handleToDoItem(e) {};
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
      onClick: function onClick() {
        return el.done = !el.done;
      },
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
/******/ 	__webpack_require__.h = () => ("a9479ce90b56a892844e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wN2MyMjk0NjNiMGZhOTA2MjM3NS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ007QUFFNUMsU0FBU0csUUFBUUEsQ0FBQSxFQUFHO0VBRWhCLElBQUFDLFNBQUEsR0FBOEJILCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFJLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQW5DRyxTQUFTLEdBQUFGLFVBQUE7SUFBRUcsUUFBUSxHQUFBSCxVQUFBO0VBQzFCLElBQUFJLFVBQUEsR0FBOEJSLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFTLFVBQUEsR0FBQUosY0FBQSxDQUFBRyxVQUFBO0lBQW5DRSxPQUFPLEdBQUFELFVBQUE7SUFBRUUsVUFBVSxHQUFBRixVQUFBO0VBRTFCLElBQU1HLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFJQyxDQUFDLEVBQUs7SUFDdkJBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7SUFDbEIsSUFBTUMsV0FBVyxHQUFHO01BQ2hCQyxJQUFJLEVBQUVOLE9BQU87TUFDYk8sSUFBSSxFQUFFO0lBQ1YsQ0FBQztJQUNEVixRQUFRLElBQUFXLE1BQUEsQ0FBQUMsa0JBQUEsQ0FBS2IsU0FBUyxJQUFFUyxXQUFXLEVBQUMsQ0FBQztJQUNyQ0osVUFBVSxDQUFDLEVBQUUsQ0FBQztFQUNsQixDQUFDO0VBRUQsSUFBTVMsY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFJUCxDQUFDLEVBQUssQ0FFOUIsQ0FBQztFQUVELG9CQUNJZCwwREFBQTtJQUFLdUIsU0FBUyxFQUFDO0VBQVUsZ0JBQ3JCdkIsMERBQUE7SUFBTXVCLFNBQVMsRUFBQztFQUFRLGdCQUNwQnZCLDBEQUFBLGFBQUksd0JBQXFCLENBQUMsZUFDMUJBLDBEQUFBO0lBQU93QixJQUFJLEVBQUMsTUFBTTtJQUFDQyxXQUFXLEVBQUMsd0JBQW1CO0lBQUNDLEtBQUssRUFBRWYsT0FBUTtJQUMzRGdCLFFBQVEsRUFBRSxTQUFBQSxTQUFDYixDQUFDO01BQUEsT0FBS0YsVUFBVSxDQUFDRSxDQUFDLENBQUNjLE1BQU0sQ0FBQ0YsS0FBSyxDQUFDO0lBQUE7RUFBQyxDQUFDLENBQUMsZUFDckQxQiwwREFBQTtJQUFRdUIsU0FBUyxFQUFDLFNBQVM7SUFBQ00sT0FBTyxFQUFFaEI7RUFBWSxHQUFDLE9BQWEsQ0FDN0QsQ0FBQyxlQUVQYiwwREFBQSxhQUNLTyxTQUFTLENBQUN1QixHQUFHLENBQUMsVUFBQ0MsRUFBRSxFQUFFQyxLQUFLLEVBQUs7SUFDMUIsb0JBQU9oQywwREFBQTtNQUFJNkIsT0FBTyxFQUFFLFNBQUFBLFFBQUE7UUFBQSxPQUFNRSxFQUFFLENBQUNiLElBQUksR0FBRyxDQUFDYSxFQUFFLENBQUNiLElBQUk7TUFBQSxDQUFDO01BQUNlLEdBQUcsRUFBRUQsS0FBTTtNQUFDVCxTQUFTLEVBQUVRLEVBQUUsQ0FBQ2IsSUFBSSxHQUFHLE1BQU0sR0FBRztJQUFHLEdBQUVhLEVBQUUsQ0FBQ2QsSUFBUyxDQUFDO0VBQzlHLENBQUMsQ0FDRCxDQUNILENBQUM7QUFHZDtBQUVBLFNBQVNpQixHQUFHQSxDQUFBLEVBQUc7RUFDWCxvQkFBT2xDLDBEQUFBLENBQUNHLFFBQVEsTUFBQyxDQUFDO0FBQ3RCO0FBRUEsSUFBTWdDLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBR3BDLDREQUFVLENBQUNpQyxTQUFTLENBQUM7QUFDbENHLElBQUksQ0FBQ0MsTUFBTSxlQUFDdkMsMERBQUEsQ0FBQ2tDLEdBQUcsTUFBQyxDQUFDLENBQUM7Ozs7Ozs7O1VDL0NuQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzEwX0R6aWVuXzE2LTE3LzAxX0Zvcm11bGFyemUvMDRfWmFkYW5pZV80L2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcblxuZnVuY3Rpb24gVG9Eb0xpc3QoKSB7XG5cbiAgICBjb25zdCBbdG9Eb0FycmF5LCBzZXRBcnJheV0gPSB1c2VTdGF0ZShbXSlcbiAgICBjb25zdCBbbmV3SXRlbSwgc2V0TmV3SXRlbV0gPSB1c2VTdGF0ZShcIlwiKVxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc3QgbmV3VG9Eb0l0ZW0gPSB7XG4gICAgICAgICAgICBuYW1lOiBuZXdJdGVtLFxuICAgICAgICAgICAgZG9uZTogZmFsc2VcbiAgICAgICAgfVxuICAgICAgICBzZXRBcnJheShbLi4udG9Eb0FycmF5LCBuZXdUb0RvSXRlbV0pXG4gICAgICAgIHNldE5ld0l0ZW0oXCJcIilcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVUb0RvSXRlbSA9IChlKSA9PiB7XG5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvRG9MaXN0XCI+XG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8aDI+VHdvamEgbGlzdGEgemFkYcWEPC9oMj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIm5wLiBacm9iacSHIHpha3VweVwiIHZhbHVlPXtuZXdJdGVtfVxuICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld0l0ZW0oZS50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tYWRkXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PkRvZGFqPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7dG9Eb0FycmF5Lm1hcCgoZWwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkgb25DbGljaz17KCkgPT4gZWwuZG9uZSA9ICFlbC5kb25lfSBrZXk9e2luZGV4fSBjbGFzc05hbWU9e2VsLmRvbmUgPyBcImRvbmVcIiA6IFwiXCJ9PntlbC5uYW1lfTwvbGk+XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cblxuICAgIClcbn1cblxuZnVuY3Rpb24gQXBwKCkge1xuICAgIHJldHVybiA8VG9Eb0xpc3QvPlxufVxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5yb290LnJlbmRlcig8QXBwLz4pOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImE5NDc5Y2U5MGI1NmE4OTI4NDRlXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJjcmVhdGVSb290IiwiVG9Eb0xpc3QiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJ0b0RvQXJyYXkiLCJzZXRBcnJheSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwibmV3SXRlbSIsInNldE5ld0l0ZW0iLCJoYW5kbGVDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm5ld1RvRG9JdGVtIiwibmFtZSIsImRvbmUiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJoYW5kbGVUb0RvSXRlbSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0Iiwib25DbGljayIsIm1hcCIsImVsIiwiaW5kZXgiLCJrZXkiLCJBcHAiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=