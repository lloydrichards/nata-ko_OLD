import * as React from 'react';
import { motion } from 'framer-motion';

const Path = props => (
  <motion.path
    fill='transparent'
    strokeWidth='3'
    stroke='hsl(0, 0%, 18%)'
    strokeLinecap='round'
    {...props}
  />
);

export const AboutToggle = ({ toggle }) => (
  <button className='About' onClick={toggle}>
    <svg className='about-cross' width='23' height='23' viewBox='0 0 23 23'>
      <Path
        variants={{
          closed: { d: 'M 10 3 L 10 18' },
          open: { d: 'M 3 16.5 L 17 2.5' }
        }}
      />
      <Path
        variants={{
          closed: { d: 'M 3 10 L 18 10' },
          open: { d: 'M 3 2.5 L 17 16.346' }
        }}
      />
    </svg>
  </button>
);
