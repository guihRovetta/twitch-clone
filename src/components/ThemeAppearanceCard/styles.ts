import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  margin-top: 20px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text400};
    font-size: ${theme.fontSize.xregular}px;
    font-family: ${theme.fonts.semibold};
    margin-bottom: 12px;
    text-transform: uppercase;
  `}
`;

const hasBorderTopStyle = css`
  border-color: ${({ theme }) => theme.colors.gray100};
  border-top-width: 1px;
`;

type SwitchWrapperProps = {
  hasBorderTop?: boolean;
};

export const SwitchWrapper = styled.View<SwitchWrapperProps>`
  ${({ hasBorderTop }) => css`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;

    ${!!hasBorderTop && hasBorderTopStyle};
  `}
`;

export const SwitchLabel = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text500};
    font-size: ${theme.fontSize.xregular}px;
    font-family: ${theme.fonts.semibold};
  `}
`;
