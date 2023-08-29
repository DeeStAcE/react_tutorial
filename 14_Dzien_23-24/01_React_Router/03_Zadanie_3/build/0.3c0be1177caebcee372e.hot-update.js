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
    border: "3px",
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
/******/ 	__webpack_require__.h = () => ("4d972edc8d8e30e99a49")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QywwREFBQSxDQUFDMEIsUUFBUSxNQUFDO0VBQUUsQ0FBQyxDQUMvQyxDQUNBLENBQUM7QUFFckI7QUFFQSxJQUFNTyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUduQyw0REFBVSxDQUFDZ0MsU0FBUyxDQUFDO0FBQ2xDRyxJQUFJLENBQUNDLE1BQU0sZUFBQ3JDLDBEQUFBLENBQUM4QixHQUFHLE1BQUMsQ0FBQyxDQUFDOzs7Ozs7OztVQ2xFbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xNF9Eemllbl8yMy0yNC8wMV9SZWFjdF9Sb3V0ZXIvMDNfWmFkYW5pZV8zL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCB7XG4gICAgSGFzaFJvdXRlcixcbiAgICBSb3V0ZSxcbiAgICBSb3V0ZXMsXG4gICAgTGluayxcbiAgICBOYXZMaW5rLFxuICAgIE91dGxldCwgdXNlUGFyYW1zXG59IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5jb25zdCBNYWluID0gKCkgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZVN0eWxlID0ge1xuICAgICAgICBib3JkZXI6IFwiM3B4XCIsXG4gICAgICAgIGJvcmRlckNvbG9yOiBcImdyZWVuXCJcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgZW5kIHN0eWxlPXsoe2lzQWN0aXZlfSkgPT4gaXNBY3RpdmUgPyBhY3RpdmVTdHlsZSA6IHVuZGVmaW5lZH0gdG89XCIvXCI+SG9tZTwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgZW5kIHN0eWxlPXsoe2lzQWN0aXZlfSkgPT4gaXNBY3RpdmUgPyBhY3RpdmVTdHlsZSA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89XCIvaGVsbG8vSmFuXCI+QmxvZzwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgZW5kIHN0eWxlPXsoe2lzQWN0aXZlfSkgPT4gaXNBY3RpdmUgPyBhY3RpdmVTdHlsZSA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89XCIvY2hlY2thZ2UvNTBcIj5QcmljaW5nPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIDxoMT5XaXRhaiBuYSBzdHJvbmllPC9oMT5cbn1cblxuY29uc3QgSGVsbG9Zb3UgPSAoKSA9PiB7XG4gICAgY29uc3Qge25hbWV9ID0gdXNlUGFyYW1zKClcbiAgICByZXR1cm4gPGgxPldpdGFqIHtuYW1lfTwvaDE+XG59XG5cbmNvbnN0IENoZWNrQWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHthZ2V9ID0gdXNlUGFyYW1zKClcbiAgICByZXR1cm4gPGgxPntwYXJzZUludChhZ2UpID49IDE4ID8gXCJQZcWCbm9sZXRuaVwiIDogXCJOaWVwZcWCbm9sZXRuaVwifTwvaDE+XG59XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8SGFzaFJvdXRlcj5cbiAgICAgICAgICAgIDxNYWluLz5cbiAgICAgICAgICAgIDxPdXRsZXQvPlxuICAgICAgICAgICAgPFJvdXRlcz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8SG9tZS8+fS8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvaGVsbG8vOm5hbWVcIiBlbGVtZW50PXs8SGVsbG9Zb3UvPn0vPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2NoZWNrYWdlLzphZ2VcIiBlbGVtZW50PXs8Q2hlY2tBZ2UvPn0vPlxuICAgICAgICAgICAgPC9Sb3V0ZXM+XG4gICAgICAgIDwvSGFzaFJvdXRlcj5cbiAgICApXG59XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKDxBcHAvPik7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0ZDk3MmVkYzhkOGUzMGU5OWE0OVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZVJvb3QiLCJIYXNoUm91dGVyIiwiUm91dGUiLCJSb3V0ZXMiLCJMaW5rIiwiTmF2TGluayIsIk91dGxldCIsInVzZVBhcmFtcyIsIk1haW4iLCJhY3RpdmVTdHlsZSIsImJvcmRlciIsImJvcmRlckNvbG9yIiwiY3JlYXRlRWxlbWVudCIsImVuZCIsInN0eWxlIiwiX3JlZiIsImlzQWN0aXZlIiwidW5kZWZpbmVkIiwidG8iLCJfcmVmMiIsIl9yZWYzIiwiSG9tZSIsIkhlbGxvWW91IiwiX3VzZVBhcmFtcyIsIm5hbWUiLCJDaGVja0FnZSIsIl91c2VQYXJhbXMyIiwiYWdlIiwicGFyc2VJbnQiLCJBcHAiLCJwYXRoIiwiZWxlbWVudCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==