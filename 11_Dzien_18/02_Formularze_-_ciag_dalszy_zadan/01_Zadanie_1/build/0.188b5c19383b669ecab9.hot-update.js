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


function PESELInput() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    pesel = _useState2[0],
    setPesel = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    isPesel = _useState4[0],
    setIsPesel = _useState4[1];
  function CheckPesel() {
    if (pesel.length === 11) {
      setIsPesel(true);
    } else {
      setIsPesel(false);
    }
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: pesel,
    onChange: function onChange(e) {
      return setPesel(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, isPesel ? "Poprawny pesel" : "Niepoprawny numer pesel"));
}
function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PESELInput, null);
}
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b10628d04082c65e7c62")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xODhiNWMxOTM4M2I2NjllY2FiOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDTDtBQUU1QyxTQUFTSSxVQUFVQSxDQUFBLEVBQUc7RUFFbEIsSUFBQUMsU0FBQSxHQUEwQkosK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQUssVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBL0JHLEtBQUssR0FBQUYsVUFBQTtJQUFFRyxRQUFRLEdBQUFILFVBQUE7RUFDdEIsSUFBQUksVUFBQSxHQUE4QlQsK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQVUsVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBckNFLE9BQU8sR0FBQUQsVUFBQTtJQUFFRSxVQUFVLEdBQUFGLFVBQUE7RUFFMUIsU0FBU0csVUFBVUEsQ0FBQSxFQUFHO0lBQ2xCLElBQUlOLEtBQUssQ0FBQ08sTUFBTSxLQUFLLEVBQUUsRUFBRTtNQUNyQkYsVUFBVSxDQUFDLElBQUksQ0FBQztJQUNwQixDQUFDLE1BQU07TUFDSEEsVUFBVSxDQUFDLEtBQUssQ0FBQztJQUNyQjtFQUNKO0VBRUEsb0JBQ0liLDBEQUFBLDRCQUNJQSwwREFBQTtJQUFPaUIsSUFBSSxFQUFDLE1BQU07SUFBQ0MsS0FBSyxFQUFFVixLQUFNO0lBQUNXLFFBQVEsRUFBRSxTQUFBQSxTQUFDQyxDQUFDO01BQUEsT0FBS1gsUUFBUSxDQUFDVyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDO0lBQUE7RUFBQyxDQUFDLENBQUMsZUFDN0VsQiwwREFBQSxjQUNLWSxPQUFPLEdBQUksZ0JBQWdCLEdBQUsseUJBQ2hDLENBQ0gsQ0FBQztBQUVmO0FBRUEsU0FBU1UsR0FBR0EsQ0FBQSxFQUFHO0VBQ1gsb0JBQU90QiwwREFBQSxDQUFDSSxVQUFVLE1BQUMsQ0FBQztBQUN4QjtBQUVBLElBQU1tQixTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUd2Qiw0REFBVSxDQUFDb0IsU0FBUyxDQUFDO0FBQ2xDRyxJQUFJLENBQUNDLE1BQU0sZUFBQzNCLDBEQUFBLENBQUNzQixHQUFHLE1BQUMsQ0FBQyxDQUFDOzs7Ozs7OztVQ2hDbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC8wMl9Gb3JtdWxhcnplXy1fY2lhZ19kYWxzenlfemFkYW4vMDFfWmFkYW5pZV8xL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5mdW5jdGlvbiBQRVNFTElucHV0KCkge1xuXG4gICAgY29uc3QgW3Blc2VsLCBzZXRQZXNlbF0gPSB1c2VTdGF0ZShcIlwiKVxuICAgIGNvbnN0IFtpc1Blc2VsLCBzZXRJc1Blc2VsXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgICBmdW5jdGlvbiBDaGVja1Blc2VsKCkge1xuICAgICAgICBpZiAocGVzZWwubGVuZ3RoID09PSAxMSkge1xuICAgICAgICAgICAgc2V0SXNQZXNlbCh0cnVlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0SXNQZXNlbChmYWxzZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3Blc2VsfSBvbkNoYW5nZT17KGUpID0+IHNldFBlc2VsKGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7aXNQZXNlbCA/IChcIlBvcHJhd255IHBlc2VsXCIpIDogKFwiTmllcG9wcmF3bnkgbnVtZXIgcGVzZWxcIil9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgIClcbn1cblxuZnVuY3Rpb24gQXBwKCkge1xuICAgIHJldHVybiA8UEVTRUxJbnB1dC8+XG59XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKDxBcHAvPik7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYjEwNjI4ZDA0MDgyYzY1ZTdjNjJcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNyZWF0ZVJvb3QiLCJQRVNFTElucHV0IiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwicGVzZWwiLCJzZXRQZXNlbCIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiaXNQZXNlbCIsInNldElzUGVzZWwiLCJDaGVja1Blc2VsIiwibGVuZ3RoIiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIkFwcCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==