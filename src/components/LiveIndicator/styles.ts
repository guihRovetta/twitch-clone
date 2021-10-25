import styled, { css, DefaultTheme } from 'styled-components/native';

import { LiveIndicatorProps } from '.';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const VisualIndicator = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.red500};
    width: 8px;
    height: 8px;
    border-radius: 4px;
  `}
`;

const countIndicatorFontSizeModifiers = {
  xsmall: (theme: DefaultTheme) => css`
    font-size: ${theme.fontSize.xsmall}px;
  `,

  small: (theme: DefaultTheme) => css`
    font-size: ${theme.fontSize.small}px;
  `,
};

export const CountIndicator = styled.Text<
  Omit<LiveIndicatorProps, 'countValue'>
>`
  ${({ theme, color, size }) => css`
    text-align: center;
    color: ${color === 'dark' ? theme.colors.gray300 : theme.colors.white100};
    font-family: ${theme.fonts.semibold};
    margin-left: 6px;

    ${!!size && countIndicatorFontSizeModifiers[size](theme)};
  `}
`;
