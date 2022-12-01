import React, { useEffect, useReducer } from 'react';
import { TopPageComponentProps } from './TopPageComponent.props';
import { Advantages, HhData, Sort, Tag, TitleComponent } from '../../components';
import s from './TopPageComponent.module.css';
import { TopLevelCategory } from '../../interfaces/page.interface';
import { SortEnum } from '../../components/Sort/Sort.props';
import { sortReducer } from './sort.reducer';
import { Product } from '../../components/Product/Product';

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(sortReducer, { products, sort: SortEnum.Rating });

  useEffect(() => {
    dispatchSort({ type: 'reset', products });
  }, [products]);

  const setSort = (sort: SortEnum): void => dispatchSort({ type: sort });

  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <TitleComponent tag="h1">{page.title}</TitleComponent>
        {products && <Tag color="grey" size="medium">{products.length}</Tag>}
        <Sort sort={sort} setSort={setSort}/>
      </div>
      <div>
        {sortedProducts && sortedProducts.map(product => <Product layout key={product._id} product={product}/>)}
      </div>
      <div className={s.hhTitle}>
        <TitleComponent tag="h2">Vacancies - {page.category}</TitleComponent>
        {products && <Tag color="red" size="medium">hh.ru</Tag>}
      </div>
      {firstCategory === TopLevelCategory.Courses && page.hh && <HhData {...page.hh}/>}
      {page.advantages && page.advantages.length > 0 && <>
        <TitleComponent tag="h2">Advantages</TitleComponent>
        <Advantages advantages={page.advantages}/>
      </>}
      {page.seoText && <div className={s.seo} dangerouslySetInnerHTML={{ __html: page.seoText }}/>}
      <TitleComponent tag="h2">Assigning skills</TitleComponent>
      {page.tags.map(tag => <Tag key={tag} color="primary">{tag}</Tag>)}
    </div>
  );
};
