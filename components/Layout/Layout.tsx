import React, { useState, KeyboardEvent, useRef } from 'react';
import { LayoutProps } from './Layout.props';
import { Sidebar } from './Sidebar/Sidebar';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import s from './Layout.module.css';
import { Up } from '../Up/Up';
import classNames from 'classnames';

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  const [isSkipLinkDisplayed, setIsSkipLinkDisplayed] = useState<boolean>(false);

  const contentRef = useRef<HTMLDivElement>(null);

  const showSkipLink = (): void => setIsSkipLinkDisplayed(true);
  const hideSkipLink = (): void => setIsSkipLinkDisplayed(false);

  const skipContentAction = (e: KeyboardEvent): void => {
    if (e.code === 'Space' || e.code === 'Enter') {
      e.preventDefault();
      hideSkipLink();
      contentRef.current?.focus();
    }
  };

  const skipLinkClassName = classNames(s.skipLink, {
    [s.displayed]: isSkipLinkDisplayed
  });

  return (
    <div className={s.wrapper}>
      <a
        onFocus={showSkipLink}
        tabIndex={1}
        className={skipLinkClassName}
        onKeyDown={skipContentAction}
      >Go to content
      </a>
      <Header className={s.header}/>
      <Sidebar className={s.sidebar}/>
      <div tabIndex={0} ref={contentRef} className={s.content}>
        {children}
      </div>
      <Up/>
      <Footer className={s.footer}/>
    </div>
  );
};
