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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getPictureUrl", function () {
      return _this.state.picture;
    });

    _this.state = {
      date: '',
      picture: ''
    };
    return _this;
  }

  _createClass(Modal, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var picturebutton = function picturebutton() {
        if (_this2.state.picture) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
            id: "picture_load",
            src: _this2.state.picture
          }));
        } else {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
            id: "picture_load_button",
            className: "ui button big wider_button",
            onClick: _this2.test
          }, "Choose a picture");
        }
      };

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1704629409" + " " + "eventEdit"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1704629409",
        css: "body,.event{height:100vh;overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGVsbFxccHJvamVjdHNcXFVuaWNvcm5TY2hlZHVsZXJcXGNvbXBvbmVudHNcXEV2ZW50RWRpdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErSjJCLEFBSTBCLGFBQ0csZ0JBQ2xCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcZGVsbFxccHJvamVjdHNcXFVuaWNvcm5TY2hlZHVsZXJcXGNvbXBvbmVudHNcXEV2ZW50RWRpdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvcm1payB9IGZyb20gJ2Zvcm1payc7XHJcbmltcG9ydCAnLi8uLi9jc3MvZm9ybS1jb250cm9sLmNzcyc7XHJcbmltcG9ydCAnLi8uLi9jc3MvYnRuLmNzcyc7XHJcbmltcG9ydCAnLi8uLi9jc3MvZXZlbnRFZGl0LmNzcyc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0ICdyZWFjdC1kYXRlcy9pbml0aWFsaXplJztcclxuaW1wb3J0IHsgU2luZ2xlRGF0ZVBpY2tlciB9IGZyb20gJ3JlYWN0LWRhdGVzJztcclxuaW1wb3J0ICcuLy4uL2Nzcy9kYXRlcGlja2VyLmNzcyc7XHJcbmltcG9ydCB1cGxvYWRjYXJlIGZyb20gJ3VwbG9hZGNhcmUtd2lkZ2V0JztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbi8vIGNvbnN0IGZpcmVzdG9yZSA9IGZpcmViYXNlLmZpcmVzdG9yZSgpO1xyXG5cclxuLy8gZmlyZXN0b3JlXHJcbi8vICAgICAgIC5jb2xsZWN0aW9uKGBldmVudHNgKVxyXG4vLyAgICAgICAub3JkZXJCeShgZGF0ZWAsIGBhc2NgKVxyXG4vLyAgICAgICAub25TbmFwc2hvdChxdWVyeVNuYXBzaG90ID0+IHtcclxuLy8gICAgICAgICBjb25zdCBldmVudHMgPSBxdWVyeVNuYXBzaG90LmRvY3MubWFwKGV2ZW50ID0+IHtcclxuLy8gICAgICAgICAgIGxldCBldmVudERhdGEgPSBldmVudC5kYXRhKCk7XHJcbi8vICAgICAgICAgICByZXR1cm4gZXZlbnREYXRhO1xyXG4vLyAgICAgICAgIH0pO1xyXG5cclxuLy8gdmFyIGRhdGFiYXNlID0gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWY7XHJcblxyXG4vLyB2YXIgeyBkYXRhYmFzZSB9ID0gdGhpcy5wcm9wcy5maXJlYmFzZTtcclxuXHJcbi8vIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCcvZXZlbnRzLycpLm9uY2UoJ3ZhbHVlJykudGhlbihmdW5jdGlvbihzbmFwc2hvdCkge1xyXG4vLyAgIGNvbnNvbGUubG9nKHNuYXBzaG90LnZhbCgpKVxyXG4vLyB9KTtcclxuXHJcbmNsYXNzIE1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZGF0ZTogJycsXHJcbiAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHN1Ym1pdEV2ZW50Rm9ybSA9ICh2YWx1ZXMsIGFjdGlvbnMpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuZGF0ZSk7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZXMpO1xyXG4gICAgYWxlcnQoSlNPTi5zdHJpbmdpZnkodmFsdWVzLCBudWxsLCAyKSk7XHJcblxyXG4gICAgY29uc3QgZmlyZXN0b3JlID0gdGhpcy5wcm9wcy5maXJlYmFzZS5maXJlc3RvcmUoKTtcclxuICAgIGNvbnN0IGV2ZW50bmFtZSA9IGAke3ZhbHVlcy5uYW1lfSAke0RhdGUubm93KCl9YDtcclxuICAgIHZhbHVlcy5kYXRlID0gdGhpcy5zdGF0ZS5kYXRlO1xyXG4gICAgdmFsdWVzLmxhc3RVcGRhdGVkID0gbmV3IERhdGUoKTtcclxuICAgIHZhbHVlcy5pZCA9IGV2ZW50bmFtZTtcclxuXHJcbiAgICAvLyBmaXJlc3RvcmUuY29sbGVjdGlvbihgZXZlbnRzYCkuZG9jKGV2ZW50bmFtZSkuc2V0KHZhbHVlcyk7XHJcblxyXG4gICAgLy8vLy9jYWxsZXNcclxuICAgIC8vIGNvbnN0IGZpcmVzdG9yZSA9IHRoaXMucHJvcHMuZmlyZWJhc2UuZmlyZXN0b3JlKCk7XHJcblxyXG4gICAgLy8gY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICAvLyAgIHRpbWVzdGFtcHNJblNuYXBzaG90czogdHJ1ZSxcclxuICAgIC8vIH07XHJcbiAgICAvLyBmaXJlc3RvcmUuc2V0dGluZ3Moc2V0dGluZ3MpO1xyXG5cclxuICAgIC8vIGZpcmVzdG9yZVxyXG4gICAgLy8gICAuY29sbGVjdGlvbihgZXZlbnRzYClcclxuICAgIC8vICAgLm9yZGVyQnkoYGRhdGVgLCBgYXNjYClcclxuICAgIC8vICAgLm9uU25hcHNob3QocXVlcnlTbmFwc2hvdCA9PiB7XHJcbiAgICAvLyAgICAgY29uc3QgZXZlbnRzID0gcXVlcnlTbmFwc2hvdC5kb2NzLm1hcChldmVudCA9PiB7XHJcbiAgICAvLyAgICAgICBsZXQgZXZlbnREYXRhID0gZXZlbnQuZGF0YSgpO1xyXG4gICAgLy8gICAgICAgcmV0dXJuIGV2ZW50RGF0YTtcclxuICAgIC8vICAgICB9KTtcclxuXHJcbiAgICAvLy8vL3NsdXQgY2FsbGVzXHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGV2ZW50cywgbnVsbCwgMikpO1xyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgLypcclxuICAgICAgICAgIGR1bXAgdG8gY29uc29sZSBvbmx5IGZvciBkZXYgcHVycG9zZXNcclxuICAgICAgICAgIHJlbW92ZSB3aGVuIGFwcCBpcyBpbiBwcm9kdWN0aW9uXHJcbiAgICAgICAgKi9cclxuXHJcbiAgICAvKiBcclxuICAgIHRvZG86IFN1Ym1pdCBmb3JtIGRhdGEgdG8gZmlyZWJhc2VcclxuXHJcbiAgICBDUkVBVEUgRVZFTlQgKHNvbWV0aGluZyBsaWtlIHRoaXMpXHJcbiAgICBjb25zdCBmaXJlc3RvcmUgPSB0aGlzLnByb3BzLmZpcmViYXNlLmZpcmVzdG9yZSgpO1xyXG4gICAgY29uc3QgdW5pcWVOYW1lID0gYCR7dmFsdWUubmFtZX0gJHtEYXRlLm5vdygpfWA7XHJcbiAgICBcclxuICAgIHZhbHVlcy5sYXN0VXBkYXRlZCA9IG5ldyBEYXRlKClcclxuICAgIHZhbHVlcy5pZCA9IHVuaXFlTmFtZVxyXG5cclxuICAgIGZpcmVzdG9yZS5jb2xsZWN0aW9uKGBldmVudHNgKS5kb2ModW5pcWVOYW1lKS5zZXQodmFsdWVzKTtcclxuXHJcbiAgICBVUERBVEUgRVZFTlQgKHNvbWV0aGluZyBsaWtlIHRoaXMpXHJcbiAgICBmaXJlc3RvcmVcclxuICAgICAgLmNvbGxlY3Rpb24oYGV2ZW50c2ApXHJcbiAgICAgIC5kb2ModW5pcWVOYW1lKVxyXG4gICAgICAudXBkYXRlKHZhbHVlcylcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdEb2N1bWVudCBzdWNjZXNzZnVsbHkgdXBkYXRlZCEnKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBkb2N1bWVudDogJywgZXJyb3IpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAqL1xyXG5cclxuICAgIGFjdGlvbnMuc2V0U3VibWl0dGluZyhmYWxzZSk7XHJcbiAgICBhY3Rpb25zLnJlc2V0Rm9ybSgpO1xyXG4gIH07XHJcblxyXG5cclxuICBvbkNob29zaW5nSW1hZ2UgPSAoKSA9PiB7XHJcbiAgICB1cGxvYWRjYXJlLm9wZW5EaWFsb2cobnVsbCwge1xyXG4gICAgICBjcm9wOiBcIjMwMDoyMDBcIixcclxuICAgICAgaW1hZ2VzT25seTogdHJ1ZVxyXG4gICAgfSkuZG9uZShmdW5jdGlvbihmaWxlKSB7XHJcbiAgICAgIGZpbGUucHJvbWlzZSgpLmRvbmUoZnVuY3Rpb24oZmlsZUluZm8pe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGZpbGVJbmZvLmNkblVybCk7XHJcbiAgICAgICAgcmV0dXJuIGZpbGVJbmZvLmNkblVybFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdGVzdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB1cGxvYWRjYXJlXHJcbiAgICAgIC5vcGVuRGlhbG9nKG51bGwsIHtcclxuICAgICAgICBpbWFnZXNPbmx5OiB0cnVlLFxyXG4gICAgICAgIGNyb3A6ICczMDB4MzAwJ1xyXG4gICAgICB9KVxyXG4gICAgICAuZG9uZShmaWxlID0+IHtcclxuICAgICAgICBmaWxlLnByb21pc2UoKS5kb25lKGZpbGVJbmZvID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdGcm9tIGluc2lkZSBwcm9taXNlICcgKyBmaWxlSW5mby5jZG5VcmwpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHBpY3R1cmU6IGZpbGVJbmZvLmNkblVybCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGdldFBpY3R1cmVVcmwgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKHRoaXMuc3RhdGUucGljdHVyZSlcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICB2YXIgcGljdHVyZWJ1dHRvbiA9ICgpID0+IHtcclxuICAgICAgaWYodGhpcy5zdGF0ZS5waWN0dXJlKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+PGltZyBpZD1cInBpY3R1cmVfbG9hZFwiIHNyYz17dGhpcy5zdGF0ZS5waWN0dXJlfT48L2ltZz48L2Rpdj5cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gPGJ1dHRvbiBpZD1cInBpY3R1cmVfbG9hZF9idXR0b25cIiBjbGFzc05hbWU9XCJ1aSBidXR0b24gYmlnIHdpZGVyX2J1dHRvblwiIG9uQ2xpY2s9e3RoaXMudGVzdH0+XHJcbiAgICAgICAgICAgICAgICBDaG9vc2UgYSBwaWN0dXJlXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGV2ZW50RWRpdGB9PlxyXG4gICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICAgICAgICBib2R5LFxyXG4gICAgICAgICAgLmV2ZW50IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAge3BpY3R1cmVidXR0b24oKX1cclxuICAgICAgICA8Rm9ybWlrIGluaXRpYWxWYWx1ZXM9e3t9fSBvblN1Ym1pdD17dGhpcy5zdWJtaXRFdmVudEZvcm19PlxyXG4gICAgICAgICAgeyh7XHJcbiAgICAgICAgICAgIGZvcm1pa1Rlc3QsXHJcbiAgICAgICAgICAgIHZhbHVlcyxcclxuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlLFxyXG4gICAgICAgICAgICBoYW5kbGVCbHVyLFxyXG4gICAgICAgICAgICBoYW5kbGVTdWJtaXQsXHJcbiAgICAgICAgICAgIGlzU3VibWl0dGluZyxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICB9KSA9PiAoXHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT17YGV2ZW50RWRpdEZvcm1gfT5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9e2B0ZXh0YH1cclxuICAgICAgICAgICAgICAgICAgbmFtZT17YGhlYWRsaW5lYH1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5oZWFkbGluZSB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2BFdmVudG5hbWVgfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2xgfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT17YG9mZmB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9e2BkZXNjcmlwdGlvbmB9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuZGVzY3JpcHRpb24gfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgRGVzY2lwdGlvbmB9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbGB9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPXtgb2ZmYH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgdHlwZT17YHRleHRgfVxyXG4gICAgICAgICAgICAgICAgICBuYW1lPXtgbG9jYXRpb25gfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmxvY2F0aW9uIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YExvY2F0aW9uYH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sYH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9e2BvZmZgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9e2B0ZXh0YH1cclxuICAgICAgICAgICAgICAgICAgbmFtZT17YHRlc3RgfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnRlc3QgPSB0aGlzLmdldFBpY3R1cmVVcmwoKX1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2B0ZXN0YH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sYH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9e2BvZmZgfVxyXG4gICAgICAgICAgICAgICAgLz4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9e2B0ZXh0YH1cclxuICAgICAgICAgICAgICAgICAgbmFtZT17YHRpbWVgfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnRpbWUgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgVGltZSAoZm91ciBkaWdpdHMgbGlrZSAwOTowMClgfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2xgfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT17YG9mZmB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8U2luZ2xlRGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICByZWFkT25seVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRlPXt2YWx1ZXMuZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgb25EYXRlQ2hhbmdlPXtkYXRlID0+ICh2YWx1ZXMuZGF0ZSA9IGRhdGUpfVxyXG4gICAgICAgICAgICAgICAgICBmb2N1c2VkPXt0aGlzLnN0YXRlLmZvY3VzZWR9XHJcbiAgICAgICAgICAgICAgICAgIG9uRm9jdXNDaGFuZ2U9eyh7IGZvY3VzZWQgfSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWQgfSl9XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5Rm9ybWF0PVwiREQgTU1NLCBZWVlZXCJcclxuICAgICAgICAgICAgICAgICAgbnVtYmVyT2ZNb250aHM9ezF9XHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHsvKlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9e2B0ZXh0YH1cclxuICAgICAgICAgICAgICAgICAgbmFtZT17YGRhdGVgfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmRhdGV9XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgRGF0ZWB9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbGB9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPXtgb2ZmYH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAqL31cclxuICAgICAgICAgICAgICAgIENvbG9yXHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgdHlwZT17YGNvbG9yYH1cclxuICAgICAgICAgICAgICAgICAgbmFtZT17YGNvbG9yYH1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5jb2xvcn1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2BDb2xvcmB9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbGB9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPXtgb2ZmYH1cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9e2BpbWFnZWB9XHJcbiAgICAgICAgICAgICAgICBuYW1lPXtgaW1hZ2VgfVxyXG4gICAgICAgICAgICAgICAgcm9sZT1cInVwbG9hZGNhcmUtdXBsb2FkZXJcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIkNob29zZSBhbiBpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmltYWdlIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sYH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICBkYXRhLWNyb3A9XCI0OjNcIiAvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJoaWRlSXRcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPXtgdGV4dGB9XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9e2BpbWFnZWB9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuaW1hZ2UgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgSW1hZ2VgfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2xgfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT17YG9mZmB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BldmVudEVkaXRGb3JtRm9vdGVyYH0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9e2BzdWJtaXRgfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BidG4gZXZlbnRFZGl0Rm9ybVN1Ym1pdEJ0bmB9XHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFNhdmVcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvRm9ybWlrPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT17YGNsb3NlRXZlbnRFZGl0QnRuIGJ0biBidG5UcmFuc3BhcmVudCBidG5Sb3VuZGB9XHJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLnRvZ2dsZU1vZGFsfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxpbWcgc3JjPXtgL3N0YXRpYy9pbWcvY3Jvc3Muc3ZnYH0gLz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\dell\\projects\\UnicornScheduler\\components\\EventEdit.js */"
      }), picturebutton(), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
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
        }, _defineProperty(_React$createElement, "name", "Choose an image"), _defineProperty(_React$createElement, "value", values.image || ''), _defineProperty(_React$createElement, "onChange", handleChange), _defineProperty(_React$createElement, "onBlur", handleBlur), _defineProperty(_React$createElement, "data-crop", "4:3"), _defineProperty(_React$createElement, "className", "jsx-1704629409" + " " + "form-control"), _React$createElement)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          id: "hideIt",
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
//# sourceMappingURL=index.js.e44e9de7f017082523f9.hot-update.js.map