"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/info",{

/***/ "./pages/info.js":
/*!***********************!*\
  !*** ./pages/info.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _components_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/section */ \"./components/section.js\");\n/* harmony import */ var _components_grid_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/grid-item */ \"./components/grid-item.js\");\nvar _this = undefined;\n\n\n\n\nvar Info = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                as: \"h3\",\n                fontSize: 20,\n                mb: 4,\n                margin: \"5\",\n                children: \"Projects worked so far\"\n            }, void 0, false, {\n                fileName: \"E:\\\\AWeb\\\\Rec-Web\\\\react-web2\\\\pages\\\\info.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_section__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_grid_item__WEBPACK_IMPORTED_MODULE_2__.WorkGridItem, {\n                    id: \"restmenu\",\n                    title: \"Online Restaurant Menu\",\n                    children: \"This is a website build with react.js and javascript\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\AWeb\\\\Rec-Web\\\\react-web2\\\\pages\\\\info.js\",\n                    lineNumber: 14,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"E:\\\\AWeb\\\\Rec-Web\\\\react-web2\\\\pages\\\\info.js\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\AWeb\\\\Rec-Web\\\\react-web2\\\\pages\\\\info.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, _this);\n};\n_c = Info;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Info);\nvar _c;\n$RefreshReg$(_c, \"Info\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmZvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUF5RTtBQUM3QjtBQUNTO0FBR3JELElBQU1NLElBQUksR0FBRyxXQUFNO0lBQ2pCLHFCQUNFLDhEQUFDTix1REFBUzs7MEJBQ1IsOERBQUNDLHFEQUFPO2dCQUFDTSxFQUFFLEVBQUMsSUFBSTtnQkFBQ0MsUUFBUSxFQUFFLEVBQUU7Z0JBQUVDLEVBQUUsRUFBRSxDQUFDO2dCQUFFQyxNQUFNLEVBQUMsR0FBRzswQkFBQyx3QkFFakQ7Ozs7O3FCQUFVOzBCQUVSLDhEQUFDTiwyREFBTzswQkFDTiw0RUFBQ0MsK0RBQVk7b0JBQUNNLEVBQUUsRUFBQyxVQUFVO29CQUFDQyxLQUFLLEVBQUMsd0JBQXdCOzhCQUFDLHNEQUUzRDs7Ozs7eUJBQWU7Ozs7O3FCQUNQOzs7Ozs7YUFDRixDQUNiO0NBQ0Y7QUFkS04sS0FBQUEsSUFBSTtBQWdCViwrREFBZUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmZvLmpzP2YxMGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb250YWluZXIsIEhlYWRpbmcsIFNpbXBsZUdyaWQsIERpdmlkZXJ9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL3NlY3Rpb24nO1xyXG5pbXBvcnQge1dvcmtHcmlkSXRlbX0gZnJvbSAnLi4vY29tcG9uZW50cy9ncmlkLWl0ZW0nO1xyXG5cclxuXHJcbmNvbnN0IEluZm8gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxIZWFkaW5nIGFzPVwiaDNcIiBmb250U2l6ZT17MjB9IG1iPXs0fSBtYXJnaW49XCI1XCI+XHJcbiAgICAgICAgUHJvamVjdHMgd29ya2VkIHNvIGZhclxyXG4gICAgICA8L0hlYWRpbmc+XHJcblxyXG4gICAgICAgIDxTZWN0aW9uPlxyXG4gICAgICAgICAgPFdvcmtHcmlkSXRlbSBpZD1cInJlc3RtZW51XCIgdGl0bGU9XCJPbmxpbmUgUmVzdGF1cmFudCBNZW51XCI+XHJcbiAgICAgICAgICAgIFRoaXMgaXMgYSB3ZWJzaXRlIGJ1aWxkIHdpdGggcmVhY3QuanMgYW5kIGphdmFzY3JpcHRcclxuICAgICAgICAgIDwvV29ya0dyaWRJdGVtPlxyXG4gICAgICAgIDwvU2VjdGlvbj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5mbyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJIZWFkaW5nIiwiU2ltcGxlR3JpZCIsIkRpdmlkZXIiLCJTZWN0aW9uIiwiV29ya0dyaWRJdGVtIiwiSW5mbyIsImFzIiwiZm9udFNpemUiLCJtYiIsIm1hcmdpbiIsImlkIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/info.js\n");

/***/ })

});