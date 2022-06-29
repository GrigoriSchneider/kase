import React, { useState } from 'react';
import './Collapsible.scss';
import arrowLeft from '../images/arrowLeft.svg';

export default function Collapsible(props) {
  const [isOpen, setIsOpen] = useState(false);
 

  return (
    <div className='collapsible'>
      <button className='toggle' onClick={() => setIsOpen(!isOpen)}>
        <span>{props.label}</span>
        <span>
          {isOpen === false ? (
            <img src={arrowLeft} alt='arrow-down' className='arrow-down' />
          ) : (
            <img src={arrowLeft} alt='arrow-up' className='arrow-up' />
          )}
        </span>
      </button>
      {isOpen && (
        <div className={isOpen ? 'content show' : 'content'}>
          {props.children}
        </div>
      )}
    </div>
  );
}
