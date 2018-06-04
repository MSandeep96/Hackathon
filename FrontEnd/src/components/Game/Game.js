import React, { Component } from 'react';
import BoardGrid from './Board/BoardGrid';
import Complete from '../PopUp/Complete';

class Game extends Component {

  state = {
    gameComplete: false
  };

  gameComplete = (newGame, time, moves) => {
    this.setState({
      gameCompletedMode: true,
      newGame: newGame,
      time,
      moves
    });
  }

  newGame = () => {
    this.state.newGame();
    this.setState({
      gameCompletedMode: false
    });
  }

  render() {
    return (
      <div>
        <BoardGrid gameComplete={this.gameComplete} />
        {this.state.gameCompletedMode
          && <Complete moves={this.state.moves} time={this.state.time} newGame={this.newGame} />}
      </div>
    );
  }
}

export default Game;