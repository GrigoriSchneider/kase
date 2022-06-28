import React from 'react';
import { GoStar } from 'react-icons/go';

export default function Star({ selected = false, onSelect = (f) => f }) {
  return <GoStar color={selected ? 'red' : 'grey'} onClick={onSelect} />;
}
