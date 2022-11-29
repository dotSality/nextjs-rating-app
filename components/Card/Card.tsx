import React from 'react';
import { CardProps } from './Card.props';
import s from './Card.module.css';
import classNames from 'classnames';

export const Card = ({ children, color, className, ...props }: CardProps): JSX.Element => {
  const totalClassName = classNames(s.card, className, {
    [s.blue]: color === 'blue',
  });

  return (
    <div className={totalClassName} {...props}>
      {children}
    </div>
  );
};
