import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

type AppearanceType = 'primary' | 'ghost';

type ArrowPositionType = 'right' | 'down' | 'none';

export interface ButtonProps extends Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onAnimationStart" | "onDragStart" | "onDragEnd" | "onDrag" | "ref"> {
  children: ReactNode;
  appearance: AppearanceType;
  arrow?: ArrowPositionType;
}