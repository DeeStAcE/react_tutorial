"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony import */ var _data_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33);



function ReceiptHeader(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Quantity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Sum")), props.children)));
}
function ReceiptItems(props) {
  var total = 0;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, props.data.map(function (el) {
    total += el.single_price * el.qty;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      key: el.code
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, el.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, el.single_price.toFixed(2), " z\u0142"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, el.qty), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, (el.single_price * el.qty).toFixed(2), " z\u0142"));
  }));
}
function ReceiptItem(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
}
function ReceiptFooter(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "SUM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "---"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "---"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, props.total.toFixed(2), " z\u0142")));
}
function Receipt(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ReceiptHeader, {
    data: props.data
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ReceiptItems, {
    data: props.data
  })));
}
function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Receipt, {
    data: _data_products__WEBPACK_IMPORTED_MODULE_2__["default"]
  }));
}
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ }),

/***/ 34:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var process = __webpack_require__(9);


var m = __webpack_require__(27);
if (process.env.NODE_ENV === 'production') {
  exports.createRoot = m.createRoot;
  exports.hydrateRoot = m.hydrateRoot;
} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ce93065284202f860390")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXO0FBQzNCLElBQUksT0FBTztBQUNYLEVBQUUsa0JBQWtCO0FBQ3BCLEVBQUUsbUJBQW1CO0FBQ3JCLEVBQUU7QUFDRjtBQUNBLEVBQUUsa0JBQWtCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxFQUFFLG1CQUFtQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztVQ3hCQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0R6aWVuXzUtNy8wMl9Qb2RzdW1vd2FuaWUvMDFfWmFkYW5pZS9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9jbGllbnQuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgZGF0YUxpc3QgZnJvbSBcIi4vZGF0YS9wcm9kdWN0c1wiXG5cbmZ1bmN0aW9uIFJlY2VpcHRIZWFkZXIocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+UHJpY2U8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+UXVhbnRpdHk8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+U3VtPC90aD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBSZWNlaXB0SXRlbXMocHJvcHMpIHtcbiAgICBsZXQgdG90YWwgPSAwXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHtwcm9wcy5kYXRhLm1hcChlbCA9PiB7XG4gICAgICAgICAgICAgICAgdG90YWwgKz0gKGVsLnNpbmdsZV9wcmljZSAqIGVsLnF0eSlcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtlbC5jb2RlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZWwubmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntlbC5zaW5nbGVfcHJpY2UudG9GaXhlZCgyKX0gesWCPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZWwucXR5fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+eyhlbC5zaW5nbGVfcHJpY2UgKiBlbC5xdHkpLnRvRml4ZWQoMil9IHrFgjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZnVuY3Rpb24gUmVjZWlwdEl0ZW0ocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmZ1bmN0aW9uIFJlY2VpcHRGb290ZXIocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZD5TVU08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD4tLS08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD4tLS08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57cHJvcHMudG90YWwudG9GaXhlZCgyKX0gesWCPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZnVuY3Rpb24gUmVjZWlwdChwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8UmVjZWlwdEhlYWRlciBkYXRhPXtwcm9wcy5kYXRhfT5cbiAgICAgICAgICAgICAgICA8UmVjZWlwdEl0ZW1zIGRhdGE9e3Byb3BzLmRhdGF9PlxuICAgICAgICAgICAgICAgICAgICB7Lyo8UmVjZWlwdEl0ZW0vPiovfVxuICAgICAgICAgICAgICAgIDwvUmVjZWlwdEl0ZW1zPlxuICAgICAgICAgICAgICAgIHsvKjxSZWNlaXB0Rm9vdGVyIHRvdGFsPXsxMH0vPiovfVxuICAgICAgICAgICAgPC9SZWNlaXB0SGVhZGVyPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFJlY2VpcHQgZGF0YT17ZGF0YUxpc3R9Lz5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5yb290LnJlbmRlcig8QXBwLz4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgZXhwb3J0cy5jcmVhdGVSb290ID0gbS5jcmVhdGVSb290O1xuICBleHBvcnRzLmh5ZHJhdGVSb290ID0gbS5oeWRyYXRlUm9vdDtcbn0gZWxzZSB7XG4gIHZhciBpID0gbS5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDtcbiAgZXhwb3J0cy5jcmVhdGVSb290ID0gZnVuY3Rpb24oYywgbykge1xuICAgIGkudXNpbmdDbGllbnRFbnRyeVBvaW50ID0gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIG0uY3JlYXRlUm9vdChjLCBvKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaS51c2luZ0NsaWVudEVudHJ5UG9pbnQgPSBmYWxzZTtcbiAgICB9XG4gIH07XG4gIGV4cG9ydHMuaHlkcmF0ZVJvb3QgPSBmdW5jdGlvbihjLCBoLCBvKSB7XG4gICAgaS51c2luZ0NsaWVudEVudHJ5UG9pbnQgPSB0cnVlO1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gbS5oeWRyYXRlUm9vdChjLCBoLCBvKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaS51c2luZ0NsaWVudEVudHJ5UG9pbnQgPSBmYWxzZTtcbiAgICB9XG4gIH07XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjZTkzMDY1Mjg0MjAyZjg2MDM5MFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZVJvb3QiLCJkYXRhTGlzdCIsIlJlY2VpcHRIZWFkZXIiLCJwcm9wcyIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwiUmVjZWlwdEl0ZW1zIiwidG90YWwiLCJkYXRhIiwibWFwIiwiZWwiLCJzaW5nbGVfcHJpY2UiLCJxdHkiLCJrZXkiLCJjb2RlIiwibmFtZSIsInRvRml4ZWQiLCJSZWNlaXB0SXRlbSIsIlJlY2VpcHRGb290ZXIiLCJSZWNlaXB0IiwiQXBwIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9