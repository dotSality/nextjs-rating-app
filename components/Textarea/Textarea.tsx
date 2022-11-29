import React from 'react';
import s from './Textarea.module.css';
import { TextareaProps } from './Textarea.props';
import classNames from 'classnames';

export const Textarea = ({ className, ...props }: TextareaProps): JSX.Element => {
  const totalClassName = classNames(s.textarea, className);

  return (
    <textarea className={totalClassName} {...props}/>
  );
};
