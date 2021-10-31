import { Feather } from '@expo/vector-icons';
import styled, { css } from 'styled-components/native';

const hasBorderBottomStyle = css`
  border-color: ${({ theme }) => theme.colors.gray100};
  border-bottom-width: 1px;
`;

type ContainerProps = {
  hasBorderBottom?: boolean;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  ${({ theme, hasBorderBottom }) => css`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

    ${!!hasBorderBottom && hasBorderBottomStyle};
  `}
`;

export const LabelWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text400};
    font-size: ${theme.fontSize.xregular}px;
    font-family: ${theme.fonts.semibold};
    margin-left: 16px;
  `}
`;

export const RightIcon = styled(Feather)`
  ${({ theme }) => css`
    color: ${theme.colors.text400};
    font-size: 22px;
  `};
`;
