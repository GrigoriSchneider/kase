import React, { Component } from 'react';
import KasaWhite from '../images/KasaWhite.svg';
import './Footer.scss';

export class Footer extends Component {
  render() {
    return (
      <div className='container'>
        <img src={KasaWhite} alt='Kasa Logo' />
        <p>&#169; 2022 Kasa. All rights reserved</p>
      </div>
    );
  }
}

export default Footer;
