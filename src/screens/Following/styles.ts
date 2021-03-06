import { FlatList } from 'react-native';
import styled, { css } from 'styled-components/native';

import { FollowingItem } from '.';

export const Container = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    flex: 1;
  `}
`;

const HEADER_HEIGHT = 64;

export const FollowingFlatList = styled(
  FlatList as new () => FlatList<FollowingItem>
).attrs({
  contentContainerStyle: {
    marginTop: HEADER_HEIGHT,
    paddingBottom: HEADER_HEIGHT + HEADER_HEIGHT / 2 + 8,
  },
})``;
