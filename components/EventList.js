import React from 'react';
import './../css/btn.css';
import './../css/eventEdit.css';
import './../css/eventList.css';


class EventList extends React.Component {
  constructor() {
    super();

    this.state = {
      date: '',
      picture: '',
    };
  }

  render() {
      
    return (
      <div className={`eventEdit`}>
        <style global jsx>{`
          body,
          .event {
            height: 100vh;
            overflow: hidden;
          }
        `}</style>
        <button
          className={`closeEventEditBtn btn btnTransparent btnRound`}
          onClick={this.props.toggleModal}
        >
          <img src={`/static/img/cross.svg`} />
        </button>
      </div>
    );
  }
}

export default EventList;
