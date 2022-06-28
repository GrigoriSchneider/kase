import React, { Component } from 'react';
import items from './data';

const RoomContext = React.createContext();

export default class RoomProvider extends Component {
  state = {
    rooms: [],
  };

  componentDidMount() {
    let rooms = items;

    this.setState({
      rooms,
    });
  }

  getRoom = (id) => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find((room) => room.id === id);
    return room;
  };

  render() {
    return (
      <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}
export { RoomProvider, RoomContext };
