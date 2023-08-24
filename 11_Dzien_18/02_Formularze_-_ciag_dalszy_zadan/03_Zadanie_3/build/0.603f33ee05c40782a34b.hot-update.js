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


function DynamicLego() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    amount = _useState2[0],
    setAmount = _useState2[1];
  var array = [];
  for (var i = 1; i <= amount; i++) {
    array.push(i);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    value: amount,
    onChange: function onChange(e) {
      return setAmount(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, array.map(function (index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: index,
      style: {
        background: "red",
        height: "50px",
        width: "".concat(index * 50, "px")
      }
    });
  })));
}
function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DynamicLego, null);
}
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("cd10f6762c96084bfc6d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42MDNmMzNlZTA1YzQwNzgyYTM0Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDTDtBQUU1QyxTQUFTSSxXQUFXQSxDQUFBLEVBQUc7RUFFbkIsSUFBQUMsU0FBQSxHQUE0QkosK0NBQVEsQ0FBQyxDQUFDLENBQUM7SUFBQUssVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBaENHLE1BQU0sR0FBQUYsVUFBQTtJQUFFRyxTQUFTLEdBQUFILFVBQUE7RUFDeEIsSUFBTUksS0FBSyxHQUFHLEVBQUU7RUFDaEIsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLElBQUlILE1BQU0sRUFBRUcsQ0FBQyxFQUFFLEVBQUU7SUFDOUJELEtBQUssQ0FBQ0UsSUFBSSxDQUFDRCxDQUFDLENBQUM7RUFDakI7RUFFQSxvQkFDSVgsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBLDRCQUNJQSwwREFBQTtJQUFPZSxJQUFJLEVBQUMsUUFBUTtJQUFDQyxLQUFLLEVBQUVSLE1BQU87SUFBQ1MsUUFBUSxFQUFFLFNBQUFBLFNBQUNDLENBQUM7TUFBQSxPQUFLVCxTQUFTLENBQUNTLENBQUMsQ0FBQ0MsTUFBTSxDQUFDSCxLQUFLLENBQUM7SUFBQTtFQUFDLENBQUMsQ0FDOUUsQ0FBQyxlQUNQaEIsMERBQUEsYUFDS1UsS0FBSyxDQUFDVSxHQUFHLENBQUMsVUFBQUMsS0FBSyxFQUFJO0lBQ2hCLG9CQUFPckIsMERBQUE7TUFBSXNCLEdBQUcsRUFBRUQsS0FBTTtNQUFDRSxLQUFLLEVBQUU7UUFBQ0MsVUFBVSxFQUFFLEtBQUs7UUFBRUMsTUFBTSxFQUFFLE1BQU07UUFBRUMsS0FBSyxLQUFBQyxNQUFBLENBQUtOLEtBQUssR0FBRyxFQUFFO01BQUk7SUFBRSxDQUFDLENBQUM7RUFDbEcsQ0FBQyxDQUNELENBQ04sQ0FBQztBQUVYO0FBRUEsU0FBU08sR0FBR0EsQ0FBQSxFQUFHO0VBQ1gsb0JBQU81QiwwREFBQSxDQUFDSSxXQUFXLE1BQUMsQ0FBQztBQUN6QjtBQUVBLElBQU15QixTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUc3Qiw0REFBVSxDQUFDMEIsU0FBUyxDQUFDO0FBQ2xDRyxJQUFJLENBQUNDLE1BQU0sZUFBQ2pDLDBEQUFBLENBQUM0QixHQUFHLE1BQUMsQ0FBQyxDQUFDOzs7Ozs7OztVQy9CbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC8wMl9Gb3JtdWxhcnplXy1fY2lhZ19kYWxzenlfemFkYW4vMDNfWmFkYW5pZV8zL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5mdW5jdGlvbiBEeW5hbWljTGVnbygpIHtcblxuICAgIGNvbnN0IFthbW91bnQsIHNldEFtb3VudF0gPSB1c2VTdGF0ZSgwKVxuICAgIGNvbnN0IGFycmF5ID0gW11cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBhbW91bnQ7IGkrKykge1xuICAgICAgICBhcnJheS5wdXNoKGkpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgdmFsdWU9e2Ftb3VudH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRBbW91bnQoZS50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge2FycmF5Lm1hcChpbmRleCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpbmRleH0gc3R5bGU9e3tiYWNrZ3JvdW5kOiBcInJlZFwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogYCR7aW5kZXggKiA1MH1weGB9fS8+XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgICByZXR1cm4gPER5bmFtaWNMZWdvLz5cbn1cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xucm9vdC5yZW5kZXIoPEFwcC8+KTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjZDEwZjY3NjJjOTYwODRiZmM2ZFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY3JlYXRlUm9vdCIsIkR5bmFtaWNMZWdvIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiYW1vdW50Iiwic2V0QW1vdW50IiwiYXJyYXkiLCJpIiwicHVzaCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm1hcCIsImluZGV4Iiwia2V5Iiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiaGVpZ2h0Iiwid2lkdGgiLCJjb25jYXQiLCJBcHAiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=