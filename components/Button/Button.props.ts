import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

type AppearanceType = 'primary' | 'ghost';

type ArrowPositionType = 'right' | 'down' | 'none';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
  children: ReactNode;
  appearance: AppearanceType;
  arrow?: ArrowPositionType;
}