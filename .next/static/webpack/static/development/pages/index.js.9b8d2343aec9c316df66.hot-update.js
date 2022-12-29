webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ui-components/NavBar/NavBar.tsx":
/*!****************************************************!*\
  !*** ./components/ui-components/NavBar/NavBar.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useOnClickOutside__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../useOnClickOutside */ "./components/useOnClickOutside.ts");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/os333k/Desktop/innovation-2022/e2eRunner/components/ui-components/NavBar/NavBar.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var navData = [{
  name: "Editor",
  href: "/editor"
}, {
  name: "Results",
  href: "/results"
}, {
  name: "Scheduler",
  href: "/scheduler"
}];
function NavBar() {
  var _this = this;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    isModalOpen = _useState[0],
    setModalOpen = _useState[1];
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(_useOnClickOutside__WEBPACK_IMPORTED_MODULE_1__["default"])(ref, function () {
    return setModalOpen(false);
  });
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, "Logo")), __jsx("nav", {
    className: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, navData.map(function (n) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      key: n.name,
      href: n.href,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 15
      }
    }, n.name));
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.9b8d2343aec9c316df66.hot-update.js.map