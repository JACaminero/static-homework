module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cMU6");


/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cMU6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Home() {
  return __jsx("div", {
    className: "jsx-2460797329" + " " + "container"
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("title", {
    className: "jsx-2460797329"
  }, "Create Next App"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-2460797329"
  })), __jsx("div", {
    className: "jsx-2460797329" + " " + "photo"
  }, __jsx("div", {
    className: "jsx-2460797329" + " " + "card-desc"
  }, __jsx("img", {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQkBBgYEuP70dZpP3xdw8vSBZrqA7vTg2WNYA&usqp=CAU",
    className: "jsx-2460797329"
  }), __jsx("h2", {
    className: "jsx-2460797329"
  }, "Bio"), __jsx("hr", {
    className: "jsx-2460797329"
  }), __jsx("p", {
    className: "jsx-2460797329"
  }, "*Narrado con voz muy muy MUY rasposa* My name is Batman, and first of all, let's get this out of the way, Im definitely ", __jsx("strong", {
    className: "jsx-2460797329"
  }, "NOT"), " Bruce Wayne. So if yall could be so kind to make a small donation of at least 500 dollars each to support our crime fighting efforts..... that be hella cool."))), __jsx("main", {
    className: "jsx-2460797329"
  }, __jsx("div", {
    className: "jsx-2460797329" + " " + "card"
  }, __jsx("h2", {
    className: "jsx-2460797329" + " " + "title"
  }, "Hello There, Im ", __jsx("a", {
    href: "https://www.dccomics.com/characters/batman",
    className: "jsx-2460797329"
  }, "Batman"))), __jsx("div", {
    className: "jsx-2460797329" + " " + "grid"
  }, __jsx("div", {
    className: "jsx-2460797329" + " " + "ability"
  }, __jsx("h2", {
    className: "jsx-2460797329"
  }, "Habilidades"), __jsx("hr", {
    className: "jsx-2460797329"
  }), __jsx("ul", {
    className: "jsx-2460797329" + " " + "description"
  }, __jsx("li", {
    className: "jsx-2460797329"
  }, "Ser Batman"), __jsx("li", {
    className: "jsx-2460797329"
  }, "No ser Bruce Wayne"), __jsx("li", {
    className: "jsx-2460797329"
  }, "POW"), __jsx("li", {
    className: "jsx-2460797329"
  }, "WAPOW"))), __jsx("div", {
    className: "jsx-2460797329" + " " + "hobby"
  }, __jsx("h2", {
    className: "jsx-2460797329"
  }, "Hobby"), __jsx("hr", {
    className: "jsx-2460797329"
  }), __jsx("ul", {
    className: "jsx-2460797329" + " " + "description"
  }, __jsx("li", {
    className: "jsx-2460797329"
  }, "Combatir el crimen"), __jsx("li", {
    className: "jsx-2460797329"
  }, "Conducir el Batimovil"), __jsx("li", {
    className: "jsx-2460797329"
  }, "Ser Batman"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3340311830"
  }, [".photo.jsx-2460797329{background-image:url(https://dam.smashmexico.com.mx/wp-content/uploads/2017/09/05155736/dc-batman-the-animated-series-a-25-anos-de-su-estreno-cover.jpg);width:100%;height:360px;background-position:50% 10%;}", ".ability.jsx-2460797329{padding:1rem;border:1px solid #eaeaea;border-radius:10px;margin-right:5rem;}", ".hobby.jsx-2460797329{padding:1rem;border:1px solid #eaeaea;border-radius:10px;}", ".face-photo.jsx-2460797329{background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQkBBgYEuP70dZpP3xdw8vSBZrqA7vTg2WNYA&usqp=CAU);width:20%;height:220px;border-radius:100%;margin-top:15%;margin-left:3%;}", ".photo.jsx-2460797329 .card-desc.jsx-2460797329{width:25%;}", ".card-desc.jsx-2460797329 img.jsx-2460797329{border-radius:50%;margin-left:10%;}", "li.jsx-2460797329{list-style-type:\"- \";}", ".container.jsx-2460797329{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", "main.jsx-2460797329{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", "a.jsx-2460797329{color:inherit;-webkit-text-decoration:none;text-decoration:none;}", ".title.jsx-2460797329 a.jsx-2460797329{color:#0070f3;-webkit-text-decoration:none;text-decoration:none;}", ".title.jsx-2460797329 a.jsx-2460797329:hover,.title.jsx-2460797329 a.jsx-2460797329:focus,.title.jsx-2460797329 a.jsx-2460797329:active{-webkit-text-decoration:underline;text-decoration:underline;}", ".title.jsx-2460797329{margin:0;line-height:1.15;font-size:4rem;}", ".title.jsx-2460797329{text-align:center;}", ".description.jsx-2460797329{line-height:1.5;font-size:1.5rem;}", "code.jsx-2460797329{background:#fafafa;border-radius:5px;padding:0.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace;}", ".grid.jsx-2460797329{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:800px;margin-left:32%;}", ".card-desc.jsx-2460797329{margin:2rem;margin-top:12rem;-webkit-flex-basis:45%;-ms-flex-preferred-size:45%;flex-basis:45%;padding:1.5rem;text-align:left;color:inherit;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:color 0.15s ease,border-color 0.15s ease;transition:color 0.15s ease,border-color 0.15s ease;}", ".card.jsx-2460797329{margin:2rem;margin-left:25rem;-webkit-flex-basis:45%;-ms-flex-preferred-size:45%;flex-basis:45%;padding:1.5rem;text-align:left;color:inherit;-webkit-text-decoration:none;text-decoration:none;border:1px solid #eaeaea;border-radius:10px;-webkit-transition:color 0.15s ease,border-color 0.15s ease;transition:color 0.15s ease,border-color 0.15s ease;}", ".card.jsx-2460797329 h3.jsx-2460797329{margin:0 0 1rem 0;font-size:1.5rem;}", ".card.jsx-2460797329 p.jsx-2460797329{margin:0;font-size:1.25rem;line-height:1.5;}", ".logo.jsx-2460797329{height:1em;}", "@media (max-width:600px){.grid.jsx-2460797329{width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}"]), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "299560078"
  }, ["html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;background-color:rgb(13,13,13);color:white;}", "*{box-sizing:border-box;}"]));
}

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });