import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

type TagColorType = 'ghost' | 'red' | 'grey' | 'green' | 'primary';

type TagSizeType = 'small' | 'medium';

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: TagSizeType;
  children: ReactNode;
  color?: TagColorType;
  href?: string;
}