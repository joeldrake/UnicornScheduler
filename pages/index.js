import React from 'react';
import Layout from './../components/Layout.js';
import SlideItem from './../components/SlideItem.js';
import Slider from 'react-slick';
import firebase from 'firebase/app';
import 'firebase/firestore';
import './../css/slider.css';

var sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

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
      slides: [],
    };
  }

  componentDidMount() {
    const firestore = firebase.firestore();

    const settings = {
      timestampsInSnapshots: true,
    };
    firestore.settings(settings);

    firestore
      .collection(`events`)
      .orderBy(`date`, `asc`)
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
        this.setState({ slides: events });
      });
  }

  render() {
    let renderSlides = this.state.slides
      ? this.state.slides.map((slide, i) => {
          return <SlideItem key={i} slide={slide} />;
        })
      : [];

    return (
      <Layout>
        <Slider ref={e => (this.slider = e)} {...sliderSettings}>
          {renderSlides}
        </Slider>
      </Layout>
    );
  }
}

export default Index;
