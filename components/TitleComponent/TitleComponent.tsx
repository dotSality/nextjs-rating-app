import s from './TitleComponent.module.css';
import { createElement } from 'react';
import { TitleComponentProps } from './TitleComponent.props';

export const TitleComponent = ({ tag, children }: TitleComponentProps): JSX.Element => {
  const tagToRender = createElement(tag, {
    children,
    className: s[tag]
  });

  return tagToRender;
};