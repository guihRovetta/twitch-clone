import { LinearGradient } from 'expo-linear-gradient';
import styled, { css } from 'styled-components/native';

export const Container = styled.Pressable`
  flex-direction: row;
`;

export const StreamImageWrapper = styled.View`
  width: 113px;
  height: 63px;
`;

export const Gradient = styled(LinearGradient)`
  width: 100%;
  height: 100%;
  position: absolute;
  justify-content: flex-end;
  padding: 4px;
`;

export const InfoWrapper = styled.View`
  margin-left: 16px;
  flex: 1;
`;

export const StreamerWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const StreamerLogo = styled.Image`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  margin-right: 8px;
`;

export const StreamerName = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text500};
    font-size: ${theme.fontSize.xregular}px;
    font-family: ${theme.fonts.bold};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray300};
    font-size: ${theme.fontSize.regular}px;
    font-family: ${theme.fonts.regular};
    margin: 2px 0;
  `}
`;

export const Category = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray300};
    font-size: ${theme.fontSize.regular}px;
    font-family: ${theme.fonts.regular};
    margin-bottom: 2px;
  `}
`;

export const ChipContainer = styled.View`
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 2px;
`;

export const ChipWrapper = styled.View`
  margin: 0 8px 8px 0;
`;
