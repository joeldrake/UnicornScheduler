import React from 'react';
import Layout from './../components/Layout.js';
import Event from './../components/Event.js';
import Slider from 'react-slick';
import firebase from 'firebase/app';
import EventEdit from './../components/EventEdit.js';
import posed, { PoseGroup } from 'react-pose';
import 'firebase/firestore';
import './../css/slider.css';
import EventList from '../components/EventList.js';
import ExistingEventEdit from '../components/ExistingEventEdit.js';

const EventEditContainer = posed.div({
  enter: {
    y: '0',
    opacity: 1,
  },
  exit: {
    y: '-80%',
    opacity: 0,
  },
});
const EventEditDarkenContainer = posed.div({
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
});

const EventListContainer = posed.div({
  enter: {
    y: '0',
    opacity: 1,
  },
  exit: {
    y: '-80%',
    opacity: 0,
  },
});
const EventListDarkenContainer = posed.div({
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
      eventEditOpen: false,
      eventListOpen: false,
      existingEditOpen: false,
      selectedEvent: []
    };
  }

  componentDidMount() {
    /*
      //caused problems with the starting slide, removed it for now
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
    */
    const firestore = firebase.firestore();

    const settings = {
      timestampsInSnapshots: true,
    };
    firestore.settings(settings);

    firestore
      .collection(`events`)
      .onSnapshot(querySnapshot => {
        const events = querySnapshot.docs.map(event => {
          let eventData = event.data();
          return eventData;
        });
        /*
          dump to console only for dev purposes
          remove when app is in production
        */
        console.log(JSON.stringify(events, null, 2));
        this.setState({ events });
      });
  }

  componentWillUnmount() {
    //window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  handleToolbarItemClick = e => {
    e.preventDefault();

    const { eventEditOpen } = this.state;

    if (!eventEditOpen) {
      //Modal is about to be open, pause the slider
      this.slider.slickPause();
      console.log('pause slider');
    } else {
      //Modal is about to be close, play the slider
      this.slider.slickPlay();
      console.log('play slider');
    }

    this.setState({
      eventEditOpen: !eventEditOpen,
    });
  };

  handleListClick = e => {
    e.preventDefault();

    const { eventListOpen } = this.state;

    if (!eventListOpen) {
      //Modal is about to be open, pause the slider
      this.slider.slickPause();
      console.log('pause slider');
    } else {
      //Modal is about to be close, play the slider
      this.slider.slickPlay();
      console.log('play slider');
    }

    this.setState({
      eventListOpen: !eventListOpen,
    });
  };

  findEvent = (header) => {
    const incomeHeader = header
    const events = this.state.events
    console.log('from find event', events)

    let selectedEvent = events.filter(event => {
      return event.headline === incomeHeader
    })

    this.setState({
      selectedEvent
    })

    console.log('from function', selectedEvent)
    console.log('from state', this.state.selectedEvent)

    // let filteredIceCream = iceCream.filter(iceCream => {
    //   return iceCream.flavour !== flavour;
    // })

  }

  handleExistingClick = (e, header) => {
    e.preventDefault();
    if (header) {
      this.findEvent(header)
    }
    
    const { existingEditOpen } = this.state;
    

    if (!existingEditOpen) {
      //Modal is about to be open, pause the slider
      this.slider.slickPause();
      console.log('pause slider');
    } else {
      //Modal is about to be close, play the slider
      this.slider.slickPlay();
      console.log('play slider');
    }

    this.setState({
      existingEditOpen: !existingEditOpen,
    });
  };


  render() {
    /*
      Only autoplay if window is wider than 500px.
      this did not work so good, removed it.

      var autoPlay = this.state.width > 500 ? true : false;
    */
    var autoPlay = false;

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
      autoplaySpeed: 5000,
    };

    let renderEvents = [];
    if (this.state.events) {
      renderEvents = this.state.events.map((event, i) => {
        return <Event key={i} event={event} slider={this.slider} firebase={firebase} />;
      });
    }

    const { eventEditOpen, eventListOpen, existingEditOpen } = this.state;

   

    return (
      <Layout>
        <div className={`eventToolbar`}>
            <a href="#" onClick={this.handleListClick}>
              <img src={`/static/img/pen.svg`} />
            </a>
            <a href="#" onClick={this.handleToolbarItemClick}>
              <img src={`/static/img/plus.svg`} />
            </a>
          </div>
        <Slider ref={e => (this.slider = e)} {...sliderSettings}>
          {renderEvents}
        </Slider>
        <PoseGroup>
            {eventEditOpen ? (
              <EventEditContainer
                className={`eventEditWrapper`}
                key="eventEdit"
              >
                <EventEdit firebase={firebase} toggleModal={this.handleToolbarItemClick} />
              </EventEditContainer>
            ) : null}
          </PoseGroup>
          <PoseGroup>
            {eventEditOpen ? (
              <EventEditDarkenContainer
                className={`eventEditDarken`}
                key="darken"
              />
            ) : null}
          </PoseGroup>

          <PoseGroup>
            {eventListOpen ? (
              <EventEditContainer
                className={`eventEditWrapper`}
                key="eventEdit"
              >
                <EventList events={this.state.events} toggleModal={this.handleListClick} toggleModal1={this.handleExistingClick} />
              </EventEditContainer>
            ) : null}
          </PoseGroup>
          <PoseGroup>
            {eventListOpen ? (
              <EventEditDarkenContainer
                className={`eventEditDarken`}
                key="darken"
              />
            ) : null}
          </PoseGroup>

          <PoseGroup>
            {existingEditOpen ? (
              <EventEditContainer
                className={`eventEditWrapper`}
                key="eventEdit"
              >
                <ExistingEventEdit firebase={firebase} toggleModal={this.handleListClick} toggleModal1={this.handleExistingClick} selectedEvent={this.state.selectedEvent[0]} />
              </EventEditContainer>
            ) : null}
          </PoseGroup>
          <PoseGroup>
            {existingEditOpen ? (
              <EventEditDarkenContainer
                className={`eventEditDarken`}
                key="darken"
              />
            ) : null}
          </PoseGroup>
          
      </Layout>

    );
  }
}

export default Index;
