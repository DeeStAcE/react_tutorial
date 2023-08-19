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


function SpeedClickGame(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.time),
    _useState2 = _slicedToArray(_useState, 2),
    time = _useState2[0],
    setTime = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    points = _useState4[0],
    setPoints = _useState4[1];
  function handleClick() {}
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var myInterval = setInterval(function () {
      if (time > 0) {
        setTime(function (prevTime) {
          return prevTime - 50;
        });
      } else {
        setTime(0);
      }
    }, 50);
    return function () {
      clearInterval(myInterval);
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleClick
  }, "Click me!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Time left: ", time), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Your points: ", points));
}
function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SpeedClickGame, {
    time: "2000"
  }));
}
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3825aa0dc8ed70fa5224")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44NjMxYjBmM2VjYjRiMDI2ZjFhOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDTDtBQUU1QyxTQUFTSSxjQUFjQSxDQUFDQyxLQUFLLEVBQUU7RUFDM0IsSUFBQUMsU0FBQSxHQUF3QkosK0NBQVEsQ0FBQ0csS0FBSyxDQUFDRSxJQUFJLENBQUM7SUFBQUMsVUFBQSxHQUFBQyxjQUFBLENBQUFILFNBQUE7SUFBckNDLElBQUksR0FBQUMsVUFBQTtJQUFFRSxPQUFPLEdBQUFGLFVBQUE7RUFDcEIsSUFBQUcsVUFBQSxHQUE0QlQsK0NBQVEsQ0FBQyxDQUFDLENBQUM7SUFBQVUsVUFBQSxHQUFBSCxjQUFBLENBQUFFLFVBQUE7SUFBaENFLE1BQU0sR0FBQUQsVUFBQTtJQUFFRSxTQUFTLEdBQUFGLFVBQUE7RUFFeEIsU0FBU0csV0FBV0EsQ0FBQSxFQUFHLENBRXZCO0VBRUFkLGdEQUFTLENBQUMsWUFBTTtJQUVaLElBQU1lLFVBQVUsR0FBR0MsV0FBVyxDQUFDLFlBQU07TUFDakMsSUFBSVYsSUFBSSxHQUFHLENBQUMsRUFBRTtRQUNWRyxPQUFPLENBQUMsVUFBQVEsUUFBUTtVQUFBLE9BQUlBLFFBQVEsR0FBRyxFQUFFO1FBQUEsRUFBQztNQUN0QyxDQUFDLE1BQU07UUFDSFIsT0FBTyxDQUFDLENBQUMsQ0FBQztNQUNkO0lBQ0osQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUVOLE9BQU8sWUFBTTtNQUNUUyxhQUFhLENBQUNILFVBQVUsQ0FBQztJQUM3QixDQUFDO0VBQ0wsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVOLG9CQUNJaEIsMERBQUEsMkJBQ0lBLDBEQUFBO0lBQVFxQixPQUFPLEVBQUVOO0VBQVksR0FBQyxXQUFpQixDQUFDLGVBQ2hEZiwwREFBQSxhQUFJLGFBQVcsRUFBQ08sSUFBUyxDQUFDLGVBQzFCUCwwREFBQSxhQUFJLGVBQWEsRUFBQ2EsTUFBVyxDQUM1QixDQUFDO0FBRWQ7QUFFQSxTQUFTUyxHQUFHQSxDQUFBLEVBQUc7RUFDWCxvQkFDSXRCLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNJQSwwREFBQSxDQUFDSSxjQUFjO0lBQUNHLElBQUksRUFBQztFQUFNLENBQUMsQ0FDOUIsQ0FBQztBQUVYO0FBRUEsSUFBTWlCLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBR3hCLDREQUFVLENBQUNxQixTQUFTLENBQUM7QUFDbENHLElBQUksQ0FBQ0MsTUFBTSxlQUFDNUIsMERBQUEsQ0FBQ3NCLEdBQUcsTUFBQyxDQUFDLENBQUM7Ozs7Ozs7O1VDN0NuQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA4X0R6aWVuXzEyLTE0LzAxX3VzZUVmZmVjdF8tX2NpYWdfZGFsc3p5X3phZGFuLzAyX1phZGFuaWVfMi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcblxuZnVuY3Rpb24gU3BlZWRDbGlja0dhbWUocHJvcHMpIHtcbiAgICBjb25zdCBbdGltZSwgc2V0VGltZV0gPSB1c2VTdGF0ZShwcm9wcy50aW1lKVxuICAgIGNvbnN0IFtwb2ludHMsIHNldFBvaW50c10gPSB1c2VTdGF0ZSgwKVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XG5cbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IG15SW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGltZSA+IDApIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lKHByZXZUaW1lID0+IHByZXZUaW1lIC0gNTApXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldFRpbWUoMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgNTApXG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwobXlJbnRlcnZhbClcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5DbGljayBtZSE8L2J1dHRvbj5cbiAgICAgICAgICAgIDxoMT5UaW1lIGxlZnQ6IHt0aW1lfTwvaDE+XG4gICAgICAgICAgICA8aDI+WW91ciBwb2ludHM6IHtwb2ludHN9PC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBBcHAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxTcGVlZENsaWNrR2FtZSB0aW1lPVwiMjAwMFwiLz5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5yb290LnJlbmRlcig8QXBwLz4pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMzgyNWFhMGRjOGVkNzBmYTUyMjRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZVJvb3QiLCJTcGVlZENsaWNrR2FtZSIsInByb3BzIiwiX3VzZVN0YXRlIiwidGltZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInNldFRpbWUiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInBvaW50cyIsInNldFBvaW50cyIsImhhbmRsZUNsaWNrIiwibXlJbnRlcnZhbCIsInNldEludGVydmFsIiwicHJldlRpbWUiLCJjbGVhckludGVydmFsIiwiY3JlYXRlRWxlbWVudCIsIm9uQ2xpY2siLCJBcHAiLCJGcmFnbWVudCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==