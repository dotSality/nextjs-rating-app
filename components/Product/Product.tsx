import React from 'react';
import { ProductProps } from './Product.props';
import classNames from 'classnames';
import s from './Product.module.css';
import { Card } from '../Card/Card';
import { Rating } from '../Rating/Rating';
import { Tag } from '../Tag/Tag';
import { Button } from '../Button/Button';
import { declOfReviews, priceRu } from '../../helpers/helpers';
import { Divider } from '../Divider/Divider';

export const Product = ({ product, className, ...props }: ProductProps): JSX.Element => {
  const productClassName = classNames(s.product, className);

  const logoSrc = `${process.env.NEXT_PUBLIC_DOMAIN}${product.image}`;

  return (
    <Card className={s.product}>
      <div className={s.logo}>
        <img src={logoSrc} alt={product.title}/>
      </div>
      <div className={s.title}>
        {product.title}
      </div>
      <div className={s.price}>
        {priceRu(product.price)}
        {
          product.oldPrice && (
            <Tag
              className={s.oldPrice}
              color="green"
            >
              {priceRu(product.price - product.oldPrice)}
            </Tag>
          )
        }
      </div>
      <div className={s.credit}>
        {priceRu(product.credit)} / <span className={s.months}>months</span>
      </div>
      <div className={s.rating}>
        <Rating currentRating={product.reviewAvg ?? product.initialRating}/>
      </div>
      <div className={s.tags}>
        {product.categories.map((category) => (
          <Tag
            className={s.category}
            key={category}
            color="ghost"
          >
            {category}
          </Tag>
        ))}
      </div>
      <div className={s.priceTitle}>
        Price
      </div>
      <div className={s.creditTitle}>
        Credit
      </div>
      <div className={s.rateTitle}>
        {product.reviewCount} {declOfReviews(product.reviewCount)}
      </div>
      <div className={s.line}>
        <Divider/>
      </div>
      <div className={s.description}>
        {product.description}
      </div>
      <div className={s.feature}>
        {
          product.characteristics.map((char) => (
            <div className={s.characteristics}>
              <span className={s.characteristicsName}>{char.name}</span>
              <span className={s.characteristicsDots}></span>
              <span className={s.characteristicsValue}>{char.value}</span>
          </div>
          ))
        }
      </div>
      <div className={s.advBlock}>
        {product.advantages && <div className={s.advantages}>
          <span className={s.advTitle}>Advantages</span>
          {product.advantages}
        </div>}
        {product.disadvantages && <div className={s.disadvantages}>
          <span className={s.advTitle}>Disadvantages</span>
          {product.disadvantages}
        </div>}
      </div>
      <div className={s.line}>
        <Divider/>
      </div>
      <div className={s.actions}>
        <Button appearance="primary">Learn more</Button>
        <Button className={s.reviewButton} appearance="ghost" arrow="right">Reviews</Button>
      </div>
    </Card>
  );
};
