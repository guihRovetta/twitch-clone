import React from 'react';
import { Linking } from 'react-native';

import CategoryImage from '../CategoryImage';
import LiveIndicator from '../LiveIndicator';
import { Container, CategoryTitle } from './styles';

export type CategoryType = {
  id: string;
  name: string;
  url: string;
  isLoading?: boolean;
  countValue: string;
};

type CategoryCardProps = {
  category: CategoryType;
};

const CategoryCard = ({ category }: CategoryCardProps) => {
  const { name, url, isLoading, countValue } = category || {};

  const handlePressCategoryCard = () => {
    Linking.openURL(`https://www.twitch.tv/directory/game/${encodeURI(name)}`);
  };

  return (
    <Container onPress={handlePressCategoryCard}>
      <CategoryImage url={url} isLoading={isLoading} />
      <CategoryTitle numberOfLines={1}>{name}</CategoryTitle>
      <LiveIndicator countValue={countValue} />
    </Container>
  );
};

export default CategoryCard;
