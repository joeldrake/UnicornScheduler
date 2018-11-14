import React from 'react';
import './../css/event.css';

class Event extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      eventEditOpen: false,
      eventListOpen: false,
    };
  }

  render() {
    const { event } = this.props;

    let eventStyle = {};
    let eventHeadlineStyle = {};

    if (event.image) {
      let displayImage = event.image;
      if (displayImage.includes('ucarecdn.com')) {
        //uploadcareUrl, add resize parameter
        displayImage += `-/resize/1200x/`;
      }

      eventStyle.backgroundImage = `url(${displayImage})`;
    }
    if (event.color) {
      eventHeadlineStyle.backgroundColor = `${event.color}`;
    }

    let renderHeadline = event.headline ? (
      <div className={`eventBox eventHeadline`} style={eventHeadlineStyle}>
        {event.headline}
      </div>
    ) : (
      ''
    );

    let renderDescription = event.description ? (
      <div className={`eventBox eventDesciption`}>{event.description}</div>
    ) : (
      ''
    );

    let renderTime = event.time ? (
      <div className={`eventBox white eventTime`}>{event.time}</div>
    ) : (
      ''
    );

    let renderLocation = event.location ? (
      <div className={`eventBox eventLocation`}>{event.location}</div>
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
      <div className={`eventWrapper`}>
        <div className={`event`} style={eventStyle}>
          {renderHeadlineDescriptionWrapper}
          {renderTimeLocationWrapper}
        </div>
      </div>
    );
  }
}

export default Event;
