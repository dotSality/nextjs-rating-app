import React from 'react';
import { SortEnum, SortProps } from './Sort.props';
import SortIcon from './sort.svg';
import s from './Sort.module.css';
import classNames from 'classnames';

export const Sort = ({ sort, setSort, className, ...props }: SortProps): JSX.Element => {
  const totalClassName = classNames(s.sort, className);

  const sortByRating = (): void => setSort(SortEnum.Rating);
  const sortByPrice = (): void => setSort(SortEnum.Price);

  const byRatingClassName = classNames({
    [s.active]: sort === SortEnum.Rating
  });

  const byPriceClassName = classNames({
    [s.active]: sort === SortEnum.Price
  });

  return (
    <div className={totalClassName} {...props}>
      <span onClick={sortByRating} className={byRatingClassName}>
        <SortIcon className={s.sortIcon}/>By rating
      </span>
      <span onClick={sortByPrice} className={byPriceClassName}>
        <SortIcon className={s.sortIcon}/>By price
      </span>
    </div>
  );
};
