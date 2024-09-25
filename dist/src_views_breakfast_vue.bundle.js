/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkpj1"] = self["webpackChunkpj1"] || []).push([["src_views_breakfast_vue"],{

/***/ "./src/views/breakfast.vue":
/*!*********************************!*\
  !*** ./src/views/breakfast.vue ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _breakfast_vue_vue_type_template_id_5870cbb1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breakfast.vue?vue&type=template&id=5870cbb1 */ \"./src/views/breakfast.vue?vue&type=template&id=5870cbb1\");\n/* harmony import */ var _breakfast_vue_vue_type_template_id_5870cbb1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_breakfast_vue_vue_type_template_id_5870cbb1__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _breakfast_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breakfast.vue?vue&type=script&setup=true&lang=js */ \"./src/views/breakfast.vue?vue&type=script&setup=true&lang=js\");\n/* harmony import */ var _breakfast_vue_vue_type_style_index_0_id_5870cbb1_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./breakfast.vue?vue&type=style&index=0&id=5870cbb1&lang=css */ \"./src/views/breakfast.vue?vue&type=style&index=0&id=5870cbb1&lang=css\");\n/* harmony import */ var _breakfast_vue_vue_type_style_index_0_id_5870cbb1_lang_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_breakfast_vue_vue_type_style_index_0_id_5870cbb1_lang_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_breakfast_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_breakfast_vue_vue_type_template_id_5870cbb1__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/views/breakfast.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://pj1/./src/views/breakfast.vue?");

/***/ }),

/***/ "./src/views/breakfast.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************!*\
  !*** ./src/views/breakfast.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.mjs\");\n\r\n\r\n\r\n\r\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  __name: 'breakfast',\n  setup(__props, { expose: __expose }) {\n  __expose();\n\r\nconst router = (0,vue_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\r\n\r\n// 定义 ref\r\nconst foods = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);\r\n\r\n// 发起 Axios 请求\r\naxios__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\r\n  .get(\"http://www.femto.fun/food-recommend\", {\r\n    params: {\r\n      type: 0,\r\n    },\r\n  })\r\n  .then((response) => {\r\n    if (response.data.code === 200) {\r\n      foods.value = response.data.data;\r\n    } else {\r\n      console.error(\"Failed to fetch foods:\", response.data);\r\n    }\r\n  })\r\n  .catch((error) => {\r\n    console.error(\"Error fetching foods:\", error);\r\n  });\r\n\nconst __returned__ = { router, foods, get axios() { return axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"] }, ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref, get useRouter() { return vue_router__WEBPACK_IMPORTED_MODULE_1__.useRouter } }\nObject.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })\nreturn __returned__\n}\n\n});\n\n//# sourceURL=webpack://pj1/./src/views/breakfast.vue?");

/***/ }),

/***/ "./src/views/breakfast.vue?vue&type=style&index=0&id=5870cbb1&lang=css":
/*!*****************************************************************************!*\
  !*** ./src/views/breakfast.vue?vue&type=style&index=0&id=5870cbb1&lang=css ***!
  \*****************************************************************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (2:5)\\nFile was processed with these loaders:\\n * ./node_modules/vue-loader/dist/index.js\\nYou may need an additional loader to handle the result of these loaders.\\n| \\n> body {\\n|   background: #f4f8fa;\\n| }\");\n\n//# sourceURL=webpack://pj1/./src/views/breakfast.vue?");

/***/ }),

/***/ "./src/views/breakfast.vue?vue&type=template&id=5870cbb1":
/*!***************************************************************!*\
  !*** ./src/views/breakfast.vue?vue&type=template&id=5870cbb1 ***!
  \***************************************************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (2:2)\\nFile was processed with these loaders:\\n * ./node_modules/vue-loader/dist/index.js\\nYou may need an additional loader to handle the result of these loaders.\\n| \\n>   <div class=\\\"container\\\">\\n|     <Navigation></Navigation>\\n|     <mealRecommand></mealRecommand>\");\n\n//# sourceURL=webpack://pj1/./src/views/breakfast.vue?");

/***/ })

}]);