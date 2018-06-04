import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import getTime from '../../utils/Time';

export default class Complete extends React.Component {

  render() {
    return (
      <div>  
        <Dialog
          open={true}
          onClose={this.props.newGame}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Congrats!</DialogTitle>
          <DialogContent>
            <DialogContentText>
              You completed the game in {getTime(this.props.time)} time and {this.props.moves.length} moves.
            </DialogContentText>
            
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.newGame} color="primary">
              Woo!
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}