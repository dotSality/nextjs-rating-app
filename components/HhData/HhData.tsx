import React from 'react';
import { HhDataProps } from './HhData.props';
import { Card } from '../Card/Card';
import RateIcon from './rate.svg';
import s from './HhData.module.css';
import { priceRu } from '../../helpers/helpers';

export const HhData = ({ count, juniorSalary, middleSalary, seniorSalary }: HhDataProps): JSX.Element => {
  return (
    <div className={s.hh}>
      <Card className={s.count}>
        <div className={s.title}>Amount of vacancies</div>
        <div className={s.countValue}>{count}</div>
      </Card>
      <Card className={s.salary}>
        <div>
          <div className={s.title}>Junior</div>
          <div className={s.salaryValue}>{priceRu(juniorSalary)}</div>
          <div className={s.rate}>
            <RateIcon className={s.filled}/>
            <RateIcon className={s.default}/>
            <RateIcon className={s.default}/>
          </div>
        </div>
        <div>
          <div className={s.title}>Middle</div>
          <div className={s.salaryValue}>{priceRu(middleSalary)}</div>
          <div className={s.rate}>
            <RateIcon className={s.filled}/>
            <RateIcon className={s.filled}/>
            <RateIcon className={s.default}/>
          </div>
        </div>
        <div>
          <div className={s.title}>Senior</div>
          <div className={s.salaryValue}>{priceRu(seniorSalary)}</div>
          <div className={s.rate}>
            <RateIcon className={s.filled}/>
            <RateIcon className={s.filled}/>
            <RateIcon className={s.filled}/>
          </div>
        </div>
      </Card>
    </div>
  );
};
