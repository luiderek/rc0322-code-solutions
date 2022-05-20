import React from 'react';
import ReactDOM from 'react-dom/client';

class RegristrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleUsernameChange}
        />
        <input
          type="password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
        />
        <button onClick={this.handleSubmit}>Sign Up</button>
      </form>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RegristrationForm />);
