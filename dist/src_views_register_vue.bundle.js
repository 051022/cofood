/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkpj1"] = self["webpackChunkpj1"] || []).push([["src_views_register_vue"],{

/***/ "./src/views/register.vue":
/*!********************************!*\
  !*** ./src/views/register.vue ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _register_vue_vue_type_template_id_77453986_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.vue?vue&type=template&id=77453986&scoped=true */ \"./src/views/register.vue?vue&type=template&id=77453986&scoped=true\");\n/* harmony import */ var _register_vue_vue_type_template_id_77453986_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_register_vue_vue_type_template_id_77453986_scoped_true__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _register_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.vue?vue&type=script&setup=true&lang=js */ \"./src/views/register.vue?vue&type=script&setup=true&lang=js\");\n/* harmony import */ var _register_vue_vue_type_style_index_0_id_77453986_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.vue?vue&type=style&index=0&id=77453986&scoped=true&lang=css */ \"./src/views/register.vue?vue&type=style&index=0&id=77453986&scoped=true&lang=css\");\n/* harmony import */ var _register_vue_vue_type_style_index_0_id_77453986_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_register_vue_vue_type_style_index_0_id_77453986_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_register_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_register_vue_vue_type_template_id_77453986_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',\"data-v-77453986\"],['__file',\"src/views/register.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://pj1/./src/views/register.vue?");

/***/ }),

/***/ "./src/views/register.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************!*\
  !*** ./src/views/register.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! qs */ \"./node_modules/qs/lib/index.js\");\n/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\r\n\r\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  __name: 'register',\n  setup(__props, { expose: __expose }) {\n  __expose();\n\r\nconst router = (0,vue_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\r\n\r\n// 定义 ref\r\nconst email = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(\"\");\r\nconst password = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(\"\");\r\nconst repassword = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(\"\");\r\nconst verifyCode = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(\"\");\r\nconst countdown = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0); // 添加倒计时计数器\r\n\r\n// 发送邮箱验证码\r\nconst sendVerificationCode = async () => {\r\n  if (!email.value) {\r\n    alert(\"邮箱不能为空\");\r\n    return;\r\n  }\r\n  try {\r\n    const res = await (0,axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\r\n      method: \"post\",\r\n      url: `http://www.femto.fun/verify-email?email=${email.value}&action=0`,\r\n    });\r\n\r\n    // 检查请求是否成功\r\n    if (res.data.code === 409) {\r\n      alert(\"账号已注册！\");\r\n    } else if (res.data.code === 200) {\r\n      alert(\"验证码发送成功\");\r\n\r\n      // 开始倒计时\r\n      countdown.value = 60;\r\n      const timer = setInterval(() => {\r\n        countdown.value--;\r\n        if (countdown.value === 0) {\r\n          clearInterval(timer);\r\n        }\r\n      }, 1000);\r\n    } else {\r\n      // 如果请求失败，弹出错误提示\r\n      alert(\"验证码发送失败\");\r\n    }\r\n  } catch (error) {\r\n    // 如果发生错误，打印错误信息并弹出错误提示\r\n    console.error(\"Error:\", error);\r\n    alert(\"验证码发送失败\");\r\n  }\r\n};\r\n\r\n//注册\r\nconst RegisterUser = async () => {\r\n  if (!email.value) {\r\n    alert(\"用户名不能为空\");\r\n    return;\r\n  }\r\n  if (!password.value) {\r\n    alert(\"密码不能为空\");\r\n    return;\r\n  }\r\n  if (repassword.value !== password.value) {\r\n    alert(\"两次输入密码不一致！\");\r\n    return;\r\n  }\r\n  if (!verifyCode.value) {\r\n    alert(\"请输入验证码\");\r\n    return;\r\n  }\r\n  try {\r\n    // 定义要传递的数据对象\r\n    const data = {\r\n      email: email.value, // 修正获取输入框的值\r\n      password: password.value, // 修正获取输入框的值\r\n      verifyCode: verifyCode.value,\r\n    };\r\n\r\n    // 发送 POST 请求\r\n    axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\r\n      .post(\"http://www.femto.fun/user-register-email\", qs__WEBPACK_IMPORTED_MODULE_3___default().stringify(data))\r\n      .then((response) => {\r\n        const Res = response.data; // 获取响应数据\r\n        if (response.status === 200) {\r\n          if (Res.code === 201) {\r\n            console.log(loginRes);\r\n            alert(\"注册成功\");\r\n            router.push(\"/home\");\r\n          } else if (Res.code === 401) {\r\n            console.log(Res);\r\n            alert(\"验证码错误\");\r\n          } else {\r\n            console.log(Res);\r\n            alert(\"注册失败\");\r\n          }\r\n        } else {\r\n          console.error(\"注册请求失败:\", response);\r\n          alert(\"注册失败\");\r\n        }\r\n      })\r\n      .catch((error) => {\r\n        console.error(\"注册请求失败:\", error);\r\n        alert(\"注册失败\");\r\n      });\r\n  } catch (error) {\r\n    console.error(error);\r\n    alert(\"注册失败\");\r\n  }\r\n};\r\n\nconst __returned__ = { router, email, password, repassword, verifyCode, countdown, sendVerificationCode, RegisterUser, ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref, get useRouter() { return vue_router__WEBPACK_IMPORTED_MODULE_1__.useRouter }, get axios() { return axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"] }, get Qs() { return (qs__WEBPACK_IMPORTED_MODULE_3___default()) } }\nObject.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })\nreturn __returned__\n}\n\n});\n\n//# sourceURL=webpack://pj1/./src/views/register.vue?");

/***/ }),

/***/ "./src/views/register.vue?vue&type=style&index=0&id=77453986&scoped=true&lang=css":
/*!****************************************************************************************!*\
  !*** ./src/views/register.vue?vue&type=style&index=0&id=77453986&scoped=true&lang=css ***!
  \****************************************************************************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (2:5)\\nFile was processed with these loaders:\\n * ./node_modules/vue-loader/dist/index.js\\nYou may need an additional loader to handle the result of these loaders.\\n| \\n> body {\\n|   background: #f4f8fa;\\n| }\");\n\n//# sourceURL=webpack://pj1/./src/views/register.vue?");

/***/ }),

/***/ "./src/views/register.vue?vue&type=template&id=77453986&scoped=true":
/*!**************************************************************************!*\
  !*** ./src/views/register.vue?vue&type=template&id=77453986&scoped=true ***!
  \**************************************************************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (2:2)\\nFile was processed with these loaders:\\n * ./node_modules/vue-loader/dist/index.js\\nYou may need an additional loader to handle the result of these loaders.\\n| \\n>   <div class=\\\"container\\\">\\n|     <div class=\\\"banner\\\">\\n|       <div class=\\\"secondBanner\\\">\");\n\n//# sourceURL=webpack://pj1/./src/views/register.vue?");

/***/ }),

/***/ "?4f7e":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

eval("/* (ignored) */\n\n//# sourceURL=webpack://pj1/./util.inspect_(ignored)?");

/***/ })

}]);