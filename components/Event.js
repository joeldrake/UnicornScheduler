import React from 'react';
import EventEdit from './../components/EventEdit.js';
import posed, { PoseGroup } from 'react-pose';
import './../css/event.css';

class Event extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      eventEditOpen: true,
    };
  }

  handleToolbarItemClick = e => {
    e.preventDefault();

    const { eventEditOpen } = this.state;

    if (!eventEditOpen) {
      //Modal is about to be open, pause the slider
      this.props.slider.slickPause();
      console.log('pause slider');
    } else {
      //Modal is about to be close, play the slider
      this.props.slider.slickPlay();
      console.log('play slider');
    }

    this.setState({
      eventEditOpen: !eventEditOpen,
    });
  };

  render() {
    const { event } = this.props;
    const { eventEditOpen } = this.state;

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

    let eventStyle = {};
    let eventHeadlineStyle = {};

    if (event.image) {
      eventStyle.backgroundImage = `url(${event.image})`;
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
      <div className={`eventBox white eventLocation`}>{event.location}</div>
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
          <div className={`eventToolbar`}>
            <a href="#" onClick={this.handleToolbarItemClick}>
              <img src={`/static/img/pen.svg`} />
            </a>
            <a href="#" onClick={this.handleToolbarItemClick}>
              <img src={`/static/img/plus.svg`} />
            </a>
          </div>

          <PoseGroup>
            {eventEditOpen ? (
              <EventEditContainer
                className={`eventEditWrapper`}
                key="eventEdit"
              >
                <EventEdit firebase={this.props.firebase} toggleModal={this.handleToolbarItemClick} />
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

          {renderHeadlineDescriptionWrapper}
          {renderTimeLocationWrapper}
        </div>
      </div>
    );
  }
}

export default Event;
