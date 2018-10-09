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
      calles;

      var firestore = _this.props.firebase.firestore();

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
      });
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
        css: "body,.event{height:100vh;overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGVsbFxccHJvamVjdHNcXFVuaWNvcm5TY2hlZHVsZXJcXGNvbXBvbmVudHNcXEV2ZW50RWRpdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RjJCLEFBSTBCLGFBQ0csZ0JBQ2xCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcZGVsbFxccHJvamVjdHNcXFVuaWNvcm5TY2hlZHVsZXJcXGNvbXBvbmVudHNcXEV2ZW50RWRpdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvcm1payB9IGZyb20gJ2Zvcm1payc7XHJcbmltcG9ydCAnLi8uLi9jc3MvZm9ybS1jb250cm9sLmNzcyc7XHJcbmltcG9ydCAnLi8uLi9jc3MvYnRuLmNzcyc7XHJcbmltcG9ydCAnLi8uLi9jc3MvZXZlbnRFZGl0LmNzcyc7XHJcblxyXG5cclxuXHJcblxyXG4vLyBjb25zdCBmaXJlc3RvcmUgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcclxuXHJcbi8vIGZpcmVzdG9yZVxyXG4vLyAgICAgICAuY29sbGVjdGlvbihgZXZlbnRzYClcclxuLy8gICAgICAgLm9yZGVyQnkoYGRhdGVgLCBgYXNjYClcclxuLy8gICAgICAgLm9uU25hcHNob3QocXVlcnlTbmFwc2hvdCA9PiB7XHJcbi8vICAgICAgICAgY29uc3QgZXZlbnRzID0gcXVlcnlTbmFwc2hvdC5kb2NzLm1hcChldmVudCA9PiB7XHJcbi8vICAgICAgICAgICBsZXQgZXZlbnREYXRhID0gZXZlbnQuZGF0YSgpO1xyXG4vLyAgICAgICAgICAgcmV0dXJuIGV2ZW50RGF0YTtcclxuLy8gICAgICAgICB9KTtcclxuXHJcbi8vIHZhciBkYXRhYmFzZSA9IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmO1xyXG5cclxuLy8gdmFyIHsgZGF0YWJhc2UgfSA9IHRoaXMucHJvcHMuZmlyZWJhc2U7XHJcblxyXG5cclxuLy8gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJy9ldmVudHMvJykub25jZSgndmFsdWUnKS50aGVuKGZ1bmN0aW9uKHNuYXBzaG90KSB7XHJcbi8vICAgY29uc29sZS5sb2coc25hcHNob3QudmFsKCkpXHJcbi8vIH0pO1xyXG5cclxuY2xhc3MgTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHN1Ym1pdEV2ZW50Rm9ybSA9ICh2YWx1ZXMsIGFjdGlvbnMpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlcyk7XHJcbiAgICBhbGVydChKU09OLnN0cmluZ2lmeSh2YWx1ZXMsIG51bGwsIDIpKTtcclxuXHJcblxyXG4gICAgY2FsbGVzXHJcbiAgICBjb25zdCBmaXJlc3RvcmUgPSB0aGlzLnByb3BzLmZpcmViYXNlLmZpcmVzdG9yZSgpO1xyXG5cclxuICAgIGNvbnN0IHNldHRpbmdzID0ge1xyXG4gICAgICB0aW1lc3RhbXBzSW5TbmFwc2hvdHM6IHRydWUsXHJcbiAgICB9O1xyXG4gICAgZmlyZXN0b3JlLnNldHRpbmdzKHNldHRpbmdzKTtcclxuXHJcbiAgICBmaXJlc3RvcmVcclxuICAgICAgLmNvbGxlY3Rpb24oYGV2ZW50c2ApXHJcbiAgICAgIC5vcmRlckJ5KGBkYXRlYCwgYGFzY2ApXHJcbiAgICAgIC5vblNuYXBzaG90KHF1ZXJ5U25hcHNob3QgPT4ge1xyXG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IHF1ZXJ5U25hcHNob3QuZG9jcy5tYXAoZXZlbnQgPT4ge1xyXG4gICAgICAgICAgbGV0IGV2ZW50RGF0YSA9IGV2ZW50LmRhdGEoKTtcclxuICAgICAgICAgIHJldHVybiBldmVudERhdGE7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgICAgZHVtcCB0byBjb25zb2xlIG9ubHkgZm9yIGRldiBwdXJwb3Nlc1xyXG4gICAgICAgICAgcmVtb3ZlIHdoZW4gYXBwIGlzIGluIHByb2R1Y3Rpb25cclxuICAgICAgICAqL1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGV2ZW50cywgbnVsbCwgMikpO1xyXG4gICAgICB9KTtcclxuICAgIC8qIFxyXG4gICAgdG9kbzogU3VibWl0IGZvcm0gZGF0YSB0byBmaXJlYmFzZVxyXG5cclxuICAgIENSRUFURSBFVkVOVCAoc29tZXRoaW5nIGxpa2UgdGhpcylcclxuICAgIGNvbnN0IGZpcmVzdG9yZSA9IHRoaXMucHJvcHMuZmlyZWJhc2UuZmlyZXN0b3JlKCk7XHJcbiAgICBjb25zdCB1bmlxZU5hbWUgPSBgJHt2YWx1ZS5uYW1lfSAke0RhdGUubm93KCl9YDtcclxuICAgIFxyXG4gICAgdmFsdWVzLmxhc3RVcGRhdGVkID0gbmV3IERhdGUoKVxyXG4gICAgdmFsdWVzLmlkID0gdW5pcWVOYW1lXHJcblxyXG4gICAgZmlyZXN0b3JlLmNvbGxlY3Rpb24oYGV2ZW50c2ApLmRvYyh1bmlxZU5hbWUpLnNldCh2YWx1ZXMpO1xyXG5cclxuICAgIFVQREFURSBFVkVOVCAoc29tZXRoaW5nIGxpa2UgdGhpcylcclxuICAgIGZpcmVzdG9yZVxyXG4gICAgICAuY29sbGVjdGlvbihgZXZlbnRzYClcclxuICAgICAgLmRvYyh1bmlxZU5hbWUpXHJcbiAgICAgIC51cGRhdGUodmFsdWVzKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0RvY3VtZW50IHN1Y2Nlc3NmdWxseSB1cGRhdGVkIScpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGRvY3VtZW50OiAnLCBlcnJvcik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICovXHJcblxyXG4gICAgYWN0aW9ucy5zZXRTdWJtaXR0aW5nKGZhbHNlKTtcclxuICAgIGFjdGlvbnMucmVzZXRGb3JtKCk7XHJcbiAgfTtcclxuXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BldmVudEVkaXRgfT5cclxuICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgICAgICAgYm9keSxcclxuICAgICAgICAgIC5ldmVudCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDxGb3JtaWsgaW5pdGlhbFZhbHVlcz17e319IG9uU3VibWl0PXt0aGlzLnN1Ym1pdEV2ZW50Rm9ybX0+XHJcbiAgICAgICAgICB7KHtcclxuICAgICAgICAgICAgdmFsdWVzLFxyXG4gICAgICAgICAgICBoYW5kbGVDaGFuZ2UsXHJcbiAgICAgICAgICAgIGhhbmRsZUJsdXIsXHJcbiAgICAgICAgICAgIGhhbmRsZVN1Ym1pdCxcclxuICAgICAgICAgICAgaXNTdWJtaXR0aW5nLFxyXG4gICAgICAgICAgfSkgPT4gKFxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9e2BldmVudEVkaXRGb3JtYH0+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPXtgdGV4dGB9XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9e2BoZWFkbGluZWB9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuaGVhZGxpbmUgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgRXZlbnRuYW1lYH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sYH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9e2BvZmZgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICBuYW1lPXtgZGVzY3JpcHRpb25gfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmRlc2NyaXB0aW9uIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YERlc2NpcHRpb25gfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2xgfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT17YG9mZmB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9e2B0ZXh0YH1cclxuICAgICAgICAgICAgICAgICAgbmFtZT17YGxvY2F0aW9uYH1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5sb2NhdGlvbiB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2BMb2NhdGlvbmB9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbGB9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPXtgb2ZmYH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT17YHRleHRgfVxyXG4gICAgICAgICAgICAgICAgICBuYW1lPXtgdGltZWB9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMudGltZSB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2BUaW1lYH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sYH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9e2BvZmZgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9e2B0ZXh0YH1cclxuICAgICAgICAgICAgICAgICAgbmFtZT17YGRhdGVgfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmRhdGUgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgRGF0ZWB9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbGB9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPXtgb2ZmYH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT17YHRleHRgfVxyXG4gICAgICAgICAgICAgICAgICBuYW1lPXtgY29sb3JgfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmNvbG9yIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YENvbG9yYH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sYH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9e2BvZmZgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPXtgdGV4dGB9XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9e2BpbWFnZWB9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuaW1hZ2UgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgSW1hZ2VgfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2xgfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT17YG9mZmB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGV2ZW50RWRpdEZvcm1Gb290ZXJgfT5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgdHlwZT17YHN1Ym1pdGB9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ0biBldmVudEVkaXRGb3JtU3VibWl0QnRuYH1cclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzU3VibWl0dGluZ31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgU2F2ZVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgY2xvc2VFdmVudEVkaXRCdG4gYnRuIGJ0blRyYW5zcGFyZW50IGJ0blJvdW5kYH1cclxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMudG9nZ2xlTW9kYWx9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGltZyBzcmM9e2Avc3RhdGljL2ltZy9jcm9zcy5zdmdgfSAvPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbDtcclxuIl19 */\n/*@ sourceURL=C:\\Users\\dell\\projects\\UnicornScheduler\\components\\EventEdit.js */"
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
//# sourceMappingURL=index.js.aa697696a7ee6af5c127.hot-update.js.map