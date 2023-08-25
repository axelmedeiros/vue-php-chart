"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");



/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)


var app = new vue__WEBPACK_IMPORTED_MODULE_4__["default"]({
  el: '#app',
  data: function data() {
    return {
      coments: [],
      name: '',
      message: ''
    };
  },
  methods: {
    addComment: function addComment() {
      if (this.name.trim() === "") return;
      this.coments.push({
        'name': this.name,
        'message': this.message
      });
      this.name = '';
      this.message = '';
    },
    removeComment: function removeComment() {
      this.coments.pop();
    }
  },
  delimiters: ['#{', '}']
});

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_push_js-node_modules_core-js_modules_es_functio-060dbb"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUMwQjtBQUNKO0FBRXRCLElBQU1DLEdBQUcsR0FBRyxJQUFJRCwyQ0FBRyxDQUFDO0VBQ2hCRSxFQUFFLEVBQUUsTUFBTTtFQUNWQyxJQUFJLEVBQUUsU0FBQUEsS0FBQSxFQUFZO0lBQ2QsT0FBTztNQUNIQyxPQUFPLEVBQUUsRUFBRTtNQUNYQyxJQUFJLEVBQUUsRUFBRTtNQUNSQyxPQUFPLEVBQUU7SUFDYixDQUFDO0VBQ0wsQ0FBQztFQUNEQyxPQUFPLEVBQUU7SUFDTEMsVUFBVSxXQUFBQSxXQUFBLEVBQUc7TUFDVCxJQUFJLElBQUksQ0FBQ0gsSUFBSSxDQUFDSSxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFDdkI7TUFDSixJQUFJLENBQUNMLE9BQU8sQ0FBQ00sSUFBSSxDQUFDO1FBQUUsTUFBTSxFQUFFLElBQUksQ0FBQ0wsSUFBSTtRQUFFLFNBQVMsRUFBRSxJQUFJLENBQUNDO01BQU8sQ0FBQyxDQUFDO01BQ2hFLElBQUksQ0FBQ0QsSUFBSSxHQUFHLEVBQUU7TUFDZCxJQUFJLENBQUNDLE9BQU8sR0FBRyxFQUFFO0lBQ3JCLENBQUM7SUFDREssYUFBYSxXQUFBQSxjQUFBLEVBQUc7TUFDWixJQUFJLENBQUNQLE9BQU8sQ0FBQ1EsR0FBRyxDQUFDLENBQUM7SUFDdEI7RUFFSixDQUFDO0VBQ0RDLFVBQVUsRUFBRSxDQUFDLElBQUksRUFBRSxHQUFHO0FBQzFCLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7QUNsQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcbmltcG9ydCBWdWUgZnJvbSAndnVlJztcblxuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XG4gICAgZWw6ICcjYXBwJyxcbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb21lbnRzOiBbXSxcbiAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgbWVzc2FnZTogJydcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBhZGRDb21tZW50KCkge1xuICAgICAgICAgICAgaWYgKHRoaXMubmFtZS50cmltKCkgPT09IFwiXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB0aGlzLmNvbWVudHMucHVzaCh7ICduYW1lJzogdGhpcy5uYW1lLCAnbWVzc2FnZSc6IHRoaXMubWVzc2FnZX0pXG4gICAgICAgICAgICB0aGlzLm5hbWUgPSAnJztcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9ICcnO1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmVDb21tZW50KCkge1xuICAgICAgICAgICAgdGhpcy5jb21lbnRzLnBvcCgpO1xuICAgICAgICB9LFxuXG4gICAgfSxcbiAgICBkZWxpbWl0ZXJzOiBbJyN7JywgJ30nXVxufSkiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiVnVlIiwiYXBwIiwiZWwiLCJkYXRhIiwiY29tZW50cyIsIm5hbWUiLCJtZXNzYWdlIiwibWV0aG9kcyIsImFkZENvbW1lbnQiLCJ0cmltIiwicHVzaCIsInJlbW92ZUNvbW1lbnQiLCJwb3AiLCJkZWxpbWl0ZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==