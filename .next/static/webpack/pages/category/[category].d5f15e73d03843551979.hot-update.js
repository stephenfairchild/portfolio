webpackHotUpdate_N_E("pages/category/[category]",{

/***/ "./src/pages/category/[category].jsx":
/*!*******************************************!*\
  !*** ./src/pages/category/[category].jsx ***!
  \*******************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Category; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/navbar */ \"./src/components/navbar.jsx\");\nvar _jsxFileName = \"/home/stephen/Apps/next-portfolio/src/pages/category/[category].jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar __N_SSG = true;\nfunction Category(props) {\n  var _this = this;\n\n  var posts = props.posts;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: \"container mx-auto text-center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 21\n    }\n  }, __jsx(\"h1\", {\n    className: \"text-xl\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 25\n    }\n  }, \"Most recent\"), __jsx(\"ul\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 25\n    }\n  }, posts.map(function (post) {\n    return __jsx(\"a\", {\n      href: \"/posts/\".concat(post.slug),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 33\n      }\n    }, __jsx(\"li\", {\n      className: \"cursor-pointer hover:font-light\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 37\n      }\n    }, post.title));\n  }))))));\n}\n_c = Category;\n\nvar _c;\n\n$RefreshReg$(_c, \"Category\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NhdGVnb3J5L1tjYXRlZ29yeV0uanN4PzJmMTAiXSwibmFtZXMiOlsiQ2F0ZWdvcnkiLCJwcm9wcyIsInBvc3RzIiwibWFwIiwicG9zdCIsInNsdWciLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUVBOztBQXlCZSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUFBOztBQUFBLE1BQzVCQyxLQUQ0QixHQUNsQkQsS0FEa0IsQ0FDNUJDLEtBRDRCO0FBR3BDLFNBQ0ksbUVBQ0ksTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLCtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFJLGFBQVMsRUFBQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tBLEtBQUssQ0FBQ0MsR0FBTixDQUFVLFVBQUFDLElBQUk7QUFBQSxXQUNYO0FBQUcsVUFBSSxtQkFBWUEsSUFBSSxDQUFDQyxJQUFqQixDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFJLGVBQVMsRUFBQyxpQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0tELElBQUksQ0FBQ0UsS0FEVixDQURKLENBRFc7QUFBQSxHQUFkLENBREwsQ0FGSixDQURKLENBREosQ0FGSixDQURKO0FBcUJIO0tBeEJ1Qk4sUSIsImZpbGUiOiIuL3NyYy9wYWdlcy9jYXRlZ29yeS9bY2F0ZWdvcnldLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IGdldEFsbFBvc3RzSW5DYXRlZ29yeSwgZ2V0QWxsQ2F0ZWdvcmllcyB9IGZyb20gXCIuLi8uLi9jb250ZW50LWFwaVwiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9uYXZiYXJcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IGNhdGVnb3J5ID0gXCJcIiB9ID0gY29udGV4dC5xdWVyeTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0QWxsUG9zdHNJbkNhdGVnb3J5KGNhdGVnb3J5KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBwb3N0czogZGF0YVxuICAgICAgICB9XG4gICAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBhd2FpdCBnZXRBbGxDYXRlZ29yaWVzKCk7XG5cbiAgICBjb25zdCBwYXRocyA9IGNhdGVnb3JpZXMubWFwKGNhdGVnb3J5ID0+ICh7XG4gICAgICAgIHBhcmFtczogeyBjYXRlZ29yeTogY2F0ZWdvcnkuc2x1Zy5jdXJyZW50IH1cbiAgICB9KSk7XG5cbiAgICAvLyBXZSdsbCBwcmUtcmVuZGVyIG9ubHkgdGhlc2UgcGF0aHMgYXQgYnVpbGQgdGltZS5cbiAgICAvLyB7IGZhbGxiYWNrOiBmYWxzZSB9IG1lYW5zIG90aGVyIHJvdXRlcyBzaG91bGQgNDA0LlxuICAgIHJldHVybiB7IHBhdGhzLCBmYWxsYmFjazogZmFsc2UgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcnkocHJvcHMpIHtcbiAgICBjb25zdCB7IHBvc3RzIH0gPSBwcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8TmF2YmFyIC8+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsXCI+TW9zdCByZWNlbnQ8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0cy5tYXAocG9zdCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AvcG9zdHMvJHtwb3N0LnNsdWd9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgaG92ZXI6Zm9udC1saWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0LnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/category/[category].jsx\n");

/***/ })

})