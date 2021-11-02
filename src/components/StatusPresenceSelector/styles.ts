import { Entypo } from '@expo/vector-icons';
import styled, { css } from 'styled-components/native';

const hasBorderTopStyle = css`
  border-color: ${({ theme }) => theme.colors.gray100};
  border-top-width: 1px;
`;

type ContainerProps = {
  hasBorderTop?: boolean;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  ${({ hasBorderTop }) => css`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;

    ${!!hasBorderTop && hasBorderTopStyle};
  `}
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text500};
    font-size: ${theme.fontSize.xregular}px;
    font-family: ${theme.fonts.semibold};
  `}
`;

export const CheckIcon = styled(Entypo)`
  ${({ theme }) => css`
    color: ${theme.colors.text400};
    font-size: 20px;
  `};
`;
