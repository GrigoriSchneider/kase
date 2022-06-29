import React, { useState } from 'react';
import arrowLeft from '../images/arrowLeft.svg';
import arrowRight from '../images/arrowRight.svg';
import './ImageSlider.scss';

const ImageSlider = ({ sliderData }) => {
  const [current, setCurrent] = useState(0);
  const length = sliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(sliderData) || sliderData.length <= 0) {
    return null;
  }
  return (
    <section className='slider'>
      <img
        src={arrowLeft}
        alt='left arrow'
        className='left-arrow'
        onClick={prevSlide}
      />
      <img
        src={arrowRight}
        alt='right arrow'
        className='right-arrow'
        onClick={nextSlide}
      />
      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide} alt='pictere' className='image' />
            )}
          </div>
        );
      })}
    </section>
  );
};
export default ImageSlider;
