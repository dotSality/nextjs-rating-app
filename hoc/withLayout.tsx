import { FC } from 'react';
import { Layout } from '../components/Layout/Layout';
import { AppProvider, IAppContext } from '../context/app.context';

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FC<T>) => {
  return function(props: T):JSX.Element {
    const { menu, firstCategory } = props;
    return <AppProvider menu={menu} firstCategory={firstCategory}>
    <Layout>
      <Component {...props}/>
    </Layout>
    </AppProvider>;
  };
};