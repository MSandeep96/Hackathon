import React, { Component } from 'react';
import getTime from '../../../utils/Time';
import Typography from '@material-ui/core/Typography';

class Timer extends Component {

  state = {
    time: 0
  }

  constructor(props){
    super(props);
    this.props.binder(this.startT,this.stopT,this.clearT);
  }

  countTime = ()=>{
    this.setState((prevState)=>({
      time: prevState.time + 1
    }));
  }

  startT = () => {
    this.inter = setInterval(this.countTime,100);
  }

  stopT = () => {
    clearInterval(this.inter);
    var timeT = this.state.time;
    this.setState({
      time: 0
    });
    return timeT;
  }

  componentWillMount = () => {
    clearInterval(this.inter);
  }

  render() {
    return (
      <div>
        <Typography variant="headline" gutterBottom align="center">
          {getTime(this.state.time)}
        </Typography>
        
      </div>
    );
  }
}

export default Timer;