import React, { ForwardedRef, forwardRef, MouseEvent, useRef, useState } from 'react';
import { ProductProps } from './Product.props';
import classNames from 'classnames';
import s from './Product.module.css';
import { Card } from '../Card/Card';
import { Rating } from '../Rating/Rating';
import { Tag } from '../Tag/Tag';
import { Button } from '../Button/Button';
import { declOfReviews, priceRu } from '../../helpers/helpers';
import { Divider } from '../Divider/Divider';
import Image from 'next/image';
import { Review } from '../Review/Review';
import { ReviewForm } from '../ReviewForm/ReviewForm';
import { motion } from 'framer-motion';

export const Product = motion(forwardRef(({ product, className }: ProductProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
  const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);

  const toggleReviews = (): void => setIsReviewOpened(prev => !prev);

  const reviewRef = useRef<HTMLDivElement>(null);

  const variants = {
    visible: { opacity: 1, height: 'auto', stiffness: 20 },
    hidden: { opacity: 0, height: 0, stiffness: 30 },
  };

  const scrollToReview = (e: MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    setIsReviewOpened(true);
    reviewRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const logoSrc = `${process.env.NEXT_PUBLIC_DOMAIN}${product.image}`;

  return (
    <div
      className={className}
      ref={ref}
    >
      <Card className={s.product}>
        <div className={s.logo}>
          <Image
            width={70}
            height={70}
            src={logoSrc}
            alt={product.title}
          />
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
          <a href="#ref" onClick={scrollToReview}>
            {product.reviewCount} {declOfReviews(product.reviewCount)}
          </a>
        </div>
        <Divider className={s.line}/>
        <div className={s.description}>
          {product.description}
        </div>
        <div className={s.feature}>
          {
            product.characteristics.map((char) => (
              <div key={char.name} className={s.characteristics}>
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
            <div>{product.advantages}</div>
          </div>}
          {product.disadvantages && <div className={s.disadvantages}>
            <span className={s.advTitle}>Disadvantages</span>
            <div>{product.disadvantages}</div>
          </div>}
        </div>
        <Divider className={classNames(s.line, s.line2)}/>
        <div className={s.actions}>
          <Button appearance="primary">Learn more</Button>
          <Button
            className={s.reviewButton}
            appearance="ghost"
            arrow={isReviewOpened ? "down" : "right"}
            onClick={toggleReviews}
          >
            Reviews
          </Button>
        </div>
      </Card>
      <motion.div
        animate={isReviewOpened ? 'visible' : 'hidden'}
        initial="hidden"
        variants={variants}
      >
        <Card ref={reviewRef} color="blue" className={classNames(s.reviews)}>
          {product.reviews.map((review) => <Review key={review._id} review={review}/>)}
          <ReviewForm productId={product._id}/>
        </Card>
      </motion.div>
    </div>
  );
}));
