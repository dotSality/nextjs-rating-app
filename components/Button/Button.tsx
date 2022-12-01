import React from 'react';
import { ButtonProps } from './Button.props';
import s from './Button.module.css';
import classNames from 'classnames';
import ArrowIcon from './arrow.svg';
import { motion } from 'framer-motion';

export const Button = ({ children, appearance, arrow = 'none', className, ...props }: ButtonProps): JSX.Element => {
  const buttonClass = classNames(s.button, s[appearance], className);

  const iconClass = classNames(s.arrow, { [s.down]: arrow === 'down' });

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      className={buttonClass}
      {...props}
    >
      {children}
      {arrow !== 'none' && <ArrowIcon className={iconClass}/>}
    </motion.button>
  );
};