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


function ToDoList() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    toDoArray = _useState2[0],
    setArray = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    newItem = _useState4[0],
    setNewItem = _useState4[1];
  var handleClick = function handleClick(e) {
    e.preventDefault();
    var newToDoItem = {
      id: toDoArray.length,
      name: newItem,
      done: false
    };
    setArray([].concat(_toConsumableArray(toDoArray), [newToDoItem]));
    setNewItem("");
  };
  var handleItemClick = function handleItemClick(id) {
    toDoArray.forEach(function (el) {
      if (el.id === id) {
        var newToDoItem = {
          id: el.id,
          name: el.name,
          done: !el.done
        };
        set;
      }
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "toDoList"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Twoja lista zada\u0144"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    placeholder: "np. Zrobi\u0107 zakupy",
    value: newItem,
    onChange: function onChange(e) {
      return setNewItem(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn-add",
    onClick: handleClick
  }, "Dodaj")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, toDoArray.map(function (el) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      onClick: function onClick() {
        return handleItemClick(el.id);
      },
      key: el.id,
      className: el.done ? "done" : ""
    }, el.name);
  })));
}
function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ToDoList, null);
}
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("76a07ff4adc251664d7b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iZWI0ZDgyOTQzMmYxOGE5ZTAyNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ007QUFFNUMsU0FBU0csUUFBUUEsQ0FBQSxFQUFHO0VBRWhCLElBQUFDLFNBQUEsR0FBOEJILCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFJLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQW5DRyxTQUFTLEdBQUFGLFVBQUE7SUFBRUcsUUFBUSxHQUFBSCxVQUFBO0VBQzFCLElBQUFJLFVBQUEsR0FBOEJSLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFTLFVBQUEsR0FBQUosY0FBQSxDQUFBRyxVQUFBO0lBQW5DRSxPQUFPLEdBQUFELFVBQUE7SUFBRUUsVUFBVSxHQUFBRixVQUFBO0VBRTFCLElBQU1HLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFJQyxDQUFDLEVBQUs7SUFDdkJBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7SUFDbEIsSUFBTUMsV0FBVyxHQUFHO01BQ2hCQyxFQUFFLEVBQUVWLFNBQVMsQ0FBQ1csTUFBTTtNQUNwQkMsSUFBSSxFQUFFUixPQUFPO01BQ2JTLElBQUksRUFBRTtJQUNWLENBQUM7SUFDRFosUUFBUSxJQUFBYSxNQUFBLENBQUFDLGtCQUFBLENBQUtmLFNBQVMsSUFBRVMsV0FBVyxFQUFDLENBQUM7SUFDckNKLFVBQVUsQ0FBQyxFQUFFLENBQUM7RUFDbEIsQ0FBQztFQUVELElBQU1XLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBSU4sRUFBRSxFQUFLO0lBQzVCVixTQUFTLENBQUNpQixPQUFPLENBQUMsVUFBQUMsRUFBRSxFQUFJO01BQ3BCLElBQUlBLEVBQUUsQ0FBQ1IsRUFBRSxLQUFLQSxFQUFFLEVBQUU7UUFDZCxJQUFNRCxXQUFXLEdBQUc7VUFDaEJDLEVBQUUsRUFBRVEsRUFBRSxDQUFDUixFQUFFO1VBQ1RFLElBQUksRUFBRU0sRUFBRSxDQUFDTixJQUFJO1VBQ2JDLElBQUksRUFBRSxDQUFDSyxFQUFFLENBQUNMO1FBQ2QsQ0FBQztRQUNETSxHQUFHO01BQ1A7SUFDSixDQUFDLENBQUM7RUFDTixDQUFDO0VBRUQsb0JBQ0kxQiwwREFBQTtJQUFLNEIsU0FBUyxFQUFDO0VBQVUsZ0JBQ3JCNUIsMERBQUE7SUFBTTRCLFNBQVMsRUFBQztFQUFRLGdCQUNwQjVCLDBEQUFBLGFBQUksd0JBQXFCLENBQUMsZUFDMUJBLDBEQUFBO0lBQU82QixJQUFJLEVBQUMsTUFBTTtJQUFDQyxXQUFXLEVBQUMsd0JBQW1CO0lBQUNDLEtBQUssRUFBRXBCLE9BQVE7SUFDM0RxQixRQUFRLEVBQUUsU0FBQUEsU0FBQ2xCLENBQUM7TUFBQSxPQUFLRixVQUFVLENBQUNFLENBQUMsQ0FBQ21CLE1BQU0sQ0FBQ0YsS0FBSyxDQUFDO0lBQUE7RUFBQyxDQUFDLENBQUMsZUFDckQvQiwwREFBQTtJQUFRNEIsU0FBUyxFQUFDLFNBQVM7SUFBQ00sT0FBTyxFQUFFckI7RUFBWSxHQUFDLE9BQWEsQ0FDN0QsQ0FBQyxlQUVQYiwwREFBQSxhQUNLTyxTQUFTLENBQUM0QixHQUFHLENBQUMsVUFBQVYsRUFBRSxFQUFJO0lBQ2pCLG9CQUFPekIsMERBQUE7TUFBSWtDLE9BQU8sRUFBRSxTQUFBQSxRQUFBO1FBQUEsT0FBTVgsZUFBZSxDQUFDRSxFQUFFLENBQUNSLEVBQUUsQ0FBQztNQUFBLENBQUM7TUFBQ21CLEdBQUcsRUFBRVgsRUFBRSxDQUFDUixFQUFHO01BQ2xEVyxTQUFTLEVBQUVILEVBQUUsQ0FBQ0wsSUFBSSxHQUFHLE1BQU0sR0FBRztJQUFHLEdBQUVLLEVBQUUsQ0FBQ04sSUFBUyxDQUFDO0VBQy9ELENBQUMsQ0FDRCxDQUNILENBQUM7QUFHZDtBQUVBLFNBQVNrQixHQUFHQSxDQUFBLEVBQUc7RUFDWCxvQkFBT3JDLDBEQUFBLENBQUNHLFFBQVEsTUFBQyxDQUFDO0FBQ3RCO0FBRUEsSUFBTW1DLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBR3ZDLDREQUFVLENBQUNvQyxTQUFTLENBQUM7QUFDbENHLElBQUksQ0FBQ0MsTUFBTSxlQUFDMUMsMERBQUEsQ0FBQ3FDLEdBQUcsTUFBQyxDQUFDLENBQUM7Ozs7Ozs7O1VDMURuQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzEwX0R6aWVuXzE2LTE3LzAxX0Zvcm11bGFyemUvMDRfWmFkYW5pZV80L2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcblxuZnVuY3Rpb24gVG9Eb0xpc3QoKSB7XG5cbiAgICBjb25zdCBbdG9Eb0FycmF5LCBzZXRBcnJheV0gPSB1c2VTdGF0ZShbXSlcbiAgICBjb25zdCBbbmV3SXRlbSwgc2V0TmV3SXRlbV0gPSB1c2VTdGF0ZShcIlwiKVxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc3QgbmV3VG9Eb0l0ZW0gPSB7XG4gICAgICAgICAgICBpZDogdG9Eb0FycmF5Lmxlbmd0aCxcbiAgICAgICAgICAgIG5hbWU6IG5ld0l0ZW0sXG4gICAgICAgICAgICBkb25lOiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIHNldEFycmF5KFsuLi50b0RvQXJyYXksIG5ld1RvRG9JdGVtXSlcbiAgICAgICAgc2V0TmV3SXRlbShcIlwiKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUl0ZW1DbGljayA9IChpZCkgPT4ge1xuICAgICAgICB0b0RvQXJyYXkuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICBpZiAoZWwuaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3VG9Eb0l0ZW0gPSB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBlbC5pZCxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogZWwubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZG9uZTogIWVsLmRvbmVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2V0XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b0RvTGlzdFwiPlxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGgyPlR3b2phIGxpc3RhIHphZGHFhDwvaDI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJucC4gWnJvYmnEhyB6YWt1cHlcIiB2YWx1ZT17bmV3SXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdJdGVtKGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLWFkZFwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5Eb2RhajwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge3RvRG9BcnJheS5tYXAoZWwgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIG9uQ2xpY2s9eygpID0+IGhhbmRsZUl0ZW1DbGljayhlbC5pZCl9IGtleT17ZWwuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtlbC5kb25lID8gXCJkb25lXCIgOiBcIlwifT57ZWwubmFtZX08L2xpPlxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICApXG59XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgICByZXR1cm4gPFRvRG9MaXN0Lz5cbn1cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xucm9vdC5yZW5kZXIoPEFwcC8+KTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3NmEwN2ZmNGFkYzI1MTY2NGQ3YlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY3JlYXRlUm9vdCIsIlRvRG9MaXN0IiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwidG9Eb0FycmF5Iiwic2V0QXJyYXkiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsIm5ld0l0ZW0iLCJzZXROZXdJdGVtIiwiaGFuZGxlQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJuZXdUb0RvSXRlbSIsImlkIiwibGVuZ3RoIiwibmFtZSIsImRvbmUiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJoYW5kbGVJdGVtQ2xpY2siLCJmb3JFYWNoIiwiZWwiLCJzZXQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsIm9uQ2xpY2siLCJtYXAiLCJrZXkiLCJBcHAiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=