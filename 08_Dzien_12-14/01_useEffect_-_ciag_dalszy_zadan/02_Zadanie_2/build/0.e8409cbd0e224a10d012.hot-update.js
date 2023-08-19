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
/******/ 	__webpack_require__.h = () => ("abd62377f94778d870fc")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lODQwOWNiZDBlMjI0YTEwZDAxMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDTDtBQUU1QyxTQUFTSSxjQUFjQSxDQUFDQyxLQUFLLEVBQUU7RUFDM0IsSUFBQUMsU0FBQSxHQUF3QkosK0NBQVEsQ0FBQ0csS0FBSyxDQUFDRSxJQUFJLENBQUM7SUFBQUMsVUFBQSxHQUFBQyxjQUFBLENBQUFILFNBQUE7SUFBckNDLElBQUksR0FBQUMsVUFBQTtJQUFFRSxPQUFPLEdBQUFGLFVBQUE7RUFDcEIsSUFBQUcsVUFBQSxHQUE0QlQsK0NBQVEsQ0FBQyxDQUFDLENBQUM7SUFBQVUsVUFBQSxHQUFBSCxjQUFBLENBQUFFLFVBQUE7SUFBaENFLE1BQU0sR0FBQUQsVUFBQTtJQUFFRSxTQUFTLEdBQUFGLFVBQUE7RUFDeEIsSUFBQUcsVUFBQSxHQUE4QmIsK0NBQVEsQ0FBQ0csS0FBSyxDQUFDRSxJQUFJLENBQUM7SUFBQVMsVUFBQSxHQUFBUCxjQUFBLENBQUFNLFVBQUE7SUFBM0NFLE9BQU8sR0FBQUQsVUFBQTtJQUFFRSxVQUFVLEdBQUFGLFVBQUE7RUFFMUIsU0FBU0csV0FBV0EsQ0FBQSxFQUFHO0lBRW5CLElBQUlaLElBQUksR0FBRyxDQUFDLEVBQUU7TUFDVk8sU0FBUyxDQUFDLFVBQUFNLFVBQVU7UUFBQSxPQUFJQSxVQUFVLEdBQUcsQ0FBQztNQUFBLEVBQUM7TUFDdkNGLFVBQVUsQ0FBQ0QsT0FBTyxHQUFHLEVBQUUsQ0FBQztNQUN4QkksT0FBTyxDQUFDQyxHQUFHLENBQUNMLE9BQU8sQ0FBQztNQUNwQlAsT0FBTyxDQUFDTyxPQUFPLENBQUM7SUFDcEI7RUFDSjtFQUVBaEIsZ0RBQVMsQ0FBQyxZQUFNO0lBRVosSUFBTXNCLFVBQVUsR0FBR0MsV0FBVyxDQUFDLFlBQU07TUFDakMsSUFBSWpCLElBQUksR0FBRyxDQUFDLEVBQUU7UUFDVkcsT0FBTyxDQUFDLFVBQUFlLFFBQVE7VUFBQSxPQUFJQSxRQUFRLEdBQUcsRUFBRTtRQUFBLEVBQUM7TUFDdEMsQ0FBQyxNQUFNO1FBQ0hmLE9BQU8sQ0FBQyxDQUFDLENBQUM7TUFDZDtJQUNKLENBQUMsRUFBRSxJQUFJLENBQUM7SUFFUixPQUFPLFlBQU07TUFDVGdCLGFBQWEsQ0FBQ0gsVUFBVSxDQUFDO0lBQzdCLENBQUM7RUFDTCxDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU4sb0JBQ0l2QiwwREFBQSwyQkFDSUEsMERBQUE7SUFBUTRCLE9BQU8sRUFBRVQ7RUFBWSxHQUFDLFdBQWlCLENBQUMsZUFDaERuQiwwREFBQSxhQUFJLGFBQVcsRUFBQ08sSUFBUyxDQUFDLGVBQzFCUCwwREFBQSxhQUFJLGVBQWEsRUFBQ2EsTUFBVyxDQUM1QixDQUFDO0FBRWQ7QUFFQSxTQUFTZ0IsR0FBR0EsQ0FBQSxFQUFHO0VBQ1gsb0JBQ0k3QiwwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUEsQ0FBQ0ksY0FBYztJQUFDRyxJQUFJLEVBQUM7RUFBTSxDQUFDLENBQzlCLENBQUM7QUFFWDtBQUVBLElBQU13QixTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUcvQiw0REFBVSxDQUFDNEIsU0FBUyxDQUFDO0FBQ2xDRyxJQUFJLENBQUNDLE1BQU0sZUFBQ25DLDBEQUFBLENBQUM2QixHQUFHLE1BQUMsQ0FBQyxDQUFDOzs7Ozs7OztVQ3BEbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOF9Eemllbl8xMi0xNC8wMV91c2VFZmZlY3RfLV9jaWFnX2RhbHN6eV96YWRhbi8wMl9aYWRhbmllXzIvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5cbmZ1bmN0aW9uIFNwZWVkQ2xpY2tHYW1lKHByb3BzKSB7XG4gICAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUocHJvcHMudGltZSlcbiAgICBjb25zdCBbcG9pbnRzLCBzZXRQb2ludHNdID0gdXNlU3RhdGUoMClcbiAgICBjb25zdCBbbmV3VGltZSwgc2V0TmV3VGltZV0gPSB1c2VTdGF0ZShwcm9wcy50aW1lKVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XG5cbiAgICAgICAgaWYgKHRpbWUgPiAwKSB7XG4gICAgICAgICAgICBzZXRQb2ludHMocHJldlBvaW50cyA9PiBwcmV2UG9pbnRzICsgMSlcbiAgICAgICAgICAgIHNldE5ld1RpbWUobmV3VGltZSAtIDUwKVxuICAgICAgICAgICAgY29uc29sZS5sb2cobmV3VGltZSlcbiAgICAgICAgICAgIHNldFRpbWUobmV3VGltZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgbXlJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aW1lID4gMCkge1xuICAgICAgICAgICAgICAgIHNldFRpbWUocHJldlRpbWUgPT4gcHJldlRpbWUgLSA1MClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZSgwKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDAwKVxuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKG15SW50ZXJ2YWwpXG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30+Q2xpY2sgbWUhPC9idXR0b24+XG4gICAgICAgICAgICA8aDE+VGltZSBsZWZ0OiB7dGltZX08L2gxPlxuICAgICAgICAgICAgPGgyPllvdXIgcG9pbnRzOiB7cG9pbnRzfTwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZnVuY3Rpb24gQXBwKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8U3BlZWRDbGlja0dhbWUgdGltZT1cIjIwMDBcIi8+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xucm9vdC5yZW5kZXIoPEFwcC8+KTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImFiZDYyMzc3Zjk0Nzc4ZDg3MGZjXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjcmVhdGVSb290IiwiU3BlZWRDbGlja0dhbWUiLCJwcm9wcyIsIl91c2VTdGF0ZSIsInRpbWUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJzZXRUaW1lIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJwb2ludHMiLCJzZXRQb2ludHMiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsIm5ld1RpbWUiLCJzZXROZXdUaW1lIiwiaGFuZGxlQ2xpY2siLCJwcmV2UG9pbnRzIiwiY29uc29sZSIsImxvZyIsIm15SW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInByZXZUaW1lIiwiY2xlYXJJbnRlcnZhbCIsImNyZWF0ZUVsZW1lbnQiLCJvbkNsaWNrIiwiQXBwIiwiRnJhZ21lbnQiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=