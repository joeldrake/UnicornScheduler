import React from 'react';
import './../css/btn.css';
import './../css/eventEdit.css';


class EventList extends React.Component {
  constructor() {
    super();

    this.state = {
      date: '',
    };
  }

  
  editEvent = (headline) => {
    alert(headline)
  }

  render() {

    const { events } = this.props;
    console.log(events)

    return (
      <div className={`eventEdit`}>
        <style global jsx>{`
          body,
          .event {
            height: 100vh;
            overflow: hidden;
          }
        `}</style>
          <ul>
        {events.map((event) => {
        var {headline} = event;
        return (
        <li>
        <a href="#" onClick={this.props.toggleModal1}>{headline}</a>
        </li>
        )
        
      })}
      </ul>
      <button onClick={this.props.toggleModal1}>test</button>
      
        
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
