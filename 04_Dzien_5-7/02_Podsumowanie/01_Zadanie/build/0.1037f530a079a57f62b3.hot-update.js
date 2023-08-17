"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _data_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);



function Receipt(props) {
  var total = 0;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Quantity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Sum")), props.data.map(function (el) {
    total += el.single_price * el.qty;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, el.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, el.single_price.toFixed(2), " z\u0142"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, el.qty), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, (el.single_price * el.qty).toFixed(2), " z\u0142"));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "SUM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "---"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "---"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, total.toFixed(2)))));
}
function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Receipt, {
    data: _data_products__WEBPACK_IMPORTED_MODULE_2__["default"]
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
/******/ 	__webpack_require__.h = () => ("bbcec1984641055cf6f8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xMDM3ZjUzMGEwNzlhNTdmNjJiMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2tCO0FBQ047QUFFdEMsU0FBU0csT0FBT0EsQ0FBQ0MsS0FBSyxFQUFFO0VBQ3BCLElBQUlDLEtBQUssR0FBRyxDQUFDO0VBQ2Isb0JBQ0lMLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNJQSwwREFBQTtJQUFPUSxTQUFTLEVBQUM7RUFBTyxnQkFDcEJSLDBEQUFBLDBCQUNJQSwwREFBQSxhQUFJLE1BQVEsQ0FBQyxlQUNiQSwwREFBQSxhQUFJLE9BQVMsQ0FBQyxlQUNkQSwwREFBQSxhQUFJLFVBQVksQ0FBQyxlQUNqQkEsMERBQUEsYUFBSSxLQUFPLENBQ1gsQ0FBQyxFQUNKSSxLQUFLLENBQUNLLElBQUksQ0FBQ0MsR0FBRyxDQUFDLFVBQUFDLEVBQUUsRUFBSTtJQUNsQk4sS0FBSyxJQUFLTSxFQUFFLENBQUNDLFlBQVksR0FBR0QsRUFBRSxDQUFDRSxHQUFJO0lBQ25DLG9CQUNJYiwwREFBQSwwQkFDSUEsMERBQUEsYUFBS1csRUFBRSxDQUFDRyxJQUFTLENBQUMsZUFDbEJkLDBEQUFBLGFBQUtXLEVBQUUsQ0FBQ0MsWUFBWSxDQUFDRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUMsVUFBTyxDQUFDLGVBQ3hDZiwwREFBQSxhQUFLVyxFQUFFLENBQUNFLEdBQVEsQ0FBQyxlQUNqQmIsMERBQUEsYUFBSyxDQUFDVyxFQUFFLENBQUNDLFlBQVksR0FBR0QsRUFBRSxDQUFDRSxHQUFHLEVBQUVFLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBQyxVQUFPLENBQ2xELENBQUM7RUFFYixDQUFDLENBQUMsZUFDRmYsMERBQUEsMEJBQ0lBLDBEQUFBLGFBQUksS0FBTyxDQUFDLGVBQ1pBLDBEQUFBLGFBQUksS0FBTyxDQUFDLGVBQ1pBLDBEQUFBLGFBQUksS0FBTyxDQUFDLGVBQ1pBLDBEQUFBLGFBQUtLLEtBQUssQ0FBQ1UsT0FBTyxDQUFDLENBQUMsQ0FBTSxDQUMxQixDQUNELENBQ1QsQ0FBQztBQUVYO0FBRUEsU0FBU0MsR0FBR0EsQ0FBQSxFQUFHO0VBQ1gsb0JBQ0loQiwwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUEsQ0FBQ0csT0FBTztJQUFDTSxJQUFJLEVBQUVQLHNEQUFRQTtFQUFDLENBQUMsQ0FDM0IsQ0FBQztBQUVYO0FBRUEsSUFBTWUsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHbkIsNERBQVUsQ0FBQ2dCLFNBQVMsQ0FBQztBQUNsQ0csSUFBSSxDQUFDQyxNQUFNLGVBQUNyQiwwREFBQSxDQUFDZ0IsR0FBRyxNQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7VUMvQ25CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRHppZW5fNS03LzAyX1BvZHN1bW93YW5pZS8wMV9aYWRhbmllL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCBkYXRhTGlzdCBmcm9tIFwiLi9kYXRhL3Byb2R1Y3RzXCJcblxuZnVuY3Rpb24gUmVjZWlwdChwcm9wcykge1xuICAgIGxldCB0b3RhbCA9IDBcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5QcmljZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5RdWFudGl0eTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5TdW08L3RoPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAge3Byb3BzLmRhdGEubWFwKGVsID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdG90YWwgKz0gKGVsLnNpbmdsZV9wcmljZSAqIGVsLnF0eSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2VsLm5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2VsLnNpbmdsZV9wcmljZS50b0ZpeGVkKDIpfSB6xYI8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZWwucXR5fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnsoZWwuc2luZ2xlX3ByaWNlICogZWwucXR5KS50b0ZpeGVkKDIpfSB6xYI8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRkPlNVTTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD4tLS08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+LS0tPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnt0b3RhbC50b0ZpeGVkKDIpfTwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZnVuY3Rpb24gQXBwKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8UmVjZWlwdCBkYXRhPXtkYXRhTGlzdH0vPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKDxBcHAvPik7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJiYmNlYzE5ODQ2NDEwNTVjZjZmOFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZVJvb3QiLCJkYXRhTGlzdCIsIlJlY2VpcHQiLCJwcm9wcyIsInRvdGFsIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwiZGF0YSIsIm1hcCIsImVsIiwic2luZ2xlX3ByaWNlIiwicXR5IiwibmFtZSIsInRvRml4ZWQiLCJBcHAiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=