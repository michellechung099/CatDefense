/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _waypoints_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./waypoints.js */ \"./src/waypoints.js\");\n/* harmony import */ var _waypoints_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_waypoints_js__WEBPACK_IMPORTED_MODULE_0__);\n// import Enemy from \"./enemy\";\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const canvas = document.getElementById(\"game-canvas\");\n  const c = canvas.getContext(\"2d\");\n  canvas.width = 1280;\n  canvas.height = 768;\n  c.fillStyle = \"white\";\n  c.fillRect(0, 0, canvas.width, canvas.height);\n  const img = new Image();\n  img.onload = () => {\n    c.drawImage(img, 0, 0);\n  };\n  img.src = \"assets/finalMap.png\";\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDc0M7QUFFdENDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBVztFQUN2RCxNQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLGFBQWEsQ0FBQztFQUNyRCxNQUFNQyxDQUFDLEdBQUdGLE1BQU0sQ0FBQ0csVUFBVSxDQUFDLElBQUksQ0FBQztFQUVqQ0gsTUFBTSxDQUFDSSxLQUFLLEdBQUcsSUFBSTtFQUNuQkosTUFBTSxDQUFDSyxNQUFNLEdBQUcsR0FBRztFQUVuQkgsQ0FBQyxDQUFDSSxTQUFTLEdBQUcsT0FBTztFQUNyQkosQ0FBQyxDQUFDSyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRVAsTUFBTSxDQUFDSSxLQUFLLEVBQUVKLE1BQU0sQ0FBQ0ssTUFBTSxDQUFDO0VBRTdDLE1BQU1HLEdBQUcsR0FBRyxJQUFJQyxLQUFLLEVBQUU7RUFDdkJELEdBQUcsQ0FBQ0UsTUFBTSxHQUFHLE1BQU07SUFDakJSLENBQUMsQ0FBQ1MsU0FBUyxDQUFDSCxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUN4QixDQUFDO0VBQ0RBLEdBQUcsQ0FBQ0ksR0FBRyxHQUFFLHFCQUFxQjtBQUVoQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0X3Byb2plY3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgRW5lbXkgZnJvbSBcIi4vZW5lbXlcIjtcbmltcG9ydCBXYXlwb2ludHMgZnJvbSBcIi4vd2F5cG9pbnRzLmpzXCJcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIik7XG4gIGNvbnN0IGMgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gIGNhbnZhcy53aWR0aCA9IDEyODA7XG4gIGNhbnZhcy5oZWlnaHQgPSA3Njg7XG5cbiAgYy5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gIGMuZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcblxuICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICBjLmRyYXdJbWFnZShpbWcsIDAsIDApXG4gIH1cbiAgaW1nLnNyYz0gXCJhc3NldHMvZmluYWxNYXAucG5nXCJcblxufSk7XG4iXSwibmFtZXMiOlsiV2F5cG9pbnRzIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjIiwiZ2V0Q29udGV4dCIsIndpZHRoIiwiaGVpZ2h0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJpbWciLCJJbWFnZSIsIm9ubG9hZCIsImRyYXdJbWFnZSIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/waypoints.js":
/*!**************************!*\
  !*** ./src/waypoints.js ***!
  \**************************/
/***/ (function() {

eval("const waypoints = [{\n  \"x\": 0,\n  \"y\": 0\n}, {\n  \"x\": -67,\n  \"y\": 441\n}, {\n  \"x\": 191,\n  \"y\": 441\n}, {\n  \"x\": 190,\n  \"y\": 315\n}, {\n  \"x\": 508,\n  \"y\": 315\n}, {\n  \"x\": 507,\n  \"y\": 569\n}, {\n  \"x\": 762,\n  \"y\": 570\n}, {\n  \"x\": 764,\n  \"y\": 189\n}, {\n  \"x\": 1022,\n  \"y\": 189\n}, {\n  \"x\": 1019,\n  \"y\": 442\n}, {\n  \"x\": 1346,\n  \"y\": 447\n}];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvd2F5cG9pbnRzLmpzLmpzIiwibmFtZXMiOlsid2F5cG9pbnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0X3Byb2plY3QvLi9zcmMvd2F5cG9pbnRzLmpzPzE5ZjciXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgd2F5cG9pbnRzID0gW1xuICB7XG4gICBcInhcIjowLFxuICAgXCJ5XCI6MFxuICB9LFxuICB7XG4gICBcInhcIjotNjcsXG4gICBcInlcIjo0NDFcbiAgfSxcbiAge1xuICAgXCJ4XCI6MTkxLFxuICAgXCJ5XCI6NDQxXG4gIH0sXG4gIHtcbiAgIFwieFwiOjE5MCxcbiAgIFwieVwiOjMxNVxuICB9LFxuICB7XG4gICBcInhcIjo1MDgsXG4gICBcInlcIjozMTVcbiAgfSxcbiAge1xuICAgXCJ4XCI6NTA3LFxuICAgXCJ5XCI6NTY5XG4gIH0sXG4gIHtcbiAgIFwieFwiOjc2MixcbiAgIFwieVwiOjU3MFxuICB9LFxuICB7XG4gICBcInhcIjo3NjQsXG4gICBcInlcIjoxODlcbiAgfSxcbiAge1xuICAgXCJ4XCI6MTAyMixcbiAgIFwieVwiOjE4OVxuICB9LFxuICB7XG4gICBcInhcIjoxMDE5LFxuICAgXCJ5XCI6NDQyXG4gIH0sXG4gIHtcbiAgIFwieFwiOjEzNDYsXG4gICBcInlcIjo0NDdcbiAgfV1cbiJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsU0FBUyxHQUFHLENBQ2hCO0VBQ0MsR0FBRyxFQUFDLENBQUM7RUFDTCxHQUFHLEVBQUM7QUFDTCxDQUFDLEVBQ0Q7RUFDQyxHQUFHLEVBQUMsQ0FBQyxFQUFFO0VBQ1AsR0FBRyxFQUFDO0FBQ0wsQ0FBQyxFQUNEO0VBQ0MsR0FBRyxFQUFDLEdBQUc7RUFDUCxHQUFHLEVBQUM7QUFDTCxDQUFDLEVBQ0Q7RUFDQyxHQUFHLEVBQUMsR0FBRztFQUNQLEdBQUcsRUFBQztBQUNMLENBQUMsRUFDRDtFQUNDLEdBQUcsRUFBQyxHQUFHO0VBQ1AsR0FBRyxFQUFDO0FBQ0wsQ0FBQyxFQUNEO0VBQ0MsR0FBRyxFQUFDLEdBQUc7RUFDUCxHQUFHLEVBQUM7QUFDTCxDQUFDLEVBQ0Q7RUFDQyxHQUFHLEVBQUMsR0FBRztFQUNQLEdBQUcsRUFBQztBQUNMLENBQUMsRUFDRDtFQUNDLEdBQUcsRUFBQyxHQUFHO0VBQ1AsR0FBRyxFQUFDO0FBQ0wsQ0FBQyxFQUNEO0VBQ0MsR0FBRyxFQUFDLElBQUk7RUFDUixHQUFHLEVBQUM7QUFDTCxDQUFDLEVBQ0Q7RUFDQyxHQUFHLEVBQUMsSUFBSTtFQUNSLEdBQUcsRUFBQztBQUNMLENBQUMsRUFDRDtFQUNDLEdBQUcsRUFBQyxJQUFJO0VBQ1IsR0FBRyxFQUFDO0FBQ0wsQ0FBQyxDQUFDIn0=\n//# sourceURL=webpack-internal:///./src/waypoints.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0X3Byb2plY3QvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;