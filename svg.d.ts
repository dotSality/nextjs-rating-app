declare module '*.svg' {
  import { FC, SVGAttributes } from 'react';
  const content: FC<SVGAttributes<SVGAElement>>;
  export default content;
}