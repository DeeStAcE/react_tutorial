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


function Box() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      width: "500px",
      height: "200px",
      backgroundColor: 'green'
    }),
    _useState2 = _slicedToArray(_useState, 2),
    boxStyle = _useState2[0],
    setBoxStyle = _useState2[1];
  var handleClick = function handleClick(width, height, backgroundColor) {
    setBoxStyle({
      width: width,
      height: height,
      backgroundColor: backgroundColor
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: boxStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return handleClick("200px", "300px", "orange");
    }
  }, "Click"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return handleClick("100px", "700px", "blue");
    }
  }, "Click"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return handleClick("500px", "200px", "green");
    }
  }, "Click"));
}
function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Box, null));
}
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6205febd21f20e994aae")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mODhkOGYxYzVjMjE2MzA0NWUxMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDTTtBQUU1QyxTQUFTRyxHQUFHQSxDQUFBLEVBQUc7RUFDWCxJQUFBQyxTQUFBLEdBQWdDSCwrQ0FBUSxDQUFDO01BQ3JDSSxLQUFLLEVBQUUsT0FBTztNQUNkQyxNQUFNLEVBQUUsT0FBTztNQUNmQyxlQUFlLEVBQUU7SUFDckIsQ0FBQyxDQUFDO0lBQUFDLFVBQUEsR0FBQUMsY0FBQSxDQUFBTCxTQUFBO0lBSktNLFFBQVEsR0FBQUYsVUFBQTtJQUFFRyxXQUFXLEdBQUFILFVBQUE7RUFNNUIsSUFBTUksV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUlQLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxlQUFlLEVBQUs7SUFDcERJLFdBQVcsQ0FBQztNQUNSTixLQUFLLEVBQUVBLEtBQUs7TUFDWkMsTUFBTSxFQUFFQSxNQUFNO01BQ2RDLGVBQWUsRUFBRUE7SUFDckIsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUVELG9CQUNJUCwwREFBQTtJQUFLYyxLQUFLLEVBQUVKO0VBQVMsZ0JBQ2pCViwwREFBQTtJQUFRZSxPQUFPLEVBQUUsU0FBQUEsUUFBQTtNQUFBLE9BQU1ILFdBQVcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQztJQUFBO0VBQUMsR0FBQyxPQUFhLENBQUMsZUFDOUVaLDBEQUFBO0lBQVFlLE9BQU8sRUFBRSxTQUFBQSxRQUFBO01BQUEsT0FBTUgsV0FBVyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDO0lBQUE7RUFBQyxHQUFDLE9BQWEsQ0FBQyxlQUM1RVosMERBQUE7SUFBUWUsT0FBTyxFQUFFLFNBQUFBLFFBQUE7TUFBQSxPQUFNSCxXQUFXLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUM7SUFBQTtFQUFDLEdBQUMsT0FBYSxDQUMzRSxDQUFDO0FBRWQ7QUFFQSxTQUFTSSxHQUFHQSxDQUFBLEVBQUc7RUFDWCxvQkFDSWhCLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNJQSwwREFBQSxDQUFDRyxHQUFHLE1BQUMsQ0FDUCxDQUFDO0FBRVg7QUFFQSxJQUFNZSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUduQiw0REFBVSxDQUFDZ0IsU0FBUyxDQUFDO0FBQ2xDRyxJQUFJLENBQUNDLE1BQU0sZUFBQ3RCLDBEQUFBLENBQUNnQixHQUFHLE1BQUMsQ0FBQyxDQUFDOzs7Ozs7OztVQ3JDbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMV9Qcnpla2F6eXdhbmllX3BhcmFtZXRyb3cvMDJfWmFkYW5pZV8yL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcblxuZnVuY3Rpb24gQm94KCkge1xuICAgIGNvbnN0IFtib3hTdHlsZSwgc2V0Qm94U3R5bGVdID0gdXNlU3RhdGUoe1xuICAgICAgICB3aWR0aDogXCI1MDBweFwiLFxuICAgICAgICBoZWlnaHQ6IFwiMjAwcHhcIixcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnZ3JlZW4nLFxuICAgIH0pO1xuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAod2lkdGgsIGhlaWdodCwgYmFja2dyb3VuZENvbG9yKSA9PiB7XG4gICAgICAgIHNldEJveFN0eWxlKHtcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBiYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17Ym94U3R5bGV9PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhcIjIwMHB4XCIsIFwiMzAwcHhcIiwgXCJvcmFuZ2VcIil9PkNsaWNrPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKFwiMTAwcHhcIiwgXCI3MDBweFwiLCBcImJsdWVcIil9PkNsaWNrPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKFwiNTAwcHhcIiwgXCIyMDBweFwiLCBcImdyZWVuXCIpfT5DbGljazwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEJveC8+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xucm9vdC5yZW5kZXIoPEFwcC8+KTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjYyMDVmZWJkMjFmMjBlOTk0YWFlXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJjcmVhdGVSb290IiwiQm94IiwiX3VzZVN0YXRlIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJib3hTdHlsZSIsInNldEJveFN0eWxlIiwiaGFuZGxlQ2xpY2siLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJvbkNsaWNrIiwiQXBwIiwiRnJhZ21lbnQiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=