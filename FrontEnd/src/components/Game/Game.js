import React, { Component } from 'react';
import BoardGrid from './Board/BoardGrid';

class Game extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <BoardGrid />
      </div>
    );
  }
}

export default Game;