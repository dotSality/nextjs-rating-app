import React from 'react';
import s from './Advantages.module.css';
import { AdvantagesProps } from './Advantages.props';
import CheckIcon from './check.svg';

export const Advantages = ({advantages}: AdvantagesProps): JSX.Element => {
  return (
    <>
      {advantages.map(adv => (
        <div key={adv._id} className={s.advantage}>
          <CheckIcon/>
          <div className={s.title}>{adv.title}</div>
          <hr className={s.vertical}/>
          <div className={s.description}>{adv.description}</div>
        </div>
      ))}
    </>
  );
};
