import React from 'react';
import './HeroSection.scss';

export default function HeroSection(props) {
  return (
    <div className='hero-section'>
      <div className='hero-section__container'>
        <div className='hero-section__img-container'>{props.children}</div>
      </div>
    </div>
  );
}
