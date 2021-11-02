import styled, { css, DefaultTheme } from 'styled-components/native';

import { StatusType } from '../../hooks/auth/AuthContext';

const sizeModifiers = {
  normal: () => css`
    width: 32px;
    height: 32px;
  `,

  large: () => css`
    width: 48px;
    height: 48px;
  `,
};

export type SizeType = 'normal' | 'large';

type ContainerProps = {
  size?: SizeType;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  ${({ size }) => css`
    align-items: center;
    justify-content: center;
    position: relative;

    ${!!size && sizeModifiers[size]()};
  `}
`;

export const UserImage = styled.Image<ContainerProps>`
  ${({ size }) => css`
    width: 100%;
    height: 100%;

    border-radius: ${size === 'normal' ? '16' : '24'}px;
  `}
`;

const statusIndicatorModifiers = {
  online: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.green200};
  `,

  invisible: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.gray200};
  `,

  busy: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.orange200};
  `,
};

type StatusIndicatorProps = {
  status: StatusType;
};

export const StatusIndicator = styled.View<StatusIndicatorProps>`
  ${({ theme, status }) => css`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 12px;
    height: 12px;
    border-radius: 6px;
    background-color: ${theme.colors.primary};
    border-width: 1.5px;
    border-color: ${theme.colors.background};

    ${!!status && statusIndicatorModifiers[status](theme)};
  `}
`;
