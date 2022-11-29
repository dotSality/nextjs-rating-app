import React from 'react';
import s from './Divider.module.css';
import { DividerProps } from './Divider.props';
import classNames from 'classnames';

export const Divider = ({ className, ...props }: DividerProps): JSX.Element => {
  const dividerClassName = classNames(s.divider, className);

  return (
    <hr className={dividerClassName} {...props}/>
  );
};
