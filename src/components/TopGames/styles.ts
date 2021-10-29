import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import { CategoryType } from '../CategoryCard/index';

export const CategoryFlatList = styled(
  FlatList as new () => FlatList<CategoryType>
).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    marginTop: 8,
    marginBottom: 16,
  },
})``;

export const CategoryFlatListSeparator = styled.View`
  margin-right: 8px;
`;
