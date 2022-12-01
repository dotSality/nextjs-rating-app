import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import up from './arrow-up.svg';
import close from './x-icon.svg';
import menu from './burger-icon.svg';

type AppearanceType = 'primary' | 'white';

export const icons = {
  up,
  close,
  menu,
};

export type IconName = keyof typeof icons;

export interface ButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  icon: IconName;
  appearance: AppearanceType;
}