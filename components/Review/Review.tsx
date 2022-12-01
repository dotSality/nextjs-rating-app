import React from 'react';
import { ReviewProps } from './Review.props';
import UserIcon from './user.svg';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';
import classNames from 'classnames';
import s from './Review.module.css';
import { Rating } from '../Rating/Rating';

export const Review = ({ review, className, ...props }: ReviewProps): JSX.Element => {
  const { name, title, rating, description, createdAt } = review;

  const totalClassName = classNames(s.review, className);

  return (
    <div className={totalClassName} {...props}>
      <UserIcon className={s.user}/>
      <div className={s.title}>
        <span className={s.name}>{name}:&nbsp;&nbsp;</span>
        <span>{title}</span>
      </div>
      <div className={s.date}>
        {format(new Date(createdAt), 'mm dd yyyy', { locale: enUS })}
      </div>
      <div className={s.rating}>
        <Rating currentRating={rating}/>
      </div>
      <div className={s.description}>
        {description}
      </div>
    </div>
  );
};
