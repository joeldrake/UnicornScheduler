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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChoosingImage", function () {
      uploadcare_widget__WEBPACK_IMPORTED_MODULE_10___default.a.openDialog(null, {
        crop: "300:200",
        imagesOnly: true
      }).done(function (file) {
        file.promise().done(function (fileInfo) {
          console.log(fileInfo.cdnUrl);
          return fileInfo.cdnUrl;
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "test", function (e) {
      e.preventDefault();
      uploadcare_widget__WEBPACK_IMPORTED_MODULE_10___default.a.openDialog(null, {
        imagesOnly: true,
        crop: '300x300'
      }).done(function (file) {
        file.promise().done(function (fileInfo) {
          console.log('From inside promise ' + fileInfo.cdnUrl);

          _this.setState({
            picture: fileInfo.cdnUrl
          });

          console.log(_this.state);
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "formikTest", function () {
      return 'Alrightey';
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
        css: "body,.event{height:100vh;overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGVsbFxccHJvamVjdHNcXFVuaWNvcm5TY2hlZHVsZXJcXGNvbXBvbmVudHNcXEV2ZW50RWRpdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxSjJCLEFBSTBCLGFBQ0csZ0JBQ2xCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcZGVsbFxccHJvamVjdHNcXFVuaWNvcm5TY2hlZHVsZXJcXGNvbXBvbmVudHNcXEV2ZW50RWRpdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvcm1payB9IGZyb20gJ2Zvcm1payc7XHJcbmltcG9ydCAnLi8uLi9jc3MvZm9ybS1jb250cm9sLmNzcyc7XHJcbmltcG9ydCAnLi8uLi9jc3MvYnRuLmNzcyc7XHJcbmltcG9ydCAnLi8uLi9jc3MvZXZlbnRFZGl0LmNzcyc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0ICdyZWFjdC1kYXRlcy9pbml0aWFsaXplJztcclxuaW1wb3J0IHsgU2luZ2xlRGF0ZVBpY2tlciB9IGZyb20gJ3JlYWN0LWRhdGVzJztcclxuaW1wb3J0ICcuLy4uL2Nzcy9kYXRlcGlja2VyLmNzcyc7XHJcbmltcG9ydCB1cGxvYWRjYXJlIGZyb20gJ3VwbG9hZGNhcmUtd2lkZ2V0JztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbi8vIGNvbnN0IGZpcmVzdG9yZSA9IGZpcmViYXNlLmZpcmVzdG9yZSgpO1xyXG5cclxuLy8gZmlyZXN0b3JlXHJcbi8vICAgICAgIC5jb2xsZWN0aW9uKGBldmVudHNgKVxyXG4vLyAgICAgICAub3JkZXJCeShgZGF0ZWAsIGBhc2NgKVxyXG4vLyAgICAgICAub25TbmFwc2hvdChxdWVyeVNuYXBzaG90ID0+IHtcclxuLy8gICAgICAgICBjb25zdCBldmVudHMgPSBxdWVyeVNuYXBzaG90LmRvY3MubWFwKGV2ZW50ID0+IHtcclxuLy8gICAgICAgICAgIGxldCBldmVudERhdGEgPSBldmVudC5kYXRhKCk7XHJcbi8vICAgICAgICAgICByZXR1cm4gZXZlbnREYXRhO1xyXG4vLyAgICAgICAgIH0pO1xyXG5cclxuLy8gdmFyIGRhdGFiYXNlID0gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWY7XHJcblxyXG4vLyB2YXIgeyBkYXRhYmFzZSB9ID0gdGhpcy5wcm9wcy5maXJlYmFzZTtcclxuXHJcbi8vIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvZXZlbnRzLycpLm9uY2UoJ3ZhbHVlJykudGhlbihmdW5jdGlvbihzbmFwc2hvdCkge1xyXG4vLyAgIGNvbnNvbGUubG9nKHNuYXBzaG90LnZhbCgpKVxyXG4vLyB9KTtcclxuXHJcbmNsYXNzIE1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZGF0ZTogJycsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc3VibWl0RXZlbnRGb3JtID0gKHZhbHVlcywgYWN0aW9ucykgPT4ge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5kYXRlKTtcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlcyk7XHJcbiAgICBhbGVydChKU09OLnN0cmluZ2lmeSh2YWx1ZXMsIG51bGwsIDIpKTtcclxuXHJcbiAgICBjb25zdCBmaXJlc3RvcmUgPSB0aGlzLnByb3BzLmZpcmViYXNlLmZpcmVzdG9yZSgpO1xyXG4gICAgY29uc3QgZXZlbnRuYW1lID0gYCR7dmFsdWVzLm5hbWV9ICR7RGF0ZS5ub3coKX1gO1xyXG4gICAgdmFsdWVzLmRhdGUgPSB0aGlzLnN0YXRlLmRhdGU7XHJcbiAgICB2YWx1ZXMubGFzdFVwZGF0ZWQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgdmFsdWVzLmlkID0gZXZlbnRuYW1lO1xyXG5cclxuICAgIC8vIGZpcmVzdG9yZS5jb2xsZWN0aW9uKGBldmVudHNgKS5kb2MoZXZlbnRuYW1lKS5zZXQodmFsdWVzKTtcclxuXHJcbiAgICAvLy8vL2NhbGxlc1xyXG4gICAgLy8gY29uc3QgZmlyZXN0b3JlID0gdGhpcy5wcm9wcy5maXJlYmFzZS5maXJlc3RvcmUoKTtcclxuXHJcbiAgICAvLyBjb25zdCBzZXR0aW5ncyA9IHtcclxuICAgIC8vICAgdGltZXN0YW1wc0luU25hcHNob3RzOiB0cnVlLFxyXG4gICAgLy8gfTtcclxuICAgIC8vIGZpcmVzdG9yZS5zZXR0aW5ncyhzZXR0aW5ncyk7XHJcblxyXG4gICAgLy8gZmlyZXN0b3JlXHJcbiAgICAvLyAgIC5jb2xsZWN0aW9uKGBldmVudHNgKVxyXG4gICAgLy8gICAub3JkZXJCeShgZGF0ZWAsIGBhc2NgKVxyXG4gICAgLy8gICAub25TbmFwc2hvdChxdWVyeVNuYXBzaG90ID0+IHtcclxuICAgIC8vICAgICBjb25zdCBldmVudHMgPSBxdWVyeVNuYXBzaG90LmRvY3MubWFwKGV2ZW50ID0+IHtcclxuICAgIC8vICAgICAgIGxldCBldmVudERhdGEgPSBldmVudC5kYXRhKCk7XHJcbiAgICAvLyAgICAgICByZXR1cm4gZXZlbnREYXRhO1xyXG4gICAgLy8gICAgIH0pO1xyXG5cclxuICAgIC8vLy8vc2x1dCBjYWxsZXNcclxuICAgIC8vICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXZlbnRzLCBudWxsLCAyKSk7XHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICAvKlxyXG4gICAgICAgICAgZHVtcCB0byBjb25zb2xlIG9ubHkgZm9yIGRldiBwdXJwb3Nlc1xyXG4gICAgICAgICAgcmVtb3ZlIHdoZW4gYXBwIGlzIGluIHByb2R1Y3Rpb25cclxuICAgICAgICAqL1xyXG5cclxuICAgIC8qIFxyXG4gICAgdG9kbzogU3VibWl0IGZvcm0gZGF0YSB0byBmaXJlYmFzZVxyXG5cclxuICAgIENSRUFURSBFVkVOVCAoc29tZXRoaW5nIGxpa2UgdGhpcylcclxuICAgIGNvbnN0IGZpcmVzdG9yZSA9IHRoaXMucHJvcHMuZmlyZWJhc2UuZmlyZXN0b3JlKCk7XHJcbiAgICBjb25zdCB1bmlxZU5hbWUgPSBgJHt2YWx1ZS5uYW1lfSAke0RhdGUubm93KCl9YDtcclxuICAgIFxyXG4gICAgdmFsdWVzLmxhc3RVcGRhdGVkID0gbmV3IERhdGUoKVxyXG4gICAgdmFsdWVzLmlkID0gdW5pcWVOYW1lXHJcblxyXG4gICAgZmlyZXN0b3JlLmNvbGxlY3Rpb24oYGV2ZW50c2ApLmRvYyh1bmlxZU5hbWUpLnNldCh2YWx1ZXMpO1xyXG5cclxuICAgIFVQREFURSBFVkVOVCAoc29tZXRoaW5nIGxpa2UgdGhpcylcclxuICAgIGZpcmVzdG9yZVxyXG4gICAgICAuY29sbGVjdGlvbihgZXZlbnRzYClcclxuICAgICAgLmRvYyh1bmlxZU5hbWUpXHJcbiAgICAgIC51cGRhdGUodmFsdWVzKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0RvY3VtZW50IHN1Y2Nlc3NmdWxseSB1cGRhdGVkIScpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGRvY3VtZW50OiAnLCBlcnJvcik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICovXHJcblxyXG4gICAgYWN0aW9ucy5zZXRTdWJtaXR0aW5nKGZhbHNlKTtcclxuICAgIGFjdGlvbnMucmVzZXRGb3JtKCk7XHJcbiAgfTtcclxuXHJcblxyXG4gIG9uQ2hvb3NpbmdJbWFnZSA9ICgpID0+IHtcclxuICAgIHVwbG9hZGNhcmUub3BlbkRpYWxvZyhudWxsLCB7XHJcbiAgICAgIGNyb3A6IFwiMzAwOjIwMFwiLFxyXG4gICAgICBpbWFnZXNPbmx5OiB0cnVlXHJcbiAgICB9KS5kb25lKGZ1bmN0aW9uKGZpbGUpIHtcclxuICAgICAgZmlsZS5wcm9taXNlKCkuZG9uZShmdW5jdGlvbihmaWxlSW5mbyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coZmlsZUluZm8uY2RuVXJsKTtcclxuICAgICAgICByZXR1cm4gZmlsZUluZm8uY2RuVXJsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB0ZXN0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHVwbG9hZGNhcmVcclxuICAgICAgLm9wZW5EaWFsb2cobnVsbCwge1xyXG4gICAgICAgIGltYWdlc09ubHk6IHRydWUsXHJcbiAgICAgICAgY3JvcDogJzMwMHgzMDAnXHJcbiAgICAgIH0pXHJcbiAgICAgIC5kb25lKGZpbGUgPT4ge1xyXG4gICAgICAgIGZpbGUucHJvbWlzZSgpLmRvbmUoZmlsZUluZm8gPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ0Zyb20gaW5zaWRlIHByb21pc2UgJyArIGZpbGVJbmZvLmNkblVybCk7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgcGljdHVyZTogZmlsZUluZm8uY2RuVXJsLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgZm9ybWlrVGVzdCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoJ0FscmlnaHRleScpXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcblxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGV2ZW50RWRpdGB9PlxyXG4gICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICAgICAgICBib2R5LFxyXG4gICAgICAgICAgLmV2ZW50IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPEZvcm1payBpbml0aWFsVmFsdWVzPXt7fX0gb25TdWJtaXQ9e3RoaXMuc3VibWl0RXZlbnRGb3JtfT5cclxuICAgICAgICAgIHsoe1xyXG4gICAgICAgICAgICBmb3JtaWtUZXN0LFxyXG4gICAgICAgICAgICB2YWx1ZXMsXHJcbiAgICAgICAgICAgIGhhbmRsZUNoYW5nZSxcclxuICAgICAgICAgICAgaGFuZGxlQmx1cixcclxuICAgICAgICAgICAgaGFuZGxlU3VibWl0LFxyXG4gICAgICAgICAgICBpc1N1Ym1pdHRpbmcsXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgfSkgPT4gKFxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9e2BldmVudEVkaXRGb3JtYH0+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPXtgdGV4dGB9XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9e2BoZWFkbGluZWB9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuaGVhZGxpbmUgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgRXZlbnRuYW1lYH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sYH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9e2BvZmZgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICBuYW1lPXtgZGVzY3JpcHRpb25gfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmRlc2NyaXB0aW9uIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YERlc2NpcHRpb25gfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2xgfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT17YG9mZmB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9e2B0ZXh0YH1cclxuICAgICAgICAgICAgICAgICAgbmFtZT17YGxvY2F0aW9uYH1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5sb2NhdGlvbiB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2BMb2NhdGlvbmB9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbGB9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPXtgb2ZmYH1cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9e2B0ZXh0YH1cclxuICAgICAgICAgICAgICAgICAgbmFtZT17YHRlc3RgfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5mb3JtaWtUZXN0KCkgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgdGVzdGB9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbGB9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPXtgb2ZmYH1cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9e2B0ZXh0YH1cclxuICAgICAgICAgICAgICAgICAgbmFtZT17YHRpbWVgfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnRpbWUgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgVGltZSAoZm91ciBkaWdpdHMgbGlrZSAwOTowMClgfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2xgfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT17YG9mZmB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8U2luZ2xlRGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICByZWFkT25seVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRlPXt2YWx1ZXMuZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgb25EYXRlQ2hhbmdlPXtkYXRlID0+ICh2YWx1ZXMuZGF0ZSA9IGRhdGUpfVxyXG4gICAgICAgICAgICAgICAgICBmb2N1c2VkPXt0aGlzLnN0YXRlLmZvY3VzZWR9XHJcbiAgICAgICAgICAgICAgICAgIG9uRm9jdXNDaGFuZ2U9eyh7IGZvY3VzZWQgfSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWQgfSl9XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5Rm9ybWF0PVwiREQgTU1NLCBZWVlZXCJcclxuICAgICAgICAgICAgICAgICAgbnVtYmVyT2ZNb250aHM9ezF9XHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHsvKlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9e2B0ZXh0YH1cclxuICAgICAgICAgICAgICAgICAgbmFtZT17YGRhdGVgfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmRhdGV9XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgRGF0ZWB9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbGB9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPXtgb2ZmYH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAqL31cclxuICAgICAgICAgICAgICAgIENvbG9yXHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgdHlwZT17YGNvbG9yYH1cclxuICAgICAgICAgICAgICAgICAgbmFtZT17YGNvbG9yYH1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5jb2xvcn1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2BDb2xvcmB9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbGB9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPXtgb2ZmYH1cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPXtgaW1hZ2VgfVxyXG4gICAgICAgICAgICAgICAgbmFtZT17YGltYWdlYH1cclxuICAgICAgICAgICAgICAgIHJvbGU9XCJ1cGxvYWRjYXJlLXVwbG9hZGVyXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJDaG9vc2UgYW4gaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5pbWFnZSB8fCAnJ31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbGB9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgZGF0YS1jcm9wPVwiNDozXCIgLz5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT17YHRleHRgfVxyXG4gICAgICAgICAgICAgICAgICBuYW1lPXtgaW1hZ2VgfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmltYWdlIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YEltYWdlYH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sYH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9e2BvZmZgfVxyXG4gICAgICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZXZlbnRFZGl0Rm9ybUZvb3RlcmB9PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0eXBlPXtgc3VibWl0YH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnRuIGV2ZW50RWRpdEZvcm1TdWJtaXRCdG5gfVxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBTYXZlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0Zvcm1paz5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2BjbG9zZUV2ZW50RWRpdEJ0biBidG4gYnRuVHJhbnNwYXJlbnQgYnRuUm91bmRgfVxyXG4gICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy50b2dnbGVNb2RhbH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aW1nIHNyYz17YC9zdGF0aWMvaW1nL2Nyb3NzLnN2Z2B9IC8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGFsO1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\dell\\projects\\UnicornScheduler\\components\\EventEdit.js */"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
        initialValues: {},
        onSubmit: this.submitEventForm
      }, function (_ref) {
        var _React$createElement;

        var formikTest = _ref.formikTest,
            values = _ref.values,
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
          name: "test",
          value: _this2.formikTest() || '',
          placeholder: "test",
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
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", (_React$createElement = {
          type: "image",
          name: "image",
          role: "uploadcare-uploader"
        }, _defineProperty(_React$createElement, "name", "Choose an image"), _defineProperty(_React$createElement, "value", values.image || ''), _defineProperty(_React$createElement, "onChange", handleChange), _defineProperty(_React$createElement, "onBlur", handleBlur), _defineProperty(_React$createElement, "data-crop", "4:3"), _defineProperty(_React$createElement, "className", "jsx-1704629409" + " " + "form-control"), _React$createElement))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
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
//# sourceMappingURL=index.js.abb3239f5e6fbae1708a.hot-update.js.map