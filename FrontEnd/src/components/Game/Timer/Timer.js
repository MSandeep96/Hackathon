import React, { Component } from 'react';

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

  getTime = ()=>{
    var time = this.state.time;
    let milSecs = time % 10;
    let secs = time / 10;
    let mins = secs / 60;
    let hours = mins / 60;
    secs %= 60;
    mins %= 60;
    hours %= 60;
    return `${hours}:${mins}:${secs}.${milSecs}`;
  }

  render() {
    return (
      <div>
        {this.getTime()}
      </div>
    );
  }
}

export default Timer;