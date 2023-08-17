"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Box = /*#__PURE__*/function (_Component) {
  _inherits(Box, _Component);
  var _super = _createSuper(Box);
  function Box() {
    var _this;
    _classCallCheck(this, Box);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      color: "green"
    };
    return _this;
  }
  _createClass(Box, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      this.myInterval = setInterval(function () {
        _this2.setState({
          color: _this2.state.color === "green" ? "red" : "green"
        });
      }, 1000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.myInterval);
    }
  }, {
    key: "render",
    value: function render() {
      var style = {
        background: this.state.color,
        height: "200px",
        width: "200px"
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        style: style
      });
    }
  }]);
  return Box;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Box);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b049e9d0e1500e018217")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41M2M2NWEyYWZiNDkwMTA4YjE4Zi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFBQSxJQUVqQ0UsR0FBRywwQkFBQUMsVUFBQTtFQUFBQyxTQUFBLENBQUFGLEdBQUEsRUFBQUMsVUFBQTtFQUFBLElBQUFFLE1BQUEsR0FBQUMsWUFBQSxDQUFBSixHQUFBO0VBQUEsU0FBQUEsSUFBQTtJQUFBLElBQUFLLEtBQUE7SUFBQUMsZUFBQSxPQUFBTixHQUFBO0lBQUEsU0FBQU8sSUFBQSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsRUFBQUMsSUFBQSxPQUFBQyxLQUFBLENBQUFKLElBQUEsR0FBQUssSUFBQSxNQUFBQSxJQUFBLEdBQUFMLElBQUEsRUFBQUssSUFBQTtNQUFBRixJQUFBLENBQUFFLElBQUEsSUFBQUosU0FBQSxDQUFBSSxJQUFBO0lBQUE7SUFBQVAsS0FBQSxHQUFBRixNQUFBLENBQUFVLElBQUEsQ0FBQUMsS0FBQSxDQUFBWCxNQUFBLFNBQUFZLE1BQUEsQ0FBQUwsSUFBQTtJQUFBTCxLQUFBLENBQ0xXLEtBQUssR0FBRztNQUNKQyxLQUFLLEVBQUU7SUFDWCxDQUFDO0lBQUEsT0FBQVosS0FBQTtFQUFBO0VBQUFhLFlBQUEsQ0FBQWxCLEdBQUE7SUFBQW1CLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFDLGtCQUFBLEVBQW9CO01BQUEsSUFBQUMsTUFBQTtNQUNoQixJQUFJLENBQUNDLFVBQVUsR0FBR0MsV0FBVyxDQUFDLFlBQU07UUFDaENGLE1BQUksQ0FBQ0csUUFBUSxDQUFDO1VBQ1ZSLEtBQUssRUFBRUssTUFBSSxDQUFDTixLQUFLLENBQUNDLEtBQUssS0FBSyxPQUFPLEdBQUcsS0FBSyxHQUFHO1FBQ2xELENBQUMsQ0FBQztNQUNOLENBQUMsRUFBRSxJQUFJLENBQUM7SUFDWjtFQUFDO0lBQUFFLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFNLHFCQUFBLEVBQXVCO01BQ25CQyxhQUFhLENBQUMsSUFBSSxDQUFDSixVQUFVLENBQUM7SUFDbEM7RUFBQztJQUFBSixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBUSxPQUFBLEVBQVM7TUFDTCxJQUFNQyxLQUFLLEdBQUc7UUFDVkMsVUFBVSxFQUFFLElBQUksQ0FBQ2QsS0FBSyxDQUFDQyxLQUFLO1FBQzVCYyxNQUFNLEVBQUUsT0FBTztRQUNmQyxLQUFLLEVBQUU7TUFDWCxDQUFDO01BQ0Qsb0JBQ0lsQywwREFBQTtRQUFLK0IsS0FBSyxFQUFFQTtNQUFNLENBQUMsQ0FBQztJQUU1QjtFQUFDO0VBQUEsT0FBQTdCLEdBQUE7QUFBQSxFQTFCYUQsNENBQVM7QUE2QjNCLGlFQUFlQyxHQUFHOzs7Ozs7OztVQy9CbEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wN19Eemllbl8xMS8wMV9NZXRvZHlfY3lrbHVfenljaWFfa29tcG9uZW50dS8wM19aYWRhbmllXzMvanMvQm94LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgQm94IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgY29sb3I6IFwiZ3JlZW5cIlxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLm15SW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdGhpcy5zdGF0ZS5jb2xvciA9PT0gXCJncmVlblwiID8gXCJyZWRcIiA6IFwiZ3JlZW5cIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSwgMTAwMClcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLm15SW50ZXJ2YWwpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRoaXMuc3RhdGUuY29sb3IsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMjAwcHhcIixcbiAgICAgICAgICAgIHdpZHRoOiBcIjIwMHB4XCJcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGV9Lz5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm94IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYjA0OWU5ZDBlMTUwMGUwMTgyMTdcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJCb3giLCJfQ29tcG9uZW50IiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImNhbGwiLCJhcHBseSIsImNvbmNhdCIsInN0YXRlIiwiY29sb3IiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImNvbXBvbmVudERpZE1vdW50IiwiX3RoaXMyIiwibXlJbnRlcnZhbCIsInNldEludGVydmFsIiwic2V0U3RhdGUiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImNsZWFySW50ZXJ2YWwiLCJyZW5kZXIiLCJzdHlsZSIsImJhY2tncm91bmQiLCJoZWlnaHQiLCJ3aWR0aCIsImNyZWF0ZUVsZW1lbnQiXSwic291cmNlUm9vdCI6IiJ9