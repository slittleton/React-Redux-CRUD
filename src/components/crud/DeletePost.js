import React from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../../actions';;


const DeletePost = (props) => {
    return(
      <div className="delete-post container">
        <div className="confirm-del-q">
          <p className="modal-body">Confirm Delete</p>
          <div>
            <button 
              className="modal-btn" 
              onClick={()=>props.deletePost(props.id)}
            >Confirm
            </button>
          </div>
        </div>
      </div>
    )
}

export default connect(null,{deletePost})(DeletePost);