webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/EventEdit.js":
/*!*********************************!*\
  !*** ./components/EventEdit.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _css_form_control_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../css/form-control.css */ "./css/form-control.css");
/* harmony import */ var _css_form_control_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_form_control_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _css_btn_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../css/btn.css */ "./css/btn.css");
/* harmony import */ var _css_btn_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_btn_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _css_eventEdit_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../css/eventEdit.css */ "./css/eventEdit.css");
/* harmony import */ var _css_eventEdit_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_eventEdit_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_6__);


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







var database = firebase__WEBPACK_IMPORTED_MODULE_6___default.a.database().ref;
database.once('value');

var Modal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Modal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "submitEventForm", function (values, actions) {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
      /* 
      todo: Submit form data to firebase
        CREATE EVENT (something like this)
      const firestore = this.props.firebase.firestore();
      const uniqeName = `${value.name} ${Date.now()}`;
      
      values.lastUpdated = new Date()
      values.id = uniqeName
        firestore.collection(`events`).doc(uniqeName).set(values);
        UPDATE EVENT (something like this)
      firestore
        .collection(`events`)
        .doc(uniqeName)
        .update(values)
        .then(() => {
          console.log('Document successfully updated!');
        })
        .catch(error => {
          console.error('Error updating document: ', error);
        });
        */

      actions.setSubmitting(false);
      actions.resetForm();
    });

    return _this;
  }

  _createClass(Modal, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1704629409" + " " + "eventEdit"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1704629409",
        css: "body,.event{height:100vh;overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGVsbFxccHJvamVjdHNcXFVuaWNvcm5TY2hlZHVsZXJcXGNvbXBvbmVudHNcXEV2ZW50RWRpdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQzJCLEFBSTBCLGFBQ0csZ0JBQ2xCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcZGVsbFxccHJvamVjdHNcXFVuaWNvcm5TY2hlZHVsZXJcXGNvbXBvbmVudHNcXEV2ZW50RWRpdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvcm1payB9IGZyb20gJ2Zvcm1payc7XHJcbmltcG9ydCAnLi8uLi9jc3MvZm9ybS1jb250cm9sLmNzcyc7XHJcbmltcG9ydCAnLi8uLi9jc3MvYnRuLmNzcyc7XHJcbmltcG9ydCAnLi8uLi9jc3MvZXZlbnRFZGl0LmNzcyc7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZSc7IFxyXG5cclxudmFyIGRhdGFiYXNlID0gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWY7XHJcblxyXG5kYXRhYmFzZS5vbmNlKCd2YWx1ZScpXHJcblxyXG5jbGFzcyBNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3VibWl0RXZlbnRGb3JtID0gKHZhbHVlcywgYWN0aW9ucykgPT4ge1xyXG4gICAgY29uc29sZS5sb2codmFsdWVzKTtcclxuICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KHZhbHVlcywgbnVsbCwgMikpO1xyXG4gICAgLyogXHJcbiAgICB0b2RvOiBTdWJtaXQgZm9ybSBkYXRhIHRvIGZpcmViYXNlXHJcblxyXG4gICAgQ1JFQVRFIEVWRU5UIChzb21ldGhpbmcgbGlrZSB0aGlzKVxyXG4gICAgY29uc3QgZmlyZXN0b3JlID0gdGhpcy5wcm9wcy5maXJlYmFzZS5maXJlc3RvcmUoKTtcclxuICAgIGNvbnN0IHVuaXFlTmFtZSA9IGAke3ZhbHVlLm5hbWV9ICR7RGF0ZS5ub3coKX1gO1xyXG4gICAgXHJcbiAgICB2YWx1ZXMubGFzdFVwZGF0ZWQgPSBuZXcgRGF0ZSgpXHJcbiAgICB2YWx1ZXMuaWQgPSB1bmlxZU5hbWVcclxuXHJcbiAgICBmaXJlc3RvcmUuY29sbGVjdGlvbihgZXZlbnRzYCkuZG9jKHVuaXFlTmFtZSkuc2V0KHZhbHVlcyk7XHJcblxyXG4gICAgVVBEQVRFIEVWRU5UIChzb21ldGhpbmcgbGlrZSB0aGlzKVxyXG4gICAgZmlyZXN0b3JlXHJcbiAgICAgIC5jb2xsZWN0aW9uKGBldmVudHNgKVxyXG4gICAgICAuZG9jKHVuaXFlTmFtZSlcclxuICAgICAgLnVwZGF0ZSh2YWx1ZXMpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnRG9jdW1lbnQgc3VjY2Vzc2Z1bGx5IHVwZGF0ZWQhJyk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgZG9jdW1lbnQ6ICcsIGVycm9yKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgKi9cclxuXHJcbiAgICBhY3Rpb25zLnNldFN1Ym1pdHRpbmcoZmFsc2UpO1xyXG4gICAgYWN0aW9ucy5yZXNldEZvcm0oKTtcclxuICB9O1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZXZlbnRFZGl0YH0+XHJcbiAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuICAgICAgICAgIGJvZHksXHJcbiAgICAgICAgICAuZXZlbnQge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Rm9ybWlrIGluaXRpYWxWYWx1ZXM9e3t9fSBvblN1Ym1pdD17dGhpcy5zdWJtaXRFdmVudEZvcm19PlxyXG4gICAgICAgICAgeyh7XHJcbiAgICAgICAgICAgIHZhbHVlcyxcclxuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlLFxyXG4gICAgICAgICAgICBoYW5kbGVCbHVyLFxyXG4gICAgICAgICAgICBoYW5kbGVTdWJtaXQsXHJcbiAgICAgICAgICAgIGlzU3VibWl0dGluZyxcclxuICAgICAgICAgIH0pID0+IChcclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPXtgZXZlbnRFZGl0Rm9ybWB9PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT17YHRleHRgfVxyXG4gICAgICAgICAgICAgICAgICBuYW1lPXtgaGVhZGxpbmVgfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmhlYWRsaW5lIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YEV2ZW50bmFtZWB9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbGB9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPXtgb2ZmYH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgbmFtZT17YGRlc2NyaXB0aW9uYH1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5kZXNjcmlwdGlvbiB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2BEZXNjaXB0aW9uYH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sYH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9e2BvZmZgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPXtgdGV4dGB9XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9e2Bsb2NhdGlvbmB9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMubG9jYXRpb24gfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgTG9jYXRpb25gfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2xgfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT17YG9mZmB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9e2B0ZXh0YH1cclxuICAgICAgICAgICAgICAgICAgbmFtZT17YHRpbWVgfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnRpbWUgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgVGltZWB9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbGB9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPXtgb2ZmYH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPXtgdGV4dGB9XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9e2BkYXRlYH1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5kYXRlIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YERhdGVgfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2xgfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT17YG9mZmB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9e2B0ZXh0YH1cclxuICAgICAgICAgICAgICAgICAgbmFtZT17YGNvbG9yYH1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5jb2xvciB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2BDb2xvcmB9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbGB9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPXtgb2ZmYH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT17YHRleHRgfVxyXG4gICAgICAgICAgICAgICAgICBuYW1lPXtgaW1hZ2VgfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmltYWdlIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YEltYWdlYH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sYH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9e2BvZmZgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BldmVudEVkaXRGb3JtRm9vdGVyYH0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9e2BzdWJtaXRgfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BidG4gZXZlbnRFZGl0Rm9ybVN1Ym1pdEJ0bmB9XHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFNhdmVcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvRm9ybWlrPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT17YGNsb3NlRXZlbnRFZGl0QnRuIGJ0biBidG5UcmFuc3BhcmVudCBidG5Sb3VuZGB9XHJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLnRvZ2dsZU1vZGFsfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxpbWcgc3JjPXtgL3N0YXRpYy9pbWcvY3Jvc3Muc3ZnYH0gLz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\dell\\projects\\UnicornScheduler\\components\\EventEdit.js */"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
        initialValues: {},
        onSubmit: this.submitEventForm
      }, function (_ref) {
        var values = _ref.values,
            handleChange = _ref.handleChange,
            handleBlur = _ref.handleBlur,
            handleSubmit = _ref.handleSubmit,
            isSubmitting = _ref.isSubmitting;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
          onSubmit: handleSubmit,
          className: "jsx-1704629409" + " " + "eventEditForm"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-1704629409"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "text",
          name: "headline",
          value: values.headline || '',
          placeholder: "Eventname",
          onChange: handleChange,
          onBlur: handleBlur,
          autoComplete: "off",
          className: "jsx-1704629409" + " " + "form-control"
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
          name: "description",
          value: values.description || '',
          placeholder: "Desciption",
          onChange: handleChange,
          onBlur: handleBlur,
          autoComplete: "off",
          className: "jsx-1704629409" + " " + "form-control"
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "text",
          name: "location",
          value: values.location || '',
          placeholder: "Location",
          onChange: handleChange,
          onBlur: handleBlur,
          autoComplete: "off",
          className: "jsx-1704629409" + " " + "form-control"
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "text",
          name: "time",
          value: values.time || '',
          placeholder: "Time",
          onChange: handleChange,
          onBlur: handleBlur,
          autoComplete: "off",
          className: "jsx-1704629409" + " " + "form-control"
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-1704629409"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "text",
          name: "date",
          value: values.date || '',
          placeholder: "Date",
          onChange: handleChange,
          onBlur: handleBlur,
          autoComplete: "off",
          className: "jsx-1704629409" + " " + "form-control"
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "text",
          name: "color",
          value: values.color || '',
          placeholder: "Color",
          onChange: handleChange,
          onBlur: handleBlur,
          autoComplete: "off",
          className: "jsx-1704629409" + " " + "form-control"
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "text",
          name: "image",
          value: values.image || '',
          placeholder: "Image",
          onChange: handleChange,
          onBlur: handleBlur,
          autoComplete: "off",
          className: "jsx-1704629409" + " " + "form-control"
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-1704629409" + " " + "eventEditFormFooter"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          type: "submit",
          disabled: isSubmitting,
          className: "jsx-1704629409" + " " + "btn eventEditFormSubmitBtn"
        }, "Save")));
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        onClick: this.props.toggleModal,
        className: "jsx-1704629409" + " " + "closeEventEditBtn btn btnTransparent btnRound"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "/static/img/cross.svg",
        className: "jsx-1704629409"
      })));
    }
  }]);

  return Modal;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ })

})
//# sourceMappingURL=index.js.408aa2d06144ae15db9e.hot-update.js.map