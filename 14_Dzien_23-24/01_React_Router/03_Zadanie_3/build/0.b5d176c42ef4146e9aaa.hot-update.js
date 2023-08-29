"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);



var Main = function Main() {
  var activeStyle = {
    border: "2px solid green"
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
    end: true,
    style: function style(_ref) {
      var isActive = _ref.isActive;
      return isActive ? activeStyle : undefined;
    },
    to: "/"
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
    end: true,
    style: function style(_ref2) {
      var isActive = _ref2.isActive;
      return isActive ? activeStyle : undefined;
    },
    to: "/hello/Jan"
  }, "Blog")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
    end: true,
    style: function style(_ref3) {
      var isActive = _ref3.isActive;
      return isActive ? activeStyle : undefined;
    },
    to: "/checkage/50"
  }, "Pricing"))));
};
var Home = function Home() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Witaj na stronie");
};
var HelloYou = function HelloYou() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useParams)(),
    name = _useParams.name;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Witaj ", name);
};
var CheckAge = function CheckAge() {
  var _useParams2 = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useParams)(),
    age = _useParams2.age;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, parseInt(age) >= 18 ? "Pełnoletni" : "Niepełnoletni");
};
function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Main, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Outlet, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Home, null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {
    path: "/hello/:name",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HelloYou, null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {
    path: "/checkage/:age",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CheckAge, null)
  })));
}
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f5c0c99d45448aced91e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iNWQxNzZjNDJlZjQxNDZlOWFhYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNrQjtBQVFsQjtBQUUxQixJQUFNUyxJQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBQSxFQUFTO0VBQ2YsSUFBTUMsV0FBVyxHQUFHO0lBQ2hCQyxNQUFNLEVBQUU7RUFDWixDQUFDO0VBRUQsb0JBQ0lYLDBEQUFBLDJCQUNJQSwwREFBQSwwQkFDSUEsMERBQUEsMEJBQ0lBLDBEQUFBLENBQUNNLHFEQUFPO0lBQUNPLEdBQUc7SUFBQ0MsS0FBSyxFQUFFLFNBQUFBLE1BQUFDLElBQUE7TUFBQSxJQUFFQyxRQUFRLEdBQUFELElBQUEsQ0FBUkMsUUFBUTtNQUFBLE9BQU1BLFFBQVEsR0FBR04sV0FBVyxHQUFHTyxTQUFTO0lBQUEsQ0FBQztJQUFDQyxFQUFFLEVBQUM7RUFBRyxHQUFDLE1BQWEsQ0FDNUYsQ0FBQyxlQUNMbEIsMERBQUEsMEJBQ0lBLDBEQUFBLENBQUNNLHFEQUFPO0lBQUNPLEdBQUc7SUFBQ0MsS0FBSyxFQUFFLFNBQUFBLE1BQUFLLEtBQUE7TUFBQSxJQUFFSCxRQUFRLEdBQUFHLEtBQUEsQ0FBUkgsUUFBUTtNQUFBLE9BQU1BLFFBQVEsR0FBR04sV0FBVyxHQUFHTyxTQUFTO0lBQUEsQ0FBQztJQUM5REMsRUFBRSxFQUFDO0VBQVksR0FBQyxNQUFhLENBQ3RDLENBQUMsZUFDTGxCLDBEQUFBLDBCQUNJQSwwREFBQSxDQUFDTSxxREFBTztJQUFDTyxHQUFHO0lBQUNDLEtBQUssRUFBRSxTQUFBQSxNQUFBTSxLQUFBO01BQUEsSUFBRUosUUFBUSxHQUFBSSxLQUFBLENBQVJKLFFBQVE7TUFBQSxPQUFNQSxRQUFRLEdBQUdOLFdBQVcsR0FBR08sU0FBUztJQUFBLENBQUM7SUFDOURDLEVBQUUsRUFBQztFQUFjLEdBQUMsU0FBZ0IsQ0FDM0MsQ0FDSixDQUNILENBQUM7QUFFZCxDQUFDO0FBRUQsSUFBTUcsSUFBSSxHQUFHLFNBQVBBLElBQUlBLENBQUEsRUFBUztFQUNmLG9CQUFPckIsMERBQUEsYUFBSSxrQkFBb0IsQ0FBQztBQUNwQyxDQUFDO0FBRUQsSUFBTXNCLFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFBLEVBQVM7RUFDbkIsSUFBQUMsVUFBQSxHQUFlZiwyREFBUyxDQUFDLENBQUM7SUFBbkJnQixJQUFJLEdBQUFELFVBQUEsQ0FBSkMsSUFBSTtFQUNYLG9CQUFPeEIsMERBQUEsYUFBSSxRQUFNLEVBQUN3QixJQUFTLENBQUM7QUFDaEMsQ0FBQztBQUVELElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFBLEVBQVM7RUFDbkIsSUFBQUMsV0FBQSxHQUFjbEIsMkRBQVMsQ0FBQyxDQUFDO0lBQWxCbUIsR0FBRyxHQUFBRCxXQUFBLENBQUhDLEdBQUc7RUFDVixvQkFBTzNCLDBEQUFBLGFBQUs0QixRQUFRLENBQUNELEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxZQUFZLEdBQUcsZUFBb0IsQ0FBQztBQUMxRSxDQUFDO0FBRUQsU0FBU0UsR0FBR0EsQ0FBQSxFQUFHO0VBQ1gsb0JBQ0k3QiwwREFBQSxDQUFDRSx3REFBVSxxQkFDUEYsMERBQUEsQ0FBQ1MsSUFBSSxNQUFDLENBQUMsZUFDUFQsMERBQUEsQ0FBQ08sb0RBQU0sTUFBQyxDQUFDLGVBQ1RQLDBEQUFBLENBQUNJLG9EQUFNLHFCQUNISiwwREFBQSxDQUFDRyxtREFBSztJQUFDMkIsSUFBSSxFQUFDLEdBQUc7SUFBQ0MsT0FBTyxlQUFFL0IsMERBQUEsQ0FBQ3FCLElBQUksTUFBQztFQUFFLENBQUMsQ0FBQyxlQUNuQ3JCLDBEQUFBLENBQUNHLG1EQUFLO0lBQUMyQixJQUFJLEVBQUMsY0FBYztJQUFDQyxPQUFPLGVBQUUvQiwwREFBQSxDQUFDc0IsUUFBUSxNQUFDO0VBQUUsQ0FBQyxDQUFDLGVBQ2xEdEIsMERBQUEsQ0FBQ0csbURBQUs7SUFBQzJCLElBQUksRUFBQyxnQkFBZ0I7SUFBQ0MsT0FBTyxlQUFFL0IsMERBQUEsQ0FBQ3lCLFFBQVEsTUFBQztFQUFFLENBQUMsQ0FDL0MsQ0FDQSxDQUFDO0FBRXJCO0FBRUEsSUFBTU8sU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHbEMsNERBQVUsQ0FBQytCLFNBQVMsQ0FBQztBQUNsQ0csSUFBSSxDQUFDQyxNQUFNLGVBQUNwQywwREFBQSxDQUFDNkIsR0FBRyxNQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7VUNqRW5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTRfRHppZW5fMjMtMjQvMDFfUmVhY3RfUm91dGVyLzAzX1phZGFuaWVfMy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQge1xuICAgIEhhc2hSb3V0ZXIsXG4gICAgUm91dGUsXG4gICAgUm91dGVzLFxuICAgIExpbmssXG4gICAgTmF2TGluayxcbiAgICBPdXRsZXQsIHVzZVBhcmFtc1xufSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuY29uc3QgTWFpbiA9ICgpID0+IHtcbiAgICBjb25zdCBhY3RpdmVTdHlsZSA9IHtcbiAgICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCBncmVlblwiXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGVuZCBzdHlsZT17KHtpc0FjdGl2ZX0pID0+IGlzQWN0aXZlID8gYWN0aXZlU3R5bGUgOiB1bmRlZmluZWR9IHRvPVwiL1wiPkhvbWU8L05hdkxpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGVuZCBzdHlsZT17KHtpc0FjdGl2ZX0pID0+IGlzQWN0aXZlID8gYWN0aXZlU3R5bGUgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPVwiL2hlbGxvL0phblwiPkJsb2c8L05hdkxpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGVuZCBzdHlsZT17KHtpc0FjdGl2ZX0pID0+IGlzQWN0aXZlID8gYWN0aXZlU3R5bGUgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPVwiL2NoZWNrYWdlLzUwXCI+UHJpY2luZzwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICAgIHJldHVybiA8aDE+V2l0YWogbmEgc3Ryb25pZTwvaDE+XG59XG5cbmNvbnN0IEhlbGxvWW91ID0gKCkgPT4ge1xuICAgIGNvbnN0IHtuYW1lfSA9IHVzZVBhcmFtcygpXG4gICAgcmV0dXJuIDxoMT5XaXRhaiB7bmFtZX08L2gxPlxufVxuXG5jb25zdCBDaGVja0FnZSA9ICgpID0+IHtcbiAgICBjb25zdCB7YWdlfSA9IHVzZVBhcmFtcygpXG4gICAgcmV0dXJuIDxoMT57cGFyc2VJbnQoYWdlKSA+PSAxOCA/IFwiUGXFgm5vbGV0bmlcIiA6IFwiTmllcGXFgm5vbGV0bmlcIn08L2gxPlxufVxuXG5mdW5jdGlvbiBBcHAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEhhc2hSb3V0ZXI+XG4gICAgICAgICAgICA8TWFpbi8+XG4gICAgICAgICAgICA8T3V0bGV0Lz5cbiAgICAgICAgICAgIDxSb3V0ZXM+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PEhvbWUvPn0vPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2hlbGxvLzpuYW1lXCIgZWxlbWVudD17PEhlbGxvWW91Lz59Lz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9jaGVja2FnZS86YWdlXCIgZWxlbWVudD17PENoZWNrQWdlLz59Lz5cbiAgICAgICAgICAgIDwvUm91dGVzPlxuICAgICAgICA8L0hhc2hSb3V0ZXI+XG4gICAgKVxufVxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5yb290LnJlbmRlcig8QXBwLz4pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZjVjMGM5OWQ0NTQ0OGFjZWQ5MWVcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVSb290IiwiSGFzaFJvdXRlciIsIlJvdXRlIiwiUm91dGVzIiwiTGluayIsIk5hdkxpbmsiLCJPdXRsZXQiLCJ1c2VQYXJhbXMiLCJNYWluIiwiYWN0aXZlU3R5bGUiLCJib3JkZXIiLCJjcmVhdGVFbGVtZW50IiwiZW5kIiwic3R5bGUiLCJfcmVmIiwiaXNBY3RpdmUiLCJ1bmRlZmluZWQiLCJ0byIsIl9yZWYyIiwiX3JlZjMiLCJIb21lIiwiSGVsbG9Zb3UiLCJfdXNlUGFyYW1zIiwibmFtZSIsIkNoZWNrQWdlIiwiX3VzZVBhcmFtczIiLCJhZ2UiLCJwYXJzZUludCIsIkFwcCIsInBhdGgiLCJlbGVtZW50IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9