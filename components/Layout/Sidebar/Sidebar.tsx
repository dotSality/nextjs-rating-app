import React from 'react';
import { SidebarProps } from './Sirebar.props';
import s from './Sidebar.module.css';
import { Menu } from '../Menu/Menu';
import Logo from '../logo.svg';
import classNames from 'classnames';
import { Search } from '../../Search/Search';

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {

  const sidebarClassName = classNames(className, s.sidebar);

  return (
    <div className={sidebarClassName} {...props}>
      <Logo className={s.logo}/>
      <Search/>
      <Menu/>
    </div>
  );
};
