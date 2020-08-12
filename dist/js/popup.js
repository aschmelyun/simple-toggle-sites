/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/popup.js":
/*!****************************!*\
  !*** ./assets/js/popup.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var activeOn = document.getElementById('activeOn'),
    activeOff = document.getElementById('activeOff'),
    save = document.getElementById('save'),
    sites = document.getElementById('sites');
activeOn.addEventListener('click', function (e) {
  e.preventDefault();
  activeOn.classList.add('is-active');
  activeOff.classList.remove('is-active');
  localStorage.setItem('toggleSitesActive', true);
  chrome.browserAction.setIcon({
    path: 'dist/images/icon-16x16.png'
  });
});
activeOff.addEventListener('click', function (e) {
  e.preventDefault();
  activeOff.classList.add('is-active');
  activeOn.classList.remove('is-active');
  localStorage.setItem('toggleSitesActive', false);
  chrome.browserAction.setIcon({
    path: 'dist/images/icon-16x16-off.png'
  });
});
var save = document.getElementById('save');
save.addEventListener('click', function (e) {
  e.preventDefault();
  localStorage.setItem('toggleSitesList', sites.value);
});
document.addEventListener("DOMContentLoaded", function () {
  sites.value = localStorage.getItem('toggleSitesList');

  if (localStorage.getItem('toggleSitesActive') === 'true') {
    activeOn.classList.add('is-active');
  } else {
    activeOff.classList.add('is-active');
  }
});

/***/ }),

/***/ "./assets/sass/popup.scss":
/*!********************************!*\
  !*** ./assets/sass/popup.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!***********************************************************!*\
  !*** multi ./assets/js/popup.js ./assets/sass/popup.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\Andrew\sites\simple-toggle-sites.ext\assets\js\popup.js */"./assets/js/popup.js");
module.exports = __webpack_require__(/*! C:\Users\Andrew\sites\simple-toggle-sites.ext\assets\sass\popup.scss */"./assets/sass/popup.scss");


/***/ })

/******/ });