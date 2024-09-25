/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkpj1"] = self["webpackChunkpj1"] || []).push([["src_views_community_vue"],{

/***/ "./src/views/community.vue":
/*!*********************************!*\
  !*** ./src/views/community.vue ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _community_vue_vue_type_template_id_054eaa82_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./community.vue?vue&type=template&id=054eaa82&scoped=true */ \"./src/views/community.vue?vue&type=template&id=054eaa82&scoped=true\");\n/* harmony import */ var _community_vue_vue_type_template_id_054eaa82_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_community_vue_vue_type_template_id_054eaa82_scoped_true__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _community_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./community.vue?vue&type=script&setup=true&lang=js */ \"./src/views/community.vue?vue&type=script&setup=true&lang=js\");\n/* harmony import */ var _community_vue_vue_type_style_index_0_id_054eaa82_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./community.vue?vue&type=style&index=0&id=054eaa82&scoped=true&lang=css */ \"./src/views/community.vue?vue&type=style&index=0&id=054eaa82&scoped=true&lang=css\");\n/* harmony import */ var _community_vue_vue_type_style_index_0_id_054eaa82_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_community_vue_vue_type_style_index_0_id_054eaa82_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_community_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_community_vue_vue_type_template_id_054eaa82_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',\"data-v-054eaa82\"],['__file',\"src/views/community.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://pj1/./src/views/community.vue?");

/***/ }),

/***/ "./src/views/community.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************!*\
  !*** ./src/views/community.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\r\n\r\n//点赞，点击点赞数+1，图标改变，再次点击点赞数-1，图标恢复\r\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  __name: 'community',\n  setup(__props, { expose: __expose }) {\n  __expose();\n\r\nconst countUpvote = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(5888);\r\n//初始为假\r\nlet upvoted = false;\r\n\r\nconst changeUpvote = () => {\r\n  if (!upvoted) {\r\n    countUpvote.value++;\r\n    // 点击一次后为真\r\n    upvoted = true;\r\n  } else {\r\n    countUpvote.value--;\r\n    //再点击为假\r\n    upvoted = false;\r\n  }\r\n};\r\n// 收藏，同上\r\nconst countCollect = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(1588);\r\nlet collected = false;\r\n\r\nconst changeCollect = () => {\r\n  if (!collected) {\r\n    countCollect.value++;\r\n    collected = true;\r\n  } else {\r\n    countCollect.value--;\r\n    collected = false;\r\n  }\r\n};\r\n//评论，待补充\r\nconst countComment = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(4484);\r\n\r\n//发布动态\r\nconst newComment = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(\"\");\r\nconst comments = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);\r\n\r\n//点击addComment按钮触发函数\r\nconst addComment = () => {\r\n  // .trim() 用于移除 newComment.value 字符串两端的空白字符，\r\n  // 然后检查结果是否等于空字符串 \"\"。\r\n  if (newComment.value.trim() === \"\") {\r\n    alert(\"评论内容不能为空\");\r\n    return;\r\n  }\r\n  // 向名为 comments 的数组或类数组对象中添加一个新的对象。\r\n  // 这个新对象有一个键为 text 的属性，其值为 newComment.value。\r\n  comments.value.push({ text: newComment.value });\r\n  newComment.value = \"\"; // 清空输入框\r\n};\r\n\r\nconst deleteComment = (index) => {\r\n  comments.value.splice(index, 1);\r\n};\r\n\nconst __returned__ = { countUpvote, get upvoted() { return upvoted }, set upvoted(v) { upvoted = v }, changeUpvote, countCollect, get collected() { return collected }, set collected(v) { collected = v }, changeCollect, countComment, newComment, comments, addComment, deleteComment, ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref }\nObject.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })\nreturn __returned__\n}\n\n});\n\n//# sourceURL=webpack://pj1/./src/views/community.vue?");

/***/ }),

/***/ "./src/views/community.vue?vue&type=style&index=0&id=054eaa82&scoped=true&lang=css":
/*!*****************************************************************************************!*\
  !*** ./src/views/community.vue?vue&type=style&index=0&id=054eaa82&scoped=true&lang=css ***!
  \*****************************************************************************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (2:5)\\nFile was processed with these loaders:\\n * ./node_modules/vue-loader/dist/index.js\\nYou may need an additional loader to handle the result of these loaders.\\n| \\n> body {\\n|   background: #f4f8fa;\\n| }\");\n\n//# sourceURL=webpack://pj1/./src/views/community.vue?");

/***/ }),

/***/ "./src/views/community.vue?vue&type=template&id=054eaa82&scoped=true":
/*!***************************************************************************!*\
  !*** ./src/views/community.vue?vue&type=template&id=054eaa82&scoped=true ***!
  \***************************************************************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (2:2)\\nFile was processed with these loaders:\\n * ./node_modules/vue-loader/dist/index.js\\nYou may need an additional loader to handle the result of these loaders.\\n| \\n>   <div class=\\\"container\\\">\\n|     <Navigation></Navigation>\\n| \");\n\n//# sourceURL=webpack://pj1/./src/views/community.vue?");

/***/ })

}]);