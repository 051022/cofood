/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkpj1"] = self["webpackChunkpj1"] || []).push([["src_views_shoppingCart_vue"],{

/***/ "./src/views/shoppingCart.vue":
/*!************************************!*\
  !*** ./src/views/shoppingCart.vue ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _shoppingCart_vue_vue_type_template_id_2d1405c2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shoppingCart.vue?vue&type=template&id=2d1405c2 */ \"./src/views/shoppingCart.vue?vue&type=template&id=2d1405c2\");\n/* harmony import */ var _shoppingCart_vue_vue_type_template_id_2d1405c2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_shoppingCart_vue_vue_type_template_id_2d1405c2__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shoppingCart_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shoppingCart.vue?vue&type=script&setup=true&lang=js */ \"./src/views/shoppingCart.vue?vue&type=script&setup=true&lang=js\");\n/* harmony import */ var _shoppingCart_vue_vue_type_style_index_0_id_2d1405c2_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shoppingCart.vue?vue&type=style&index=0&id=2d1405c2&lang=css */ \"./src/views/shoppingCart.vue?vue&type=style&index=0&id=2d1405c2&lang=css\");\n/* harmony import */ var _shoppingCart_vue_vue_type_style_index_0_id_2d1405c2_lang_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shoppingCart_vue_vue_type_style_index_0_id_2d1405c2_lang_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_shoppingCart_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_shoppingCart_vue_vue_type_template_id_2d1405c2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/views/shoppingCart.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://pj1/./src/views/shoppingCart.vue?");

/***/ }),

/***/ "./src/views/shoppingCart.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************!*\
  !*** ./src/views/shoppingCart.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _components_shoppingCartItem_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/shoppingCartItem.vue */ \"./src/components/shoppingCartItem.vue\");\n\r\n\r\n\r\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  __name: 'shoppingCart',\n  setup(__props, { expose: __expose }) {\n  __expose();\n\r\nconst cartItems = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([\r\n  { name: \"商品1\", price: 30, quantity: 1, isSelected: false },\r\n  { name: \"商品2\", price: 30, quantity: 1, isSelected: false },\r\n  { name: \"商品3\", price: 30, quantity: 1, isSelected: false },\r\n  // 其他购物车项...\r\n]);\r\n\r\nconst value = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(\"\");\r\nconst props = { multiple: true };\r\nconst selected = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);\r\nconst options = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([\r\n  {\r\n    value: \"guangzhou\",\r\n    label: \"广州\",\r\n    children: [\r\n      { value: \"panyu\", label: \"番禺区\" },\r\n      { value: \"tianhe\", label: \"天河区\" },\r\n    ],\r\n  },\r\n  {\r\n    value: \"shanghai\",\r\n    label: \"上海\",\r\n    children: [\r\n      { value: \"pudong\", label: \"浦东新区\" },\r\n      { value: \"puxi\", label: \"浦西\" },\r\n    ],\r\n  },\r\n  {\r\n    value: \"beijing\",\r\n    label: \"北京\",\r\n    children: [\r\n      { value: \"dongcheng\", label: \"东城区\" },\r\n      { value: \"xicheng\", label: \"西城区\" },\r\n    ],\r\n  },\r\n  // 更多选项...\r\n]);\r\n\r\nconst cascaderProps = {\r\n  value: \"value\",\r\n  label: \"label\",\r\n  children: \"children\",\r\n};\r\n\r\nconst filteredOptions = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {\r\n  // 可以在这里添加动态过滤逻辑\r\n  return options.value;\r\n});\r\n\r\nconst isAllSelected = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);\r\n\r\n//全选框逻辑\r\nconst toggleAllSelection = () => {\r\n  cartItems.value.forEach((item) => {\r\n    item.isSelected = isAllSelected.value;\r\n  });\r\n};\r\n\r\nconst updateItemSelection = (index, isSelected) => {\r\n  cartItems.value[index].isSelected = isSelected;\r\n  updateAllSelectedState();\r\n};\r\n\r\nconst updateAllSelectedState = () => {\r\n  isAllSelected.value = cartItems.value.every((item) => item.isSelected);\r\n};\r\n\r\nconst removeItem = (index) => {\r\n  cartItems.value.splice(index, 1);\r\n};\r\n\r\nconst clearCart = () => {\r\n  if (confirm(\"确定清空购物车吗？\")) {\r\n    cartItems.value = [];\r\n  }\r\n};\r\n\r\nconst selectedCount = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {\r\n  return cartItems.value.filter((item) => item.isSelected).length;\r\n});\r\n\r\nconst totalPrice = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {\r\n  return cartItems.value\r\n    .filter((item) => item.isSelected)\r\n    .reduce((total, item) => total + item.price * item.quantity, 0);\r\n});\r\n\r\nconst checkout = () => {\r\n  alert(`去结算，金额为：${totalPrice.value}元`);\r\n};\r\n\nconst __returned__ = { cartItems, value, props, selected, options, cascaderProps, filteredOptions, isAllSelected, toggleAllSelection, updateItemSelection, updateAllSelectedState, removeItem, clearCart, selectedCount, totalPrice, checkout, ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref, computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed, shoppingCartItem: _components_shoppingCartItem_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"] }\nObject.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })\nreturn __returned__\n}\n\n});\n\n//# sourceURL=webpack://pj1/./src/views/shoppingCart.vue?");

/***/ }),

/***/ "./src/views/shoppingCart.vue?vue&type=style&index=0&id=2d1405c2&lang=css":
/*!********************************************************************************!*\
  !*** ./src/views/shoppingCart.vue?vue&type=style&index=0&id=2d1405c2&lang=css ***!
  \********************************************************************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (2:5)\\nFile was processed with these loaders:\\n * ./node_modules/vue-loader/dist/index.js\\nYou may need an additional loader to handle the result of these loaders.\\n| \\n> body {\\n|   background: #f4f8fa;\\n| }\");\n\n//# sourceURL=webpack://pj1/./src/views/shoppingCart.vue?");

/***/ }),

/***/ "./src/views/shoppingCart.vue?vue&type=template&id=2d1405c2":
/*!******************************************************************!*\
  !*** ./src/views/shoppingCart.vue?vue&type=template&id=2d1405c2 ***!
  \******************************************************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (2:2)\\nFile was processed with these loaders:\\n * ./node_modules/vue-loader/dist/index.js\\nYou may need an additional loader to handle the result of these loaders.\\n| \\n>   <div class=\\\"container\\\">\\n|     <Navigation></Navigation>\\n|     <div class=\\\"banner\\\">\");\n\n//# sourceURL=webpack://pj1/./src/views/shoppingCart.vue?");

/***/ })

}]);