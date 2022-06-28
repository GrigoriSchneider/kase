import React from 'react';
import errorimg from '../images/404.png';
import { Link } from 'react-router-dom';
import './Error.scss';

export default function Error() {
  return (
    <div className='error-container'>
      <img src={errorimg} alt='404' />
      <h1 className='error__h1'>
        Oops! It looks like this page doesn’t exist.
      </h1>

      <Link to='/' className='error__btn'>
        Go back to home page
      </Link>
    </div>
  );
}
