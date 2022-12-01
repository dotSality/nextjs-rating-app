import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import axios from 'axios';
import { withLayout } from '../../hoc/withLayout';
import { MenuItem } from '../../interfaces/menu.interface';
import { TopLevelCategory, TopPageModel } from '../../interfaces/page.interface';
import { ProductModel } from '../../interfaces/product.interface';
import { firstLevelMenu } from '../../helpers/helpers';
import { TopPageComponent } from '../../page-components/TopPageComponent/TopPageComponent';
import { API } from '../../helpers/api';

function TopPage({ firstCategory, page, products }: CourseProps): JSX.Element {
  return <TopPageComponent firstCategory={firstCategory} page={page} products={products}/>;
}

export default withLayout(TopPage);

export const getStaticPaths: GetStaticPaths = async () => {

  let paths: string[] = [];

  for (const firstMenuItem of firstLevelMenu) {
    const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
      firstCategory: firstMenuItem.id,
    });
    paths = paths.concat(menu.flatMap(m => m.pages.map(p => `/${firstMenuItem.route}/${p.alias}`)));
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<CourseProps> = async ({ params }: GetStaticPropsContext) => {
  if (!params) {
    return { notFound: true };
  }

  const firstCategoryItem = firstLevelMenu.find(m => m.route === params.type);

  if (!firstCategoryItem) {
    return { notFound: true };
  }

  try {
    const menuUrl = API.topPage.find;
    const pageUrl = API.topPage.byAlias + params.alias;
    const productsUrl = API.product.find;

    const { data: menu } = await axios.post<MenuItem[]>(menuUrl, { firstCategory: firstCategoryItem.id });

    if (!menu.length) {
      return {
        notFound: true,
      };
    }

    const { data: page } = await axios.get<TopPageModel>(pageUrl);

    const { data: products } = await axios.post<ProductModel[]>(productsUrl, {
      category: page.category,
      limit: 10,
    });

    return {
      props: { menu, firstCategory: firstCategoryItem.id, page, products }
    };
  } catch {
    return {
      notFound: true,
    };
  }

};

interface CourseProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: ProductModel[];
}