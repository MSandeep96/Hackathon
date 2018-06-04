import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from './Box';
import Board from '../../../utils/Board';

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
      board: Board.fetchNewBoard()
    };
  }

  keyPressed = (e) => {
    if("wasd".indexOf(e.key) === -1)
      return;
    var board = {...this.state.board};
    Board.checkAndMove(board,e.key);
    this.setState({
      board
    });
  }

  getList = () => {
    var list = [];
    for(let i=0;i<this.state.board.board.length;i++){
      for(let j=0;j<this.state.board.board[i].length;j++){
        list.push(
        <Grid item>
          <Box num={this.state.board.board[i][j]} />
        </Grid>
        );
      }
    }
    return list;
  }

  render() {
    const { classes } = this.props;

    return (
      <div tabIndex="0" onKeyPress={this.keyPressed}>
        <Grid container className={classes.root}>
          {
            this.getList()
          }
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(BoardGrid);
