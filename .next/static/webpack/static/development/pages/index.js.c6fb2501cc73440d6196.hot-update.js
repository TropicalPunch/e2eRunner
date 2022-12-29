webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Editor/Editor.tsx":
/*!**************************************!*\
  !*** ./components/Editor/Editor.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _monaco_editor_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @monaco-editor/react */ "./node_modules/@monaco-editor/react/lib/es/index.js");
var _this = undefined,
  _jsxFileName = "/Users/os333k/Desktop/innovation-2022/e2eRunner/components/Editor/Editor.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var EditorComponent = function EditorComponent() {
  var editorRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  function handleEditorDidMount(editor, monaco) {
    // here is the editor instance
    // you can store it in `useRef` for further usage
    console.log("hhh", editor, monaco);
    editorRef.current = editor;
  }
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx(_monaco_editor_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
    height: "80vh",
    width: "60vw",
    defaultLanguage: "typescript",
    defaultValue: "// Enter playWright test scripts!",
    onMount: handleEditorDidMount,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (EditorComponent);

/***/ })

})
//# sourceMappingURL=index.js.c6fb2501cc73440d6196.hot-update.js.map