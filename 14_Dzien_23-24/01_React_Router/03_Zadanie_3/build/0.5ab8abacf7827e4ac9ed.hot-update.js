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
    borderColor: "green",
    borderWidth: "2px"
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
/******/ 	__webpack_require__.h = () => ("b5d176c42ef4146e9aaa")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aEMsMERBQUEsQ0FBQzBCLFFBQVEsTUFBQztFQUFFLENBQUMsQ0FDL0MsQ0FDQSxDQUFDO0FBRXJCO0FBRUEsSUFBTU8sU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHbkMsNERBQVUsQ0FBQ2dDLFNBQVMsQ0FBQztBQUNsQ0csSUFBSSxDQUFDQyxNQUFNLGVBQUNyQywwREFBQSxDQUFDOEIsR0FBRyxNQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7VUNsRW5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTRfRHppZW5fMjMtMjQvMDFfUmVhY3RfUm91dGVyLzAzX1phZGFuaWVfMy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQge1xuICAgIEhhc2hSb3V0ZXIsXG4gICAgUm91dGUsXG4gICAgUm91dGVzLFxuICAgIExpbmssXG4gICAgTmF2TGluayxcbiAgICBPdXRsZXQsIHVzZVBhcmFtc1xufSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuY29uc3QgTWFpbiA9ICgpID0+IHtcbiAgICBjb25zdCBhY3RpdmVTdHlsZSA9IHtcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwiZ3JlZW5cIixcbiAgICAgICAgYm9yZGVyV2lkdGg6IFwiMnB4XCJcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgZW5kIHN0eWxlPXsoe2lzQWN0aXZlfSkgPT4gaXNBY3RpdmUgPyBhY3RpdmVTdHlsZSA6IHVuZGVmaW5lZH0gdG89XCIvXCI+SG9tZTwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgZW5kIHN0eWxlPXsoe2lzQWN0aXZlfSkgPT4gaXNBY3RpdmUgPyBhY3RpdmVTdHlsZSA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89XCIvaGVsbG8vSmFuXCI+QmxvZzwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgZW5kIHN0eWxlPXsoe2lzQWN0aXZlfSkgPT4gaXNBY3RpdmUgPyBhY3RpdmVTdHlsZSA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89XCIvY2hlY2thZ2UvNTBcIj5QcmljaW5nPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIDxoMT5XaXRhaiBuYSBzdHJvbmllPC9oMT5cbn1cblxuY29uc3QgSGVsbG9Zb3UgPSAoKSA9PiB7XG4gICAgY29uc3Qge25hbWV9ID0gdXNlUGFyYW1zKClcbiAgICByZXR1cm4gPGgxPldpdGFqIHtuYW1lfTwvaDE+XG59XG5cbmNvbnN0IENoZWNrQWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHthZ2V9ID0gdXNlUGFyYW1zKClcbiAgICByZXR1cm4gPGgxPntwYXJzZUludChhZ2UpID49IDE4ID8gXCJQZcWCbm9sZXRuaVwiIDogXCJOaWVwZcWCbm9sZXRuaVwifTwvaDE+XG59XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8SGFzaFJvdXRlcj5cbiAgICAgICAgICAgIDxNYWluLz5cbiAgICAgICAgICAgIDxPdXRsZXQvPlxuICAgICAgICAgICAgPFJvdXRlcz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8SG9tZS8+fS8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvaGVsbG8vOm5hbWVcIiBlbGVtZW50PXs8SGVsbG9Zb3UvPn0vPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2NoZWNrYWdlLzphZ2VcIiBlbGVtZW50PXs8Q2hlY2tBZ2UvPn0vPlxuICAgICAgICAgICAgPC9Sb3V0ZXM+XG4gICAgICAgIDwvSGFzaFJvdXRlcj5cbiAgICApXG59XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKDxBcHAvPik7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJiNWQxNzZjNDJlZjQxNDZlOWFhYVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZVJvb3QiLCJIYXNoUm91dGVyIiwiUm91dGUiLCJSb3V0ZXMiLCJMaW5rIiwiTmF2TGluayIsIk91dGxldCIsInVzZVBhcmFtcyIsIk1haW4iLCJhY3RpdmVTdHlsZSIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJjcmVhdGVFbGVtZW50IiwiZW5kIiwic3R5bGUiLCJfcmVmIiwiaXNBY3RpdmUiLCJ1bmRlZmluZWQiLCJ0byIsIl9yZWYyIiwiX3JlZjMiLCJIb21lIiwiSGVsbG9Zb3UiLCJfdXNlUGFyYW1zIiwibmFtZSIsIkNoZWNrQWdlIiwiX3VzZVBhcmFtczIiLCJhZ2UiLCJwYXJzZUludCIsIkFwcCIsInBhdGgiLCJlbGVtZW50IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9