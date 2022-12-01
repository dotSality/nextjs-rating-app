import React, { useState, KeyboardEvent, useEffect, forwardRef, ForwardedRef } from 'react';
import { RatingProps } from './Rating.props';
import RatingStar from './ratingStar.svg';
import s from './Rating.module.css';
import classNames from 'classnames';

export const Rating = forwardRef(({
  error,
  currentRating,
  onRatingChange,
  isEditable = false,
  ...props
}: RatingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
  const [rating, setRating] = useState<number>(currentRating);

  useEffect(() => {
    setRating(currentRating);
  }, [currentRating]);

  const onChange = (rating: number): void => {
    isEditable && onRatingChange?.(rating);
  };

  const onHoverRatingChange = (rating: number): void => {
    isEditable && setRating(rating);
  };

  const onKeyRatingChange = (e: KeyboardEvent<SVGElement>, rating: number): void => {
    if (e.key === 'Enter' || e.code === 'Space') {
      onChange(rating);
    }
  };

  const setDefaultRating = (): void => setRating(currentRating);

  const ratingStars = Array.from(Array(5), (_, idx) => {
    const index = idx + 1;

    const isFilled = index <= rating;

    const starClassName = classNames(s.star, {
      [s.editable]: isEditable,
      [s.filled]: isFilled,
    });

    return <span
      onMouseEnter={(): void => onHoverRatingChange(index)}
      key={index}
      className={starClassName}
      onClick={(): void => onChange(index)}
    >
      <RatingStar
        tabIndex={isEditable ? 0 : -1}
        onKeyDown={(e: KeyboardEvent<SVGElement>): void => onKeyRatingChange(e, index)}
      />
    </span>;
  });

  const ratingClassName = classNames(s.ratingWrapper, {
    [s.error]: !!error,
  });

  return (
    <div ref={ref} className={ratingClassName} onMouseLeave={setDefaultRating} {...props}>
      {ratingStars}
      {error && <span className={s.errorMessage}>{error.message}</span>}
    </div>
  );
});