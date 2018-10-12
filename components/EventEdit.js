import React from 'react';
import { Formik } from 'formik';
import './../css/form-control.css';
import './../css/btn.css';
import './../css/eventEdit.css';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import './../css/datepicker.css';
import uploadcare from 'uploadcare-widget';

class Modal extends React.Component {
  constructor() {
    super();

    this.state = {
      date: null,
      picture: '',
    };
  }

  submitEventForm = (values, actions) => {
    console.log(this.state.date);
    console.log(values);

    const firestore = this.props.firebase.firestore();

    values.date = this.state.date.toDate();

    console.log(this.props);

    const dateNow = moment().format(`YYYY-MM-DD mm:ss`);
    const eventname = `${dateNow} ${values.headline}`;

    values.lastUpdated = new Date();
    values.docName = eventname;

    //the id of the event is created when the event is created
    //just using unix time for now.
    values.id = new Date().getTime();

    alert(JSON.stringify(values, null, 2));

    firestore
      .collection(`events`)
      .doc(eventname)
      .set(values);

    this.setState({ picture: '' });
    actions.setSubmitting(false);
    actions.resetForm();
  };

  onChoosingImage = e => {
    e.preventDefault();
    uploadcare
      .openDialog(null, {
        imagesOnly: true,
        crop: '3:2',
      })
      .done(file => {
        file.promise().done(fileInfo => {
          console.log('From inside promise ' + fileInfo.cdnUrl);
          this.setState({
            picture: fileInfo.cdnUrl,
          });
          console.log(this.state);
        });
      });
  };

  render() {
    return (
      <div className={`eventEdit`}>
        <style global jsx>{`
          body,
          .event {
            height: 100vh;
            overflow: hidden;
          }
        `}</style>
        <Formik initialValues={{}} onSubmit={this.submitEventForm}>
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit} className={`eventEditForm`}>
              <div>
                <input
                  required={true}
                  type={`text`}
                  name={`headline`}
                  value={values.headline || ''}
                  placeholder={`Eventname`}
                  className={`form-control`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete={`off`}
                />
                <textarea
                  required={true}
                  name={`description`}
                  value={values.description || ''}
                  placeholder={`Desciption`}
                  className={`form-control`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete={`off`}
                />
                <input
                  required={true}
                  type={`text`}
                  name={`location`}
                  value={values.location || ''}
                  placeholder={`Location`}
                  className={`form-control`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete={`off`}
                />

                <input
                  required={true}
                  type={`text`}
                  name={`time`}
                  value={values.time || ''}
                  placeholder={`Time (four digits like 09:00)`}
                  className={`form-control`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete={`off`}
                />
              </div>
              <div>
                <SingleDatePicker
                  readOnly
                  placeholder="Date"
                  date={this.state.date}
                  onDateChange={date => this.setState({ date })}
                  focused={this.state.focused}
                  onFocusChange={({ focused }) => this.setState({ focused })}
                  displayFormat="DD MMM, YYYY"
                  numberOfMonths={1}
                  required={true}
                />

                <h5>Color</h5>
                <input
                  required={false}
                  type={`color`}
                  name={`color`}
                  value={values.color}
                  placeholder={`Color`}
                  className={`form-control`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete={`off`}
                />

                {this.state.picture ? (
                  <div>
                    <img id="picture_load" src={this.state.picture} />
                  </div>
                ) : (
                  <button
                    id="picture_load_button"
                    className="ui button big wider_button"
                    onClick={this.onChoosingImage}
                  >
                    Choose a picture
                  </button>
                )}

                <input
                  id="image"
                  type={`hidden`}
                  name={`image`}
                  value={(values.image = this.state.picture)}
                  placeholder={`Image`}
                  className={`form-control`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete={`off`}
                />
              </div>

              <div className={`eventEditFormFooter`}>
                <button
                  type={`submit`}
                  className={`btn eventEditFormSubmitBtn`}
                  disabled={isSubmitting}
                >
                  Save
                </button>
              </div>
            </form>
          )}
        </Formik>
        <button
          className={`closeEventEditBtn btn btnTransparent btnRound`}
          onClick={this.props.toggleEventEditOpen}
        >
          <img src={`/static/img/cross.svg`} />
        </button>
      </div>
    );
  }
}

export default Modal;
