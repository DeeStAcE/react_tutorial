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
/******/ 	__webpack_require__.h = () => ("623e6558a199627a4ac2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iNDJmNmQzMmY1M2Y2M2QyNDBiYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDTTtBQUU1QyxTQUFTRyxRQUFRQSxDQUFBLEVBQUc7RUFFaEIsSUFBQUMsU0FBQSxHQUE4QkgsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQUksVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBbkNHLFNBQVMsR0FBQUYsVUFBQTtJQUFFRyxRQUFRLEdBQUFILFVBQUE7RUFDMUIsSUFBQUksVUFBQSxHQUE4QlIsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQVMsVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBbkNFLE9BQU8sR0FBQUQsVUFBQTtJQUFFRSxVQUFVLEdBQUFGLFVBQUE7RUFFMUIsSUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUlDLENBQUMsRUFBSztJQUN2QkEsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztJQUNsQkgsVUFBVSxDQUFDLEVBQUUsQ0FBQztFQUNsQixDQUFDO0VBRUQsb0JBQ0laLDBEQUFBO0lBQUtpQixTQUFTLEVBQUM7RUFBVSxnQkFDckJqQiwwREFBQTtJQUFNaUIsU0FBUyxFQUFDO0VBQVEsZ0JBQ3BCakIsMERBQUEsYUFBSSx3QkFBcUIsQ0FBQyxlQUMxQkEsMERBQUE7SUFBT2tCLElBQUksRUFBQyxNQUFNO0lBQUNDLFdBQVcsRUFBQyx3QkFBbUI7SUFBQ0MsS0FBSyxFQUFFVCxPQUFRO0lBQUNVLFFBQVEsRUFBRSxTQUFBQSxTQUFDUCxDQUFDO01BQUEsT0FBS0YsVUFBVSxDQUFDRSxDQUFDLENBQUNRLE1BQU0sQ0FBQ0YsS0FBSyxDQUFDO0lBQUE7RUFBQyxDQUFDLENBQUMsZUFDakhwQiwwREFBQTtJQUFRaUIsU0FBUyxFQUFDLFNBQVM7SUFBQ00sT0FBTyxFQUFFVjtFQUFZLEdBQUMsT0FBYSxDQUM3RCxDQUFDLGVBRVBiLDBEQUFBLGFBQ0tPLFNBQVMsQ0FBQ2lCLEdBQUcsQ0FBQyxVQUFBQyxFQUFFLEVBQUk7SUFDakIsb0JBQU96QiwwREFBQTtNQUFJaUIsU0FBUyxFQUFFUSxFQUFFLENBQUNDLElBQUksR0FBRyxNQUFNLEdBQUc7SUFBRyxHQUFFRCxFQUFFLENBQUNFLElBQVMsQ0FBQztFQUMvRCxDQUFDLENBQUMsZUFDRjNCLDBEQUFBLGFBQUksa0JBQWUsQ0FBQyxlQUNwQkEsMERBQUE7SUFBSWlCLFNBQVMsRUFBQztFQUFNLEdBQUMsOEJBQXNCLENBQzNDLENBQ0gsQ0FBQztBQUdkO0FBRUEsU0FBU1csR0FBR0EsQ0FBQSxFQUFHO0VBQ1gsb0JBQU81QiwwREFBQSxDQUFDRyxRQUFRLE1BQUMsQ0FBQztBQUN0QjtBQUVBLElBQU0wQixTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUc5Qiw0REFBVSxDQUFDMkIsU0FBUyxDQUFDO0FBQ2xDRyxJQUFJLENBQUNDLE1BQU0sZUFBQ2pDLDBEQUFBLENBQUM0QixHQUFHLE1BQUMsQ0FBQyxDQUFDOzs7Ozs7OztVQ3ZDbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMF9Eemllbl8xNi0xNy8wMV9Gb3JtdWxhcnplLzA0X1phZGFuaWVfNC9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5cbmZ1bmN0aW9uIFRvRG9MaXN0KCkge1xuXG4gICAgY29uc3QgW3RvRG9BcnJheSwgc2V0QXJyYXldID0gdXNlU3RhdGUoW10pXG4gICAgY29uc3QgW25ld0l0ZW0sIHNldE5ld0l0ZW1dID0gdXNlU3RhdGUoXCJcIilcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHNldE5ld0l0ZW0oXCJcIilcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvRG9MaXN0XCI+XG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8aDI+VHdvamEgbGlzdGEgemFkYcWEPC9oMj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIm5wLiBacm9iacSHIHpha3VweVwiIHZhbHVlPXtuZXdJdGVtfSBvbkNoYW5nZT17KGUpID0+IHNldE5ld0l0ZW0oZS50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tYWRkXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PkRvZGFqPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7dG9Eb0FycmF5Lm1hcChlbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkgY2xhc3NOYW1lPXtlbC5kb25lID8gXCJkb25lXCIgOiBcIlwifT57ZWwubmFtZX08L2xpPlxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDxsaT5LdXBpxIcgbWxla288L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkb25lXCI+WnJvYmnEhyBwcmV6ZW50YWNqxJk8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICApXG59XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgICByZXR1cm4gPFRvRG9MaXN0Lz5cbn1cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xucm9vdC5yZW5kZXIoPEFwcC8+KTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2MjNlNjU1OGExOTk2MjdhNGFjMlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY3JlYXRlUm9vdCIsIlRvRG9MaXN0IiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwidG9Eb0FycmF5Iiwic2V0QXJyYXkiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsIm5ld0l0ZW0iLCJzZXROZXdJdGVtIiwiaGFuZGxlQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsIm9uQ2xpY2siLCJtYXAiLCJlbCIsImRvbmUiLCJuYW1lIiwiQXBwIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9