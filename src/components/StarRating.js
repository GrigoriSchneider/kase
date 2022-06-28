import React from 'react';
import Star from './Star';
// import { createArray } from './lib';

const StarRating = ({ rating }) => {
  const totalStars = 5;
  const selectedStars = rating;
  const createArray = (length) => [...Array(length)];
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star key={i} selected={selectedStars > i} />
      ))}
    </>
  );
};

export default StarRating;
