import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { RoomContext } from '../context';

import './Gallery.scss';

export default class Gallery extends Component {
  static contextType = RoomContext;

  render() {
    let { rooms } = this.context;

    return (
      <>
        <div className='gallery'>
          <div className='gallery-container'>
            {rooms.map((item) => (
              <Link
                className='gallery__item'
                key={item.id}
                id={item.id}
                to={`appartment/${item.id}`}
                items={item.id}
              >
                <img src={item.cover} alt={item.title} />
                <p>{item.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </>
    );
  }
}
