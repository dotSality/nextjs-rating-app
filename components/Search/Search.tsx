import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { SearchProps } from './Search.props';
import classNames from 'classnames';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import MagnifierIcon from './magnifier.svg';
import s from './Search.module.css';
import { useRouter } from 'next/router';

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
  const [search, setSearch] = useState('');

  const router = useRouter();

  const goToSearch = (): void => {
    router.push({
      pathname: '/search',
      query: {
        q: search,
      },
    });
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      goToSearch();
    }
  };

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>): void => setSearch(e.currentTarget.value);

  const searchClassName = classNames(s.search, className);

  return (
    <div className={searchClassName} {...props}>
      <Input
        value={search}
        placeholder="Search..."
        onChange={onSearchChange}
        onKeyDown={handleKeyDown}
        className={s.searchInput}
      />
      <Button
        appearance="primary"
        className={s.searchButton}
        onClick={goToSearch}
      >
        <MagnifierIcon/>
      </Button>
    </div>
  );
};
