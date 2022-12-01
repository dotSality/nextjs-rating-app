import React, { useState } from 'react';
import { ReviewFormProps } from './ReviewForm.props';
import classNames from 'classnames';
import CrossIcon from './cross.svg';
import { Input } from '../Input/Input';
import { Rating } from '../Rating/Rating';
import { Textarea } from '../Textarea/Textarea';
import { Button } from '../Button/Button';
import s from './ReviewForm.module.css';
import { useForm, Controller } from 'react-hook-form';
import { IReviewForm, IReviewSentResponse } from './ReviewForm.interface';
import { API } from '../../helpers/api';
import axios from 'axios';

export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps): JSX.Element => {
  const { register, control, handleSubmit, formState: { errors }, reset } = useForm<IReviewForm>();

  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const hideSuccess = (): void => setIsSuccess(false);
  const hideError = (): void => setError(false);

  const onSubmit = async (formData: IReviewForm): Promise<void> => {
    try {
      const { data } = await axios.post<IReviewSentResponse>(API.review.createDemo, {
        ...formData,
        productId
      });

      if (data.message) {
        setIsSuccess(true);
        reset();
      } else {
        setError(false);
      }
    } catch (e: unknown) {
      setError(false);
    }
  };

  const productClassName = classNames(s.reviewForm, className);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={productClassName} {...props}>
        <Input
          error={errors.name}
          {...register('name', { required: { value: true, message: 'Name was not provided' } })}
          placeholder="Name"
        />
        <Input
          error={errors.title}
          {...register('title', { required: { value: true, message: 'Title was not provided' } })}
          placeholder="Review title"
          className={s.title}
        />
        <div className={s.rating}>
          <span>Rating:</span>
          <Controller
            rules={{ required: { value: true, message: 'Rating was not provided' } }}
            render={({ field }): JSX.Element => (
              <Rating
                error={errors.rating}
                ref={field.ref}
                currentRating={field.value}
                isEditable
                onRatingChange={field.onChange}
              />
            )}
            control={control}
            name="rating"/>
        </div>
        <Textarea
          error={errors.description}
          {...register('description', { required: { value: true, message: 'Description was not provided' } })}
          placeholder="Review text"
          className={s.description}
        />
        <div className={s.submit}>
          <Button appearance="primary">
            Send
          </Button>
          <span className={s.info}>* This review will pass pre-moderation and check before publishing.</span>
        </div>
      </div>
      {isSuccess && <div className={classNames(s.panel, s.success)}>
        <div className={s.successTitle}>Your review was submitted.</div>
        <div className={s.successDescription}>Thank you, your review will be published soon.</div>
        <CrossIcon className={s.cross} onClick={hideSuccess}/>
      </div>}
      {error && <div className={classNames(s.panel, s.error)}>
        <div>Please, refresh the page and try again.</div>
        <CrossIcon className={s.cross} onClick={hideError}/>
      </div>}
    </form>
  );
};
