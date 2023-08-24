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


var PESELInput = function PESELInput() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    pesel = _useState2[0],
    setPesel = _useState2[1];
  var handleInputChange = function handleInputChange(event) {
    setPesel(event.target.value);
  };
  var submitButton = null;
  if (pesel.length === 11 && /^[0-9]+$/.test(pesel)) {
    submitButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "submit",
      value: "Prze\u015Blij"
    });
  }
  var infoMessage = '';
  if (pesel.length !== 0 && (pesel.length !== 11 || !/^[0-9]+$/.test(pesel))) {
    infoMessage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "info"
    }, "Niepoprawny numer PESEL");
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "pesel-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: pesel,
    onChange: handleInputChange,
    placeholder: "Wprowad\u017A PESEL",
    className: "pesel-input"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "submit-container"
  }, submitButton), infoMessage);
};

// return (
//     <form>
//         <input type="text" value={pesel} onChange={(e) => setPesel(e.target.value)}/>
//         <div>
//             {isPesel ? ("Poprawny pesel") : ("Niepoprawny numer pesel")}
//         </div>
//     </form>
// )

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
/******/ 	__webpack_require__.h = () => ("b34c8d3e16902a6430d9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iMTA2MjhkMDQwODJjNjVlN2M2Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDTDtBQUU1QyxJQUFNSSxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBQSxFQUFTO0VBQ3ZCLElBQUFDLFNBQUEsR0FBMEJKLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFLLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQS9CRyxLQUFLLEdBQUFGLFVBQUE7SUFBRUcsUUFBUSxHQUFBSCxVQUFBO0VBRXRCLElBQU1JLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBaUJBLENBQUlDLEtBQUssRUFBSztJQUNuQ0YsUUFBUSxDQUFDRSxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO0VBQzlCLENBQUM7RUFFRCxJQUFJQyxZQUFZLEdBQUcsSUFBSTtFQUN2QixJQUFJTixLQUFLLENBQUNPLE1BQU0sS0FBSyxFQUFFLElBQUksVUFBVSxDQUFDQyxJQUFJLENBQUNSLEtBQUssQ0FBQyxFQUFFO0lBQ2pETSxZQUFZLGdCQUFHZCwwREFBQTtNQUFPa0IsSUFBSSxFQUFDLFFBQVE7TUFBQ0wsS0FBSyxFQUFDO0lBQVUsQ0FBRSxDQUFDO0VBQ3pEO0VBRUEsSUFBSU0sV0FBVyxHQUFHLEVBQUU7RUFDcEIsSUFBSVgsS0FBSyxDQUFDTyxNQUFNLEtBQUssQ0FBQyxLQUFLUCxLQUFLLENBQUNPLE1BQU0sS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUNDLElBQUksQ0FBQ1IsS0FBSyxDQUFDLENBQUMsRUFBRTtJQUMxRVcsV0FBVyxnQkFBR25CLDBEQUFBO01BQUtvQixTQUFTLEVBQUM7SUFBTSxHQUFDLHlCQUE0QixDQUFDO0VBQ25FO0VBRUEsb0JBQ0VwQiwwREFBQTtJQUFLb0IsU0FBUyxFQUFDO0VBQWlCLGdCQUM5QnBCLDBEQUFBO0lBQ0VrQixJQUFJLEVBQUMsTUFBTTtJQUNYTCxLQUFLLEVBQUVMLEtBQU07SUFDYmEsUUFBUSxFQUFFWCxpQkFBa0I7SUFDNUJZLFdBQVcsRUFBQyxxQkFBZ0I7SUFDNUJGLFNBQVMsRUFBQztFQUFhLENBQ3hCLENBQUMsZUFDRnBCLDBEQUFBO0lBQUt1QixFQUFFLEVBQUM7RUFBa0IsR0FDdkJULFlBQ0UsQ0FBQyxFQUNMSyxXQUNFLENBQUM7QUFFVixDQUFDOztBQUVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0osU0FBU0ssR0FBR0EsQ0FBQSxFQUFHO0VBQ1gsb0JBQU94QiwwREFBQSxDQUFDSSxVQUFVLE1BQUMsQ0FBQztBQUN4QjtBQUVBLElBQU1xQixTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUd6Qiw0REFBVSxDQUFDc0IsU0FBUyxDQUFDO0FBQ2xDRyxJQUFJLENBQUNDLE1BQU0sZUFBQzdCLDBEQUFBLENBQUN3QixHQUFHLE1BQUMsQ0FBQyxDQUFDOzs7Ozs7OztVQ3JEbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC8wMl9Gb3JtdWxhcnplXy1fY2lhZ19kYWxzenlfemFkYW4vMDFfWmFkYW5pZV8xL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5jb25zdCBQRVNFTElucHV0ID0gKCkgPT4ge1xuICBjb25zdCBbcGVzZWwsIHNldFBlc2VsXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIHNldFBlc2VsKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICBsZXQgc3VibWl0QnV0dG9uID0gbnVsbDtcbiAgaWYgKHBlc2VsLmxlbmd0aCA9PT0gMTEgJiYgL15bMC05XSskLy50ZXN0KHBlc2VsKSkge1xuICAgIHN1Ym1pdEJ1dHRvbiA9IDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJQcnplxZtsaWpcIiAvPjtcbiAgfVxuXG4gIGxldCBpbmZvTWVzc2FnZSA9ICcnO1xuICBpZiAocGVzZWwubGVuZ3RoICE9PSAwICYmIChwZXNlbC5sZW5ndGggIT09IDExIHx8ICEvXlswLTldKyQvLnRlc3QocGVzZWwpKSkge1xuICAgIGluZm9NZXNzYWdlID0gPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+TmllcG9wcmF3bnkgbnVtZXIgUEVTRUw8L2Rpdj47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGVzZWwtY29udGFpbmVyXCI+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICB2YWx1ZT17cGVzZWx9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJXcHJvd2FkxbogUEVTRUxcIlxuICAgICAgICBjbGFzc05hbWU9XCJwZXNlbC1pbnB1dFwiXG4gICAgICAvPlxuICAgICAgPGRpdiBpZD1cInN1Ym1pdC1jb250YWluZXJcIj5cbiAgICAgICAge3N1Ym1pdEJ1dHRvbn1cbiAgICAgIDwvZGl2PlxuICAgICAge2luZm9NZXNzYWdlfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG4gICAgLy8gcmV0dXJuIChcbiAgICAvLyAgICAgPGZvcm0+XG4gICAgLy8gICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17cGVzZWx9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGVzZWwoZS50YXJnZXQudmFsdWUpfS8+XG4gICAgLy8gICAgICAgICA8ZGl2PlxuICAgIC8vICAgICAgICAgICAgIHtpc1Blc2VsID8gKFwiUG9wcmF3bnkgcGVzZWxcIikgOiAoXCJOaWVwb3ByYXdueSBudW1lciBwZXNlbFwiKX1cbiAgICAvLyAgICAgICAgIDwvZGl2PlxuICAgIC8vICAgICA8L2Zvcm0+XG4gICAgLy8gKVxuXG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgICByZXR1cm4gPFBFU0VMSW5wdXQvPlxufVxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5yb290LnJlbmRlcig8QXBwLz4pOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImIzNGM4ZDNlMTY5MDJhNjQzMGQ5XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjcmVhdGVSb290IiwiUEVTRUxJbnB1dCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInBlc2VsIiwic2V0UGVzZWwiLCJoYW5kbGVJbnB1dENoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJzdWJtaXRCdXR0b24iLCJsZW5ndGgiLCJ0ZXN0IiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJpbmZvTWVzc2FnZSIsImNsYXNzTmFtZSIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJpZCIsIkFwcCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==