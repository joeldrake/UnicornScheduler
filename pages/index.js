import React from 'react';
import Layout from './../components/Layout.js';
import Event from './../components/Event.js';
import Slider from 'react-slick';
import firebase from 'firebase/app';
import moment from 'moment';
import EventModal from './../components/EventModal.js';
import { getQueryVariable } from './../utils/functions.js';
import posed, { PoseGroup } from 'react-pose';
import 'firebase/firestore';
import './../css/slider.css';

const EventModalContainer = posed.div({
  enter: {
    y: '0',
    opacity: 1,
  },
  exit: {
    y: '-100%',
    opacity: 0,
  },
});
const EventModalDarkenContainer = posed.div({
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
});

class Index extends React.Component {
  constructor(props) {
    super(props);

    var config = {
      apiKey: 'AIzaSyDMVk4kh4_hTKYVXMWam50p3sYtrkbE-L0',
      authDomain: 'unicornscheduler1.firebaseapp.com',
      databaseURL: 'https://unicornscheduler1.firebaseio.com',
      projectId: 'unicornscheduler1',
      storageBucket: 'unicornscheduler1.appspot.com',
      messagingSenderId: '447273647045',
    };

    try {
      firebase.initializeApp(config);
    } catch (err) {
      /*
        this try function is to skip the "already exists" message which
        happens when we're hot-reloading and is not an actual error
      */
      if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack);
      }
    }

    this.state = {
      events: [],
      eventModalOpen: false,
      userWantsToEditEvents: false,
      todaysDate: moment().format(`YYYY-MM-DD`),
      initialLoadingDone: false,
    };
  }

  componentDidMount() {
    /*
      //caused problems with the starting slide, removed it for now
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
    */

    /*
    if app is not exported to static files we shoul use next/router 
    insted of window.location.search as this util function uses
    Then we could also move it to the constructor
    */

    const dateFromUrl = getQueryVariable('date');
    const eventFromUrl = getQueryVariable('event');

    this.setState({ dateFromUrl, eventFromUrl });

    const firestore = firebase.firestore();

    const settings = {
      timestampsInSnapshots: true,
    };
    firestore.settings(settings);

    firestore.collection(`events`).onSnapshot(querySnapshot => {
      const events = querySnapshot.docs.map(event => {
        let eventData = event.data();

        // adding and extra value to event in state that is not in firebase
        if (
          eventData &&
          eventData.date &&
          eventData.date.length &&
          eventData.date[0].seconds
        ) {
          eventData.normalizedDate = moment
            .unix(eventData.date[0].seconds)
            .format(`YYYY-MM-DD`);
        }

        //console.log(eventData.headline, eventData);

        return eventData;
      });
      this.setState({ events, initialLoadingDone: true });
    });
  }

  componentWillUnmount() {
    //window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  handleToggleEventModal(e, what) {
    if (e) {
      e.preventDefault();
    }

    const { eventModalOpen } = this.state;

    if (!eventModalOpen && this.slider) {
      //Modal is about to be open, pause the slider
      this.slider.slickPause();
      console.log('pause slider');
    } else if (this.slider) {
      //Modal is about to be close, play the slider
      this.slider.slickPlay();
      console.log('play slider');
    }

    const userWantsToEditEvents = what === 'edit' ? true : false;

    this.setState({
      eventModalOpen: !eventModalOpen,
      userWantsToEditEvents,
    });
  }

  findEvent = header => {
    const incomeHeader = header;
    const events = this.state.events;
    console.log('from find event', events);

    let selectedEvent = events.filter(event => {
      return event.headline === incomeHeader;
    });

    this.setState({
      selectedEvent,
    });

    console.log('from function', selectedEvent);
    console.log('from state', this.state.selectedEvent);

    // let filteredIceCream = iceCream.filter(iceCream => {
    //   return iceCream.flavour !== flavour;
    // })
  };

  render() {
    /*
      Only autoplay if window is wider than 500px.
      this did not work so good, removed it.

      var autoPlay = this.state.width > 500 ? true : false;
    */
    var autoPlay = true;

    let sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: autoPlay,
      pauseOnHover: false,
      arrows: true,
      initialSlide: 0,
      autoplaySpeed: 8000,
    };

    const { dateFromUrl, todaysDate, eventFromUrl } = this.state;

    let renderEvents = [];
    if (this.state.events) {
      renderEvents = this.state.events
        .filter(event => {
          //first filter the events on date, then map them

          if (eventFromUrl) {
            if (dateFromUrl) {
              //both event headline and date is provided, sort on both
              return (
                event.headline === eventFromUrl &&
                event.normalizedDate === dateFromUrl
              );
            } else {
              //only event headline is provided, sort on that
              return event.headline === eventFromUrl;
            }
          } else {
            //sort on date from url if provided, else sort on todays date
            return event.normalizedDate === (dateFromUrl || todaysDate);
          }
        })
        .map((event, i) => {
          return <Event event={event} key={i} />;
        });
    }

    const {
      events,
      eventModalOpen,
      userWantsToEditEvents,
      initialLoadingDone,
    } = this.state;

    return (
      <Layout>
        <div className={`eventToolbar`}>
          <a href="/" onClick={e => this.handleToggleEventModal(e, 'new')}>
            <img src={`/static/img/plus.svg`} />
          </a>
          {renderEvents.length ? (
            <a href="/" onClick={e => this.handleToggleEventModal(e, 'edit')}>
              <img src={`/static/img/lines.svg`} />
            </a>
          ) : null}
        </div>
        {renderEvents.length ? (
          <Slider ref={e => (this.slider = e)} {...sliderSettings}>
            {renderEvents}
          </Slider>
        ) : initialLoadingDone ? (
          <div className={`noEventsMessage`}>
            No events scheduled today...
            <br />
            Create one with the button in the top right corner!
          </div>
        ) : (
          <div>{/*loading form firebase*/}</div>
        )}

        <PoseGroup>
          {eventModalOpen ? (
            <EventModalContainer
              className={`eventModalWrapper`}
              key="eventModal"
            >
              <EventModal
                firebase={firebase}
                toggleModal={() => this.handleToggleEventModal()}
                events={events}
                userWantsToEditEvents={userWantsToEditEvents}
              />
            </EventModalContainer>
          ) : null}
        </PoseGroup>

        <PoseGroup>
          {eventModalOpen ? (
            <EventModalDarkenContainer
              className={`eventModalDarken`}
              key="darken"
            />
          ) : null}
        </PoseGroup>
      </Layout>
    );
  }
}

export default Index;
