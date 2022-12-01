import React, { ForwardedRef, forwardRef } from 'react';
import s from './Input.module.css';
import { InputProps } from './Input.props';
import classNames from 'classnames';

export const Input = forwardRef(({ className, error, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
  const wrapperClassName = classNames(s.inputWrapper, className);

  const totalClassName = classNames(s.input, {
    [s.error]: !!error,
  });

  return (
    <div className={wrapperClassName}>
      <input className={totalClassName} {...props} ref={ref}/>
      {error && <span className={s.errorMessage}>{error.message}</span>}
    </div>
  );
});
