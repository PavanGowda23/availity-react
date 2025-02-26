interface FavoriteHeartProps {
  [key: string]: any;
  id: string;
  name: string;
  onChange?: (isFavorited: boolean, event: React.MouseEvent<any>) => void;
}

declare const FavoriteHeart: React.FC<FavoriteHeartProps>;

export default FavoriteHeart;
