import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/sidemenu.css';

const SideMenu = () => {
  return(
    <div className="side-menu">

      <div className="menu-title">
        Menu
      </div>
      <hr/>
      <div className="links">
        <div className="link-wrapper">
          <Link className="link" to="/">Home</Link>
        </div>
        <div className="link-wrapper">
          <Link className="link" to="/postlist">List of Posts</Link>
        </div>
        <div className="link-wrapper">
          <Link className="link" to="/createpost">Create Post</Link>
        </div>
      </div>

    </div>
  )
}

export default SideMenu;