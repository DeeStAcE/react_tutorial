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
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    buttonDisabled = _useState8[0],
    setButtonDisabled = _useState8[1];
  function handleClick() {
    if (time > 0) {
      setPoints(function (prevPoints) {
        return prevPoints + 1;
      });
      setNewTime(newTime - 50);
      setTime(newTime);
    }
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var myInterval = setInterval(function () {
      setTime(function (prevTime) {
        return prevTime - 50;
      });
    }, 50);
    return function () {
      clearInterval(myInterval);
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (time <= 0) {
      setButtonDisabled(true);
      setTime(0);
    }
  }, [time]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleClick,
    disabled: buttonDisabled
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
/******/ 	__webpack_require__.h = () => ("2ca8e2a94a88bd6535ac")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yMjZjNTA3MWZlY2IyNGNkNzI3YS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDTDtBQUU1QyxTQUFTSSxjQUFjQSxDQUFDQyxLQUFLLEVBQUU7RUFDM0IsSUFBQUMsU0FBQSxHQUF3QkosK0NBQVEsQ0FBQ0csS0FBSyxDQUFDRSxJQUFJLENBQUM7SUFBQUMsVUFBQSxHQUFBQyxjQUFBLENBQUFILFNBQUE7SUFBckNDLElBQUksR0FBQUMsVUFBQTtJQUFFRSxPQUFPLEdBQUFGLFVBQUE7RUFDcEIsSUFBQUcsVUFBQSxHQUE0QlQsK0NBQVEsQ0FBQyxDQUFDLENBQUM7SUFBQVUsVUFBQSxHQUFBSCxjQUFBLENBQUFFLFVBQUE7SUFBaENFLE1BQU0sR0FBQUQsVUFBQTtJQUFFRSxTQUFTLEdBQUFGLFVBQUE7RUFDeEIsSUFBQUcsVUFBQSxHQUE4QmIsK0NBQVEsQ0FBQ0csS0FBSyxDQUFDRSxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQUFTLFVBQUEsR0FBQVAsY0FBQSxDQUFBTSxVQUFBO0lBQWhERSxPQUFPLEdBQUFELFVBQUE7SUFBRUUsVUFBVSxHQUFBRixVQUFBO0VBQzFCLElBQUFHLFVBQUEsR0FBNENqQiwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUFBa0IsVUFBQSxHQUFBWCxjQUFBLENBQUFVLFVBQUE7SUFBcERFLGNBQWMsR0FBQUQsVUFBQTtJQUFFRSxpQkFBaUIsR0FBQUYsVUFBQTtFQUV4QyxTQUFTRyxXQUFXQSxDQUFBLEVBQUc7SUFDbkIsSUFBSWhCLElBQUksR0FBRyxDQUFDLEVBQUU7TUFDVk8sU0FBUyxDQUFDLFVBQUFVLFVBQVU7UUFBQSxPQUFJQSxVQUFVLEdBQUcsQ0FBQztNQUFBLEVBQUM7TUFDdkNOLFVBQVUsQ0FBQ0QsT0FBTyxHQUFHLEVBQUUsQ0FBQztNQUN4QlAsT0FBTyxDQUFDTyxPQUFPLENBQUM7SUFDcEI7RUFDSjtFQUVBaEIsZ0RBQVMsQ0FBQyxZQUFNO0lBQ1osSUFBTXdCLFVBQVUsR0FBR0MsV0FBVyxDQUFDLFlBQU07TUFDakNoQixPQUFPLENBQUMsVUFBQWlCLFFBQVE7UUFBQSxPQUFJQSxRQUFRLEdBQUcsRUFBRTtNQUFBLEVBQUM7SUFDdEMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUVOLE9BQU8sWUFBTTtNQUNUQyxhQUFhLENBQUNILFVBQVUsQ0FBQztJQUM3QixDQUFDO0VBQ0wsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVOeEIsZ0RBQVMsQ0FBQyxZQUFNO0lBQ1osSUFBSU0sSUFBSSxJQUFJLENBQUMsRUFBRTtNQUNYZSxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7TUFDdkJaLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDZDtFQUNKLENBQUMsRUFBRSxDQUFDSCxJQUFJLENBQUMsQ0FBQztFQUVWLG9CQUNJUCwwREFBQSwyQkFDSUEsMERBQUE7SUFBUThCLE9BQU8sRUFBRVAsV0FBWTtJQUFDUSxRQUFRLEVBQUVWO0VBQWUsR0FBQyxXQUFpQixDQUFDLGVBQzFFckIsMERBQUEsYUFBSSxhQUFXLEVBQUNPLElBQVMsQ0FBQyxlQUMxQlAsMERBQUEsYUFBSSxlQUFhLEVBQUNhLE1BQVcsQ0FDNUIsQ0FBQztBQUVkO0FBRUEsU0FBU21CLEdBQUdBLENBQUEsRUFBRztFQUNYLG9CQUNJaEMsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBLENBQUNJLGNBQWM7SUFBQ0csSUFBSSxFQUFDO0VBQU0sQ0FBQyxDQUM5QixDQUFDO0FBRVg7QUFFQSxJQUFNMkIsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHbEMsNERBQVUsQ0FBQytCLFNBQVMsQ0FBQztBQUNsQ0csSUFBSSxDQUFDQyxNQUFNLGVBQUN0QywwREFBQSxDQUFDZ0MsR0FBRyxNQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7VUNyRG5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDhfRHppZW5fMTItMTQvMDFfdXNlRWZmZWN0Xy1fY2lhZ19kYWxzenlfemFkYW4vMDJfWmFkYW5pZV8yL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5mdW5jdGlvbiBTcGVlZENsaWNrR2FtZShwcm9wcykge1xuICAgIGNvbnN0IFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlKHByb3BzLnRpbWUpXG4gICAgY29uc3QgW3BvaW50cywgc2V0UG9pbnRzXSA9IHVzZVN0YXRlKDApXG4gICAgY29uc3QgW25ld1RpbWUsIHNldE5ld1RpbWVdID0gdXNlU3RhdGUocHJvcHMudGltZSAtIDUwKVxuICAgIGNvbnN0IFtidXR0b25EaXNhYmxlZCwgc2V0QnV0dG9uRGlzYWJsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XG4gICAgICAgIGlmICh0aW1lID4gMCkge1xuICAgICAgICAgICAgc2V0UG9pbnRzKHByZXZQb2ludHMgPT4gcHJldlBvaW50cyArIDEpXG4gICAgICAgICAgICBzZXROZXdUaW1lKG5ld1RpbWUgLSA1MClcbiAgICAgICAgICAgIHNldFRpbWUobmV3VGltZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG15SW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lKHByZXZUaW1lID0+IHByZXZUaW1lIC0gNTApXG4gICAgICAgIH0sIDUwKVxuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKG15SW50ZXJ2YWwpXG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAodGltZSA8PSAwKSB7XG4gICAgICAgICAgICBzZXRCdXR0b25EaXNhYmxlZCh0cnVlKVxuICAgICAgICAgICAgc2V0VGltZSgwKVxuICAgICAgICB9XG4gICAgfSwgW3RpbWVdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBkaXNhYmxlZD17YnV0dG9uRGlzYWJsZWR9PkNsaWNrIG1lITwvYnV0dG9uPlxuICAgICAgICAgICAgPGgxPlRpbWUgbGVmdDoge3RpbWV9PC9oMT5cbiAgICAgICAgICAgIDxoMj5Zb3VyIHBvaW50czoge3BvaW50c308L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFNwZWVkQ2xpY2tHYW1lIHRpbWU9XCIyMDAwXCIvPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKDxBcHAvPik7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyY2E4ZTJhOTRhODhiZDY1MzVhY1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY3JlYXRlUm9vdCIsIlNwZWVkQ2xpY2tHYW1lIiwicHJvcHMiLCJfdXNlU3RhdGUiLCJ0aW1lIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2V0VGltZSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwicG9pbnRzIiwic2V0UG9pbnRzIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJuZXdUaW1lIiwic2V0TmV3VGltZSIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwiYnV0dG9uRGlzYWJsZWQiLCJzZXRCdXR0b25EaXNhYmxlZCIsImhhbmRsZUNsaWNrIiwicHJldlBvaW50cyIsIm15SW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInByZXZUaW1lIiwiY2xlYXJJbnRlcnZhbCIsImNyZWF0ZUVsZW1lbnQiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJBcHAiLCJGcmFnbWVudCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==