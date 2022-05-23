import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pass: ''
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePasswordChange(e) {
    this.setState({ pass: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  validatePass(input) {
    if (!input) {
      return 'A password is required.';
    } else if (input.length < 8) {
      return 'Your password is too short.';
    } else if (input === input.toLowerCase()) {
      return 'Password must contain one capital letter.';
    } else if (!/\d/.test(input)) {
      return 'Password must contain at least one number.';
    } else if (!/[`~!@#$%^&*()]/.test(input)) {
      return 'Password must contain at least one special character.';
    } else {
      return '';
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <span>Password</span>
          <span className="val-input-entry">
            <input
              name="Password"
              type="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
            {this.validatePass(this.state.pass) !== ''
              ? (
              <i className="fa-solid fa-x"></i>
                )
              : (
              <i className="fa-solid fa-check"></i>
                )}
          </span>
        </label>
        <span className="val-input-error">
          {this.validatePass(this.state.pass)}
        </span>
      </form>
    );
  }
}
