import React from 'react';
import ReactDOM from 'react-dom/client';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({ isClicked: true }));
  }

  render() {
    if (this.state.isClicked) {
      return <button>Thank you, kind one. My mission is finished now. I am now ready to move on.</button>;
    } else {
      return <button onClick={this.handleClick}>Help. I am a button that has not been pressed. I have purpose that is yet to be met.</button>;
    }
  }
}

const element = (
  <div>
    <CustomButton text="I am a button, look upon me and tremble." />
  </div>
);

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(element);
