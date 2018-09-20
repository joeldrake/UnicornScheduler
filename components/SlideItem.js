import React from 'react';
import Modal from './../components/Modal.js';
import posed, { PoseGroup } from 'react-pose';
import './../css/sliderContent.css';

class SlideItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
    };
  }

  handleToolbarItemClick = e => {
    e.preventDefault();

    const modalOpen = this.state.modalOpen;

    if (!modalOpen) {
      //Modal is about to be open, pause the slider
      this.props.slider.slickPause();
      console.log('pause slider');
    } else {
      //Modal is about to be close, play the slider
      this.props.slider.slickPlay();
      console.log('play slider');
    }

    this.setState({
      modalOpen: !modalOpen,
    });
  };

  render() {
    const slide = this.props.slide;
    const modalOpen = this.state.modalOpen;

    const ModalContainer = posed.div({
      enter: {
        y: '0',
        opacity: 1,
      },
      exit: {
        y: '-100%',
        opacity: 0,
      },
    });

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
      <div className={`slideBox white slideTime`}>{slide.time}</div>
    ) : (
      ''
    );

    let renderLocation = slide.location ? (
      <div className={`slideBox white slideLocation`}>{slide.location}</div>
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
          <div className={`slideItemToolbar`}>
            <a href="#" onClick={this.handleToolbarItemClick}>
              <img src={`/static/img/pen.svg`} />
            </a>
            <a href="#" onClick={this.handleToolbarItemClick}>
              <img src={`/static/img/plus.svg`} />
            </a>
          </div>

          <PoseGroup>
            {modalOpen ? (
              <ModalContainer className={`modalWrapper`} key="modal">
                <Modal toggleModal={this.handleToolbarItemClick} />
              </ModalContainer>
            ) : null}
          </PoseGroup>

          {renderHeadlineDescriptionWrapper}
          {renderTimeLocationWrapper}
        </div>
      </div>
    );
  }
}

export default SlideItem;
