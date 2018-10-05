import React from 'react';
import { Formik } from 'formik';
import './../css/form-control.css';
import './../css/btn.css';
import './../css/eventEdit.css';

class Modal extends React.Component {
  submitEventForm = (values, actions) => {
    console.log(values);
    alert(JSON.stringify(values, null, 2));
    /* 
      todo: Submit form data to firebase
      
      Also: troubleshoot why formik is not resetting content of inputs?
    */
    actions.resetForm();
    actions.setSubmitting(false);
    this.forceUpdate();
  };
  render() {
    return (
      <div className={`eventEdit`}>
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
                  type={`text`}
                  name={`headline`}
                  placeholder={`Eventname`}
                  className={`form-control`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete={`off`}
                />

                <textarea
                  name={`description`}
                  placeholder={`Desciption`}
                  className={`form-control`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete={`off`}
                />
                <input
                  type={`text`}
                  name={`location`}
                  placeholder={`Location`}
                  className={`form-control`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete={`off`}
                />
                <input
                  type={`text`}
                  name={`time`}
                  placeholder={`Time`}
                  className={`form-control`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete={`off`}
                />
              </div>
              <div>
                <input
                  type={`text`}
                  name={`date`}
                  placeholder={`Date`}
                  className={`form-control`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete={`off`}
                />
                <input
                  type={`text`}
                  name={`color`}
                  placeholder={`Color`}
                  className={`form-control`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete={`off`}
                />
                <input
                  type={`text`}
                  name={`image`}
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
          onClick={this.props.toggleModal}
        >
          <img src={`/static/img/cross.svg`} />
        </button>
      </div>
    );
  }
}

export default Modal;
