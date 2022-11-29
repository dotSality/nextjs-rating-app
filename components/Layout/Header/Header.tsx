import React from 'react';
import { HeaderProps } from './Header.props';
import s from './Header.module.css';

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
  return (
    <header {...props}>
      Header
    </header>
  );
};
