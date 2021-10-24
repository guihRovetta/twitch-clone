import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled, { css } from 'styled-components/native';

export const Container = styled(BlurView)`
  padding: ${getStatusBarHeight() + 8}px 20px 8px 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ActionsWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const baseIconStyle = css`
  ${({ theme }) => css`
    color: ${theme.colors.text500};
    font-size: 24px;
  `}
`;

export const ActionButton = styled.Pressable`
  margin-left: 20px;
`;

export const VideoCameraIcon = styled(AntDesign)`
  ${baseIconStyle}
`;

export const InboxIcon = styled(AntDesign)`
  ${baseIconStyle}
`;

export const ChatIcon = styled(MaterialIcons)`
  ${baseIconStyle}
`;

export const SearchIcon = styled(AntDesign)`
  ${baseIconStyle}
`;
