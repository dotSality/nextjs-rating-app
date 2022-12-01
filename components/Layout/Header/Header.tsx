import React, { useEffect, useState } from 'react';
import { HeaderProps } from './Header.props';
import Logo from '../logo.svg';
import s from './Header.module.css';
import classNames from 'classnames';
import { ButtonIcon } from '../../ButtonIcon/ButtonIcon';
import { motion } from 'framer-motion';
import { Sidebar } from '../Sidebar/Sidebar';
import { useRouter } from 'next/router';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  const router = useRouter();

  useEffect(() => {
    setIsOpened(false);
  }, [router]);

  const [isOpened, setIsOpened] = useState<boolean>(false);

  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 20
      },
    },
    closed: {
      opacity: 0,
      x: '100%',
    },
  };

  const openMenu = (): void => setIsOpened(true);
  const closeMenu = (): void => setIsOpened(false);

  const headerClassName = classNames(s.header, className);

  return (
    <header {...props} className={headerClassName}>
      <Logo/>
      <ButtonIcon
        icon="menu"
        appearance="white"
        onClick={openMenu}
      />
      <motion.div
        variants={variants}
        initial="closed"
        animate={isOpened ? "opened" : "closed"}
        className={s.mobileMenu}
      >
        <Sidebar/>
        <ButtonIcon
          onClick={closeMenu}
          className={s.menuClose}
          icon="close"
          appearance="white"
        />
      </motion.div>
    </header>
  );
};
