import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  margin-top: 20px;
`;

const baseIconStyle = css`
  color: ${({ theme }) => theme.colors.text400};
  font-size: 22px;
`;

export const PersonIcon = styled(Ionicons)`
  ${baseIconStyle}
`;

export const ChartIcon = styled(MaterialIcons)`
  ${baseIconStyle}
`;
