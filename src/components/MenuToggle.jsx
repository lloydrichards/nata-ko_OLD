import * as React from 'react';
import { motion } from 'framer-motion';

export const MenuToggle = ({ toggle }) => (
  <button className='Menu' onClick={toggle}>
    <div className='menu-circle' />
  </button>
);
