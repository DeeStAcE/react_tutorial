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


function CrazyDiv() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      background: "red",
      width: "100px",
      height: "100px",
      position: "absolute"
    }),
    _useState2 = _slicedToArray(_useState, 2),
    style = _useState2[0],
    setStyle = _useState2[1];
  var handleHover = function handleHover(min, max) {
    var ranNum1 = Math.floor(Math.random() * (max - min) + min);
    var ranNum2 = Math.floor(Math.random() * (max - min) + min);
    setStyle({
      left: "".concat(ranNum1, "px"),
      top: "".concat(ranNum2, "px")
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: style,
    onMouseEnter: function onMouseEnter() {
      return handleHover(0, 1000);
    }
  });
}
function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CrazyDiv, null));
}
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5fe59f48343e54be1ef9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45ZWRmZjZkMDQ0M2Y0NTAzMzg4Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDTTtBQUU1QyxTQUFTRyxRQUFRQSxDQUFBLEVBQUc7RUFFaEIsSUFBQUMsU0FBQSxHQUEwQkgsK0NBQVEsQ0FBQztNQUMvQkksVUFBVSxFQUFFLEtBQUs7TUFDakJDLEtBQUssRUFBRSxPQUFPO01BQ2RDLE1BQU0sRUFBRSxPQUFPO01BQ2ZDLFFBQVEsRUFBRTtJQUNkLENBQUMsQ0FBQztJQUFBQyxVQUFBLEdBQUFDLGNBQUEsQ0FBQU4sU0FBQTtJQUxLTyxLQUFLLEdBQUFGLFVBQUE7SUFBRUcsUUFBUSxHQUFBSCxVQUFBO0VBT3RCLElBQU1JLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFJQyxHQUFHLEVBQUVDLEdBQUcsRUFBSztJQUM5QixJQUFNQyxPQUFPLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLElBQUlKLEdBQUcsR0FBR0QsR0FBRyxDQUFDLEdBQUdBLEdBQUcsQ0FBQztJQUM3RCxJQUFNTSxPQUFPLEdBQUdILElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLElBQUlKLEdBQUcsR0FBR0QsR0FBRyxDQUFDLEdBQUdBLEdBQUcsQ0FBQztJQUU3REYsUUFBUSxDQUFDO01BQ0xTLElBQUksS0FBQUMsTUFBQSxDQUFLTixPQUFPLE9BQUk7TUFDcEJPLEdBQUcsS0FBQUQsTUFBQSxDQUFLRixPQUFPO0lBQ25CLENBQUMsQ0FBQztFQUNOLENBQUM7RUFFRCxvQkFDSXBCLDBEQUFBO0lBQUtXLEtBQUssRUFBRUEsS0FBTTtJQUFDYyxZQUFZLEVBQUUsU0FBQUEsYUFBQTtNQUFBLE9BQU1aLFdBQVcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDO0lBQUE7RUFBQyxDQUFDLENBQUM7QUFFdEU7QUFFQSxTQUFTYSxHQUFHQSxDQUFBLEVBQUc7RUFDWCxvQkFDSTFCLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNJQSwwREFBQSxDQUFDRyxRQUFRLE1BQUMsQ0FDWixDQUFDO0FBRVg7QUFFQSxJQUFNeUIsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHN0IsNERBQVUsQ0FBQzBCLFNBQVMsQ0FBQztBQUNsQ0csSUFBSSxDQUFDQyxNQUFNLGVBQUNoQywwREFBQSxDQUFDMEIsR0FBRyxNQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7VUNyQ25CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDlfRHppZW5fMTUvMDFfUHJ6ZWthenl3YW5pZV9wYXJhbWV0cm93LzAzX1phZGFuaWVfMy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5cbmZ1bmN0aW9uIENyYXp5RGl2KCkge1xuXG4gICAgY29uc3QgW3N0eWxlLCBzZXRTdHlsZV0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIGJhY2tncm91bmQ6IFwicmVkXCIsXG4gICAgICAgIHdpZHRoOiBcIjEwMHB4XCIsXG4gICAgICAgIGhlaWdodDogXCIxMDBweFwiLFxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiXG4gICAgfSlcblxuICAgIGNvbnN0IGhhbmRsZUhvdmVyID0gKG1pbiwgbWF4KSA9PiB7XG4gICAgICAgIGNvbnN0IHJhbk51bTEgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbilcbiAgICAgICAgY29uc3QgcmFuTnVtMiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKVxuXG4gICAgICAgIHNldFN0eWxlKHtcbiAgICAgICAgICAgIGxlZnQ6IGAke3Jhbk51bTF9cHhgLFxuICAgICAgICAgICAgdG9wOiBgJHtyYW5OdW0yfXB4YFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlfSBvbk1vdXNlRW50ZXI9eygpID0+IGhhbmRsZUhvdmVyKDAsIDEwMDApfS8+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBBcHAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxDcmF6eURpdi8+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xucm9vdC5yZW5kZXIoPEFwcC8+KTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjVmZTU5ZjQ4MzQzZTU0YmUxZWY5XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJjcmVhdGVSb290IiwiQ3JhenlEaXYiLCJfdXNlU3RhdGUiLCJiYWNrZ3JvdW5kIiwid2lkdGgiLCJoZWlnaHQiLCJwb3NpdGlvbiIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInN0eWxlIiwic2V0U3R5bGUiLCJoYW5kbGVIb3ZlciIsIm1pbiIsIm1heCIsInJhbk51bTEiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5OdW0yIiwibGVmdCIsImNvbmNhdCIsInRvcCIsImNyZWF0ZUVsZW1lbnQiLCJvbk1vdXNlRW50ZXIiLCJBcHAiLCJGcmFnbWVudCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==