import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timerActive: false, time: 0 };
    this.timerStart = this.timerStart.bind(this);
    this.timerStop = this.timerStop.bind(this);
    this.reset = this.reset.bind(this);
  }

  timerStart() {
    this.timerID = setInterval(() => this.tick(), 1000);
    this.setState({ timerActive: true });
  }

  timerStop() {
    clearInterval(this.timerID);
    this.setState({ timerActive: false });
  }

  tick() {
    this.setState({ time: this.state.time + 1 });
  }

  reset() {
    if (!this.state.timerActive) {
      this.setState({ time: 0 });
    }
  }

  render() {
    return (
      <div className="timer">
        <div className="clock" onClick={this.reset}>
          {this.state.time}
        </div>
        <div className="clock-icons">
          {this.state.timerActive
            ? <i onClick={this.timerStop} className="fa-solid fa-pause"></i>
            : <i onClick={this.timerStart} className="fa-solid fa-play"></i>
          }
        </div>
      </div>
    );
  }
}
