/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/CartComponent.js":
/*!*****************************!*\
  !*** ./js/CartComponent.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vue.component('cart', {\n        props: ['cartItems', 'visibility'],\n        template: `\n        <div class=\"cart-block\" v-show=\"visibility\">\n        <p style = \"text-align: center;\" v-if=\"!cartItems.length\">Корзина пустая!</p>\n        <div v-else>\n            <div class=\"basketRow basketHeader\">\n                <div>Название товара</div>\n                <div>Кол-во</div>\n                <div>Цена за шт</div>\n                <div>Итого</div>\n            </div>\n            <cart-item v-for=\"item of cartItems\" :key=\"item.id_product\" :cart-item=\"item\">\n            </cart-item>\n            <div class = \"basketTotal\">Товаров в корзине на сумму: $ {{ $root.getTotalPrice }}<br>\n            <a href=\"cart.html\">Перейти в корзину</a>\n            </div>\n        </div>\n        </div>\n    `\n    }));\n\nVue.component('cart-item', {\n    props: ['cartItem'],\n    template: `\n    <div>\n                        <div class=\"basketRow\">\n                            <div>{{ cartItem.product_name }}</div>\n                            <div>{{ cartItem.quantity }} шт \n                            <button class=\"del-btn\" @click=\"$root.increase(cartItem)\">+</button>\n                            </div>\n                            <div>$ {{ cartItem.price }}</div>\n                            <div>$ {{cartItem.quantity*cartItem.price}}</div>\n                        <button class=\"del-btn\" @click=\"$root.remove(cartItem)\">&times;</button>\n                    </div>\n                </div>\n    `\n})\n\n//# sourceURL=webpack://localhost/./js/CartComponent.js?");

/***/ }),

/***/ "./js/ErrorComponent.js":
/*!******************************!*\
  !*** ./js/ErrorComponent.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vue.component('error-comp', {\r\n        template: `\r\n        <div style=\"color:red; font-weight: bold\" v-if=\"$root.error\">Ошибка</div>\r\n    `\r\n    }));\n\n//# sourceURL=webpack://localhost/./js/ErrorComponent.js?");

/***/ }),

/***/ "./js/FilterComponent.js":
/*!*******************************!*\
  !*** ./js/FilterComponent.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vue.component('filtr', {\r\n        template: `\r\n        <form action=\"#\" class=\"search-form\" @submit.prevent=\"$root.filter\" >\r\n                <button type=\"submit\" class=\"search\">\r\n                    <img src=\"img/search.png\" alt=\"search\">\r\n                </button>\r\n                <input type=\"search\" placeholder=\"Что ищем?\" v-model=\"$root.userSearch\">\r\n            </form>\r\n    `\r\n    }));\r\n\r\n/*\r\n<!--form class=\"search-form\" action=\"\">\r\n    <button class=\"search\"><img src=\"img/search.png\" alt=\"search\"></button>\r\n    <input type=\"search\" placeholder=\"Что ищем?\">\r\n</form-->\r\n*/\n\n//# sourceURL=webpack://localhost/./js/FilterComponent.js?");

/***/ }),

/***/ "./js/ProductComponent.js":
/*!********************************!*\
  !*** ./js/ProductComponent.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vue.component('products', {\n        props: ['products'],\n        template: `<div class=\"fetured-list container\">\n                <product v-for=\"item of products\" \n                :key=\"item.id_product\" \n                :img=\"item.img_product\"\n                :product=\"item\"></product>\n               </div>`\n    }));\nVue.component('product', {\n    props: ['product'],\n    template: `\n        <div class=\"fetured-cart\">\n        <a class=\"item-link\" href=\"product.html\">\n            <div class=\"fetured-list-item\">\n                <img class=\"img-fetured\" :src=\"product.img_product\" :alt=\"product.product_name\">\n\n                <div class=\"item-content\">\n                    <header class=\"item-header\">{{product.product_name}}</header>\n                    <p class=\"text\">{{product.product_desc}}</p>\n                    <p class=\"item-price\">$ {{product.price}}</p>\n                </div>\n            </div>\n        </a>\n        <div class=\"add-box\" @click=\"$parent.$emit('add-product', product)\">\n            <a href=\"#\" class=\"add\">\n                <img src=\"img/add-card.svg\" alt=\"add-to-card\">\n                <div class=\"add-txt\">Add to Cart</div>\n            </a>\n        </div>\n\n    </div>\n    `\n})\n/*\n<div class=\"fetured-list container\">\n                        <div class=\"fetured-cart\">\n                            <a class=\"item-link\" href=\"product.html\">\n                                <div class=\"fetured-list-item\">\n                                    <img class=\"img-fetured\" :src=\"product.img_product\" alt=\"product.product_name\">\n\n                                    <div class=\"item-content\">\n                                        <header class=\"item-header\">{{product.product_name}}</header>\n                                        <p class=\"text\">{{product.text-product}}</p>\n                                        <p class=\"item-price\">{{product.price}}</p>\n                                    </div>\n                                </div>\n                            </a>\n                            <div class=\"add-box\" @click=\"$parent.$emit('add-product', product)\">\n                                <a href=\"#\" class=\"add\">\n                                    <img src=\"img/add-card.svg\" alt=\"add-to-card\">\n                                    <div class=\"add-txt\">Add to Cart</div>\n                                </a>\n                            </div>\n\n                        </div>\n                    </div>\n*/\n\n//# sourceURL=webpack://localhost/./js/ProductComponent.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CartComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CartComponent */ \"./js/CartComponent.js\");\n/* harmony import */ var _ErrorComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ErrorComponent */ \"./js/ErrorComponent.js\");\n/* harmony import */ var _FilterComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FilterComponent */ \"./js/FilterComponent.js\");\n/* harmony import */ var _ProductComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductComponent */ \"./js/ProductComponent.js\");\n\n\n\n\n\n//Отправляйте свои данные с помощью $emit в верхний компонент, а вниз с помощью props\nconst API = './db';\n\nconst app = new Vue({\n    el: '#app',\n    data: {\n        userSearch: '',\n        showCart: false,\n        catalogUrl: '/products.json',\n        cartUrl: '/getBasket.json',\n        cartItems: [],\n        filtered: [],\n        products: [],\n        error: false\n    },\n    methods: {\n        getJson(url) {\n            return fetch(url)\n                .then(result => result.json())\n                .catch(error => {\n                    console.log(\"Ошибка\");\n                    this.error = true;\n                })\n\n        },\n        addProduct(item) {\n            this.getJson(`${API}/addToBasket.json`)\n                .then(data => {\n                    if (data.result === 1) {\n                        let find = this.cartItems.find(el => el.id_product === item.id_product);\n                        if (find) {\n                            find.quantity++;\n                        } else {\n                            const prod = Object.assign({ quantity: 1 }, item);\n                            this.cartItems.push(prod)\n                        }\n                    }\n                })\n        },\n        remove(item) {\n            this.getJson(`${API}/addToBasket.json`)\n                .then(data => {\n                    if (data.result === 1) {\n                        if (item.quantity > 1) {\n                            item.quantity--;\n                        } else {\n                            this.cartItems.splice(this.cartItems.indexOf(item), 1);\n                        }\n                    }\n\n                })\n        },\n        increase(item) {\n            this.getJson(`${API}/addToBasket.json`)\n                .then(data => {\n                    if (data.result === 1) {\n                        item.quantity++;\n                    }\n                })\n        },\n        detailsClosed() {\n            document.getElementById('js-details').removeAttribute('open');\n        },\n        filter() {\n            let regexp = new RegExp(this.userSearch, 'i');\n            this.filtered = this.products.filter(el => regexp.test(el.product_name));\n        },\n        checkQuantity() {\n            let cartItemsQuantity = this.cartItems.length;\n            return cartItemsQuantity;\n        }\n    },\n    computed: {\n        getTotalPrice() {\n            let totalPrice = this.cartItems.reduce((acc, product) => acc + product.price * product.quantity, 0);\n            return totalPrice;\n        }\n    },\n    mounted() {\n        this.getJson(`${API + this.cartUrl}`)\n            .then(data => {\n                for (let item of data.contents) {\n                    this.$data.cartItems.push(item);\n                }\n            });\n        this.getJson(`${API + this.catalogUrl}`)\n            .then(data => {\n                for (let item of data) {\n                    this.$data.products.push(item);\n                    this.$data.filtered.push(item);\n                }\n            });\n        this.cartItems = JSON.parse(localStorage.getItem(\"cartItems\")) || [];\n    },\n    watch: {\n        cartItems(newValue, oldValue) {\n            localStorage.setItem(\"cartItems\", JSON.stringify(newValue));\n        }\n    }\n\n});\n\n//# sourceURL=webpack://localhost/./js/main.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/main.js");
/******/ 	
/******/ })()
;