import React, { useContext } from 'react';
import { AppContext } from '../../../context/app.context';
import { FirstLevelMenuItem, PageItem } from '../../../interfaces/menu.interface';
import s from './Menu.module.css';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { firstLevelMenu } from '../../../helpers/helpers';
import { motion } from 'framer-motion';

export const Menu = (): JSX.Element => {
  const router = useRouter();

  const variants = {
    visible: {
      marginBottom: 20,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.02,
      }
    },
    hidden: {
      marginBottom: 0,
    },
  };

  const variantsChildren = {
    visible: {
      opacity: 1,
      height: 'auto',
    },
    hidden: {
      opacity: 0,
      height: 0,
    },
  };

  const { menu, setMenu, firstCategory } = useContext(AppContext);

  const openSecondCategory = (secondCategory: string): void => {
    setMenu?.(menu.map(m => {
      if (m._id.secondCategory === secondCategory) {
        m.isOpened = !m.isOpened;
      }

      return m;
    }));
  };

  const buildFirstLevel = (): JSX.Element[] => firstLevelMenu.map(menu => (
    <div className={s.firstItem} key={menu.route}>
      <Link href={`/${menu.route}`}>
        <a>
          <div className={classNames(s.firstLevel, {
            [s.firstLevelActive]: menu.id === firstCategory
          })}>
            {menu.icon}
            <span>{menu.name}</span>
          </div>
        </a>
      </Link>
      {menu.id === firstCategory && buildSecondLevel(menu)}
    </div>)
  );

  const buildSecondLevel = (firstMenu: FirstLevelMenuItem): JSX.Element => <div className={s.secondBlock}>
    {menu.map(m => {
      if (m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
        m.isOpened = true;
      }

      const toggleCategoryCallback = (): void => openSecondCategory(m._id.secondCategory);

      return <div key={m._id.secondCategory}>
        <button onClick={toggleCategoryCallback} className={s.secondLevel}>
          {m._id.secondCategory}
        </button>
        <motion.div
          initial={m.isOpened ? 'visible' : 'hidden'}
          animate={m.isOpened ? 'visible' : 'hidden'}
          variants={variants}
          layout
          className={s.secondLevelBlock}
        >
          {buildThirdLevel(m.pages, firstMenu.route, m.isOpened ?? false)}
        </motion.div>
      </div>;
    })}
  </div>;

  const buildThirdLevel = (pages: PageItem[], route: string, isOpened: boolean): JSX.Element[] => pages.map(p =>
    <motion.div variants={variantsChildren} key={p.alias}>
      <Link href={`/${route}/${p.alias}`}>
        <a tabIndex={isOpened ? 0 : -1} className={classNames(s.thirdLevel, {
          [s.thirdLevelActive]: `/${route}/${p.alias}` === router.asPath,
        })}>
          {p.category}
        </a>
      </Link>
    </motion.div>);

  return (
    <div className={s.menu}>
      {buildFirstLevel()}
    </div>
  );
};
