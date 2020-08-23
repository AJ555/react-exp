import React, { Component } from "react";
import "./counter.scss";
class Counter extends Component {
  render() {
    return (
      <div className="main-container">
        <Timer />
      </div>
    );
  }
}
export default Counter;

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerMessage: "Let the countdown begin!",
      timerTime: { min: 0, sec: 0 },
    };
    this.updateTimer = this.updateTimer.bind(this);
  }
  updateTimer() {
    const timerInterval = (this.props.timer ? this.props.timer : 1) * 60 * 1000;
    const newDate = new Date();
    newDate.setHours(0, 0, 0, 0);
    const endTime = new Date(newDate.getTime() + timerInterval);
    const refreshTimeInMiliseconds = 1000;
    let timeSpent = 0;
    const interval = setInterval(() => {
      this.setState({ timerMessage: "Keep Going" });
      timeSpent += refreshTimeInMiliseconds;
      let temp = new Date(newDate.getTime() + timeSpent);
      console.log(temp.getMinutes(), temp.getSeconds());
      this.setState({
        timerTime: { min: temp.getMinutes(), sec: temp.getSeconds() },
      });
      if (temp.getTime() === endTime.getTime()) {
        this.setState({ timerMessage: "Great Work!" });
        clearInterval(interval);
      }
    }, refreshTimeInMiliseconds);
  }
  render() {
    return (
      <div>
        <h1>{this.state.timerMessage}</h1>
        <button type="button" onClick={this.updateTimer}>
          Start Timer
        </button>
        <div>
          <span>{this.state.timerTime.min}</span>:{this.state.timerTime.sec}
        </div>
      </div>
    );
  }
}
