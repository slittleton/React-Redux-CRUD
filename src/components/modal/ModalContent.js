import React from 'react';
import ReactDOM from 'react-dom';

const ModalContent = ({clickCloseModal, id, onDelete, content}) => {
  return ReactDOM.createPortal(
    <div className="space-around-modal">
      <div className="modal-box">
      
        <div className="modal-content">
        <button className="x-btn" onClick={clickCloseModal} >X</button>
          {content}
        
        </div>
      </div>
    </div>, 
    document.body
  );
}

export default ModalContent