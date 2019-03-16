import React from 'react';
import ReactDOM from 'react-dom';

const ModalContentDelPost = ({clickCloseModal, id, onDelete}) => {
  return ReactDOM.createPortal(
    <div className="space-around-modal">
      <div className="modal-box">
        <h3 className="modal-body">Are You Sure You Want To Delete Post with ID: {id} </h3>
        <button className="btn" onClick={()=>onDelete(id)}>Yes</button>
        <button className="btn" onClick={clickCloseModal} >No</button>
      </div>
    </div>, 
    document.body
  );
}

export default ModalContentDelPost