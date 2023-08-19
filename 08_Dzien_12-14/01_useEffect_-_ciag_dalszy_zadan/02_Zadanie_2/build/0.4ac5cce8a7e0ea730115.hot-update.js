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
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.time),
    _useState6 = _slicedToArray(_useState5, 2),
    newTime = _useState6[0],
    setNewTime = _useState6[1];
  function handleClick() {
    if (time > 0) {
      setPoints(function (prevPoints) {
        return prevPoints + 1;
      });
      setNewTime(function (prevNewTime) {
        return prevNewTime - 50;
      });
      setTime(newTime);
    } else {}
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var myInterval = setInterval(function () {
      if (time > 0) {
        setTime(function (prevTime) {
          return prevTime - 50;
        });
      } else {
        setTime(0);
      }
    }, 1000);
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
/******/ 	__webpack_require__.h = () => ("7d8d4e95d7acee0a78ad")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40YWM1Y2NlOGE3ZTBlYTczMDExNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDTDtBQUU1QyxTQUFTSSxjQUFjQSxDQUFDQyxLQUFLLEVBQUU7RUFDM0IsSUFBQUMsU0FBQSxHQUF3QkosK0NBQVEsQ0FBQ0csS0FBSyxDQUFDRSxJQUFJLENBQUM7SUFBQUMsVUFBQSxHQUFBQyxjQUFBLENBQUFILFNBQUE7SUFBckNDLElBQUksR0FBQUMsVUFBQTtJQUFFRSxPQUFPLEdBQUFGLFVBQUE7RUFDcEIsSUFBQUcsVUFBQSxHQUE0QlQsK0NBQVEsQ0FBQyxDQUFDLENBQUM7SUFBQVUsVUFBQSxHQUFBSCxjQUFBLENBQUFFLFVBQUE7SUFBaENFLE1BQU0sR0FBQUQsVUFBQTtJQUFFRSxTQUFTLEdBQUFGLFVBQUE7RUFDeEIsSUFBQUcsVUFBQSxHQUE4QmIsK0NBQVEsQ0FBQ0csS0FBSyxDQUFDRSxJQUFJLENBQUM7SUFBQVMsVUFBQSxHQUFBUCxjQUFBLENBQUFNLFVBQUE7SUFBM0NFLE9BQU8sR0FBQUQsVUFBQTtJQUFFRSxVQUFVLEdBQUFGLFVBQUE7RUFFMUIsU0FBU0csV0FBV0EsQ0FBQSxFQUFHO0lBRW5CLElBQUlaLElBQUksR0FBRyxDQUFDLEVBQUU7TUFDVk8sU0FBUyxDQUFDLFVBQUFNLFVBQVU7UUFBQSxPQUFJQSxVQUFVLEdBQUcsQ0FBQztNQUFBLEVBQUM7TUFDdkNGLFVBQVUsQ0FBQyxVQUFBRyxXQUFXO1FBQUEsT0FBSUEsV0FBVyxHQUFHLEVBQUU7TUFBQSxFQUFDO01BQzNDWCxPQUFPLENBQUNPLE9BQU8sQ0FBQztJQUNwQixDQUFDLE1BQU0sQ0FFUDtFQUNKO0VBRUFoQixnREFBUyxDQUFDLFlBQU07SUFFWixJQUFNcUIsVUFBVSxHQUFHQyxXQUFXLENBQUMsWUFBTTtNQUNqQyxJQUFJaEIsSUFBSSxHQUFHLENBQUMsRUFBRTtRQUNWRyxPQUFPLENBQUMsVUFBQWMsUUFBUTtVQUFBLE9BQUlBLFFBQVEsR0FBRyxFQUFFO1FBQUEsRUFBQztNQUN0QyxDQUFDLE1BQU07UUFDSGQsT0FBTyxDQUFDLENBQUMsQ0FBQztNQUNkO0lBQ0osQ0FBQyxFQUFFLElBQUksQ0FBQztJQUVSLE9BQU8sWUFBTTtNQUNUZSxhQUFhLENBQUNILFVBQVUsQ0FBQztJQUM3QixDQUFDO0VBQ0wsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVOLG9CQUNJdEIsMERBQUEsMkJBQ0lBLDBEQUFBO0lBQVEyQixPQUFPLEVBQUVSO0VBQVksR0FBQyxXQUFpQixDQUFDLGVBQ2hEbkIsMERBQUEsYUFBSSxhQUFXLEVBQUNPLElBQVMsQ0FBQyxlQUMxQlAsMERBQUEsYUFBSSxlQUFhLEVBQUNhLE1BQVcsQ0FDNUIsQ0FBQztBQUVkO0FBRUEsU0FBU2UsR0FBR0EsQ0FBQSxFQUFHO0VBQ1gsb0JBQ0k1QiwwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUEsQ0FBQ0ksY0FBYztJQUFDRyxJQUFJLEVBQUM7RUFBTSxDQUFDLENBQzlCLENBQUM7QUFFWDtBQUVBLElBQU11QixTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUc5Qiw0REFBVSxDQUFDMkIsU0FBUyxDQUFDO0FBQ2xDRyxJQUFJLENBQUNDLE1BQU0sZUFBQ2xDLDBEQUFBLENBQUM0QixHQUFHLE1BQUMsQ0FBQyxDQUFDOzs7Ozs7OztVQ3JEbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOF9Eemllbl8xMi0xNC8wMV91c2VFZmZlY3RfLV9jaWFnX2RhbHN6eV96YWRhbi8wMl9aYWRhbmllXzIvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5cbmZ1bmN0aW9uIFNwZWVkQ2xpY2tHYW1lKHByb3BzKSB7XG4gICAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUocHJvcHMudGltZSlcbiAgICBjb25zdCBbcG9pbnRzLCBzZXRQb2ludHNdID0gdXNlU3RhdGUoMClcbiAgICBjb25zdCBbbmV3VGltZSwgc2V0TmV3VGltZV0gPSB1c2VTdGF0ZShwcm9wcy50aW1lKVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XG5cbiAgICAgICAgaWYgKHRpbWUgPiAwKSB7XG4gICAgICAgICAgICBzZXRQb2ludHMocHJldlBvaW50cyA9PiBwcmV2UG9pbnRzICsgMSlcbiAgICAgICAgICAgIHNldE5ld1RpbWUocHJldk5ld1RpbWUgPT4gcHJldk5ld1RpbWUgLSA1MClcbiAgICAgICAgICAgIHNldFRpbWUobmV3VGltZSlcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgICAgICBjb25zdCBteUludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRpbWUgPiAwKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZShwcmV2VGltZSA9PiBwcmV2VGltZSAtIDUwKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lKDApXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMDApXG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwobXlJbnRlcnZhbClcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5DbGljayBtZSE8L2J1dHRvbj5cbiAgICAgICAgICAgIDxoMT5UaW1lIGxlZnQ6IHt0aW1lfTwvaDE+XG4gICAgICAgICAgICA8aDI+WW91ciBwb2ludHM6IHtwb2ludHN9PC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBBcHAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxTcGVlZENsaWNrR2FtZSB0aW1lPVwiMjAwMFwiLz5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5yb290LnJlbmRlcig8QXBwLz4pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiN2Q4ZDRlOTVkN2FjZWUwYTc4YWRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZVJvb3QiLCJTcGVlZENsaWNrR2FtZSIsInByb3BzIiwiX3VzZVN0YXRlIiwidGltZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInNldFRpbWUiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInBvaW50cyIsInNldFBvaW50cyIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwibmV3VGltZSIsInNldE5ld1RpbWUiLCJoYW5kbGVDbGljayIsInByZXZQb2ludHMiLCJwcmV2TmV3VGltZSIsIm15SW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInByZXZUaW1lIiwiY2xlYXJJbnRlcnZhbCIsImNyZWF0ZUVsZW1lbnQiLCJvbkNsaWNrIiwiQXBwIiwiRnJhZ21lbnQiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=