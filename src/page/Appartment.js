import React, { Component } from 'react';
import { RoomContext } from '../context';
import Slider from '../components/ImageSlider';
import StarRating from '../components/StarRating';
import './Appartment.scss';
import Collapsible from '../components/Collapsible';
import Error from './Error';

export default class Appartment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
    };
  }

  static contextType = RoomContext;
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.id);
    if (!room) {
      return <Error />;
    }

    const {
      title,
      pictures,
      description,
      host,
      rating,
      Location: location,
      Amenities: equipment,
      tags,
    } = room;

    return (
      <>
        <div className='appartment'>
          <Slider sliderData={pictures} />
          <div className='appartment__header'>
            {/* Left */}
            <div className='appartment__header-left'>
              <h1>{title}</h1>
              <p>{location}</p>
              <div className='appartment__tags'>
                {tags.map((item, index) => {
                  return <span key={index}>{item}</span>;
                })}
              </div>
            </div>
            {/* Right */}
            <div className='appartment__header-right'>
              <div className='appartment__host'>
                <p>{host.name}</p>
                <img src={host.picture} alt={host.name} />
              </div>
              <div className='appartment__rating'>
                <StarRating rating={rating}></StarRating>
              </div>
            </div>
          </div>
          {/* Collapsible Section */}
          <div className='appartment__body'>
            <Collapsible label='Description'>{description}</Collapsible>

            <Collapsible label='Equipment'>
              <ul>
                {equipment.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </Collapsible>
          </div>
        </div>
      </>
    );
  }
}
