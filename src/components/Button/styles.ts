import { ActivityIndicator } from 'react-native';
import styled, { css, DefaultTheme } from 'styled-components/native';

import { BorderRadiusType, ColorType } from '.';

export const Container = styled.TouchableOpacity``;

const buttonBorderRadiusModifiers = {
  large: () => css`
    border-radius: 24px;
  `,

  normal: () => css`
    border-radius: 8px;
  `,
};

const buttonColorModifiers = {
  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary};
  `,

  disabled: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.gray100};
  `,
};

type ButtonWrapperProps = {
  fullWitdh?: boolean;
  color?: ColorType;
  borderRadiusType?: BorderRadiusType;
};

export const ButtonWrapper = styled.View<ButtonWrapperProps>`
  ${({ theme, fullWitdh, color, borderRadiusType }) => css`
    padding: 10px 16px;
    border-radius: 24px;
    flex-direction: row;
    align-items: center;
    align-self: ${fullWitdh ? 'stretch' : 'baseline'};
    justify-content: center;

    ${!!color && buttonColorModifiers[color](theme)};
    ${!!borderRadiusType && buttonBorderRadiusModifiers[borderRadiusType]()};
  `}
`;

const buttonTextColorModifiers = {
  primary: (theme: DefaultTheme) => css`
    color: ${theme.colors.white100};
  `,

  disabled: (theme: DefaultTheme) => css`
    color: ${theme.colors.gray300};
  `,
};

export const ButtonText = styled.Text<Pick<ButtonWrapperProps, 'color'>>`
  ${({ theme, color }) => css`
    font-size: ${theme.fontSize.regular}px;
    font-family: ${theme.fonts.semibold};
    line-height: ${theme.lineHeight.body}px;

    ${!!color && buttonTextColorModifiers[color](theme)};
  `}
`;

export const LoadingIndicator = styled(ActivityIndicator).attrs({
  size: 16,
})``;
