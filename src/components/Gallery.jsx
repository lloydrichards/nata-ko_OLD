import React from 'react';
import Image1 from '../images/nata-ko1.jpg';
import Image2 from '../images/nata-ko2.jpg';
import Image3 from '../images/nata-ko3.jpg';
import Image4 from '../images/nata-ko4.jpg';
import Image5 from '../images/nata-ko5.jpg';
import Image6 from '../images/nata-ko6.jpg';

function Gallery() {
  return (
    <div id='cf'>
      <img className='bottom' src={Image1} />
      <img className='bottom' src={Image2} />
      <img className='bottom' src={Image3} />
      <img className='bottom' src={Image4} />
    </div>
  );
}

export default Gallery;
