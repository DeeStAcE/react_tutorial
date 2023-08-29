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
    backgroundColor: "green",
    borderColor: "green",
    border: "3px"
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
/******/ 	__webpack_require__.h = () => ("3c0be1177caebcee372e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWdCO0lBQUNDLE9BQU8sZUFBRWpDLDBEQUFBLENBQUMyQixRQUFRLE1BQUM7RUFBRSxDQUFDLENBQy9DLENBQ0EsQ0FBQztBQUVyQjtBQUVBLElBQU1PLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBR3BDLDREQUFVLENBQUNpQyxTQUFTLENBQUM7QUFDbENHLElBQUksQ0FBQ0MsTUFBTSxlQUFDdEMsMERBQUEsQ0FBQytCLEdBQUcsTUFBQyxDQUFDLENBQUM7Ozs7Ozs7O1VDakVuQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzE0X0R6aWVuXzIzLTI0LzAxX1JlYWN0X1JvdXRlci8wM19aYWRhbmllXzMvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IHtcbiAgICBIYXNoUm91dGVyLFxuICAgIFJvdXRlLFxuICAgIFJvdXRlcyxcbiAgICBMaW5rLFxuICAgIE5hdkxpbmssXG4gICAgT3V0bGV0LCB1c2VQYXJhbXNcbn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmNvbnN0IE1haW4gPSAoKSA9PiB7XG4gICAgY29uc3QgYWN0aXZlU3R5bGUgPSB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJncmVlblwiLFxuICAgICAgICBib3JkZXJDb2xvcjogXCJncmVlblwiLFxuICAgICAgICBib3JkZXI6IFwiM3B4XCJcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgZW5kIHN0eWxlPXsoe2lzQWN0aXZlfSkgPT4gaXNBY3RpdmUgPyBhY3RpdmVTdHlsZSA6IHVuZGVmaW5lZH0gdG89XCIvXCI+SG9tZTwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgZW5kIHN0eWxlPXsoe2lzQWN0aXZlfSkgPT4gaXNBY3RpdmUgPyBhY3RpdmVTdHlsZSA6IHVuZGVmaW5lZH0gdG89XCIvaGVsbG8vSmFuXCI+QmxvZzwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgZW5kIHN0eWxlPXsoe2lzQWN0aXZlfSkgPT4gaXNBY3RpdmUgPyBhY3RpdmVTdHlsZSA6IHVuZGVmaW5lZH0gdG89XCIvY2hlY2thZ2UvNTBcIj5QcmljaW5nPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIDxoMT5XaXRhaiBuYSBzdHJvbmllPC9oMT5cbn1cblxuY29uc3QgSGVsbG9Zb3UgPSAoKSA9PiB7XG4gICAgY29uc3Qge25hbWV9ID0gdXNlUGFyYW1zKClcbiAgICByZXR1cm4gPGgxPldpdGFqIHtuYW1lfTwvaDE+XG59XG5cbmNvbnN0IENoZWNrQWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHthZ2V9ID0gdXNlUGFyYW1zKClcbiAgICByZXR1cm4gPGgxPntwYXJzZUludChhZ2UpID49IDE4ID8gXCJQZcWCbm9sZXRuaVwiIDogXCJOaWVwZcWCbm9sZXRuaVwifTwvaDE+XG59XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8SGFzaFJvdXRlcj5cbiAgICAgICAgICAgIDxNYWluLz5cbiAgICAgICAgICAgIDxPdXRsZXQvPlxuICAgICAgICAgICAgPFJvdXRlcz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8SG9tZS8+fS8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvaGVsbG8vOm5hbWVcIiBlbGVtZW50PXs8SGVsbG9Zb3UvPn0vPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2NoZWNrYWdlLzphZ2VcIiBlbGVtZW50PXs8Q2hlY2tBZ2UvPn0vPlxuICAgICAgICAgICAgPC9Sb3V0ZXM+XG4gICAgICAgIDwvSGFzaFJvdXRlcj5cbiAgICApXG59XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKDxBcHAvPik7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzYzBiZTExNzdjYWViY2VlMzcyZVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZVJvb3QiLCJIYXNoUm91dGVyIiwiUm91dGUiLCJSb3V0ZXMiLCJMaW5rIiwiTmF2TGluayIsIk91dGxldCIsInVzZVBhcmFtcyIsIk1haW4iLCJhY3RpdmVTdHlsZSIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyIiwiY3JlYXRlRWxlbWVudCIsImVuZCIsInN0eWxlIiwiX3JlZiIsImlzQWN0aXZlIiwidW5kZWZpbmVkIiwidG8iLCJfcmVmMiIsIl9yZWYzIiwiSG9tZSIsIkhlbGxvWW91IiwiX3VzZVBhcmFtcyIsIm5hbWUiLCJDaGVja0FnZSIsIl91c2VQYXJhbXMyIiwiYWdlIiwicGFyc2VJbnQiLCJBcHAiLCJwYXRoIiwiZWxlbWVudCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==