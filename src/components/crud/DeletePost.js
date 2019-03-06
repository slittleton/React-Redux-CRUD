import React from 'react';
import SideMenu from '../layout/SideMenu';;

class DeletePost extends React.Component {
  render(){
    return(
      <div className="delete-post container">
        <SideMenu/>
        <div className="content">
          deletePost
        </div>
      </div>
    )
  }
}

export default DeletePost;