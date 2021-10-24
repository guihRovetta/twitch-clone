import styled, { css, DefaultTheme } from 'styled-components/native';

export const Container = styled.View`
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const UserImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 16px;
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

export type StatusType = 'online' | 'invisible' | 'busy';

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
