import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { revealedID: null };
    this.handleClick = this.visibleID.bind(this);
  }

  visibleID(id) {
    if (id === this.state.revealedID) {
      this.setState({ revealedID: null });
    } else {
      this.setState({ revealedID: id });
    }
  }

  render() {
    const accordionlist = this.props.topics.map(item => (
      <div key={item.id}>
        <h3 onClick={() => this.visibleID(item.id)}>{item.title}</h3>
        <p className={item.id === this.state.revealedID ? '' : 'hidden'}>
          {item.detail}
        </p>
      </div>
    ));

    return <div className='container'>{accordionlist}</div>;
  }
}
