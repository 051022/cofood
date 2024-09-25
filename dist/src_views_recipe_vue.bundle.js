/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkpj1"] = self["webpackChunkpj1"] || []).push([["src_views_recipe_vue"],{

/***/ "./src/views/recipe.vue":
/*!******************************!*\
  !*** ./src/views/recipe.vue ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _recipe_vue_vue_type_template_id_dcf5d5b0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipe.vue?vue&type=template&id=dcf5d5b0 */ \"./src/views/recipe.vue?vue&type=template&id=dcf5d5b0\");\n/* harmony import */ var _recipe_vue_vue_type_template_id_dcf5d5b0__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_recipe_vue_vue_type_template_id_dcf5d5b0__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _recipe_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe.vue?vue&type=script&setup=true&lang=js */ \"./src/views/recipe.vue?vue&type=script&setup=true&lang=js\");\n/* harmony import */ var _recipe_vue_vue_type_style_index_0_id_dcf5d5b0_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipe.vue?vue&type=style&index=0&id=dcf5d5b0&lang=css */ \"./src/views/recipe.vue?vue&type=style&index=0&id=dcf5d5b0&lang=css\");\n/* harmony import */ var _recipe_vue_vue_type_style_index_0_id_dcf5d5b0_lang_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_recipe_vue_vue_type_style_index_0_id_dcf5d5b0_lang_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_recipe_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_recipe_vue_vue_type_template_id_dcf5d5b0__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/views/recipe.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://pj1/./src/views/recipe.vue?");

/***/ }),

/***/ "./src/views/recipe.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************!*\
  !*** ./src/views/recipe.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.mjs\");\n\r\n\r\n\r\n\r\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  __name: 'recipe',\n  setup(__props, { expose: __expose }) {\n  __expose();\n\r\nconst router = (0,vue_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\r\n\r\n// 定义 ref\r\nconst Data = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);\r\n\r\n// 函数：生成1到7之间的随机整数，代表星期一到星期日\r\nfunction getRandomWeekDay() {\r\n  return Math.floor(Math.random() * 7) + 1;\r\n}\r\n\r\n// 初始化星期值\r\nlet weekDay = getRandomWeekDay();\r\nconsole.log(\"初始星期值:\", 2);\r\n\r\n// 更新星期值的函数\r\nfunction updateWeekDay() {\r\n  weekDay = getRandomWeekDay();\r\n  console.log(\"新的星期值:\", weekDay);\r\n}\r\n\r\n// 每天晚上12点自动更新星期值\r\nfunction updateAtMidnight() {\r\n  // 获取当前时间\r\n  const now = new Date();\r\n  // 计算距离明天零点的时间差\r\n  const timeUntilMidnight =\r\n    new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0) -\r\n    now;\r\n  // 设置定时器，在距离明天零点的时间后执行更新\r\n  setTimeout(function () {\r\n    updateWeekDay();\r\n    // 每次更新完后，再次设置定时器，保证在接下来的每天晚上12点再次更新\r\n    setInterval(updateAtMidnight, 24 * 60 * 60 * 1000);\r\n  }, timeUntilMidnight);\r\n}\r\n\r\n// 初始更新\r\nupdateAtMidnight();\r\n\r\n// 发起 Axios 请求\r\naxios__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\r\n  .get(\"http://www.femto.fun/daily-recommend\", {\r\n    params: {\r\n      week_day: weekDay,\r\n    },\r\n  })\r\n  .then((response) => {\r\n    if (response.data.code === 200) {\r\n      Data.value = response.data.data;\r\n    } else {\r\n      console.error(\"Failed to fetch foods:\", response.data);\r\n    }\r\n  })\r\n  .catch((error) => {\r\n    console.error(\"Error fetching foods:\", error);\r\n  });\r\n\nconst __returned__ = { router, Data, getRandomWeekDay, get weekDay() { return weekDay }, set weekDay(v) { weekDay = v }, updateWeekDay, updateAtMidnight, get axios() { return axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"] }, ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref, onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted, get useRouter() { return vue_router__WEBPACK_IMPORTED_MODULE_1__.useRouter } }\nObject.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })\nreturn __returned__\n}\n\n});\n\n//# sourceURL=webpack://pj1/./src/views/recipe.vue?");

/***/ }),

/***/ "./src/views/recipe.vue?vue&type=style&index=0&id=dcf5d5b0&lang=css":
/*!**************************************************************************!*\
  !*** ./src/views/recipe.vue?vue&type=style&index=0&id=dcf5d5b0&lang=css ***!
  \**************************************************************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (2:5)\\nFile was processed with these loaders:\\n * ./node_modules/vue-loader/dist/index.js\\nYou may need an additional loader to handle the result of these loaders.\\n| \\n> body {\\n|   background: #f4f8fa;\\n| }\");\n\n//# sourceURL=webpack://pj1/./src/views/recipe.vue?");

/***/ }),

/***/ "./src/views/recipe.vue?vue&type=template&id=dcf5d5b0":
/*!************************************************************!*\
  !*** ./src/views/recipe.vue?vue&type=template&id=dcf5d5b0 ***!
  \************************************************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (2:2)\\nFile was processed with these loaders:\\n * ./node_modules/vue-loader/dist/index.js\\nYou may need an additional loader to handle the result of these loaders.\\n| \\n>   <div class=\\\"container\\\">\\n|     <navigation></navigation>\\n|     <div class=\\\"topTitle\\\">\");\n\n//# sourceURL=webpack://pj1/./src/views/recipe.vue?");

/***/ })

}]);