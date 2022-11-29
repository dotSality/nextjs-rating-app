import React from 'react';
import { ParagraphProps } from './Paragraph.props';
import classNames from 'classnames';
import s from './Paragraph.module.css';

export const Paragraph = ({children, font = 'medium', className, ...props}: ParagraphProps): JSX.Element => {
  const paragraphClassName = classNames(s.paragraph, { [s[font]]: font !== 'medium' }, className);
  
  return (
    <p className={paragraphClassName} {...props}>
      {children}
    </p>
  );
};