import * as React from 'react';
import { motion } from 'framer-motion';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const childVariants = {
  open: {
    display: 'inline',
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    display: 'none',
    x: 50,
    opacity: 0,
    transition: {
      x: { stiffness: 1000 }
    }
  }
};

export const Menu = () => (
  <motion.ul className='menu-item' variants={variants}>
    <motion.li variants={childVariants}>
      <a style={{ right: 125 }} href='#home'>
        Current Projects
      </a>
    </motion.li>
  </motion.ul>
);

const itemIds = [0, 1];
