webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../components/Layout.js */ "./components/Layout.js");
/* harmony import */ var _components_Event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../components/Event.js */ "./components/Event.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var _css_slider_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../css/slider.css */ "./css/slider.css");
/* harmony import */ var _css_slider_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_slider_css__WEBPACK_IMPORTED_MODULE_6__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this, props));
    var config = {
      apiKey: 'AIzaSyDMVk4kh4_hTKYVXMWam50p3sYtrkbE-L0',
      authDomain: 'unicornscheduler1.firebaseapp.com',
      databaseURL: 'https://unicornscheduler1.firebaseio.com',
      projectId: 'unicornscheduler1',
      storageBucket: 'unicornscheduler1.appspot.com',
      messagingSenderId: '447273647045'
    };

    try {
      firebase_app__WEBPACK_IMPORTED_MODULE_4___default.a.initializeApp(config);
    } catch (err) {
      /*
        this try function is to skip the "already exists" message which
        happens when we're hot-reloading and is not an actual error
      */
      if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack);
      }
    }

    _this.state = {
      events: []
    };
    return _this;
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      /*
        //caused problems with the starting slide, removed it for now
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
      */
      var firestore = firebase_app__WEBPACK_IMPORTED_MODULE_4___default.a.firestore();
      var settings = {
        timestampsInSnapshots: true
      };
      firestore.settings(settings);
      firestore.collection("events").orderBy("date", "asc").onSnapshot(function (querySnapshot) {
        var events = querySnapshot.docs.map(function (event) {
          var eventData = event.data();
          return eventData;
        });
        /*
          dump to console only for dev purposes
          remove when app is in production
        */

        console.log(JSON.stringify(events, null, 2));

        _this2.setState({
          events: events
        });
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {//window.removeEventListener('resize', this.updateWindowDimensions);
    }
  }, {
    key: "updateWindowDimensions",
    value: function updateWindowDimensions() {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      /*
        Only autoplay if window is wider than 500px.
        this did not work so good, removed it.
          var autoPlay = this.state.width > 500 ? true : false;
      */
      var autoPlay = true;
      var sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: autoPlay,
        pauseOnHover: false,
        arrows: true,
        initialSlide: 0,
        autoplaySpeed: 5000
      };
      var renderEvents = [];

      if (this.state.events) {
        renderEvents = this.state.events.map(function (event, i) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Event_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
            key: i,
            event: event,
            slider: _this3.slider,
            firebase: firebase_app__WEBPACK_IMPORTED_MODULE_4___default.a
          });
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout_js__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_3___default.a, _extends({
        ref: function ref(e) {
          return _this3.slider = e;
        }
      }, sliderSettings), renderEvents));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.d1bf9e0ab6d3120e7872.hot-update.js.map