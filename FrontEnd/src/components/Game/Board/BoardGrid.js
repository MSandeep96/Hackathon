import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from './Box';
import Board from '../../../utils/Board';
import Shuffle from '../Buttons/Shuffle';
import Solve from '../Buttons/Solve';
import solve from '../../../actions/Solve';
import Timer from '../Timer/Timer';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 400,
    width: 400,
    margin: 20,
    backgroundColor: 'grey',
  }
});

class BoardGrid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      board: Board.createRandomBoard(),
      gameStarted: false
    };
  }

  newGame = ()=>{
    this.setState({
      board: Board.createRandomBoard(),
      gameStarted: false
    });
  }

  keyPressed = (e) => {
    if("wasd".indexOf(e.key) === -1)
      return;
    if(!this.state.gameStarted){
      this.state.startT();
      this.setState({
        gameStarted: true
      });
    }
    var board = {...this.state.board};
    Board.checkAndMove(board,e.key);
    if(Board.isComplete(board)){
      this.props.gameComplete(this.newGame, this.state.stopT, board.moves);  
    }
    this.setState({
      board
    });
  }

  solve = ()=>{
    let config = Board.getConfigString(this.state.board.board);
    solve(config).then((res)=>{
      console.log(res);
      this.startSolveSequence(res,0);
    });
  }

  startSolveSequence = (res,i)=>{
    var board = {...this.state.board};
    Board.makeMove(board,res[i]);
    this.setState({
      board
    });
    if(i < res.length){
      this.timeOut = setTimeout(this.startSolveSequence, 1000, res, i+1);
    }
  }

  timerBinder = (startT,stopT)=>{
    this.setState({
      startT,stopT
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div tabIndex="0" onKeyPress={this.keyPressed}>
        <Grid container className={classes.root}>
          {
            this.state.board.board.map((val)=>{
              return val.map((value) => {      
                return <Grid key={value} item>
                  <Box num={value} />
                </Grid>
              });
            })
          }
        </Grid>
        <Solve solve={this.solve}/>
        <Shuffle newGame={this.newGame}/>
        <Timer binder={this.timerBinder} />
      </div>
    );
  }
}

export default withStyles(styles)(BoardGrid);