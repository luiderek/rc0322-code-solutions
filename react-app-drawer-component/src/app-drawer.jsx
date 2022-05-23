import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { drawerOpen: false };
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.fadetoggleDrawer = this.fadetoggleDrawer.bind(this);
  }

  toggleDrawer() {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  }

  fadetoggleDrawer() {
    if (this.state.drawerOpen) {
      this.setState({ drawerOpen: !this.state.drawerOpen });
    }
  }

  render() {
    return (
      <div>
        <div className={`sidebar ${this.state.drawerOpen ? 'reveal' : ''}`}>
          <h3>Menu</h3>
          <span onClick={this.toggleDrawer}>About</span>
          <span onClick={this.toggleDrawer}>Get Started</span>
          <span onClick={this.toggleDrawer}>Sign In</span>
        </div>
        <div
          onClick={this.fadetoggleDrawer}
          className={`fade-layer ${
            this.state.drawerOpen ? '' : 'hidden'
          }`}></div>
        <i onClick={this.toggleDrawer} className="fa-solid fa-bars"></i>
      </div>
    );
  }
}
