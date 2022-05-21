import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pass: '',
      passValid: false,
      errorMessage: 'A password is required.'
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePasswordChange(e) {
    // console.log('pass:', e.target.value);
    this.validateInputs(e.target.value);
    this.setState({ pass: e.target.value });
  }

  validateInputs(input) {
    if (!input) {
      this.setState({
        errorMessage: 'A password is required.',
        passValid: false
      });
    } else if (input.length < 8) {
      this.setState({
        errorMessage: 'Your password is too short.',
        passValid: false
      });
    } else if (input === input.toLowerCase()) {
      this.setState({
        errorMessage: 'Password must contain one capital letter.',
        passValid: false
      });
    } else if (!/\d/.test(input)) {
      this.setState({
        errorMessage: 'Password must contain at least one number.',
        passValid: false
      });
    } else if (!/[`~!@#$%^&*()]/.test(input)) {
      this.setState({
        errorMessage: 'Password must contain at least one special character.',
        passValid: false
      });
    } else {
      this.setState({ errorMessage: '', passValid: true });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
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
            {this.state.passValid
              ? (
              <i className="fa-solid fa-check"></i>
                )
              : (
              <i className="fa-solid fa-x"></i>
                )}
          </span>
        </label>
        <span className="val-input-error">{this.state.errorMessage}</span>
      </form>
    );
  }
}
