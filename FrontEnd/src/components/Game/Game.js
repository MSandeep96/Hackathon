import React, { Component } from 'react';
import Board from './Board/Board';

class Game extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <Board />
      </div>
    );
  }
}

export default Game;