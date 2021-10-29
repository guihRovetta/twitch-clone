import { FlatList } from 'react-native';
import styled, { css } from 'styled-components/native';

import { FollowingItem } from '.';

export const Container = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    flex: 1;
  `}
`;

export const FollowingFlatList = styled(
  FlatList as new () => FlatList<FollowingItem>
).attrs({
  contentContainerStyle: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
})``;
