/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkpj1"] = self["webpackChunkpj1"] || []).push([["src_views_shopping_vue"],{

/***/ "./src/views/shopping.vue":
/*!********************************!*\
  !*** ./src/views/shopping.vue ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _shopping_vue_vue_type_template_id_67bf88fc_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shopping.vue?vue&type=template&id=67bf88fc&scoped=true */ \"./src/views/shopping.vue?vue&type=template&id=67bf88fc&scoped=true\");\n/* harmony import */ var _shopping_vue_vue_type_template_id_67bf88fc_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_shopping_vue_vue_type_template_id_67bf88fc_scoped_true__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shopping_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopping.vue?vue&type=script&setup=true&lang=js */ \"./src/views/shopping.vue?vue&type=script&setup=true&lang=js\");\n/* harmony import */ var _shopping_vue_vue_type_style_index_0_id_67bf88fc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopping.vue?vue&type=style&index=0&id=67bf88fc&scoped=true&lang=css */ \"./src/views/shopping.vue?vue&type=style&index=0&id=67bf88fc&scoped=true&lang=css\");\n/* harmony import */ var _shopping_vue_vue_type_style_index_0_id_67bf88fc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopping_vue_vue_type_style_index_0_id_67bf88fc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_shopping_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_shopping_vue_vue_type_template_id_67bf88fc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',\"data-v-67bf88fc\"],['__file',\"src/views/shopping.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://pj1/./src/views/shopping.vue?");

/***/ }),

/***/ "./src/views/shopping.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************!*\
  !*** ./src/views/shopping.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\r\n\r\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  __name: 'shopping',\n  setup(__props, { expose: __expose }) {\n  __expose();\n\r\nconst slides = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([\"../../image/商品@2x.png\", \"../../image/商品@2x (1).png\"]);\r\n\r\nconst currentSlideIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);\r\n\r\nconst currentSlide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => slides.value[currentSlideIndex.value]);\r\n\r\nconst prevSlide = () => {\r\n  currentSlideIndex.value =\r\n    (currentSlideIndex.value - 1 + slides.value.length) % slides.value.length;\r\n};\r\n\r\nconst nextSlide = () => {\r\n  currentSlideIndex.value = (currentSlideIndex.value + 1) % slides.value.length;\r\n};\r\n\r\nconst items = [\r\n  \"主食\",\r\n  \"奶类制品\",\r\n  \"蔬菜\",\r\n  \"肉类\",\r\n  \"海鲜类\",\r\n  \"谷类\",\r\n  \"水果\",\r\n  \"豆类坚果\",\r\n  \"零食饮料\",\r\n];\r\n\r\nconst activeIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0); // 初始默认第一个是绿色\r\nconst getColor = (index) =>\r\n  index === activeIndex.value ? \"#32db5a\" : \"#808080\";\r\nconst changeColor = (index) => {\r\n  activeIndex.value = index;\r\n};\r\nconst changeTab = (index) => {\r\n  activeIndex.value = index;\r\n};\r\n\nconst __returned__ = { slides, currentSlideIndex, currentSlide, prevSlide, nextSlide, items, activeIndex, getColor, changeColor, changeTab, ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref, computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed }\nObject.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })\nreturn __returned__\n}\n\n});\n\n//# sourceURL=webpack://pj1/./src/views/shopping.vue?");

/***/ }),

/***/ "./src/views/shopping.vue?vue&type=style&index=0&id=67bf88fc&scoped=true&lang=css":
/*!****************************************************************************************!*\
  !*** ./src/views/shopping.vue?vue&type=style&index=0&id=67bf88fc&scoped=true&lang=css ***!
  \****************************************************************************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (2:5)\\nFile was processed with these loaders:\\n * ./node_modules/vue-loader/dist/index.js\\nYou may need an additional loader to handle the result of these loaders.\\n| \\n> body {\\n|   background: #f4f8fa;\\n| }\");\n\n//# sourceURL=webpack://pj1/./src/views/shopping.vue?");

/***/ }),

/***/ "./src/views/shopping.vue?vue&type=template&id=67bf88fc&scoped=true":
/*!**************************************************************************!*\
  !*** ./src/views/shopping.vue?vue&type=template&id=67bf88fc&scoped=true ***!
  \**************************************************************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (2:2)\\nFile was processed with these loaders:\\n * ./node_modules/vue-loader/dist/index.js\\nYou may need an additional loader to handle the result of these loaders.\\n| \\n>   <div class=\\\"container\\\">\\n|     <Navigation></Navigation>\\n|     <div class=\\\"banner\\\">\");\n\n//# sourceURL=webpack://pj1/./src/views/shopping.vue?");

/***/ })

}]);