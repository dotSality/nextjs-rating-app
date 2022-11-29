import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  isEditable?: boolean;
  currentRating: number;
  onRatingChange?: (rating: number) => void;
}