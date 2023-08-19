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
  function handleClick() {
    var newTime = props.time;
    if (time > 0) {
      setPoints(function (prevPoints) {
        return prevPoints + 1;
      });
      setTime(newTime - 50);
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
    }, 500);
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
/******/ 	__webpack_require__.h = () => ("df94a4281f9c270531ea")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iODJmMzcxZTNhNzJkZDVhYmJkZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDTDtBQUU1QyxTQUFTSSxjQUFjQSxDQUFDQyxLQUFLLEVBQUU7RUFDM0IsSUFBQUMsU0FBQSxHQUF3QkosK0NBQVEsQ0FBQ0csS0FBSyxDQUFDRSxJQUFJLENBQUM7SUFBQUMsVUFBQSxHQUFBQyxjQUFBLENBQUFILFNBQUE7SUFBckNDLElBQUksR0FBQUMsVUFBQTtJQUFFRSxPQUFPLEdBQUFGLFVBQUE7RUFDcEIsSUFBQUcsVUFBQSxHQUE0QlQsK0NBQVEsQ0FBQyxDQUFDLENBQUM7SUFBQVUsVUFBQSxHQUFBSCxjQUFBLENBQUFFLFVBQUE7SUFBaENFLE1BQU0sR0FBQUQsVUFBQTtJQUFFRSxTQUFTLEdBQUFGLFVBQUE7RUFFeEIsU0FBU0csV0FBV0EsQ0FBQSxFQUFHO0lBQ25CLElBQU1DLE9BQU8sR0FBR1gsS0FBSyxDQUFDRSxJQUFJO0lBRTFCLElBQUlBLElBQUksR0FBRyxDQUFDLEVBQUU7TUFDVk8sU0FBUyxDQUFDLFVBQUFHLFVBQVU7UUFBQSxPQUFJQSxVQUFVLEdBQUcsQ0FBQztNQUFBLEVBQUM7TUFDdkNQLE9BQU8sQ0FBQ00sT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUN6QixDQUFDLE1BQU0sQ0FFUDtFQUNKO0VBRUFmLGdEQUFTLENBQUMsWUFBTTtJQUVaLElBQU1pQixVQUFVLEdBQUdDLFdBQVcsQ0FBQyxZQUFNO01BQ2pDLElBQUlaLElBQUksR0FBRyxDQUFDLEVBQUU7UUFDVkcsT0FBTyxDQUFDLFVBQUFVLFFBQVE7VUFBQSxPQUFJQSxRQUFRLEdBQUcsRUFBRTtRQUFBLEVBQUM7TUFDdEMsQ0FBQyxNQUFNO1FBQ0hWLE9BQU8sQ0FBQyxDQUFDLENBQUM7TUFDZDtJQUNKLENBQUMsRUFBRSxHQUFHLENBQUM7SUFFUCxPQUFPLFlBQU07TUFDVFcsYUFBYSxDQUFDSCxVQUFVLENBQUM7SUFDN0IsQ0FBQztFQUNMLENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixvQkFDSWxCLDBEQUFBLDJCQUNJQSwwREFBQTtJQUFRdUIsT0FBTyxFQUFFUjtFQUFZLEdBQUMsV0FBaUIsQ0FBQyxlQUNoRGYsMERBQUEsYUFBSSxhQUFXLEVBQUNPLElBQVMsQ0FBQyxlQUMxQlAsMERBQUEsYUFBSSxlQUFhLEVBQUNhLE1BQVcsQ0FDNUIsQ0FBQztBQUVkO0FBRUEsU0FBU1csR0FBR0EsQ0FBQSxFQUFHO0VBQ1gsb0JBQ0l4QiwwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUEsQ0FBQ0ksY0FBYztJQUFDRyxJQUFJLEVBQUM7RUFBTSxDQUFDLENBQzlCLENBQUM7QUFFWDtBQUVBLElBQU1tQixTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUcxQiw0REFBVSxDQUFDdUIsU0FBUyxDQUFDO0FBQ2xDRyxJQUFJLENBQUNDLE1BQU0sZUFBQzlCLDBEQUFBLENBQUN3QixHQUFHLE1BQUMsQ0FBQyxDQUFDOzs7Ozs7OztVQ3BEbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOF9Eemllbl8xMi0xNC8wMV91c2VFZmZlY3RfLV9jaWFnX2RhbHN6eV96YWRhbi8wMl9aYWRhbmllXzIvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5cbmZ1bmN0aW9uIFNwZWVkQ2xpY2tHYW1lKHByb3BzKSB7XG4gICAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUocHJvcHMudGltZSlcbiAgICBjb25zdCBbcG9pbnRzLCBzZXRQb2ludHNdID0gdXNlU3RhdGUoMClcblxuICAgIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xuICAgICAgICBjb25zdCBuZXdUaW1lID0gcHJvcHMudGltZVxuXG4gICAgICAgIGlmICh0aW1lID4gMCkge1xuICAgICAgICAgICAgc2V0UG9pbnRzKHByZXZQb2ludHMgPT4gcHJldlBvaW50cyArIDEpXG4gICAgICAgICAgICBzZXRUaW1lKG5ld1RpbWUgLSA1MClcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgICAgICBjb25zdCBteUludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRpbWUgPiAwKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZShwcmV2VGltZSA9PiBwcmV2VGltZSAtIDUwKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lKDApXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDUwMClcblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChteUludGVydmFsKVxuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9PkNsaWNrIG1lITwvYnV0dG9uPlxuICAgICAgICAgICAgPGgxPlRpbWUgbGVmdDoge3RpbWV9PC9oMT5cbiAgICAgICAgICAgIDxoMj5Zb3VyIHBvaW50czoge3BvaW50c308L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFNwZWVkQ2xpY2tHYW1lIHRpbWU9XCIyMDAwXCIvPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKDxBcHAvPik7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkZjk0YTQyODFmOWMyNzA1MzFlYVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY3JlYXRlUm9vdCIsIlNwZWVkQ2xpY2tHYW1lIiwicHJvcHMiLCJfdXNlU3RhdGUiLCJ0aW1lIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2V0VGltZSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwicG9pbnRzIiwic2V0UG9pbnRzIiwiaGFuZGxlQ2xpY2siLCJuZXdUaW1lIiwicHJldlBvaW50cyIsIm15SW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInByZXZUaW1lIiwiY2xlYXJJbnRlcnZhbCIsImNyZWF0ZUVsZW1lbnQiLCJvbkNsaWNrIiwiQXBwIiwiRnJhZ21lbnQiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=