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
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export const About = () => (
  <motion.ul variants={variants}>
    <motion.li variants={childVariants}>
      <div className='text-placeholder'>
        <p>
          In case you had an interesting film project, needed a photographer or
          just wanted to share some fun facts about the universe, drop me a
          line!
        </p>
      </div>
    </motion.li>
    <motion.li
      variants={childVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className='text-placeholder-link'>
        <a href='mailto: hello@nata-ko.com'>hello@nata-ko.com</a>
      </div>
    </motion.li>
  </motion.ul>
);

const itemIds = [0, 1];
