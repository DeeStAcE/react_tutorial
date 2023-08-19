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
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.time - 50),
    _useState6 = _slicedToArray(_useState5, 2),
    newTime = _useState6[0],
    setNewTime = _useState6[1];
  function handleClick() {
    if (time > 0) {
      setPoints(function (prevPoints) {
        return prevPoints + 1;
      });
      setNewTime(newTime - 50);
      console.log(newTime);
      setTime(newTime);
    }
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
/******/ 	__webpack_require__.h = () => ("b1809a7b3697ccecdb11")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kMzIwYzVmNzdmZjg3YTEyZDg3MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDTDtBQUU1QyxTQUFTSSxjQUFjQSxDQUFDQyxLQUFLLEVBQUU7RUFDM0IsSUFBQUMsU0FBQSxHQUF3QkosK0NBQVEsQ0FBQ0csS0FBSyxDQUFDRSxJQUFJLENBQUM7SUFBQUMsVUFBQSxHQUFBQyxjQUFBLENBQUFILFNBQUE7SUFBckNDLElBQUksR0FBQUMsVUFBQTtJQUFFRSxPQUFPLEdBQUFGLFVBQUE7RUFDcEIsSUFBQUcsVUFBQSxHQUE0QlQsK0NBQVEsQ0FBQyxDQUFDLENBQUM7SUFBQVUsVUFBQSxHQUFBSCxjQUFBLENBQUFFLFVBQUE7SUFBaENFLE1BQU0sR0FBQUQsVUFBQTtJQUFFRSxTQUFTLEdBQUFGLFVBQUE7RUFDeEIsSUFBQUcsVUFBQSxHQUE4QmIsK0NBQVEsQ0FBQ0csS0FBSyxDQUFDRSxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQUFTLFVBQUEsR0FBQVAsY0FBQSxDQUFBTSxVQUFBO0lBQWhERSxPQUFPLEdBQUFELFVBQUE7SUFBRUUsVUFBVSxHQUFBRixVQUFBO0VBRTFCLFNBQVNHLFdBQVdBLENBQUEsRUFBRztJQUVuQixJQUFJWixJQUFJLEdBQUcsQ0FBQyxFQUFFO01BQ1ZPLFNBQVMsQ0FBQyxVQUFBTSxVQUFVO1FBQUEsT0FBSUEsVUFBVSxHQUFHLENBQUM7TUFBQSxFQUFDO01BQ3ZDRixVQUFVLENBQUNELE9BQU8sR0FBRyxFQUFFLENBQUM7TUFDeEJJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxPQUFPLENBQUM7TUFDcEJQLE9BQU8sQ0FBQ08sT0FBTyxDQUFDO0lBQ3BCO0VBQ0o7RUFFQWhCLGdEQUFTLENBQUMsWUFBTTtJQUVaLElBQU1zQixVQUFVLEdBQUdDLFdBQVcsQ0FBQyxZQUFNO01BQ2pDLElBQUlqQixJQUFJLEdBQUcsQ0FBQyxFQUFFO1FBQ1ZHLE9BQU8sQ0FBQyxVQUFBZSxRQUFRO1VBQUEsT0FBSUEsUUFBUSxHQUFHLEVBQUU7UUFBQSxFQUFDO01BQ3RDLENBQUMsTUFBTTtRQUNIZixPQUFPLENBQUMsQ0FBQyxDQUFDO01BQ2Q7SUFDSixDQUFDLEVBQUUsSUFBSSxDQUFDO0lBRVIsT0FBTyxZQUFNO01BQ1RnQixhQUFhLENBQUNILFVBQVUsQ0FBQztJQUM3QixDQUFDO0VBQ0wsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVOLG9CQUNJdkIsMERBQUEsMkJBQ0lBLDBEQUFBO0lBQVE0QixPQUFPLEVBQUVUO0VBQVksR0FBQyxXQUFpQixDQUFDLGVBQ2hEbkIsMERBQUEsYUFBSSxhQUFXLEVBQUNPLElBQVMsQ0FBQyxlQUMxQlAsMERBQUEsYUFBSSxlQUFhLEVBQUNhLE1BQVcsQ0FDNUIsQ0FBQztBQUVkO0FBRUEsU0FBU2dCLEdBQUdBLENBQUEsRUFBRztFQUNYLG9CQUNJN0IsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBLENBQUNJLGNBQWM7SUFBQ0csSUFBSSxFQUFDO0VBQU0sQ0FBQyxDQUM5QixDQUFDO0FBRVg7QUFFQSxJQUFNd0IsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHL0IsNERBQVUsQ0FBQzRCLFNBQVMsQ0FBQztBQUNsQ0csSUFBSSxDQUFDQyxNQUFNLGVBQUNuQywwREFBQSxDQUFDNkIsR0FBRyxNQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7VUNwRG5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDhfRHppZW5fMTItMTQvMDFfdXNlRWZmZWN0Xy1fY2lhZ19kYWxzenlfemFkYW4vMDJfWmFkYW5pZV8yL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5mdW5jdGlvbiBTcGVlZENsaWNrR2FtZShwcm9wcykge1xuICAgIGNvbnN0IFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlKHByb3BzLnRpbWUpXG4gICAgY29uc3QgW3BvaW50cywgc2V0UG9pbnRzXSA9IHVzZVN0YXRlKDApXG4gICAgY29uc3QgW25ld1RpbWUsIHNldE5ld1RpbWVdID0gdXNlU3RhdGUocHJvcHMudGltZSAtIDUwKVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XG5cbiAgICAgICAgaWYgKHRpbWUgPiAwKSB7XG4gICAgICAgICAgICBzZXRQb2ludHMocHJldlBvaW50cyA9PiBwcmV2UG9pbnRzICsgMSlcbiAgICAgICAgICAgIHNldE5ld1RpbWUobmV3VGltZSAtIDUwKVxuICAgICAgICAgICAgY29uc29sZS5sb2cobmV3VGltZSlcbiAgICAgICAgICAgIHNldFRpbWUobmV3VGltZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgbXlJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aW1lID4gMCkge1xuICAgICAgICAgICAgICAgIHNldFRpbWUocHJldlRpbWUgPT4gcHJldlRpbWUgLSA1MClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZSgwKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDAwKVxuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKG15SW50ZXJ2YWwpXG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30+Q2xpY2sgbWUhPC9idXR0b24+XG4gICAgICAgICAgICA8aDE+VGltZSBsZWZ0OiB7dGltZX08L2gxPlxuICAgICAgICAgICAgPGgyPllvdXIgcG9pbnRzOiB7cG9pbnRzfTwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZnVuY3Rpb24gQXBwKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8U3BlZWRDbGlja0dhbWUgdGltZT1cIjIwMDBcIi8+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xucm9vdC5yZW5kZXIoPEFwcC8+KTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImIxODA5YTdiMzY5N2NjZWNkYjExXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjcmVhdGVSb290IiwiU3BlZWRDbGlja0dhbWUiLCJwcm9wcyIsIl91c2VTdGF0ZSIsInRpbWUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJzZXRUaW1lIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJwb2ludHMiLCJzZXRQb2ludHMiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsIm5ld1RpbWUiLCJzZXROZXdUaW1lIiwiaGFuZGxlQ2xpY2siLCJwcmV2UG9pbnRzIiwiY29uc29sZSIsImxvZyIsIm15SW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInByZXZUaW1lIiwiY2xlYXJJbnRlcnZhbCIsImNyZWF0ZUVsZW1lbnQiLCJvbkNsaWNrIiwiQXBwIiwiRnJhZ21lbnQiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=