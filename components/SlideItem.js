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
      slideItemStyle.backgroundColor = `${slide.color}`;
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
      <div className={`slideBox slideDesciption`}>
        {renderHeadline}
        {slide.description}
      </div>
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

    let renderTimeLocationWrapper = (
      <div className={`timeLocationWrapper`}>
        {renderLocation}
        {renderTime}
      </div>
    );

    return (
      <div className={`slideItemWrapper`}>
        <div className={`slideItem`} style={slideItemStyle}>
          {/* temporär check som lägger in text om det inte finns någon bild */}
          {!slide.image ? <h2>{slide.text}</h2> : null}
          {renderDescription}
          {renderTimeLocationWrapper}
        </div>
      </div>
    );
  }
}

export default SlideItem;
