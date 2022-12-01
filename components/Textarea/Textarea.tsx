import React, { ForwardedRef, forwardRef } from 'react';
import s from './Textarea.module.css';
import { TextareaProps } from './Textarea.props';
import classNames from 'classnames';

export const Textarea = forwardRef(({ className, error, ...props }: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
  const wrapperClassName = classNames(s.textareaWrapper, className);

  const totalClassName = classNames(s.textarea, {
    [s.error]: !!error,
  });

  return (
    <div className={wrapperClassName}>
      <textarea className={totalClassName} {...props} ref={ref}/>
      {error && <span className={s.errorMessage}>{error.message}</span>}
    </div>
  );
});
