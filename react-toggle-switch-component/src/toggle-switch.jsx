import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { switch: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ switch: !this.state.switch });
  }

  render() {
    return (
      <div className='toggle-container'>
        <span
          className={`switch-container ${
            this.state.switch ? 'switch-on' : 'switch-off'
          }`}>
          <button className="button" onClick={this.handleClick}></button>
        </span>
        <span className='button-text'> {this.state.switch ? 'On' : 'Off'} </span>
      </div>
    );
  }
}
