import React from 'react';
import { withLayout } from '../../hoc/withLayout';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticPathsContext, GetStaticProps, GetStaticPropsContext } from 'next';
import { firstLevelMenu } from '../../helpers/helpers';
import axios from 'axios';
import { MenuItem } from '../../interfaces/menu.interface';

const TopPage = (): JSX.Element => {
  const router = useRouter();

  const route = router.asPath.replace('/', '');

  return (
    <div>
      {route}
    </div>
  );
};

export default withLayout(TopPage);

export const getStaticPaths: GetStaticPaths = async ({}: GetStaticPathsContext) => {

  const paths = firstLevelMenu.map(item => '/' + item.route);

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<HomeProps> = async ({ params }: GetStaticPropsContext) => {
  try {
    if (!params) {
      return { notFound: true };
    }

    const firstCategoryItem = firstLevelMenu.find(item => item.route === params.type);

    if (!firstCategoryItem) {
      return { notFound: true };
    }

    const url = process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find';

    const { data: menu } = await axios.post<MenuItem[]>(url, { firstCategory: firstCategoryItem.id });

    return {
      props: { menu, firstCategory: firstCategoryItem.id }
    };
  } catch {
    return { notFound: true };
  }
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}