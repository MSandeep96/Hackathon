import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from './Box';
import Board from '../../../utils/Board';
import Shuffle from '../Buttons/Shuffle';
import Solve from '../Buttons/Solve';
import solve from '../../../actions/Solve';
import Timer from '../Timer/Timer';
import getTime from '../../../utils/Time';

const styles = theme => ({
  divst :{
    outline: 'none !important',
    float: 'left',
    marginLeft: 100
  },
  root: {
    flexGrow: 1,
    height: 400,
    width: 400,
    margin: 20,
    backgroundColor: 'grey'
  }
});

class BoardGrid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      board: Board.createRandomBoard(),
      gameStarted: false,
      inSolveState: false
    };
  }

  newGame = ()=>{
    if(this.inSolveState)
      return;
    this.setState({
      board: Board.createRandomBoard(),
      gameStarted: false
    });
  }

  keyPressed = (e) => {
    if("wasd".indexOf(e.key) === -1 || this.state.inSolveState)
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
      this.props.gameComplete(this.newGame, this.state.stopT(), board.moves);  
    }
    this.setState({
      board
    });
  }

  solve = ()=>{
    if(this.state.inSolveState)
      return;
    this.state.stopT();
    let config = Board.getConfigString(this.state.board.board);
    solve(config).then((res)=>{
      console.log(res);
      this.setState({
        inSolveState: true
      });
      console.log(getTime(res.time));
      this.startSolveSequence(res.moves,0);
    });
  }

  startSolveSequence = (res,i)=>{
    var board = {...this.state.board};
    Board.makeMove(board,res[i]);
    this.setState({
      board
    });
    console.log(res,i);
    if(i < res.length){
      this.timeOut = setTimeout(this.startSolveSequence, 1000, res, i+1);
    }else{
      this.setState({
        inSolveState : false,
      });
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
      <div tabIndex="0" onKeyPress={this.keyPressed} className={classes.divst}>
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
        <Timer binder={this.timerBinder} />
        <Solve solve={this.solve}/>
        <Shuffle newGame={this.newGame}/>
      </div>
    );
  }
}

export default withStyles(styles)(BoardGrid);