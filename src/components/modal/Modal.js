import React, { Component, Fragment } from 'react';
import ModalContent from './ModalContent';


class Modal extends Component {
  state = { modalOpen: false }

  clickOpenModal = () => { this.setState({ modalOpen: true })}
  clickCloseModal = () => { this.setState({ modalOpen: false })}

  render() {
    return (
      <Fragment>
        
        <button 
          className="btn model-open-btn" 
          onClick={this.clickOpenModal}>
          {this.props.modalTitle}
        </button>
        
        {
          this.state.modalOpen &&
          <ModalContent
            clickCloseModal={this.clickCloseModal}
            content={this.props.children}
          />
        }
      </Fragment>
    )
  }
}

export default Modal