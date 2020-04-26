import React, { Component } from 'react';

import ForAwaImage from '../images/awa.jpg';

class Current extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    if (width > 1024) {
      return (
        <div
          style={{
            display: 'block',
            width: '100%',
            height: '100%',
          }}
        >
          <img
            style={{
              display: 'block',
              height: '90vh',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
            alt='WE DO IT FOR AWA'
            src={ForAwaImage}
          />
        </div>
      );
    } else {
      return (
        <div
          style={{
            display: 'block',
            width: '100%',
            height: '100%',
            margin: 'auto',
          }}
        >
          <img
            style={{ width: '100%' }}
            alt='WE DO IT FOR AWA'
            src={ForAwaImage}
          />
        </div>
      );
    }
  }
}

export default Current;
