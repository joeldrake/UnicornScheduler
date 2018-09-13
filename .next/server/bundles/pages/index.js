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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(3);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/Head.js


var defaultTitle = 'Unicorn Scheduler';
var defaultDescription = 'Welcome to the Unicorn Scheduler. Home of all the fantastic scheduled events.';
var defaultOGURL = 'https://unicornscheduler.com';
var defaultOGImage = '/static/img/test1.jpg';

var Head_Head = function Head(props) {
  return external__react__default.a.createElement(head__default.a, null, external__react__default.a.createElement("meta", {
    charSet: "UTF-8"
  }), external__react__default.a.createElement("title", null, props.title || defaultTitle), external__react__default.a.createElement("link", {
    rel: "manifest",
    href: "/static/manifest.json"
  }), external__react__default.a.createElement("meta", {
    name: "description",
    content: props.description || defaultDescription
  }), external__react__default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), external__react__default.a.createElement("link", {
    rel: "icon",
    href: "/static/img/test1.png"
  }), external__react__default.a.createElement("meta", {
    property: "og:url",
    content: props.url || defaultOGURL
  }), external__react__default.a.createElement("meta", {
    property: "og:title",
    content: props.title || defaultTitle
  }), external__react__default.a.createElement("meta", {
    property: "og:description",
    content: props.description || defaultDescription
  }), external__react__default.a.createElement("link", {
    rel: "icon",
    href: props.ogImage || defaultOGImage
  }), external__react__default.a.createElement("meta", {
    name: "apple-mobile-web-app-status-bar-style",
    content: "black-translucent"
  }), external__react__default.a.createElement("meta", {
    name: "twitter:site",
    content: props.url || defaultOGURL
  }), external__react__default.a.createElement("meta", {
    name: "twitter:card",
    content: "summary_large_image"
  }), external__react__default.a.createElement("meta", {
    name: "twitter:image",
    content: props.ogImage || defaultOGImage
  }), external__react__default.a.createElement("meta", {
    property: "og:image",
    content: props.ogImage || defaultOGImage
  }), external__react__default.a.createElement("meta", {
    property: "og:image:width",
    content: "1200"
  }), external__react__default.a.createElement("meta", {
    property: "og:image:height",
    content: "630"
  }), external__react__default.a.createElement("link", {
    rel: "stylesheet",
    href: "/_next/static/style.css"
  }));
};

/* harmony default export */ var components_Head = (Head_Head);
// EXTERNAL MODULE: ./css/main.css
var main = __webpack_require__(4);
var main_default = /*#__PURE__*/__webpack_require__.n(main);

// CONCATENATED MODULE: ./components/Layout.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Layout_Layout =
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
      return external__react__default.a.createElement("div", {
        className: "main"
      }, external__react__default.a.createElement(components_Head, null), this.props.children);
    }
  }]);

  return Layout;
}(external__react__default.a.Component);

/* harmony default export */ var components_Layout = (Layout_Layout);
// EXTERNAL MODULE: external "react-slick"
var external__react_slick_ = __webpack_require__(5);
var external__react_slick__default = /*#__PURE__*/__webpack_require__.n(external__react_slick_);

// EXTERNAL MODULE: ./css/slider.css
var slider = __webpack_require__(6);
var slider_default = /*#__PURE__*/__webpack_require__.n(slider);

// EXTERNAL MODULE: ./css/sliderContent.css
var sliderContent = __webpack_require__(7);
var sliderContent_default = /*#__PURE__*/__webpack_require__.n(sliderContent);

// CONCATENATED MODULE: ./pages/index.js
function pages__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { pages__typeof = function _typeof(obj) { return typeof obj; }; } else { pages__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return pages__typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function pages__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function pages__createClass(Constructor, protoProps, staticProps) { if (protoProps) pages__defineProperties(Constructor.prototype, protoProps); if (staticProps) pages__defineProperties(Constructor, staticProps); return Constructor; }

function pages__possibleConstructorReturn(self, call) { if (call && (pages__typeof(call) === "object" || typeof call === "function")) { return call; } return pages__assertThisInitialized(self); }

function pages__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function pages__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






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

var pages_Index =
/*#__PURE__*/
function (_React$Component) {
  pages__inherits(Index, _React$Component);

  function Index(props) {
    var _this;

    pages__classCallCheck(this, Index);

    _this = pages__possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));
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

  pages__createClass(Index, [{
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

        return external__react__default.a.createElement("div", {
          className: "slideItemWrapper",
          key: i
        }, external__react__default.a.createElement("div", {
          className: "slideItem",
          style: slideItemStyle
        }, !slide.image ? external__react__default.a.createElement("h2", null, slide.text) : null));
      }) : {};
      return external__react__default.a.createElement(components_Layout, null, external__react__default.a.createElement(external__react_slick__default.a, _extends({
        ref: function ref(e) {
          return _this2.slider = e;
        }
      }, sliderSettings), renderSlides));
    }
  }]);

  return Index;
}(external__react__default.a.Component);

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Index);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 4 */
/***/ (function(module, exports) {



/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),
/* 6 */
/***/ (function(module, exports) {



/***/ }),
/* 7 */
/***/ (function(module, exports) {



/***/ })
/******/ ]);