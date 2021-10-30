import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import { StreamType } from '../StreamCard';

export const LiveStreamsFlatList = styled(
  FlatList as new () => FlatList<StreamType>
).attrs({
  showsVerticalScrollIndicator: false,
})``;

export const LiveStreamsFlatListSeparator = styled.View`
  margin-bottom: 12px;
`;
