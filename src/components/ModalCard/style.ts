import styled, { css } from 'styled-components/native';

const hasPaddingStyle = css`
  padding: 20px;
`;

type ContainerProps = {
  hasPadding?: boolean;
};

export const Container = styled.View<ContainerProps>`
  ${({ theme, hasPadding }) => css`
    background-color: ${theme.colors.modal.highlight};
    border-radius: 12px;

    ${!!hasPadding && hasPaddingStyle};
  `};
`;
