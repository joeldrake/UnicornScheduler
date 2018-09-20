import React from 'react';
import './../css/modal.css';

class Modal extends React.Component {
  render() {
    return (
      <div className={`modal`}>
        Edit event form!
        <button className={`closeModalBtn`} onClick={this.props.toggleModal}>
          Close form
        </button>
      </div>
    );
  }
}

export default Modal;
