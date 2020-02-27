import * as React from 'react';
import { motion } from 'framer-motion';

const Circle = props => (
  <motion.circle
    cx='12'
    cy='12'
    r='10'
    fill='black'
    whileHover={{ scale: 1.1 }}
    {...props}
  />
);

export const MenuToggle = ({ toggle }) => (
  <button className='Menu' onClick={toggle}>
    <svg width='23' height='23'>
      <Circle
        whileHover={{ scale: 1.2 }}
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0.2 }
        }}
      />
    </svg>
  </button>
);
