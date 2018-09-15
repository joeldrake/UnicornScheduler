import React from 'react';
import './../css/sliderContent.css';

class SlideItem extends React.Component {
  render() {
    const slide = this.props.slide;
    let slideItemStyle = {};
    let slideHeadlineStyle = {};

    if (slide.image) {
      slideItemStyle.backgroundImage = `url(${slide.image})`;
    }
    if (slide.color) {
      slideHeadlineStyle.backgroundColor = `${slide.color}`;
    }

    let renderHeadline = slide.headline ? (
      <div className={`slideBox slideHeadline`} style={slideHeadlineStyle}>
        {slide.headline}
      </div>
    ) : (
      ''
    );

    let renderDescription = slide.description ? (
      <div className={`slideBox slideDesciption`}>{slide.description}</div>
    ) : (
      ''
    );

    let renderTime = slide.time ? (
      <div className={`slideBox slideTime`}>{slide.time}</div>
    ) : (
      ''
    );

    let renderLocation = slide.location ? (
      <div className={`slideBox slideLocation`}>{slide.location}</div>
    ) : (
      ''
    );

    let renderHeadlineDescriptionWrapper = (
      <div className={`headlineDescriptionWrapper`}>
        {renderHeadline}
        {renderDescription}
      </div>
    );

    let renderTimeLocationWrapper = (
      <div className={`timeLocationWrapper`}>
        {renderTime}
        <div className="clearfix" />
        {renderLocation}
      </div>
    );

    return (
      <div className={`slideItemWrapper`}>
        <div className={`slideItem`} style={slideItemStyle}>
          {renderHeadlineDescriptionWrapper}
          {renderTimeLocationWrapper}
        </div>
      </div>
    );
  }
}

export default SlideItem;
