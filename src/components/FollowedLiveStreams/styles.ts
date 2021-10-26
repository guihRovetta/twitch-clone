import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import { StreamType } from '../StreamCard';

export const FollowedLiveStreamsFlatList = styled(
  FlatList as new () => FlatList<StreamType>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: 16,
  },
})``;

export const FollowedLiveStreamsFlatListSeparator = styled.View`
  margin-bottom: 12px;
`;
