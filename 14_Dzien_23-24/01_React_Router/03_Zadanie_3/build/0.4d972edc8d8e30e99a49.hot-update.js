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
    border: "10px",
    borderColor: "green"
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
/******/ 	__webpack_require__.h = () => ("5ab8abacf7827e4ac9ed")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QywwREFBQSxDQUFDMEIsUUFBUSxNQUFDO0VBQUUsQ0FBQyxDQUMvQyxDQUNBLENBQUM7QUFFckI7QUFFQSxJQUFNTyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUduQyw0REFBVSxDQUFDZ0MsU0FBUyxDQUFDO0FBQ2xDRyxJQUFJLENBQUNDLE1BQU0sZUFBQ3JDLDBEQUFBLENBQUM4QixHQUFHLE1BQUMsQ0FBQyxDQUFDOzs7Ozs7OztVQ2xFbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xNF9Eemllbl8yMy0yNC8wMV9SZWFjdF9Sb3V0ZXIvMDNfWmFkYW5pZV8zL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCB7XG4gICAgSGFzaFJvdXRlcixcbiAgICBSb3V0ZSxcbiAgICBSb3V0ZXMsXG4gICAgTGluayxcbiAgICBOYXZMaW5rLFxuICAgIE91dGxldCwgdXNlUGFyYW1zXG59IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5jb25zdCBNYWluID0gKCkgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZVN0eWxlID0ge1xuICAgICAgICBib3JkZXI6IFwiMTBweFwiLFxuICAgICAgICBib3JkZXJDb2xvcjogXCJncmVlblwiXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGVuZCBzdHlsZT17KHtpc0FjdGl2ZX0pID0+IGlzQWN0aXZlID8gYWN0aXZlU3R5bGUgOiB1bmRlZmluZWR9IHRvPVwiL1wiPkhvbWU8L05hdkxpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGVuZCBzdHlsZT17KHtpc0FjdGl2ZX0pID0+IGlzQWN0aXZlID8gYWN0aXZlU3R5bGUgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPVwiL2hlbGxvL0phblwiPkJsb2c8L05hdkxpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGVuZCBzdHlsZT17KHtpc0FjdGl2ZX0pID0+IGlzQWN0aXZlID8gYWN0aXZlU3R5bGUgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPVwiL2NoZWNrYWdlLzUwXCI+UHJpY2luZzwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICAgIHJldHVybiA8aDE+V2l0YWogbmEgc3Ryb25pZTwvaDE+XG59XG5cbmNvbnN0IEhlbGxvWW91ID0gKCkgPT4ge1xuICAgIGNvbnN0IHtuYW1lfSA9IHVzZVBhcmFtcygpXG4gICAgcmV0dXJuIDxoMT5XaXRhaiB7bmFtZX08L2gxPlxufVxuXG5jb25zdCBDaGVja0FnZSA9ICgpID0+IHtcbiAgICBjb25zdCB7YWdlfSA9IHVzZVBhcmFtcygpXG4gICAgcmV0dXJuIDxoMT57cGFyc2VJbnQoYWdlKSA+PSAxOCA/IFwiUGXFgm5vbGV0bmlcIiA6IFwiTmllcGXFgm5vbGV0bmlcIn08L2gxPlxufVxuXG5mdW5jdGlvbiBBcHAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEhhc2hSb3V0ZXI+XG4gICAgICAgICAgICA8TWFpbi8+XG4gICAgICAgICAgICA8T3V0bGV0Lz5cbiAgICAgICAgICAgIDxSb3V0ZXM+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PEhvbWUvPn0vPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2hlbGxvLzpuYW1lXCIgZWxlbWVudD17PEhlbGxvWW91Lz59Lz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9jaGVja2FnZS86YWdlXCIgZWxlbWVudD17PENoZWNrQWdlLz59Lz5cbiAgICAgICAgICAgIDwvUm91dGVzPlxuICAgICAgICA8L0hhc2hSb3V0ZXI+XG4gICAgKVxufVxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5yb290LnJlbmRlcig8QXBwLz4pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNWFiOGFiYWNmNzgyN2U0YWM5ZWRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVSb290IiwiSGFzaFJvdXRlciIsIlJvdXRlIiwiUm91dGVzIiwiTGluayIsIk5hdkxpbmsiLCJPdXRsZXQiLCJ1c2VQYXJhbXMiLCJNYWluIiwiYWN0aXZlU3R5bGUiLCJib3JkZXIiLCJib3JkZXJDb2xvciIsImNyZWF0ZUVsZW1lbnQiLCJlbmQiLCJzdHlsZSIsIl9yZWYiLCJpc0FjdGl2ZSIsInVuZGVmaW5lZCIsInRvIiwiX3JlZjIiLCJfcmVmMyIsIkhvbWUiLCJIZWxsb1lvdSIsIl91c2VQYXJhbXMiLCJuYW1lIiwiQ2hlY2tBZ2UiLCJfdXNlUGFyYW1zMiIsImFnZSIsInBhcnNlSW50IiwiQXBwIiwicGF0aCIsImVsZW1lbnQiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=