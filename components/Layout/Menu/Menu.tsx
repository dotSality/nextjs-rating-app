import React, { useContext } from 'react';
import { AppContext } from '../../../context/app.context';
import { FirstLevelMenuItem, PageItem } from '../../../interfaces/menu.interface';
import s from './Menu.module.css';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { firstLevelMenu } from '../../../helpers/helpers';

export const Menu = (): JSX.Element => {
  const router = useRouter();

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
      
      const className = classNames(s.secondLevelBlock, {
        [s.secondLevelBlockOpened]: m.isOpened,
      });
      
      
      return <div key={m._id.secondCategory}>
        <div onClick={toggleCategoryCallback} className={s.secondLevel}>
          {m._id.secondCategory}
        </div>
        <div className={className}>
          {buildThirdLevel(m.pages, firstMenu.route)}
        </div>
      </div>;
    })}
  </div>;

  const buildThirdLevel = (pages: PageItem[], route: string): JSX.Element[] => pages.map(p =>
      <Link key={p.alias} href={`/${route}/${p.alias}`}>
        <a className={classNames(s.thirdLevel, {
          [s.thirdLevelActive]: `/${route}/${p.alias}` === router.asPath,
        })}>
          {p.category}
        </a>
      </Link>);

  return (
    <div className={s.menu}>
      {buildFirstLevel()}
    </div>
  );
};
