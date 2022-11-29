import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

type SizeType = 'small' | 'medium' | 'large';

export interface ParagraphProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
  children: ReactNode;
  font?: SizeType;
}