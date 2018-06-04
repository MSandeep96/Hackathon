import React, { Component } from 'react';
import getTime from '../../../utils/Time';

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
        {getTime(this.state.time)}
      </div>
    );
  }
}

export default Timer;