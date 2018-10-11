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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dates_initialize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dates/initialize */ "./node_modules/react-dates/initialize.js");
/* harmony import */ var react_dates_initialize__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dates_initialize__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dates__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dates */ "./node_modules/react-dates/index.js");
/* harmony import */ var react_dates__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dates__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _css_datepicker_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../css/datepicker.css */ "./css/datepicker.css");
/* harmony import */ var _css_datepicker_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_datepicker_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var uploadcare_widget__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! uploadcare-widget */ "./node_modules/uploadcare-widget/uploadcare.min.js");
/* harmony import */ var uploadcare_widget__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(uploadcare_widget__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_11__);


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











 // const firestore = firebase.firestore();
// firestore
//       .collection(`events`)
//       .orderBy(`date`, `asc`)
//       .onSnapshot(querySnapshot => {
//         const events = querySnapshot.docs.map(event => {
//           let eventData = event.data();
//           return eventData;
//         });
// var database = firebase.database().ref;
// var { database } = this.props.firebase;
// firebase.database().ref('/events/').once('value').then(function(snapshot) {
//   console.log(snapshot.val())
// });

var Modal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal() {
    var _this;

    _classCallCheck(this, Modal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Modal).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "submitEventForm", function (values, actions) {
      console.log(_this.state.date);
      console.log(values);
      alert(JSON.stringify(values, null, 2));

      var firestore = _this.props.firebase.firestore();

      var eventname = "".concat(values.name, " ").concat(Date.now());
      values.date = _this.state.date;
      values.lastUpdated = new Date();
      values.id = eventname; // firestore.collection(`events`).doc(eventname).set(values);
      /////calles
      // const firestore = this.props.firebase.firestore();
      // const settings = {
      //   timestampsInSnapshots: true,
      // };
      // firestore.settings(settings);
      // firestore
      //   .collection(`events`)
      //   .orderBy(`date`, `asc`)
      //   .onSnapshot(querySnapshot => {
      //     const events = querySnapshot.docs.map(event => {
      //       let eventData = event.data();
      //       return eventData;
      //     });
      /////slut calles
      //   console.log(JSON.stringify(events, null, 2));
      // });

      /*
            dump to console only for dev purposes
            remove when app is in production
          */

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

    _this.state = {
      date: ''
    };
    return _this;
  }

  _createClass(Modal, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1704629409" + " " + "eventEdit"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1704629409",
        css: "body,.event{height:100vh;overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGVsbFxccHJvamVjdHNcXFVuaWNvcm5TY2hlZHVsZXJcXGNvbXBvbmVudHNcXEV2ZW50RWRpdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnSDJCLEFBSTBCLGFBQ0csZ0JBQ2xCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcZGVsbFxccHJvamVjdHNcXFVuaWNvcm5TY2hlZHVsZXJcXGNvbXBvbmVudHNcXEV2ZW50RWRpdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvcm1payB9IGZyb20gJ2Zvcm1payc7XHJcbmltcG9ydCAnLi8uLi9jc3MvZm9ybS1jb250cm9sLmNzcyc7XHJcbmltcG9ydCAnLi8uLi9jc3MvYnRuLmNzcyc7XHJcbmltcG9ydCAnLi8uLi9jc3MvZXZlbnRFZGl0LmNzcyc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0ICdyZWFjdC1kYXRlcy9pbml0aWFsaXplJztcclxuaW1wb3J0IHsgU2luZ2xlRGF0ZVBpY2tlciB9IGZyb20gJ3JlYWN0LWRhdGVzJztcclxuaW1wb3J0ICcuLy4uL2Nzcy9kYXRlcGlja2VyLmNzcyc7XHJcbmltcG9ydCB1cGxvYWRjYXJlIGZyb20gJ3VwbG9hZGNhcmUtd2lkZ2V0JztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbi8vIGNvbnN0IGZpcmVzdG9yZSA9IGZpcmViYXNlLmZpcmVzdG9yZSgpO1xyXG5cclxuLy8gZmlyZXN0b3JlXHJcbi8vICAgICAgIC5jb2xsZWN0aW9uKGBldmVudHNgKVxyXG4vLyAgICAgICAub3JkZXJCeShgZGF0ZWAsIGBhc2NgKVxyXG4vLyAgICAgICAub25TbmFwc2hvdChxdWVyeVNuYXBzaG90ID0+IHtcclxuLy8gICAgICAgICBjb25zdCBldmVudHMgPSBxdWVyeVNuYXBzaG90LmRvY3MubWFwKGV2ZW50ID0+IHtcclxuLy8gICAgICAgICAgIGxldCBldmVudERhdGEgPSBldmVudC5kYXRhKCk7XHJcbi8vICAgICAgICAgICByZXR1cm4gZXZlbnREYXRhO1xyXG4vLyAgICAgICAgIH0pO1xyXG5cclxuLy8gdmFyIGRhdGFiYXNlID0gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWY7XHJcblxyXG4vLyB2YXIgeyBkYXRhYmFzZSB9ID0gdGhpcy5wcm9wcy5maXJlYmFzZTtcclxuXHJcbi8vIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvZXZlbnRzLycpLm9uY2UoJ3ZhbHVlJykudGhlbihmdW5jdGlvbihzbmFwc2hvdCkge1xyXG4vLyAgIGNvbnNvbGUubG9nKHNuYXBzaG90LnZhbCgpKVxyXG4vLyB9KTtcclxuXHJcbmNsYXNzIE1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZGF0ZTogJycsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc3VibWl0RXZlbnRGb3JtID0gKHZhbHVlcywgYWN0aW9ucykgPT4ge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5kYXRlKTtcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlcyk7XHJcbiAgICBhbGVydChKU09OLnN0cmluZ2lmeSh2YWx1ZXMsIG51bGwsIDIpKTtcclxuXHJcbiAgICBjb25zdCBmaXJlc3RvcmUgPSB0aGlzLnByb3BzLmZpcmViYXNlLmZpcmVzdG9yZSgpO1xyXG4gICAgY29uc3QgZXZlbnRuYW1lID0gYCR7dmFsdWVzLm5hbWV9ICR7RGF0ZS5ub3coKX1gO1xyXG4gICAgdmFsdWVzLmRhdGUgPSB0aGlzLnN0YXRlLmRhdGU7XHJcbiAgICB2YWx1ZXMubGFzdFVwZGF0ZWQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgdmFsdWVzLmlkID0gZXZlbnRuYW1lO1xyXG5cclxuICAgIC8vIGZpcmVzdG9yZS5jb2xsZWN0aW9uKGBldmVudHNgKS5kb2MoZXZlbnRuYW1lKS5zZXQodmFsdWVzKTtcclxuXHJcbiAgICAvLy8vL2NhbGxlc1xyXG4gICAgLy8gY29uc3QgZmlyZXN0b3JlID0gdGhpcy5wcm9wcy5maXJlYmFzZS5maXJlc3RvcmUoKTtcclxuXHJcbiAgICAvLyBjb25zdCBzZXR0aW5ncyA9IHtcclxuICAgIC8vICAgdGltZXN0YW1wc0luU25hcHNob3RzOiB0cnVlLFxyXG4gICAgLy8gfTtcclxuICAgIC8vIGZpcmVzdG9yZS5zZXR0aW5ncyhzZXR0aW5ncyk7XHJcblxyXG4gICAgLy8gZmlyZXN0b3JlXHJcbiAgICAvLyAgIC5jb2xsZWN0aW9uKGBldmVudHNgKVxyXG4gICAgLy8gICAub3JkZXJCeShgZGF0ZWAsIGBhc2NgKVxyXG4gICAgLy8gICAub25TbmFwc2hvdChxdWVyeVNuYXBzaG90ID0+IHtcclxuICAgIC8vICAgICBjb25zdCBldmVudHMgPSBxdWVyeVNuYXBzaG90LmRvY3MubWFwKGV2ZW50ID0+IHtcclxuICAgIC8vICAgICAgIGxldCBldmVudERhdGEgPSBldmVudC5kYXRhKCk7XHJcbiAgICAvLyAgICAgICByZXR1cm4gZXZlbnREYXRhO1xyXG4gICAgLy8gICAgIH0pO1xyXG5cclxuICAgIC8vLy8vc2x1dCBjYWxsZXNcclxuICAgIC8vICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXZlbnRzLCBudWxsLCAyKSk7XHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICAvKlxyXG4gICAgICAgICAgZHVtcCB0byBjb25zb2xlIG9ubHkgZm9yIGRldiBwdXJwb3Nlc1xyXG4gICAgICAgICAgcmVtb3ZlIHdoZW4gYXBwIGlzIGluIHByb2R1Y3Rpb25cclxuICAgICAgICAqL1xyXG5cclxuICAgIC8qIFxyXG4gICAgdG9kbzogU3VibWl0IGZvcm0gZGF0YSB0byBmaXJlYmFzZVxyXG5cclxuICAgIENSRUFURSBFVkVOVCAoc29tZXRoaW5nIGxpa2UgdGhpcylcclxuICAgIGNvbnN0IGZpcmVzdG9yZSA9IHRoaXMucHJvcHMuZmlyZWJhc2UuZmlyZXN0b3JlKCk7XHJcbiAgICBjb25zdCB1bmlxZU5hbWUgPSBgJHt2YWx1ZS5uYW1lfSAke0RhdGUubm93KCl9YDtcclxuICAgIFxyXG4gICAgdmFsdWVzLmxhc3RVcGRhdGVkID0gbmV3IERhdGUoKVxyXG4gICAgdmFsdWVzLmlkID0gdW5pcWVOYW1lXHJcblxyXG4gICAgZmlyZXN0b3JlLmNvbGxlY3Rpb24oYGV2ZW50c2ApLmRvYyh1bmlxZU5hbWUpLnNldCh2YWx1ZXMpO1xyXG5cclxuICAgIFVQREFURSBFVkVOVCAoc29tZXRoaW5nIGxpa2UgdGhpcylcclxuICAgIGZpcmVzdG9yZVxyXG4gICAgICAuY29sbGVjdGlvbihgZXZlbnRzYClcclxuICAgICAgLmRvYyh1bmlxZU5hbWUpXHJcbiAgICAgIC51cGRhdGUodmFsdWVzKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0RvY3VtZW50IHN1Y2Nlc3NmdWxseSB1cGRhdGVkIScpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGRvY3VtZW50OiAnLCBlcnJvcik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICovXHJcblxyXG4gICAgYWN0aW9ucy5zZXRTdWJtaXR0aW5nKGZhbHNlKTtcclxuICAgIGFjdGlvbnMucmVzZXRGb3JtKCk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BldmVudEVkaXRgfT5cclxuICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgICAgICAgYm9keSxcclxuICAgICAgICAgIC5ldmVudCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDxGb3JtaWsgaW5pdGlhbFZhbHVlcz17e319IG9uU3VibWl0PXt0aGlzLnN1Ym1pdEV2ZW50Rm9ybX0+XHJcbiAgICAgICAgICB7KHtcclxuICAgICAgICAgICAgdmFsdWVzLFxyXG4gICAgICAgICAgICBoYW5kbGVDaGFuZ2UsXHJcbiAgICAgICAgICAgIGhhbmRsZUJsdXIsXHJcbiAgICAgICAgICAgIGhhbmRsZVN1Ym1pdCxcclxuICAgICAgICAgICAgaXNTdWJtaXR0aW5nLFxyXG4gICAgICAgICAgICBzZXRGaWVsZFZhbHVlLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIH0pID0+IChcclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPXtgZXZlbnRFZGl0Rm9ybWB9PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgdHlwZT17YHRleHRgfVxyXG4gICAgICAgICAgICAgICAgICBuYW1lPXtgaGVhZGxpbmVgfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmhlYWRsaW5lIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YEV2ZW50bmFtZWB9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbGB9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPXtgb2ZmYH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgbmFtZT17YGRlc2NyaXB0aW9uYH1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5kZXNjcmlwdGlvbiB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2BEZXNjaXB0aW9uYH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sYH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9e2BvZmZgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPXtgdGV4dGB9XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9e2Bsb2NhdGlvbmB9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMubG9jYXRpb24gfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgTG9jYXRpb25gfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2xgfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT17YG9mZmB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9e2B0ZXh0YH1cclxuICAgICAgICAgICAgICAgICAgbmFtZT17YHRpbWVgfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnRpbWUgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgVGltZSAoZm91ciBkaWdpdHMgbGlrZSAwOTowMClgfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2xgfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT17YG9mZmB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8U2luZ2xlRGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICByZWFkT25seVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRlPXt2YWx1ZXMuZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgb25EYXRlQ2hhbmdlPXtkYXRlID0+ICh2YWx1ZXMuZGF0ZSA9IGRhdGUpfVxyXG4gICAgICAgICAgICAgICAgICBmb2N1c2VkPXt0aGlzLnN0YXRlLmZvY3VzZWR9XHJcbiAgICAgICAgICAgICAgICAgIG9uRm9jdXNDaGFuZ2U9eyh7IGZvY3VzZWQgfSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWQgfSl9XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5Rm9ybWF0PVwiREQgTU1NLCBZWVlZXCJcclxuICAgICAgICAgICAgICAgICAgbnVtYmVyT2ZNb250aHM9ezF9XHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHsvKlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9e2B0ZXh0YH1cclxuICAgICAgICAgICAgICAgICAgbmFtZT17YGRhdGVgfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmRhdGV9XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgRGF0ZWB9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbGB9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPXtgb2ZmYH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAqL31cclxuICAgICAgICAgICAgICAgIENvbG9yXHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgdHlwZT17YGNvbG9yYH1cclxuICAgICAgICAgICAgICAgICAgbmFtZT17YGNvbG9yYH1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5jb2xvcn1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2BDb2xvcmB9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbGB9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPXtgb2ZmYH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIHJvbGU9XCJ1cGxvYWRjYXJlLXVwbG9hZGVyXCIgbmFtZT1cIkNob29zZSUyMGFuJTIwaW1hZ2VcIlxyXG4gICAgICAgZGF0YS1jcm9wPVwiMzAwOjIwMFwiXHJcbiAgICAgICBkYXRhLWltYWdlcy1vbmx5PVwidHJ1ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPXtgdGV4dGB9XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9e2BpbWFnZWB9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuaW1hZ2UgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgSW1hZ2VgfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2xgfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT17YG9mZmB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGV2ZW50RWRpdEZvcm1Gb290ZXJgfT5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgdHlwZT17YHN1Ym1pdGB9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ0biBldmVudEVkaXRGb3JtU3VibWl0QnRuYH1cclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzU3VibWl0dGluZ31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgU2F2ZVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgY2xvc2VFdmVudEVkaXRCdG4gYnRuIGJ0blRyYW5zcGFyZW50IGJ0blJvdW5kYH1cclxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMudG9nZ2xlTW9kYWx9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGltZyBzcmM9e2Avc3RhdGljL2ltZy9jcm9zcy5zdmdgfSAvPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbDtcclxuIl19 */\n/*@ sourceURL=C:\\Users\\dell\\projects\\UnicornScheduler\\components\\EventEdit.js */"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
        initialValues: {},
        onSubmit: this.submitEventForm
      }, function (_ref) {
        var values = _ref.values,
            handleChange = _ref.handleChange,
            handleBlur = _ref.handleBlur,
            handleSubmit = _ref.handleSubmit,
            isSubmitting = _ref.isSubmitting,
            setFieldValue = _ref.setFieldValue;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
          onSubmit: handleSubmit,
          className: "jsx-1704629409" + " " + "eventEditForm"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-1704629409"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          required: true,
          type: "text",
          name: "headline",
          value: values.headline || '',
          placeholder: "Eventname",
          onChange: handleChange,
          onBlur: handleBlur,
          autoComplete: "off",
          className: "jsx-1704629409" + " " + "form-control"
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
          required: true,
          name: "description",
          value: values.description || '',
          placeholder: "Desciption",
          onChange: handleChange,
          onBlur: handleBlur,
          autoComplete: "off",
          className: "jsx-1704629409" + " " + "form-control"
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          required: true,
          type: "text",
          name: "location",
          value: values.location || '',
          placeholder: "Location",
          onChange: handleChange,
          onBlur: handleBlur,
          autoComplete: "off",
          className: "jsx-1704629409" + " " + "form-control"
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          required: true,
          type: "text",
          name: "time",
          value: values.time || '',
          placeholder: "Time (four digits like 09:00)",
          onChange: handleChange,
          onBlur: handleBlur,
          autoComplete: "off",
          className: "jsx-1704629409" + " " + "form-control"
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-1704629409"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_dates__WEBPACK_IMPORTED_MODULE_8__["SingleDatePicker"], {
          readOnly: true,
          placeholder: "Date",
          date: values.date,
          onDateChange: function onDateChange(date) {
            return values.date = date;
          },
          focused: _this2.state.focused,
          onFocusChange: function onFocusChange(_ref2) {
            var focused = _ref2.focused;
            return _this2.setState({
              focused: focused
            });
          },
          name: "date",
          onBlur: handleBlur,
          displayFormat: "DD MMM, YYYY",
          numberOfMonths: 1,
          required: true
        }), "Color", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          required: true,
          type: "color",
          name: "color",
          value: values.color,
          placeholder: "Color",
          onChange: handleChange,
          onBlur: handleBlur,
          autoComplete: "off",
          className: "jsx-1704629409" + " " + "form-control"
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "hidden",
          role: "uploadcare-uploader",
          name: "Choose%20an%20image",
          "data-crop": "300:200",
          "data-images-only": "true",
          className: "jsx-1704629409"
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          required: true,
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
//# sourceMappingURL=index.js.d62ac49351a0baf62043.hot-update.js.map