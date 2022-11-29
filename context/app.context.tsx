import { createContext, FC, PropsWithChildren, ReactNode, useState } from 'react';
import { MenuItem } from '../interfaces/menu.interface';
import { TopLevelCategory } from '../interfaces/page.interface';

export interface IAppContext {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  setMenu?: (newMenu: MenuItem[]) => void;
}

export const AppContext = createContext<IAppContext>({
  menu: [],
  firstCategory: TopLevelCategory.Courses,
});

export const AppProvider: FC<PropsWithChildren<IAppContext>> = ({ menu, firstCategory, children }): JSX.Element => {
  const [menuState, setMenuState] = useState<MenuItem[]>(menu);

  return <AppContext.Provider value={{ menu: menuState, firstCategory, setMenu: setMenuState }}>
    {children}
  </AppContext.Provider>;
};