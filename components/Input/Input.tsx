import React from 'react';
import s from './Input.module.css';
import { InputProps } from './Input.props';
import classNames from 'classnames';

export const Input = ({ className, ...props }: InputProps): JSX.Element => {
  const totalClassName = classNames(s.input, className);

  return (
    <input className={totalClassName} {...props}/>
  );
};
