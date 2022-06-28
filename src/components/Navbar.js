import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/LOGO.svg';
import './Navbar.scss';

export default function Navbar() {
  return (
    <div className='nav-container'>
      <nav className='nav'>
        <div className='nav__logo'>
          <Link to='/'>
            <img src={Logo} alt='Kasa' />
          </Link>
        </div>
        <div className='nav__links'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
        </div>
      </nav>
    </div>
  );
}
