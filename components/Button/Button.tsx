import React from 'react';
import { ButtonProps } from './Button.props';
import s from './Button.module.css';
import classNames from 'classnames';
import ArrowIcon from './arrow.svg';

export const Button = ({ children, appearance, arrow = 'none', className, ...props }: ButtonProps): JSX.Element => {
  const buttonClass = classNames(s.button, s[appearance], className);
  
  const iconClass = classNames(s.arrow, { [s.down]: arrow === 'down' });
  
  return (
    <button className={buttonClass} {...props}>
      {children}
      {arrow !== 'none' && <ArrowIcon className={iconClass}/>}
    </button>
  );
};