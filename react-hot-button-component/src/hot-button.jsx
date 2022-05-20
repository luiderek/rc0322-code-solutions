import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  render() {
    let color, textcol;
    switch (~~(this.state.clicks / 3)) {
      case 0:
        color = '#351c75';
        textcol = 'white';
        break;
      case 1:
        color = '#674ea7';
        textcol = 'white';
        break;
      case 2:
        color = '#e06666';
        textcol = 'white';
        break;
      case 3:
        color = '#f6b26b';
        textcol = 'black';
        break;
      case 4:
        color = '#ffff00';
        textcol = 'black';
        break;
      default:
        color = '#ffffff';
        textcol = 'black';
    }
    const style = { backgroundColor: color, color: textcol };
    return (
      <button onClick={this.handleClick} style={style} className="button">
        Hot Button
      </button>
    );
  }
}
