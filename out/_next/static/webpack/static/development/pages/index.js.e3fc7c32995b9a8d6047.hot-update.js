webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Event.js":
/*!*****************************!*\
  !*** ./components/Event.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_EventEdit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../components/EventEdit.js */ "./components/EventEdit.js");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-pose */ "./node_modules/react-pose/dist/react-pose.es.js");
/* harmony import */ var _css_event_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../css/event.css */ "./css/event.css");
/* harmony import */ var _css_event_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_event_css__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Event =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Event, _React$Component);

  function Event(props) {
    var _this;

    _classCallCheck(this, Event);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Event).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleToolbarItemClick", function (e) {
      e.preventDefault();
      var eventEditOpen = _this.state.eventEditOpen;

      if (!eventEditOpen) {
        //Modal is about to be open, pause the slider
        _this.props.slider.slickPause();

        console.log('pause slider');
      } else {
        //Modal is about to be close, play the slider
        _this.props.slider.slickPlay();

        console.log('play slider');
      }

      _this.setState({
        eventEditOpen: !eventEditOpen
      });
    });

    _this.state = {
      eventEditOpen: false
    };
    return _this;
  }

  _createClass(Event, [{
    key: "render",
    value: function render() {
      console.log(this.props);
      var event = this.props.event;
      var eventEditOpen = this.state.eventEditOpen;
      var EventEditContainer = react_pose__WEBPACK_IMPORTED_MODULE_2__["default"].div({
        enter: {
          y: '0',
          opacity: 1
        },
        exit: {
          y: '-80%',
          opacity: 0
        }
      });
      var EventEditDarkenContainer = react_pose__WEBPACK_IMPORTED_MODULE_2__["default"].div({
        enter: {
          opacity: 1
        },
        exit: {
          opacity: 0
        }
      });
      var eventStyle = {};
      var eventHeadlineStyle = {};

      if (event.image) {
        eventStyle.backgroundImage = "url(".concat(event.image, ")");
      }

      if (event.color) {
        eventHeadlineStyle.backgroundColor = "".concat(event.color);
      }

      var renderHeadline = event.headline ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "eventBox eventHeadline",
        style: eventHeadlineStyle
      }, event.headline) : '';
      var renderDescription = event.description ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "eventBox eventDesciption"
      }, event.description) : '';
      var renderTime = event.time ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "eventBox white eventTime"
      }, event.time) : '';
      var renderLocation = event.location ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "eventBox white eventLocation"
      }, event.location) : '';
      var renderHeadlineDescriptionWrapper = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "headlineDescriptionWrapper"
      }, renderHeadline, renderDescription);
      var renderTimeLocationWrapper = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "timeLocationWrapper"
      }, renderTime, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "clearfix"
      }), renderLocation);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "eventWrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "event",
        style: eventStyle
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "eventToolbar"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        onClick: this.handleToolbarItemClick
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/img/pen.svg"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        onClick: this.handleToolbarItemClick
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/img/plus.svg"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_pose__WEBPACK_IMPORTED_MODULE_2__["PoseGroup"], null, eventEditOpen ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EventEditContainer, {
        className: "eventEditWrapper",
        key: "eventEdit"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_EventEdit_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
        toggleModal: this.handleToolbarItemClick
      })) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_pose__WEBPACK_IMPORTED_MODULE_2__["PoseGroup"], null, eventEditOpen ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EventEditDarkenContainer, {
        className: "eventEditDarken",
        key: "darken"
      }) : null), renderHeadlineDescriptionWrapper, renderTimeLocationWrapper));
    }
  }]);

  return Event;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Event);

/***/ })

})
//# sourceMappingURL=index.js.e3fc7c32995b9a8d6047.hot-update.js.map