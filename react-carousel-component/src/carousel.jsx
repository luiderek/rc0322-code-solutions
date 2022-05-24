import React from 'react';

export default class Carosel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activePicture: 1 };
    this.leftPress = this.leftPress.bind(this);
    this.rightPress = this.rightPress.bind(this);
    this.circleSelect = this.circleSelect.bind(this);
  }

  //   reusing the cursed math formula I spent an hour on weeks ago
  //   cycle left:  select = X - (X + 1 - select) % X;
  //   cycle right: select = select % X + 1;
  //   where X = the size of the cycle

  leftPress() {
    const length = this.props.imgs.length;
    this.setState({
      activePicture: length - ((length + 1 - this.state.activePicture) % length)
    });
    this.resetInterval();
  }

  rightPress() {
    this.setState({
      activePicture: (this.state.activePicture % this.props.imgs.length) + 1
    });
    this.resetInterval();
  }

  circleSelect(id) {
    this.setState({ activePicture: id });
    this.resetInterval();
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 3000);
  }

  timerStop() {
    clearInterval(this.timerID);
    this.setState({ timerActive: false });
  }

  tick() {
    this.rightPress();
  }

  resetInterval() {
    clearInterval(this.timerID);
    this.timerID = setInterval(() => this.tick(), 3000);
  }

  render() {
    const { imgs } = this.props;
    const { activePicture } = this.state;

    const bubbles = imgs.map(item => (
      <i
        key={item.id}
        onClick={() => this.circleSelect(item.id)}
        className={`fa-circle ${
          activePicture === item.id ? 'fa-solid' : 'fa-regular'
        }`}></i>
    ));

    return (
      <div className="carousel-container">
        <i
          onClick={this.leftPress}
          className="fa-solid fa-angle-left left-button"></i>
        <img src={imgs[activePicture - 1].src} alt="" />
        <i
          onClick={this.rightPress}
          className="fa-solid fa-angle-right right-button"></i>
        <div className='circle-selector'>{bubbles}</div>
      </div>
    );
  }
}
