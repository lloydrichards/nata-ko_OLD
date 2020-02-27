import * as React from 'react';
import { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';

//Load Components
import { useDimensions } from './use-dimensions';
import { AboutToggle } from './AboutToggle';
import { About } from './About';
import { Menu } from './Menu';
import { MenuToggle } from './MenuToggle';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `rect(${height * 2 + 200}px at 260px 40px)`,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: 'rect(0px at 260px 40px)',
    opacity: 0,
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 200,
      damping: 40
    }
  }
};

const menu = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 220px 40px)`,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: 'circle(0px at 220px 40px)',
    opacity: 1,
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 200,
      damping: 40
    }
  }
};

export const TopNav = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [isShown, toggleShown] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <div className='nav'>
      <ul style={{ width: '100%' }}>
        <li className='logo' style={{ float: 'left' }}>
          <h2>Natalia Kobylinska</h2>
        </li>
        <li style={{ float: 'right' }}>
          <motion.div
            className='nav-button'
            initial={false}
            animate={isShown ? 'open' : 'closed'}
            custom={height}
            ref={containerRef}
          >
            <motion.div className='menu-background' variants={menu} />
            <Menu />
            <MenuToggle toggle={() => toggleShown()} />
          </motion.div>
        </li>
        <li style={{ float: 'right' }}>
          <motion.div
            className='nav-button'
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            custom={height}
            ref={containerRef}
          >
            <motion.div className='about-background' variants={sidebar} />
            <About />
            <AboutToggle toggle={() => toggleOpen()} />
          </motion.div>
        </li>
      </ul>
    </div>
  );
};

export default TopNav;
