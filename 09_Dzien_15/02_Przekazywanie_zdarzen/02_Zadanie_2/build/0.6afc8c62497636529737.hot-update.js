"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function Shop() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    list = _useState2[0],
    setList = _useState2[1];
  var handleBuy = function handleBuy(title) {
    setList([].concat(_toConsumableArray(list), [title]));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ShopItem, {
    title: "MacBook Pro",
    onBuy: handleBuy
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ShopItem, {
    title: "Dell X5500",
    onBuy: handleBuy
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ShopItem, {
    title: "Asus NT6000",
    onBuy: handleBuy
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, list.map(function (el, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: index
    }, el);
  })));
}
function ShopItem(props) {
  var handleBuyClick = function handleBuyClick() {
    if (typeof props.onBuy === 'function') {
      props.onBuy(props.title);
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, props.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleBuyClick
  }, "Kup"));
}
function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Shop, null));
}
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f8e4ef07df55c3ebff8b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42YWZjOGM2MjQ5NzYzNjUyOTczNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ007QUFFNUMsU0FBU0csSUFBSUEsQ0FBQSxFQUFHO0VBRVosSUFBQUMsU0FBQSxHQUF3QkgsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQUksVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBN0JHLElBQUksR0FBQUYsVUFBQTtJQUFFRyxPQUFPLEdBQUFILFVBQUE7RUFFcEIsSUFBTUksU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUlDLEtBQUssRUFBSztJQUN6QkYsT0FBTyxJQUFBRyxNQUFBLENBQUFDLGtCQUFBLENBQUtMLElBQUksSUFBRUcsS0FBSyxFQUFDLENBQUM7RUFDN0IsQ0FBQztFQUVELG9CQUNJViwwREFBQSwyQkFDSUEsMERBQUEsQ0FBQ2MsUUFBUTtJQUFDSixLQUFLLEVBQUMsYUFBYTtJQUFDSyxLQUFLLEVBQUVOO0VBQVUsQ0FBQyxDQUFDLGVBQ2pEVCwwREFBQSxDQUFDYyxRQUFRO0lBQUNKLEtBQUssRUFBQyxZQUFZO0lBQUNLLEtBQUssRUFBRU47RUFBVSxDQUFDLENBQUMsZUFDaERULDBEQUFBLENBQUNjLFFBQVE7SUFBQ0osS0FBSyxFQUFDLGFBQWE7SUFBQ0ssS0FBSyxFQUFFTjtFQUFVLENBQUMsQ0FBQyxlQUNqRFQsMERBQUEsYUFDS08sSUFBSSxDQUFDUyxHQUFHLENBQUMsVUFBQ0MsRUFBRSxFQUFFQyxLQUFLO0lBQUEsb0JBQUtsQiwwREFBQTtNQUFJbUIsR0FBRyxFQUFFRDtJQUFNLEdBQUVELEVBQU8sQ0FBQztFQUFBLEVBQ2xELENBQ0gsQ0FBQztBQUVkO0FBRUEsU0FBU0gsUUFBUUEsQ0FBQ00sS0FBSyxFQUFFO0VBRXJCLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBQSxFQUFTO0lBQ3pCLElBQUksT0FBT0QsS0FBSyxDQUFDTCxLQUFLLEtBQUssVUFBVSxFQUFFO01BQ25DSyxLQUFLLENBQUNMLEtBQUssQ0FBQ0ssS0FBSyxDQUFDVixLQUFLLENBQUM7SUFDNUI7RUFDSixDQUFDO0VBRUQsb0JBQ0lWLDBEQUFBLDJCQUNJQSwwREFBQSxhQUFLb0IsS0FBSyxDQUFDVixLQUFVLENBQUMsZUFDdEJWLDBEQUFBO0lBQVFzQixPQUFPLEVBQUVEO0VBQWUsR0FBQyxLQUFXLENBQzNDLENBQUM7QUFFZDtBQUVBLFNBQVNFLEdBQUdBLENBQUEsRUFBRztFQUNYLG9CQUNJdkIsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBLENBQUNHLElBQUksTUFBQyxDQUNSLENBQUM7QUFFWDtBQUVBLElBQU1zQixTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUcxQiw0REFBVSxDQUFDdUIsU0FBUyxDQUFDO0FBQ2xDRyxJQUFJLENBQUNDLE1BQU0sZUFBQzdCLDBEQUFBLENBQUN1QixHQUFHLE1BQUMsQ0FBQyxDQUFDOzs7Ozs7OztVQ2pEbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMl9Qcnpla2F6eXdhbmllX3pkYXJ6ZW4vMDJfWmFkYW5pZV8yL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcblxuZnVuY3Rpb24gU2hvcCgpIHtcblxuICAgIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IHVzZVN0YXRlKFtdKVxuXG4gICAgY29uc3QgaGFuZGxlQnV5ID0gKHRpdGxlKSA9PiB7XG4gICAgICAgIHNldExpc3QoWy4uLmxpc3QsIHRpdGxlXSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFNob3BJdGVtIHRpdGxlPVwiTWFjQm9vayBQcm9cIiBvbkJ1eT17aGFuZGxlQnV5fS8+XG4gICAgICAgICAgICA8U2hvcEl0ZW0gdGl0bGU9XCJEZWxsIFg1NTAwXCIgb25CdXk9e2hhbmRsZUJ1eX0vPlxuICAgICAgICAgICAgPFNob3BJdGVtIHRpdGxlPVwiQXN1cyBOVDYwMDBcIiBvbkJ1eT17aGFuZGxlQnV5fS8+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge2xpc3QubWFwKChlbCwgaW5kZXgpID0+IDxsaSBrZXk9e2luZGV4fT57ZWx9PC9saT4pfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBTaG9wSXRlbShwcm9wcykge1xuXG4gICAgY29uc3QgaGFuZGxlQnV5Q2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgcHJvcHMub25CdXkgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHByb3BzLm9uQnV5KHByb3BzLnRpdGxlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT57cHJvcHMudGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQnV5Q2xpY2t9Pkt1cDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFNob3AvPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKDxBcHAvPik7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmOGU0ZWYwN2RmNTVjM2ViZmY4YlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY3JlYXRlUm9vdCIsIlNob3AiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJsaXN0Iiwic2V0TGlzdCIsImhhbmRsZUJ1eSIsInRpdGxlIiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiY3JlYXRlRWxlbWVudCIsIlNob3BJdGVtIiwib25CdXkiLCJtYXAiLCJlbCIsImluZGV4Iiwia2V5IiwicHJvcHMiLCJoYW5kbGVCdXlDbGljayIsIm9uQ2xpY2siLCJBcHAiLCJGcmFnbWVudCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==