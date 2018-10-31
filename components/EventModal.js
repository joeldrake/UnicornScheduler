import React from 'react';
import { Formik, FieldArray } from 'formik';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import uploadcare from 'uploadcare-widget';
import 'react-dates/initialize';
import './../css/form-control.css';
import './../css/btn.css';
import './../css/eventModal.css';
import './../css/eventList.css';
import './../css/datepicker.css';

class Modal extends React.Component {
  constructor() {
    super();

    this.state = {
      picture: '',
      selectedEvent: null,
      focused: [],
    };
  }

  submitEventForm = (values, actions) => {
    const { selectedEvent } = this.state;

    //create an immutable version of values
    const immutableValues = { ...values };

    if (selectedEvent) {
      //user is updating a selected event, update it
      this.updateSelectedEvent(immutableValues);
    } else {
      this.createNewEvent(immutableValues);
    }
  };

  createNewEvent(values) {
    const firestore = this.props.firebase.firestore();

    //setting date as an array, if we want events to have more dates in the future
    const fixedDates = values.dates.map(date => {
      return date.toDate();
    });
    values.dates = fixedDates;
    values.image = this.state.picture;

    const dateNow = moment().format(`YYYY-MM-DD HH:ss`);

    //docname is what is later used to update this event
    const originalDocName = `${dateNow} ${values.headline}`;

    values.lastUpdated = new Date();
    values.docName = originalDocName;

    firestore
      .collection(`events`)
      .doc(originalDocName)
      .set(values)
      .then(() => {
        console.log('Event successfully create!');
        //close modal
        this.props.toggleModal();
      })
      .catch(error => {
        console.error('Error saving event: ', error);
      });
  }

  updateSelectedEvent(values) {
    const firestore = this.props.firebase.firestore();

    //setting date as an array, if we want events to have more dates in the future
    const fixedDates = values.dates.map(date => {
      return date.toDate();
    });
    values.dates = fixedDates;

    values.image = this.state.picture;

    values.lastUpdated = new Date();

    console.log(values);
    console.log(this.state.picture);

    //remove the normalized dates so they do not get saved to firebase
    delete values.normalizedDate;
    delete values.normalizedDates;

    firestore
      .collection(`events`)
      .doc(values.docName)
      .update(values)
      .then(() => {
        console.log('Event successfully updated!');
        //close modal
        this.props.toggleModal();
      })
      .catch(error => {
        console.error('Error updating event: ', error);
      });
  }

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
        });
      });
  };

  renderEventEditForm(selectedEvent) {
    let initialValues = { dates: [moment()] };

    if (selectedEvent) {
      /*
        Event selected, this means user is editing that event.
        Put it in formik initial values
      */
      let immutableSelectedEvent = { ...selectedEvent };
      if (immutableSelectedEvent.dates) {
        immutableSelectedEvent.dates = immutableSelectedEvent.dates.map(
          date => {
            return moment.unix(date.seconds);
          },
        );
      } else if (immutableSelectedEvent.date) {
        //fix to handle old dated items
        immutableSelectedEvent.dates = [
          moment.unix(immutableSelectedEvent.date[0].seconds),
        ];
      }

      initialValues = immutableSelectedEvent;
    }

    const requiredMasterSwitch = false;

    return (
      <div>
        <div className={`eventModalHeader`}>
          {selectedEvent ? (
            <React.Fragment>
              <a href="/" onClick={this.clearSelectedEvent}>
                &larr; Back to event list
              </a>
              <h2>Editing event "{selectedEvent.headline}"</h2>
              <a
                href={`/?date=${selectedEvent.normalizedDate}&event=${
                  selectedEvent.headline
                }`}
                className={`previewLink`}
              >
                Preview event page
              </a>
            </React.Fragment>
          ) : (
            <h2>Create new event</h2>
          )}
        </div>
        <Formik initialValues={initialValues} onSubmit={this.submitEventForm}>
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
                  required={requiredMasterSwitch}
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
                  required={requiredMasterSwitch}
                  name={`description`}
                  value={values.description || ''}
                  placeholder={`Desciption`}
                  className={`form-control`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete={`off`}
                />
                <input
                  required={requiredMasterSwitch}
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
                  required={requiredMasterSwitch}
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
                <FieldArray
                  name={`dates`}
                  render={arrayHelpers => (
                    <div>
                      {values.dates.map((date, i) => (
                        <div key={i}>
                          <SingleDatePicker
                            readOnly
                            placeholder="Date"
                            date={values.dates[i]}
                            onDateChange={date => (values.dates[i] = date)}
                            focused={this.state.focused[i]}
                            onFocusChange={({ focused }) => {
                              let newFocused = this.state.focused;
                              newFocused[i] = focused;
                              this.setState({ focused: newFocused });
                            }}
                            displayFormat="DD MMM, YYYY"
                            numberOfMonths={1}
                            required={true}
                          />

                          {i !== 0 ? (
                            <button
                              type="button"
                              onClick={() => arrayHelpers.remove(i)}
                            >
                              -
                            </button>
                          ) : null}
                        </div>
                      ))}

                      <button
                        type="button"
                        onClick={() => arrayHelpers.push(moment())}
                      >
                        +
                      </button>
                    </div>
                  )}
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
                    {/* Add picture button here */}
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
                  value={this.state.picture}
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
      </div>
    );
  }

  handleSelectEvent(e, selectedEvent) {
    if (e) {
      e.preventDefault();
    }

    let date = moment(); //set todays day firt as a fallback
    if (
      selectedEvent &&
      selectedEvent.date &&
      selectedEvent.date[0] &&
      selectedEvent.date[0].seconds
    ) {
      date = moment.unix(selectedEvent.date[0].seconds);
    }
    this.setState({
      selectedEvent,
      picture: selectedEvent.image,
      date,
    });
  }

  renderEventList() {
    const { events } = this.props;

    //create im
    let immuatableEvents = events;

    return (
      <div className={`eventListWrapper`}>
        <div className={`eventModalHeader`}>
          <h2>List of events</h2>
        </div>
        <ul className={`eventList`}>
          {events.map((event, i) => {
            let eventName = ``;
            if (event && event.normalizedDates) {
              eventName = event.normalizedDates[0];
            }

            if (event.headline) {
              eventName += ` ${event.headline}`;
            } else {
              eventName += ` No headline`;
            }

            return (
              <li key={i}>
                <a href="/" onClick={e => this.handleSelectEvent(e, event)}>
                  {eventName}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  clearSelectedEvent = e => {
    if (e) {
      e.preventDefault();
    }
    this.setState({ selectedEvent: null });
  };

  render() {
    const { userWantsToEditEvents } = this.props;
    const { selectedEvent } = this.state;

    let modalContent;
    if (userWantsToEditEvents && !selectedEvent) {
      /*
        User wants to edit event and no event is selected.
        Show list so user can select an event to edit
      */
      modalContent = this.renderEventList();
    } else if (userWantsToEditEvents && selectedEvent) {
      /*
        User has selected and event, show event edit form with that event
      */
      modalContent = this.renderEventEditForm(selectedEvent);
    } else {
      modalContent = this.renderEventEditForm();
    }
    return (
      <div className={`eventModal`}>
        <style global jsx>{`
          body,
          .event {
            height: 100vh;
            overflow: hidden;
          }
        `}</style>
        <button
          className={`closeEventModalBtn btn btnTransparent btnRound`}
          onClick={this.props.toggleModal}
        >
          <img src={`/static/img/cross.svg`} />
        </button>

        {modalContent}
      </div>
    );
  }
}

export default Modal;
