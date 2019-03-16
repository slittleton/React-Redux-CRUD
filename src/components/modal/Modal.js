import React, { Component, Fragment } from 'react';
import ModalContentDelPost from './ModalContentDelPost';


class Modal extends Component {
  state = { modalOpen: false }

  clickOpenModal = () => { this.setState({ modalOpen: true }); console.log('clicked true')}
  clickCloseModal = () => { this.setState({ modalOpen: false }); console.log('clicked false')}

  render() {
    return (
      <Fragment>
        {console.log(this.props.onDelete)}
        <button 
          className="btn model-open-btn" 
          onClick={this.clickOpenModal}>
          {this.props.modalTitle}
        </button>
        
        {
          this.state.modalOpen &&
          <ModalContentDelPost
            id={this.props.id}
            onDelete={this.props.onDelete}
            clickCloseModal={this.clickCloseModal}
          />
        }
      </Fragment>
    )
  }
}

export default Modal