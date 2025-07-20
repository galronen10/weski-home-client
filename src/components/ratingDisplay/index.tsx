import { StarFilledIcon, StarIcon } from '@radix-ui/react-icons';
import './ratingDisplay.scss';

interface props {
  rating: number;
}

export const RatingDisplay: React.FC<props> = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      i < rating ? (
        <StarFilledIcon key={i} className="star-filled-icon" />
      ) : (
        <StarIcon key={i} className="star-empty-icon" />
      ),
    );
  }

  return stars;
};
