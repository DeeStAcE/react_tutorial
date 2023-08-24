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
  var isPesel = null;
  isPesel = pesel.length === 11 && /^[0-9]+$/.test(pesel);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: pesel,
    onChange: function onChange(e) {
      return setPesel(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, isPesel ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "submit"
  }) : "Niepoprawny numer pesel"));
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
/******/ 	__webpack_require__.h = () => ("d9038cf6703993ad3df9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40ZWFiNGU2MGQyZTdhMzU1ODYyMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDTDtBQUU1QyxTQUFTSSxVQUFVQSxDQUFBLEVBQUc7RUFFbEIsSUFBQUMsU0FBQSxHQUEwQkosK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQUssVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBL0JHLEtBQUssR0FBQUYsVUFBQTtJQUFFRyxRQUFRLEdBQUFILFVBQUE7RUFDdEIsSUFBSUksT0FBTyxHQUFHLElBQUk7RUFHbEJBLE9BQU8sR0FBR0YsS0FBSyxDQUFDRyxNQUFNLEtBQUssRUFBRSxJQUFJLFVBQVUsQ0FBQ0MsSUFBSSxDQUFDSixLQUFLLENBQUM7RUFFdkQsb0JBQ0lSLDBEQUFBLDRCQUNJQSwwREFBQTtJQUFPYyxJQUFJLEVBQUMsTUFBTTtJQUFDQyxLQUFLLEVBQUVQLEtBQU07SUFBQ1EsUUFBUSxFQUFFLFNBQUFBLFNBQUNDLENBQUM7TUFBQSxPQUFLUixRQUFRLENBQUNRLENBQUMsQ0FBQ0MsTUFBTSxDQUFDSCxLQUFLLENBQUM7SUFBQTtFQUFDLENBQUMsQ0FBQyxlQUM3RWYsMERBQUEsY0FDS1UsT0FBTyxnQkFBSVYsMERBQUE7SUFBT2MsSUFBSSxFQUFDO0VBQVEsQ0FBQyxDQUFDLEdBQUsseUJBQ3RDLENBQ0gsQ0FBQztBQUVmO0FBRUEsU0FBU0ssR0FBR0EsQ0FBQSxFQUFHO0VBQ1gsb0JBQU9uQiwwREFBQSxDQUFDSSxVQUFVLE1BQUMsQ0FBQztBQUN4QjtBQUVBLElBQU1nQixTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdwQiw0REFBVSxDQUFDaUIsU0FBUyxDQUFDO0FBQ2xDRyxJQUFJLENBQUNDLE1BQU0sZUFBQ3hCLDBEQUFBLENBQUNtQixHQUFHLE1BQUMsQ0FBQyxDQUFDOzs7Ozs7OztVQzNCbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC8wMl9Gb3JtdWxhcnplXy1fY2lhZ19kYWxzenlfemFkYW4vMDFfWmFkYW5pZV8xL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5mdW5jdGlvbiBQRVNFTElucHV0KCkge1xuXG4gICAgY29uc3QgW3Blc2VsLCBzZXRQZXNlbF0gPSB1c2VTdGF0ZShcIlwiKVxuICAgIGxldCBpc1Blc2VsID0gbnVsbFxuXG5cbiAgICBpc1Blc2VsID0gcGVzZWwubGVuZ3RoID09PSAxMSAmJiAvXlswLTldKyQvLnRlc3QocGVzZWwpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17cGVzZWx9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGVzZWwoZS50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtpc1Blc2VsID8gKDxpbnB1dCB0eXBlPVwic3VibWl0XCIvPikgOiAoXCJOaWVwb3ByYXdueSBudW1lciBwZXNlbFwiKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBBcHAoKSB7XG4gICAgcmV0dXJuIDxQRVNFTElucHV0Lz5cbn1cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xucm9vdC5yZW5kZXIoPEFwcC8+KTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkOTAzOGNmNjcwMzk5M2FkM2RmOVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY3JlYXRlUm9vdCIsIlBFU0VMSW5wdXQiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJwZXNlbCIsInNldFBlc2VsIiwiaXNQZXNlbCIsImxlbmd0aCIsInRlc3QiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiQXBwIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9