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
    var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.time),
      _useState6 = _slicedToArray(_useState5, 2),
      newTime = _useState6[0],
      setNewTime = _useState6[1];
    if (time > 0) {
      setPoints(function (prevPoints) {
        return prevPoints + 1;
      });
      setNewTime(function (prevNewTime) {
        return prevNewTime - 50;
      });
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
/******/ 	__webpack_require__.h = () => ("487a3312fee72542e3bf")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44ZGM5ZjMxODUxMzVkYzM5YTNmYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDTDtBQUU1QyxTQUFTSSxjQUFjQSxDQUFDQyxLQUFLLEVBQUU7RUFDM0IsSUFBQUMsU0FBQSxHQUF3QkosK0NBQVEsQ0FBQ0csS0FBSyxDQUFDRSxJQUFJLENBQUM7SUFBQUMsVUFBQSxHQUFBQyxjQUFBLENBQUFILFNBQUE7SUFBckNDLElBQUksR0FBQUMsVUFBQTtJQUFFRSxPQUFPLEdBQUFGLFVBQUE7RUFDcEIsSUFBQUcsVUFBQSxHQUE0QlQsK0NBQVEsQ0FBQyxDQUFDLENBQUM7SUFBQVUsVUFBQSxHQUFBSCxjQUFBLENBQUFFLFVBQUE7SUFBaENFLE1BQU0sR0FBQUQsVUFBQTtJQUFFRSxTQUFTLEdBQUFGLFVBQUE7RUFFeEIsU0FBU0csV0FBV0EsQ0FBQSxFQUFHO0lBQ25CLElBQUFDLFVBQUEsR0FBOEJkLCtDQUFRLENBQUNHLEtBQUssQ0FBQ0UsSUFBSSxDQUFDO01BQUFVLFVBQUEsR0FBQVIsY0FBQSxDQUFBTyxVQUFBO01BQTNDRSxPQUFPLEdBQUFELFVBQUE7TUFBRUUsVUFBVSxHQUFBRixVQUFBO0lBRTFCLElBQUlWLElBQUksR0FBRyxDQUFDLEVBQUU7TUFDVk8sU0FBUyxDQUFDLFVBQUFNLFVBQVU7UUFBQSxPQUFJQSxVQUFVLEdBQUcsQ0FBQztNQUFBLEVBQUM7TUFDdkNELFVBQVUsQ0FBQyxVQUFBRSxXQUFXO1FBQUEsT0FBSUEsV0FBVyxHQUFHLEVBQUU7TUFBQSxFQUFDO0lBQy9DLENBQUMsTUFBTSxDQUVQO0VBQ0o7RUFFQXBCLGdEQUFTLENBQUMsWUFBTTtJQUVaLElBQU1xQixVQUFVLEdBQUdDLFdBQVcsQ0FBQyxZQUFNO01BQ2pDLElBQUloQixJQUFJLEdBQUcsQ0FBQyxFQUFFO1FBQ1ZHLE9BQU8sQ0FBQyxVQUFBYyxRQUFRO1VBQUEsT0FBSUEsUUFBUSxHQUFHLEVBQUU7UUFBQSxFQUFDO01BQ3RDLENBQUMsTUFBTTtRQUNIZCxPQUFPLENBQUMsQ0FBQyxDQUFDO01BQ2Q7SUFDSixDQUFDLEVBQUUsR0FBRyxDQUFDO0lBRVAsT0FBTyxZQUFNO01BQ1RlLGFBQWEsQ0FBQ0gsVUFBVSxDQUFDO0lBQzdCLENBQUM7RUFDTCxDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU4sb0JBQ0l0QiwwREFBQSwyQkFDSUEsMERBQUE7SUFBUTJCLE9BQU8sRUFBRVo7RUFBWSxHQUFDLFdBQWlCLENBQUMsZUFDaERmLDBEQUFBLGFBQUksYUFBVyxFQUFDTyxJQUFTLENBQUMsZUFDMUJQLDBEQUFBLGFBQUksZUFBYSxFQUFDYSxNQUFXLENBQzVCLENBQUM7QUFFZDtBQUVBLFNBQVNlLEdBQUdBLENBQUEsRUFBRztFQUNYLG9CQUNJNUIsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBLENBQUNJLGNBQWM7SUFBQ0csSUFBSSxFQUFDO0VBQU0sQ0FBQyxDQUM5QixDQUFDO0FBRVg7QUFFQSxJQUFNdUIsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHOUIsNERBQVUsQ0FBQzJCLFNBQVMsQ0FBQztBQUNsQ0csSUFBSSxDQUFDQyxNQUFNLGVBQUNsQywwREFBQSxDQUFDNEIsR0FBRyxNQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7VUNwRG5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDhfRHppZW5fMTItMTQvMDFfdXNlRWZmZWN0Xy1fY2lhZ19kYWxzenlfemFkYW4vMDJfWmFkYW5pZV8yL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5mdW5jdGlvbiBTcGVlZENsaWNrR2FtZShwcm9wcykge1xuICAgIGNvbnN0IFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlKHByb3BzLnRpbWUpXG4gICAgY29uc3QgW3BvaW50cywgc2V0UG9pbnRzXSA9IHVzZVN0YXRlKDApXG5cbiAgICBmdW5jdGlvbiBoYW5kbGVDbGljaygpIHtcbiAgICAgICAgY29uc3QgW25ld1RpbWUsIHNldE5ld1RpbWVdID0gdXNlU3RhdGUocHJvcHMudGltZSlcblxuICAgICAgICBpZiAodGltZSA+IDApIHtcbiAgICAgICAgICAgIHNldFBvaW50cyhwcmV2UG9pbnRzID0+IHByZXZQb2ludHMgKyAxKVxuICAgICAgICAgICAgc2V0TmV3VGltZShwcmV2TmV3VGltZSA9PiBwcmV2TmV3VGltZSAtIDUwKVxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IG15SW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGltZSA+IDApIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lKHByZXZUaW1lID0+IHByZXZUaW1lIC0gNTApXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldFRpbWUoMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgNTAwKVxuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKG15SW50ZXJ2YWwpXG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30+Q2xpY2sgbWUhPC9idXR0b24+XG4gICAgICAgICAgICA8aDE+VGltZSBsZWZ0OiB7dGltZX08L2gxPlxuICAgICAgICAgICAgPGgyPllvdXIgcG9pbnRzOiB7cG9pbnRzfTwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZnVuY3Rpb24gQXBwKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8U3BlZWRDbGlja0dhbWUgdGltZT1cIjIwMDBcIi8+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xucm9vdC5yZW5kZXIoPEFwcC8+KTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjQ4N2EzMzEyZmVlNzI1NDJlM2JmXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjcmVhdGVSb290IiwiU3BlZWRDbGlja0dhbWUiLCJwcm9wcyIsIl91c2VTdGF0ZSIsInRpbWUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJzZXRUaW1lIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJwb2ludHMiLCJzZXRQb2ludHMiLCJoYW5kbGVDbGljayIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwibmV3VGltZSIsInNldE5ld1RpbWUiLCJwcmV2UG9pbnRzIiwicHJldk5ld1RpbWUiLCJteUludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJwcmV2VGltZSIsImNsZWFySW50ZXJ2YWwiLCJjcmVhdGVFbGVtZW50Iiwib25DbGljayIsIkFwcCIsIkZyYWdtZW50IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9