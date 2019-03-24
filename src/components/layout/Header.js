import React from 'react';
import { Link } from 'react-router-dom';
import SideMenu from './SideMenu';
import vzlogo from '../../assets/vzlogo.png';
import vzword from '../../assets/vz-word.png';

const Header = () => {
  return (
  <div className="header-container">
      <Link to='/' >
        <img src={vzword} alt="#" className="word-logo-mobile"/>
        </Link>
      <div className="header">
        <img src={vzword} alt="#" className="word-logo"/>

        <div className="links">
        <SideMenu/>
        <Link to='/' className="logo-link">
          <img src={vzlogo} alt="#" className="logo"/>
        </Link>
        </div>

      </div>
    </div>

  )
}
export default Header;