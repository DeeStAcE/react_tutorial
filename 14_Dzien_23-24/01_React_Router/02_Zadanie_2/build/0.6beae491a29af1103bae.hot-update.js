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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/"
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/hello/Jan"
  }, "Blog")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
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
/******/ 	__webpack_require__.h = () => ("8328e8fe310ae2a61f70")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42YmVhZTQ5MWEyOWFmMTEwM2JhZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNrQjtBQVFsQjtBQUUxQixJQUFNUyxJQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBQSxFQUFTO0VBQ2Ysb0JBQ0lULDBEQUFBLDJCQUNJQSwwREFBQSwwQkFDSUEsMERBQUEsMEJBQ0lBLDBEQUFBLENBQUNLLGtEQUFJO0lBQUNNLEVBQUUsRUFBQztFQUFHLEdBQUMsTUFBVSxDQUN2QixDQUFDLGVBQ0xYLDBEQUFBLDBCQUNJQSwwREFBQSxDQUFDSyxrREFBSTtJQUFDTSxFQUFFLEVBQUM7RUFBWSxHQUFDLE1BQVUsQ0FDaEMsQ0FBQyxlQUNMWCwwREFBQSwwQkFDSUEsMERBQUEsQ0FBQ0ssa0RBQUk7SUFBQ00sRUFBRSxFQUFDO0VBQWMsR0FBQyxTQUFhLENBQ3JDLENBQ0osQ0FDSCxDQUFDO0FBRWQsQ0FBQztBQUVELElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFJQSxDQUFBLEVBQVM7RUFDZixvQkFBT1osMERBQUEsYUFBSSxrQkFBb0IsQ0FBQztBQUNwQyxDQUFDO0FBRUQsSUFBTWEsUUFBUSxHQUFHLFNBQVhBLFFBQVFBLENBQUEsRUFBUztFQUNuQixJQUFBQyxVQUFBLEdBQWVOLDJEQUFTLENBQUMsQ0FBQztJQUFuQk8sSUFBSSxHQUFBRCxVQUFBLENBQUpDLElBQUk7RUFDWCxvQkFBT2YsMERBQUEsYUFBSSxRQUFNLEVBQUNlLElBQVMsQ0FBQztBQUNoQyxDQUFDO0FBRUQsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVFBLENBQUEsRUFBUztFQUNuQixJQUFBQyxXQUFBLEdBQWNULDJEQUFTLENBQUMsQ0FBQztJQUFsQlUsR0FBRyxHQUFBRCxXQUFBLENBQUhDLEdBQUc7RUFDVixvQkFBT2xCLDBEQUFBLGFBQUttQixRQUFRLENBQUNELEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxZQUFZLEdBQUcsZUFBb0IsQ0FBQztBQUMxRSxDQUFDO0FBRUQsU0FBU0UsR0FBR0EsQ0FBQSxFQUFHO0VBQ1gsb0JBQ0lwQiwwREFBQSxDQUFDRSx3REFBVSxxQkFDUEYsMERBQUEsQ0FBQ1MsSUFBSSxNQUFDLENBQUMsZUFDUFQsMERBQUEsQ0FBQ08sb0RBQU0sTUFBQyxDQUFDLGVBQ1RQLDBEQUFBLENBQUNJLG9EQUFNLHFCQUNISiwwREFBQSxDQUFDRyxtREFBSztJQUFDa0IsSUFBSSxFQUFDLEdBQUc7SUFBQ0MsT0FBTyxlQUFFdEIsMERBQUEsQ0FBQ1ksSUFBSSxNQUFDO0VBQUUsQ0FBQyxDQUFDLGVBQ25DWiwwREFBQSxDQUFDRyxtREFBSztJQUFDa0IsSUFBSSxFQUFDLGNBQWM7SUFBQ0MsT0FBTyxlQUFFdEIsMERBQUEsQ0FBQ2EsUUFBUSxNQUFDO0VBQUUsQ0FBQyxDQUFDLGVBQ2xEYiwwREFBQSxDQUFDRyxtREFBSztJQUFDa0IsSUFBSSxFQUFDLGdCQUFnQjtJQUFDQyxPQUFPLGVBQUV0QiwwREFBQSxDQUFDZ0IsUUFBUSxNQUFDO0VBQUUsQ0FBQyxDQUMvQyxDQUNBLENBQUM7QUFFckI7QUFFQSxJQUFNTyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUd6Qiw0REFBVSxDQUFDc0IsU0FBUyxDQUFDO0FBQ2xDRyxJQUFJLENBQUNDLE1BQU0sZUFBQzNCLDBEQUFBLENBQUNvQixHQUFHLE1BQUMsQ0FBQyxDQUFDOzs7Ozs7OztVQzNEbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xNF9Eemllbl8yMy0yNC8wMV9SZWFjdF9Sb3V0ZXIvMDJfWmFkYW5pZV8yL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCB7XG4gICAgSGFzaFJvdXRlcixcbiAgICBSb3V0ZSxcbiAgICBSb3V0ZXMsXG4gICAgTGluayxcbiAgICBOYXZMaW5rLFxuICAgIE91dGxldCwgdXNlUGFyYW1zXG59IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5jb25zdCBNYWluID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIj5Ib21lPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9oZWxsby9KYW5cIj5CbG9nPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9jaGVja2FnZS81MFwiPlByaWNpbmc8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgICByZXR1cm4gPGgxPldpdGFqIG5hIHN0cm9uaWU8L2gxPlxufVxuXG5jb25zdCBIZWxsb1lvdSA9ICgpID0+IHtcbiAgICBjb25zdCB7bmFtZX0gPSB1c2VQYXJhbXMoKVxuICAgIHJldHVybiA8aDE+V2l0YWoge25hbWV9PC9oMT5cbn1cblxuY29uc3QgQ2hlY2tBZ2UgPSAoKSA9PiB7XG4gICAgY29uc3Qge2FnZX0gPSB1c2VQYXJhbXMoKVxuICAgIHJldHVybiA8aDE+e3BhcnNlSW50KGFnZSkgPj0gMTggPyBcIlBlxYJub2xldG5pXCIgOiBcIk5pZXBlxYJub2xldG5pXCJ9PC9oMT5cbn1cblxuZnVuY3Rpb24gQXBwKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxIYXNoUm91dGVyPlxuICAgICAgICAgICAgPE1haW4vPlxuICAgICAgICAgICAgPE91dGxldC8+XG4gICAgICAgICAgICA8Um91dGVzPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxIb21lLz59Lz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9oZWxsby86bmFtZVwiIGVsZW1lbnQ9ezxIZWxsb1lvdS8+fS8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvY2hlY2thZ2UvOmFnZVwiIGVsZW1lbnQ9ezxDaGVja0FnZS8+fS8+XG4gICAgICAgICAgICA8L1JvdXRlcz5cbiAgICAgICAgPC9IYXNoUm91dGVyPlxuICAgIClcbn1cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xucm9vdC5yZW5kZXIoPEFwcC8+KTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjgzMjhlOGZlMzEwYWUyYTYxZjcwXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlUm9vdCIsIkhhc2hSb3V0ZXIiLCJSb3V0ZSIsIlJvdXRlcyIsIkxpbmsiLCJOYXZMaW5rIiwiT3V0bGV0IiwidXNlUGFyYW1zIiwiTWFpbiIsImNyZWF0ZUVsZW1lbnQiLCJ0byIsIkhvbWUiLCJIZWxsb1lvdSIsIl91c2VQYXJhbXMiLCJuYW1lIiwiQ2hlY2tBZ2UiLCJfdXNlUGFyYW1zMiIsImFnZSIsInBhcnNlSW50IiwiQXBwIiwicGF0aCIsImVsZW1lbnQiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=