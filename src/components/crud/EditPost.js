import React from 'react';
import SideMenu from '../layout/SideMenu';

class EditPost extends React.Component{
  render(){
    return(
      <div className="edit-post container">
        <SideMenu/>
        <div className="content">
          Edit Post
        </div>
      </div>
    )
  }
}
export default EditPost;