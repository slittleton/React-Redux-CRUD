import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from '../GoogleAuth';
import '../../styles/app.css';

const SideMenu = () => {
  return(
    <div className="side-menu">
        <div className="link-wrapper">
          <Link className="link" to="/">Landing</Link>
        </div>
        <div className="link-wrapper">
          <Link className="link" to="/home">Home</Link>
        </div>
        <div className="link-wrapper">
          <Link className="link" to="/postlist">Posts</Link>
        </div>
        <div className="link-wrapper">
          <Link className="link" to="/createpost">Create</Link>
        </div>
        <div className="link-wrapper">
          <GoogleAuth classNames="menu-oauth" />
        </div>
    </div>
  )
}

export default SideMenu;
