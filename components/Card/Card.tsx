import React, { ForwardedRef, forwardRef } from 'react';
import { CardProps } from './Card.props';
import s from './Card.module.css';
import classNames from 'classnames';

export const Card = forwardRef(({ children, color, className, ...props }: CardProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
  const totalClassName = classNames(s.card, className, {
    [s.blue]: color === 'blue',
  });

  return (
    <div ref={ref} className={totalClassName} {...props}>
      {children}
    </div>
  );
});
