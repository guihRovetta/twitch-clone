import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  margin-top: 20px;
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text400};
    font-size: ${theme.fontSize.small}px;
    font-family: ${theme.fonts.regular};
    margin-top: 8px;
    padding: 0 16px;
  `}
`;
