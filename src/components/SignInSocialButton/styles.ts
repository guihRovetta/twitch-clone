import { FontAwesome5 } from '@expo/vector-icons';
import styled from 'styled-components/native';

export const Container = styled.Pressable`
  height: 56px;
  background-color: ${({ theme }) => theme.colors.white100};
  border-radius: 8px;
  align-items: center;
  flex-direction: row;
`;

export const IconContainer = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
  border-color: ${({ theme }) => theme.colors.background};
  border-right-width: 1px;
  padding: 16px;
`;

export const Icon = styled(FontAwesome5)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 24px;
`;

export const ButtonText = styled.Text`
  flex: 1;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.small}px;
  font-family: ${({ theme }) => theme.fonts.semibold};
  line-height: ${({ theme }) => theme.lineHeight.body}px;
`;
