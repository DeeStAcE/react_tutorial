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

var MagicBox = /*#__PURE__*/function (_Component) {
  _inherits(MagicBox, _Component);
  var _super = _createSuper(MagicBox);
  function MagicBox() {
    var _this;
    _classCallCheck(this, MagicBox);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      color: "#000"
    };
    _this.divStyle = {
      height: "200px",
      width: "200px",
      backgroundColor: _this.state.color
    };
    _this.handleMouseEnter = function () {
      var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      _this.setState({
        color: randomColor
      });
      // console.log(randomColor)
      // console.log(this.state.color)
    };
    return _this;
  }
  _createClass(MagicBox, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        style: this.divStyle,
        onMouseEnter: this.handleMouseEnter
      });
    }
  }]);
  return MagicBox;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MagicBox);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1ea9c51eb0fcc89b9eef")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zYTU0NjMwNmQwODM2YjVhYTY2My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFBQSxJQUVqQ0UsUUFBUSwwQkFBQUMsVUFBQTtFQUFBQyxTQUFBLENBQUFGLFFBQUEsRUFBQUMsVUFBQTtFQUFBLElBQUFFLE1BQUEsR0FBQUMsWUFBQSxDQUFBSixRQUFBO0VBQUEsU0FBQUEsU0FBQTtJQUFBLElBQUFLLEtBQUE7SUFBQUMsZUFBQSxPQUFBTixRQUFBO0lBQUEsU0FBQU8sSUFBQSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsRUFBQUMsSUFBQSxPQUFBQyxLQUFBLENBQUFKLElBQUEsR0FBQUssSUFBQSxNQUFBQSxJQUFBLEdBQUFMLElBQUEsRUFBQUssSUFBQTtNQUFBRixJQUFBLENBQUFFLElBQUEsSUFBQUosU0FBQSxDQUFBSSxJQUFBO0lBQUE7SUFBQVAsS0FBQSxHQUFBRixNQUFBLENBQUFVLElBQUEsQ0FBQUMsS0FBQSxDQUFBWCxNQUFBLFNBQUFZLE1BQUEsQ0FBQUwsSUFBQTtJQUFBTCxLQUFBLENBRVZXLEtBQUssR0FBRztNQUNKQyxLQUFLLEVBQUU7SUFDWCxDQUFDO0lBQUFaLEtBQUEsQ0FFRGEsUUFBUSxHQUFHO01BQ1BDLE1BQU0sRUFBRSxPQUFPO01BQ2ZDLEtBQUssRUFBRSxPQUFPO01BQ2RDLGVBQWUsRUFBRWhCLEtBQUEsQ0FBS1csS0FBSyxDQUFDQztJQUNoQyxDQUFDO0lBQUFaLEtBQUEsQ0FFRGlCLGdCQUFnQixHQUFHLFlBQU07TUFDckIsSUFBTUMsV0FBVyxHQUFHLEdBQUcsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLEVBQUUsQ0FBQztNQUMzRXRCLEtBQUEsQ0FBS3VCLFFBQVEsQ0FBQztRQUNWWCxLQUFLLEVBQUVNO01BQ1gsQ0FBQyxDQUFDO01BQ0Y7TUFDQTtJQUNKLENBQUM7SUFBQSxPQUFBbEIsS0FBQTtFQUFBO0VBQUF3QixZQUFBLENBQUE3QixRQUFBO0lBQUE4QixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBQyxPQUFBLEVBQVM7TUFDTCxvQkFDSWxDLDBEQUFBO1FBQUtvQyxLQUFLLEVBQUUsSUFBSSxDQUFDaEIsUUFBUztRQUFDaUIsWUFBWSxFQUFFLElBQUksQ0FBQ2I7TUFBaUIsQ0FBQyxDQUFDO0lBRXpFO0VBQUM7RUFBQSxPQUFBdEIsUUFBQTtBQUFBLEVBekJrQkQsNENBQVM7QUE0QmhDLGlFQUFlQyxRQUFROzs7Ozs7OztVQzlCdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNV9Eemllbl84LzAyX1N0YW5fYXBsaWthY2ppLzA0X1phZGFuaWVfNC9qcy9NYWdpY0JveC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIE1hZ2ljQm94IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIHN0YXRlID0ge1xuICAgICAgICBjb2xvcjogXCIjMDAwXCIsXG4gICAgfVxuXG4gICAgZGl2U3R5bGUgPSB7XG4gICAgICAgIGhlaWdodDogXCIyMDBweFwiLFxuICAgICAgICB3aWR0aDogXCIyMDBweFwiLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuY29sb3JcbiAgICB9XG5cbiAgICBoYW5kbGVNb3VzZUVudGVyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByYW5kb21Db2xvciA9ICcjJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2Nzc3MjE1KS50b1N0cmluZygxNik7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY29sb3I6IHJhbmRvbUNvbG9yLFxuICAgICAgICB9KVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhyYW5kb21Db2xvcilcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zdGF0ZS5jb2xvcilcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt0aGlzLmRpdlN0eWxlfSBvbk1vdXNlRW50ZXI9e3RoaXMuaGFuZGxlTW91c2VFbnRlcn0vPlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWdpY0JveCIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjFlYTljNTFlYjBmY2M4OWI5ZWVmXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTWFnaWNCb3giLCJfQ29tcG9uZW50IiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImNhbGwiLCJhcHBseSIsImNvbmNhdCIsInN0YXRlIiwiY29sb3IiLCJkaXZTdHlsZSIsImhlaWdodCIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwiaGFuZGxlTW91c2VFbnRlciIsInJhbmRvbUNvbG9yIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJzZXRTdGF0ZSIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwib25Nb3VzZUVudGVyIl0sInNvdXJjZVJvb3QiOiIifQ==