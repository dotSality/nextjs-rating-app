import React from 'react';
import { FooterProps } from './Footer.props';
import s from './Footer.module.css';
import classNames from 'classnames';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  const footerClassName = classNames(className, s.wrapper);
  
  return (
    <footer className={footerClassName} {...props}>
      <span>MyTop © 2022 All rights reserved</span>
      <a href="components/Layout/Footer/Footer#" target="_blank">User agreement</a>
      <a href="components/Layout/Footer/Footer#" target="_blank">Confidentiality policy</a>
    </footer>
  );
};
