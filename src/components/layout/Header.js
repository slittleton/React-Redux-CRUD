import React from 'react';
import { Link } from 'react-router-dom';
import crudlogo from './crudlogo.png';
import GoogleAuth from '../GoogleAuth';

const Header = () => {
  return (
    <div className="header">
      <h1 className="banner-title">CRUD Practice Project 0</h1>
      <div className="link-container">
        <Link to='/' className="link">
          <img src={crudlogo} alt="#" className="logo"/>
        </Link>
      </div>
    <GoogleAuth/>
    </div>
  )
}
export default Header;