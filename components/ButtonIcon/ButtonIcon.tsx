import React from 'react';
import { ButtonIconProps, icons } from './ButtonIcon.props';
import s from './ButtonIcon.module.css';
import classNames from 'classnames';

export const ButtonIcon = ({ icon, appearance, className, ...props }: ButtonIconProps): JSX.Element => {
  const IconComponent = icons[icon];

  const buttonClass = classNames(s.button, s[appearance], className);

  return (
    <button className={buttonClass} {...props}>
      <IconComponent/>
    </button>
  );
};