import React from 'react';
import ReactDOM from 'react-dom';

const ModalContent = ({clickCloseModal, id, onDelete, content}) => {
  return ReactDOM.createPortal(
    <div className="space-around-modal">
      <div className="modal-box">
      <button className="x-btn" onClick={clickCloseModal} >X</button>
        <div className="modal-content">

          {content}
        
        </div>
      </div>
    </div>, 
    document.body
  );
}

export default ModalContent