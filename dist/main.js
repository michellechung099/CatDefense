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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _waypoints_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./waypoints.js */ \"./src/waypoints.js\");\n/* harmony import */ var _waypoints_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_waypoints_js__WEBPACK_IMPORTED_MODULE_0__);\n// import Enemy from \"./enemy\";\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const canvas = document.getElementById(\"game-canvas\");\n  const c = canvas.getContext(\"2d\");\n  canvas.width = 1280;\n  canvas.height = 768;\n  c.fillStyle = \"white\";\n  c.fillRect(0, 0, canvas.width, canvas.height);\n  const img = new Image();\n  img.onload = () => {\n    movement();\n  };\n  img.src = \"assets/finalMap.png\";\n  let x = 50;\n  function movement() {\n    requestAnimationFrame(movement);\n    c.drawImage(img, 0, 0);\n    c.fillStyle = \"blue\";\n    c.fillRect(x, 400, 90, 90);\n    x++;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDc0M7QUFFdENDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBVztFQUN2RCxNQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLGFBQWEsQ0FBQztFQUNyRCxNQUFNQyxDQUFDLEdBQUdGLE1BQU0sQ0FBQ0csVUFBVSxDQUFDLElBQUksQ0FBQztFQUVqQ0gsTUFBTSxDQUFDSSxLQUFLLEdBQUcsSUFBSTtFQUNuQkosTUFBTSxDQUFDSyxNQUFNLEdBQUcsR0FBRztFQUVuQkgsQ0FBQyxDQUFDSSxTQUFTLEdBQUcsT0FBTztFQUNyQkosQ0FBQyxDQUFDSyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRVAsTUFBTSxDQUFDSSxLQUFLLEVBQUVKLE1BQU0sQ0FBQ0ssTUFBTSxDQUFDO0VBRTdDLE1BQU1HLEdBQUcsR0FBRyxJQUFJQyxLQUFLLEVBQUU7RUFDdkJELEdBQUcsQ0FBQ0UsTUFBTSxHQUFHLE1BQU07SUFDakJDLFFBQVEsRUFBRTtFQUNaLENBQUM7RUFDREgsR0FBRyxDQUFDSSxHQUFHLEdBQUUscUJBQXFCO0VBRTlCLElBQUlDLENBQUMsR0FBRyxFQUFFO0VBQ1YsU0FBU0YsUUFBUUEsQ0FBQSxFQUFHO0lBQ2xCRyxxQkFBcUIsQ0FBQ0gsUUFBUSxDQUFDO0lBQy9CVCxDQUFDLENBQUNhLFNBQVMsQ0FBQ1AsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdEJOLENBQUMsQ0FBQ0ksU0FBUyxHQUFHLE1BQU07SUFDcEJKLENBQUMsQ0FBQ0ssUUFBUSxDQUFDTSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7SUFDMUJBLENBQUMsRUFBRTtFQUNMO0FBR0YsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9wcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEVuZW15IGZyb20gXCIuL2VuZW15XCI7XG5pbXBvcnQgV2F5cG9pbnRzIGZyb20gXCIuL3dheXBvaW50cy5qc1wiXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtY2FudmFzXCIpO1xuICBjb25zdCBjID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICBjYW52YXMud2lkdGggPSAxMjgwO1xuICBjYW52YXMuaGVpZ2h0ID0gNzY4O1xuXG4gIGMuZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICBjLmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbiAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgbW92ZW1lbnQoKTtcbiAgfVxuICBpbWcuc3JjPSBcImFzc2V0cy9maW5hbE1hcC5wbmdcIlxuXG4gIGxldCB4ID0gNTA7XG4gIGZ1bmN0aW9uIG1vdmVtZW50KCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShtb3ZlbWVudCk7XG4gICAgYy5kcmF3SW1hZ2UoaW1nLCAwLCAwKTtcbiAgICBjLmZpbGxTdHlsZSA9IFwiYmx1ZVwiO1xuICAgIGMuZmlsbFJlY3QoeCwgNDAwLCA5MCwgOTApO1xuICAgIHgrK1xuICB9XG5cblxufSk7XG4iXSwibmFtZXMiOlsiV2F5cG9pbnRzIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjIiwiZ2V0Q29udGV4dCIsIndpZHRoIiwiaGVpZ2h0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJpbWciLCJJbWFnZSIsIm9ubG9hZCIsIm1vdmVtZW50Iiwic3JjIiwieCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRyYXdJbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/waypoints.js":
/*!**************************!*\
  !*** ./src/waypoints.js ***!
  \**************************/
/***/ (function(module) {

eval("const waypoints = [{\n  \"x\": 0,\n  \"y\": 0\n}, {\n  \"x\": -67,\n  \"y\": 441\n}, {\n  \"x\": 191,\n  \"y\": 441\n}, {\n  \"x\": 190,\n  \"y\": 315\n}, {\n  \"x\": 508,\n  \"y\": 315\n}, {\n  \"x\": 507,\n  \"y\": 569\n}, {\n  \"x\": 762,\n  \"y\": 570\n}, {\n  \"x\": 764,\n  \"y\": 189\n}, {\n  \"x\": 1022,\n  \"y\": 189\n}, {\n  \"x\": 1019,\n  \"y\": 442\n}, {\n  \"x\": 1346,\n  \"y\": 447\n}];\nmodule.exports = waypoints;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvd2F5cG9pbnRzLmpzLmpzIiwibmFtZXMiOlsid2F5cG9pbnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9wcm9qZWN0Ly4vc3JjL3dheXBvaW50cy5qcz8xOWY3Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHdheXBvaW50cyA9IFtcbiAge1xuICAgXCJ4XCI6MCxcbiAgIFwieVwiOjBcbiAgfSxcbiAge1xuICAgXCJ4XCI6LTY3LFxuICAgXCJ5XCI6NDQxXG4gIH0sXG4gIHtcbiAgIFwieFwiOjE5MSxcbiAgIFwieVwiOjQ0MVxuICB9LFxuICB7XG4gICBcInhcIjoxOTAsXG4gICBcInlcIjozMTVcbiAgfSxcbiAge1xuICAgXCJ4XCI6NTA4LFxuICAgXCJ5XCI6MzE1XG4gIH0sXG4gIHtcbiAgIFwieFwiOjUwNyxcbiAgIFwieVwiOjU2OVxuICB9LFxuICB7XG4gICBcInhcIjo3NjIsXG4gICBcInlcIjo1NzBcbiAgfSxcbiAge1xuICAgXCJ4XCI6NzY0LFxuICAgXCJ5XCI6MTg5XG4gIH0sXG4gIHtcbiAgIFwieFwiOjEwMjIsXG4gICBcInlcIjoxODlcbiAgfSxcbiAge1xuICAgXCJ4XCI6MTAxOSxcbiAgIFwieVwiOjQ0MlxuICB9LFxuICB7XG4gICBcInhcIjoxMzQ2LFxuICAgXCJ5XCI6NDQ3XG4gIH1dXG5cbiAgbW9kdWxlLmV4cG9ydHMgPSB3YXlwb2ludHM7IFxuIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxTQUFTLEdBQUcsQ0FDaEI7RUFDQyxHQUFHLEVBQUMsQ0FBQztFQUNMLEdBQUcsRUFBQztBQUNMLENBQUMsRUFDRDtFQUNDLEdBQUcsRUFBQyxDQUFDLEVBQUU7RUFDUCxHQUFHLEVBQUM7QUFDTCxDQUFDLEVBQ0Q7RUFDQyxHQUFHLEVBQUMsR0FBRztFQUNQLEdBQUcsRUFBQztBQUNMLENBQUMsRUFDRDtFQUNDLEdBQUcsRUFBQyxHQUFHO0VBQ1AsR0FBRyxFQUFDO0FBQ0wsQ0FBQyxFQUNEO0VBQ0MsR0FBRyxFQUFDLEdBQUc7RUFDUCxHQUFHLEVBQUM7QUFDTCxDQUFDLEVBQ0Q7RUFDQyxHQUFHLEVBQUMsR0FBRztFQUNQLEdBQUcsRUFBQztBQUNMLENBQUMsRUFDRDtFQUNDLEdBQUcsRUFBQyxHQUFHO0VBQ1AsR0FBRyxFQUFDO0FBQ0wsQ0FBQyxFQUNEO0VBQ0MsR0FBRyxFQUFDLEdBQUc7RUFDUCxHQUFHLEVBQUM7QUFDTCxDQUFDLEVBQ0Q7RUFDQyxHQUFHLEVBQUMsSUFBSTtFQUNSLEdBQUcsRUFBQztBQUNMLENBQUMsRUFDRDtFQUNDLEdBQUcsRUFBQyxJQUFJO0VBQ1IsR0FBRyxFQUFDO0FBQ0wsQ0FBQyxFQUNEO0VBQ0MsR0FBRyxFQUFDLElBQUk7RUFDUixHQUFHLEVBQUM7QUFDTCxDQUFDLENBQUM7QUFFRkMsTUFBTSxDQUFDQyxPQUFPLEdBQUdGLFNBQVMifQ==\n//# sourceURL=webpack-internal:///./src/waypoints.js\n");

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