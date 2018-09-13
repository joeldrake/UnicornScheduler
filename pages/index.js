import React from 'react';
import Layout from './../components/Layout.js';
import Slider from 'react-slick';
import './../css/slider.css';
import './../css/sliderContent.css';

var sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  afterChange: i => {
    console.log(i);
  },
};

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [
        { text: 'Slide 1', image: '/static/img/test1.jpg' },
        { text: 'Slide 2', image: '/static/img/test2.jpg' },
        { text: 'Unicorn!' },
      ],
    };
  }

  render() {
    console.log(this.state);

    let renderSlides = this.state.slides
      ? this.state.slides.map((slide, i) => {
          let slideItemStyle = {};
          if (slide.image) {
            slideItemStyle = {
              backgroundImage: `url(${slide.image})`,
            };
          }
          return (
            <div className={`slideItemWrapper`} key={i}>
              <div className={`slideItem`} style={slideItemStyle}>
                {/* temporär check som lägger in text om det inte finns någon bild */}
                {!slide.image ? <h2>{slide.text}</h2> : null}
              </div>
            </div>
          );
        })
      : {};

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
