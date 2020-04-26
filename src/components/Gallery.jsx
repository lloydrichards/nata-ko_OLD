import React, { Component } from 'react';
import { css } from 'emotion';
import Desktop1 from '../images/desktop/natalia-kobylinska1.jpg';
import Desktop2 from '../images/desktop/natalia-kobylinska2.jpg';
import Desktop3 from '../images/desktop/natalia-kobylinska3.jpg';
import Desktop4 from '../images/desktop/natalia-kobylinska4.jpg';

import Tablet1 from '../images/tablet/natalia-kobylinska1.jpg';
import Tablet2 from '../images/tablet/natalia-kobylinska2.jpg';
import Tablet3 from '../images/tablet/natalia-kobylinska3.jpg';
import Tablet4 from '../images/tablet/natalia-kobylinska4.jpg';

import Mobile1 from '../images/mobile/natalia-kobylinska1.jpg';
import Mobile2 from '../images/mobile/natalia-kobylinska2.jpg';
import Mobile3 from '../images/mobile/natalia-kobylinska3.jpg';
import Mobile4 from '../images/mobile/natalia-kobylinska4.jpg';

class Gallery extends Component {
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
        <div style={{ height: '90vh', overflow: 'hidden' }} id='cf'>
          <img
            className='bottom'
            alt='Three people and a plane wreck in a tropical forest'
            src={Desktop1}
          />
          <img
            className='bottom'
            alt='A japanese man walking through a swimming pool'
            src={Desktop2}
          />
          <img
            className='bottom'
            alt='a train approaching in a brazilian village'
            src={Desktop3}
          />
          <img
            className='bottom'
            alt='two people on a meadow high in the mountains partly covered with clouds'
            src={Desktop4}
          />
        </div>
      );
    } else if (width > 500) {
      return (
        <div style={{ height: '90vh', overflow: 'hidden' }} id='cf'>
          <img
            className='bottom'
            alt='Three people and a plane wreck in a tropical forest'
            src={Tablet1}
          />
          <img
            className='bottom'
            alt='two people on a meadow high in the mountains partly covered with clouds'
            src={Tablet2}
          />
          <img
            className='bottom'
            alt='A japanese man walking through a swimming pool'
            src={Tablet3}
          />
          <img
            className='bottom'
            alt='a train approaching in a brazilian village'
            src={Tablet4}
          />
        </div>
      );
    } else {
      return (
        <div style={{ height: '90vh', overflow: 'hidden' }} id='cf'>
          <img
            className='bottom'
            alt='an old carpenter at work'
            src={Mobile1}
          />
          <img
            className='bottom'
            alt='Climber rappelling in Canada'
            src={Mobile2}
          />
          <img
            className='bottom'
            alt='Three people and a plane wreck in a tropical forest'
            src={Mobile3}
          />
          <img
            className='bottom'
            alt='two people on a meadow high in the mountains partly covered with clouds'
            src={Mobile4}
          />
        </div>
      );
    }
  }
}

export default Gallery;
