import React from 'react';
import { LayoutProps } from './Layout.props';
import { Sidebar } from './Sidebar/Sidebar';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import s from './Layout.module.css';
import { Up } from '../Up/Up';

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={s.wrapper}>
      <Header className={s.header}/>
      <Sidebar className={s.sidebar}/>
      <div className={s.content}>
        {children}
      </div>
      <Up/>
      <Footer className={s.footer}/>
    </div>
  );
};
