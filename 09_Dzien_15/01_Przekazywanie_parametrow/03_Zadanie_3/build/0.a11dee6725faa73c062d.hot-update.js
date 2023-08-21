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
      left: "0px",
      top: "0px"
    }),
    _useState2 = _slicedToArray(_useState, 2),
    divStyle = _useState2[0],
    setDivStyle = _useState2[1];
  var handleHover = function handleHover(min, max) {
    var ranNum1 = Math.floor(Math.random() * (max - min) + min);
    var ranNum2 = Math.floor(Math.random() * (max - min) + min);
    setDivStyle({
      left: "".concat(ranNum1, "px"),
      top: "".concat(ranNum2, "px")
    });
  };
  var style = {
    background: "red",
    width: "100px",
    height: "100px",
    position: "absolute",
    left: divStyle.left,
    top: divStyle.top
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
/******/ 	__webpack_require__.h = () => ("7172da75302c71881fa2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hMTFkZWU2NzI1ZmFhNzNjMDYyZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDTTtBQUU1QyxTQUFTRyxRQUFRQSxDQUFBLEVBQUc7RUFFaEIsSUFBQUMsU0FBQSxHQUFnQ0gsK0NBQVEsQ0FBQztNQUNyQ0ksSUFBSSxFQUFFLEtBQUs7TUFDWEMsR0FBRyxFQUFFO0lBQ1QsQ0FBQyxDQUFDO0lBQUFDLFVBQUEsR0FBQUMsY0FBQSxDQUFBSixTQUFBO0lBSEtLLFFBQVEsR0FBQUYsVUFBQTtJQUFFRyxXQUFXLEdBQUFILFVBQUE7RUFLNUIsSUFBTUksV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUlDLEdBQUcsRUFBRUMsR0FBRyxFQUFLO0lBQzlCLElBQU1DLE9BQU8sR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsSUFBSUosR0FBRyxHQUFHRCxHQUFHLENBQUMsR0FBR0EsR0FBRyxDQUFDO0lBQzdELElBQU1NLE9BQU8sR0FBR0gsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsSUFBSUosR0FBRyxHQUFHRCxHQUFHLENBQUMsR0FBR0EsR0FBRyxDQUFDO0lBRTdERixXQUFXLENBQUM7TUFDUkwsSUFBSSxLQUFBYyxNQUFBLENBQUtMLE9BQU8sT0FBSTtNQUNwQlIsR0FBRyxLQUFBYSxNQUFBLENBQUtELE9BQU87SUFDbkIsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUVELElBQU1FLEtBQUssR0FBRztJQUNWQyxVQUFVLEVBQUUsS0FBSztJQUNqQkMsS0FBSyxFQUFFLE9BQU87SUFDZEMsTUFBTSxFQUFFLE9BQU87SUFDZkMsUUFBUSxFQUFFLFVBQVU7SUFDcEJuQixJQUFJLEVBQUVJLFFBQVEsQ0FBQ0osSUFBSTtJQUNuQkMsR0FBRyxFQUFFRyxRQUFRLENBQUNIO0VBQ2xCLENBQUM7RUFFRCxvQkFDSU4sMERBQUE7SUFBS29CLEtBQUssRUFBRUEsS0FBTTtJQUFDTSxZQUFZLEVBQUUsU0FBQUEsYUFBQTtNQUFBLE9BQU1mLFdBQVcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDO0lBQUE7RUFBQyxDQUFDLENBQUM7QUFFdEU7QUFFQSxTQUFTZ0IsR0FBR0EsQ0FBQSxFQUFHO0VBQ1gsb0JBQ0kzQiwwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUEsQ0FBQ0csUUFBUSxNQUFDLENBQ1osQ0FBQztBQUVYO0FBRUEsSUFBTTBCLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBRzlCLDREQUFVLENBQUMyQixTQUFTLENBQUM7QUFDbENHLElBQUksQ0FBQ0MsTUFBTSxlQUFDakMsMERBQUEsQ0FBQzJCLEdBQUcsTUFBQyxDQUFDLENBQUM7Ozs7Ozs7O1VDNUNuQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAxX1ByemVrYXp5d2FuaWVfcGFyYW1ldHJvdy8wM19aYWRhbmllXzMvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5mdW5jdGlvbiBDcmF6eURpdigpIHtcblxuICAgIGNvbnN0IFtkaXZTdHlsZSwgc2V0RGl2U3R5bGVdID0gdXNlU3RhdGUoe1xuICAgICAgICBsZWZ0OiBcIjBweFwiLFxuICAgICAgICB0b3A6IFwiMHB4XCJcbiAgICB9KVxuXG4gICAgY29uc3QgaGFuZGxlSG92ZXIgPSAobWluLCBtYXgpID0+IHtcbiAgICAgICAgY29uc3QgcmFuTnVtMSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKVxuICAgICAgICBjb25zdCByYW5OdW0yID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pXG5cbiAgICAgICAgc2V0RGl2U3R5bGUoe1xuICAgICAgICAgICAgbGVmdDogYCR7cmFuTnVtMX1weGAsXG4gICAgICAgICAgICB0b3A6IGAke3Jhbk51bTJ9cHhgXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICAgIGJhY2tncm91bmQ6IFwicmVkXCIsXG4gICAgICAgIHdpZHRoOiBcIjEwMHB4XCIsXG4gICAgICAgIGhlaWdodDogXCIxMDBweFwiLFxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICBsZWZ0OiBkaXZTdHlsZS5sZWZ0LFxuICAgICAgICB0b3A6IGRpdlN0eWxlLnRvcFxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlfSBvbk1vdXNlRW50ZXI9eygpID0+IGhhbmRsZUhvdmVyKDAsIDEwMDApfS8+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBBcHAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxDcmF6eURpdi8+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xucm9vdC5yZW5kZXIoPEFwcC8+KTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjcxNzJkYTc1MzAyYzcxODgxZmEyXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJjcmVhdGVSb290IiwiQ3JhenlEaXYiLCJfdXNlU3RhdGUiLCJsZWZ0IiwidG9wIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiZGl2U3R5bGUiLCJzZXREaXZTdHlsZSIsImhhbmRsZUhvdmVyIiwibWluIiwibWF4IiwicmFuTnVtMSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJhbk51bTIiLCJjb25jYXQiLCJzdHlsZSIsImJhY2tncm91bmQiLCJ3aWR0aCIsImhlaWdodCIsInBvc2l0aW9uIiwiY3JlYXRlRWxlbWVudCIsIm9uTW91c2VFbnRlciIsIkFwcCIsIkZyYWdtZW50IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9