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
    var newTime = time;
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
/******/ 	__webpack_require__.h = () => ("2e0aa6908bc53f747c16")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iN2M1NDhjMjQ0NGY3ZjhiOTcxNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDTDtBQUU1QyxTQUFTSSxjQUFjQSxDQUFDQyxLQUFLLEVBQUU7RUFDM0IsSUFBQUMsU0FBQSxHQUF3QkosK0NBQVEsQ0FBQ0csS0FBSyxDQUFDRSxJQUFJLENBQUM7SUFBQUMsVUFBQSxHQUFBQyxjQUFBLENBQUFILFNBQUE7SUFBckNDLElBQUksR0FBQUMsVUFBQTtJQUFFRSxPQUFPLEdBQUFGLFVBQUE7RUFDcEIsSUFBQUcsVUFBQSxHQUE0QlQsK0NBQVEsQ0FBQyxDQUFDLENBQUM7SUFBQVUsVUFBQSxHQUFBSCxjQUFBLENBQUFFLFVBQUE7SUFBaENFLE1BQU0sR0FBQUQsVUFBQTtJQUFFRSxTQUFTLEdBQUFGLFVBQUE7RUFFeEIsU0FBU0csV0FBV0EsQ0FBQSxFQUFHO0lBQ25CLElBQU1DLE9BQU8sR0FBR1QsSUFBSTtJQUVwQixJQUFJQSxJQUFJLEdBQUcsQ0FBQyxFQUFFO01BQ1ZPLFNBQVMsQ0FBQyxVQUFBRyxVQUFVO1FBQUEsT0FBSUEsVUFBVSxHQUFHLENBQUM7TUFBQSxFQUFDO01BQ3ZDUCxPQUFPLENBQUNNLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDekIsQ0FBQyxNQUFNLENBRVA7RUFDSjtFQUVBZixnREFBUyxDQUFDLFlBQU07SUFFWixJQUFNaUIsVUFBVSxHQUFHQyxXQUFXLENBQUMsWUFBTTtNQUNqQyxJQUFJWixJQUFJLEdBQUcsQ0FBQyxFQUFFO1FBQ1ZHLE9BQU8sQ0FBQyxVQUFBVSxRQUFRO1VBQUEsT0FBSUEsUUFBUSxHQUFHLEVBQUU7UUFBQSxFQUFDO01BQ3RDLENBQUMsTUFBTTtRQUNIVixPQUFPLENBQUMsQ0FBQyxDQUFDO01BQ2Q7SUFDSixDQUFDLEVBQUUsR0FBRyxDQUFDO0lBRVAsT0FBTyxZQUFNO01BQ1RXLGFBQWEsQ0FBQ0gsVUFBVSxDQUFDO0lBQzdCLENBQUM7RUFDTCxDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU4sb0JBQ0lsQiwwREFBQSwyQkFDSUEsMERBQUE7SUFBUXVCLE9BQU8sRUFBRVI7RUFBWSxHQUFDLFdBQWlCLENBQUMsZUFDaERmLDBEQUFBLGFBQUksYUFBVyxFQUFDTyxJQUFTLENBQUMsZUFDMUJQLDBEQUFBLGFBQUksZUFBYSxFQUFDYSxNQUFXLENBQzVCLENBQUM7QUFFZDtBQUVBLFNBQVNXLEdBQUdBLENBQUEsRUFBRztFQUNYLG9CQUNJeEIsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBLENBQUNJLGNBQWM7SUFBQ0csSUFBSSxFQUFDO0VBQU0sQ0FBQyxDQUM5QixDQUFDO0FBRVg7QUFFQSxJQUFNbUIsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHMUIsNERBQVUsQ0FBQ3VCLFNBQVMsQ0FBQztBQUNsQ0csSUFBSSxDQUFDQyxNQUFNLGVBQUM5QiwwREFBQSxDQUFDd0IsR0FBRyxNQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7VUNwRG5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDhfRHppZW5fMTItMTQvMDFfdXNlRWZmZWN0Xy1fY2lhZ19kYWxzenlfemFkYW4vMDJfWmFkYW5pZV8yL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5mdW5jdGlvbiBTcGVlZENsaWNrR2FtZShwcm9wcykge1xuICAgIGNvbnN0IFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlKHByb3BzLnRpbWUpXG4gICAgY29uc3QgW3BvaW50cywgc2V0UG9pbnRzXSA9IHVzZVN0YXRlKDApXG5cbiAgICBmdW5jdGlvbiBoYW5kbGVDbGljaygpIHtcbiAgICAgICAgY29uc3QgbmV3VGltZSA9IHRpbWVcblxuICAgICAgICBpZiAodGltZSA+IDApIHtcbiAgICAgICAgICAgIHNldFBvaW50cyhwcmV2UG9pbnRzID0+IHByZXZQb2ludHMgKyAxKVxuICAgICAgICAgICAgc2V0VGltZShuZXdUaW1lIC0gNTApXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgbXlJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aW1lID4gMCkge1xuICAgICAgICAgICAgICAgIHNldFRpbWUocHJldlRpbWUgPT4gcHJldlRpbWUgLSA1MClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZSgwKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCA1MDApXG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwobXlJbnRlcnZhbClcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5DbGljayBtZSE8L2J1dHRvbj5cbiAgICAgICAgICAgIDxoMT5UaW1lIGxlZnQ6IHt0aW1lfTwvaDE+XG4gICAgICAgICAgICA8aDI+WW91ciBwb2ludHM6IHtwb2ludHN9PC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBBcHAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxTcGVlZENsaWNrR2FtZSB0aW1lPVwiMjAwMFwiLz5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5yb290LnJlbmRlcig8QXBwLz4pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMmUwYWE2OTA4YmM1M2Y3NDdjMTZcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZVJvb3QiLCJTcGVlZENsaWNrR2FtZSIsInByb3BzIiwiX3VzZVN0YXRlIiwidGltZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInNldFRpbWUiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInBvaW50cyIsInNldFBvaW50cyIsImhhbmRsZUNsaWNrIiwibmV3VGltZSIsInByZXZQb2ludHMiLCJteUludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJwcmV2VGltZSIsImNsZWFySW50ZXJ2YWwiLCJjcmVhdGVFbGVtZW50Iiwib25DbGljayIsIkFwcCIsIkZyYWdtZW50IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9