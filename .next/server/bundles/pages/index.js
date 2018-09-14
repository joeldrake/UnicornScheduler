module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Head.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
var _jsxFileName = "/Users/joel/dev/UnicornScheduler/components/Head.js";


var defaultTitle = 'Unicorn Scheduler';
var defaultDescription = 'Welcome to the Unicorn Scheduler. Home of all the fantastic scheduled events.';
var defaultOGURL = 'https://unicornscheduler.com';
var defaultOGImage = '/static/img/test1.jpg';

var Head = function Head(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    charSet: "UTF-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, props.title || defaultTitle), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "manifest",
    href: "/static/manifest.json",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "description",
    content: props.description || defaultDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "icon",
    href: "/static/img/test1.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:url",
    content: props.url || defaultOGURL,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:title",
    content: props.title || defaultTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:description",
    content: props.description || defaultDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "icon",
    href: props.ogImage || defaultOGImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "apple-mobile-web-app-status-bar-style",
    content: "black-translucent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "twitter:site",
    content: props.url || defaultOGURL,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "twitter:card",
    content: "summary_large_image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "twitter:image",
    content: props.ogImage || defaultOGImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:image",
    content: props.ogImage || defaultOGImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:image:width",
    content: "1200",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:image:height",
    content: "630",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "/_next/static/style.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Head);

/***/ }),

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Head__ = __webpack_require__("./components/Head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__css_main_css__ = __webpack_require__("./css/main.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__css_main_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__css_main_css__);
var _jsxFileName = "/Users/joel/dev/UnicornScheduler/components/Layout.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Layout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Head__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }), this.props.children);
    }
  }]);

  return Layout;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./css/main.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "./css/slider.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "./css/sliderContent.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout_js__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_slick__ = __webpack_require__("react-slick");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_slick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_slick__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__css_slider_css__ = __webpack_require__("./css/slider.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__css_slider_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__css_slider_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__css_sliderContent_css__ = __webpack_require__("./css/sliderContent.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__css_sliderContent_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__css_sliderContent_css__);
var _jsxFileName = "/Users/joel/dev/UnicornScheduler/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  afterChange: function afterChange(i) {
    console.log(i);
  }
};

var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));
    _this.state = {
      slides: [{
        text: 'Slide 1',
        image: '/static/img/test1.jpg'
      }, {
        text: 'Slide 2',
        image: '/static/img/test2.jpg'
      }, {
        text: 'Unicorn!'
      }]
    };
    return _this;
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var renderSlides = this.state.slides ? this.state.slides.map(function (slide, i) {
        var slideItemStyle = {};

        if (slide.image) {
          slideItemStyle = {
            backgroundImage: "url(".concat(slide.image, ")")
          };
        }

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "slideItemWrapper",
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "slideItem",
          style: slideItemStyle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        }, !slide.image ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          }
        }, slide.text) : null));
      }) : {};
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Layout_js__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_slick___default.a, _extends({
        ref: function ref(e) {
          return _this2.slider = e;
        }
      }, sliderSettings, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }), renderSlides));
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-slick":
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map