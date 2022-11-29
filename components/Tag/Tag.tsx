import React from 'react';
import { TagProps } from './Tag.props';
import s from './Tag.module.css';
import classNames from 'classnames';

export const Tag = ({size = 'medium', href, children, color = 'ghost', className, ...props}: TagProps): JSX.Element => {
  const tagClassName = classNames(s.tag, s[color], s[size] , className);

  return (
    <div className={tagClassName} {...props}>
      {href
        ? <a href={href}>{children}</a>
        : children}
    </div>
  );
};
