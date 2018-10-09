import React from 'react';
import Layout from './../components/Layout.js';
import Event from './../components/Event.js';
import Slider from 'react-slick';
import firebase from 'firebase/app';
import 'firebase/firestore';
import './../css/slider.css';

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
      autoplaySpeed: 5000,
    };

    let renderEvents = [];
    if (this.state.events) {
      renderEvents = this.state.events.map((event, i) => {
        return <Event key={i} event={event} slider={this.slider} firebase={firebase} />;
      });
    }

    return (
      <Layout>
        <Slider ref={e => (this.slider = e)} {...sliderSettings}>
          {renderEvents}
        </Slider>
      </Layout>
    );
  }
}

export default Index;
