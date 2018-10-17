import React from 'react';
import { Formik } from 'formik';
import './../css/form-control.css';
import './../css/btn.css';
import './../css/eventEdit.css';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import './../css/datepicker.css';
import uploadcare from 'uploadcare-widget';

class ExistingEventEdit extends React.Component {
  constructor() {
    super();

    this.state = {
      date: '',
      picture: '',
    };
  }

  submitEventForm = (values, actions) => {
    console.log(this.state.date);
    console.log(values);
    alert(JSON.stringify(values, null, 2));

    const firestore = this.props.firebase.firestore();
    const eventname = `${values.name} ${Date.now()}`;
    values.date = this.state.date;
    values.lastUpdated = new Date();
    values.id = eventname;

    firestore.collection(`events`).doc(eventname).set(values);

    actions.setSubmitting(false);
    actions.resetForm();
  };

  onChoosingImage = (e) => {
    e.preventDefault();
    uploadcare
      .openDialog(null, {
        imagesOnly: true,
        crop: "3:2"
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

  getPictureUrl = () => {
    return (this.state.picture)
  }

  render() {

    var picturebutton = () => {
      if(this.state.picture) {
        return <div><img id="picture_load" src={this.state.picture}></img></div>
      } else {
        return <button id="picture_load_button" className="ui button big wider_button" onClick={this.onChoosingImage}>
                Choose a picture
              </button>
      }
    }

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
                  required
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
                  required
                  name={`description`}
                  value={values.description || ''}
                  placeholder={`Desciption`}
                  className={`form-control`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete={`off`}
                />
                <input
                  required
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
                  required
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
                  date={values.date}
                  onDateChange={date => (values.date = date)}
                  focused={this.state.focused}
                  onFocusChange={({ focused }) => this.setState({ focused })}
                  name="date"
                  onBlur={handleBlur}
                  displayFormat="DD MMM, YYYY"
                  numberOfMonths={1}
                  required={true}
                />
                
                <h5>Color</h5>
                <input
                  required
                  type={`color`}
                  name={`color`}
                  value={values.color}
                  placeholder={`Color`}
                  className={`form-control`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete={`off`}
                />
                
                {picturebutton()}

                <input
                  id="hideIt"
                  type={`text`}
                  name={`image`}
                  value={values.image = this.getPictureUrl()}
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
        <div>existing</div>
        <button
          className={`closeEventEditBtn btn btnTransparent btnRound`}
          onClick={this.props.toggleModal1}
        >
          <img src={`/static/img/cross.svg`} />
        </button>
      </div>
    );
  }
}

export default ExistingEventEdit;
