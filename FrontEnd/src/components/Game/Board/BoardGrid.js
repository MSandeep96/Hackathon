import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from './Box';
import Board from '../../../utils/Board';
import Shuffle from '../Buttons/Shuffle';
import Solve from '../Buttons/Solve';
import solve from '../../../actions/Solve';

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
      board: Board.createRandomBoard()
    };
  }

  newGame = ()=>{
    this.setState({
      board: Board.createRandomBoard()
    });
  }

  keyPressed = (e) => {
    if("wasd".indexOf(e.key) === -1)
      return;
    var board = {...this.state.board};
    Board.checkAndMove(board,e.key);
    if(Board.isComplete(board)){
      console.log('here');
      this.props.gameComplete(this.newGame);  
    }
    this.setState({
      board
    });
  }

  solve = ()=>{
    let config = Board.getConfigString(this.state.board.board);
    solve(config).then((res)=>{
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
      setInterval(this.startSolveSequence, 1000, res, i+1);
    }
  }

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
      </div>
    );
  }
}

export default withStyles(styles)(BoardGrid);