import React from 'react';
import SideMenu from '../layout/SideMenu';
import '../../styles/components.css';

class CreatePost extends React.Component{
  render(){
    return(
      <div className="create-post container">
        <SideMenu/>
        <div className="content">
          CreatePost
        </div>
      </div>
    )
  }
}
export default CreatePost;