import { ReactNode } from 'react';

type TagType = 'h1' | 'h2' | 'h3';

export interface TitleComponentProps {
  tag: TagType;
  children: ReactNode;
}