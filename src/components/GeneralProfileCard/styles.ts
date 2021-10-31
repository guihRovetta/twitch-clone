import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  margin-top: 20px;
`;

const baseIconStyle = css`
  color: ${({ theme }) => theme.colors.text400};
  font-size: 22px;
`;

export const StarIcon = styled(Feather)`
  ${baseIconStyle}
`;

export const InboxIcon = styled(Feather)`
  ${baseIconStyle}
`;

export const PeopleIcon = styled(Ionicons)`
  ${baseIconStyle}
`;

export const GearIcon = styled(MaterialCommunityIcons)`
  ${baseIconStyle}
`;

export const MoonIcon = styled(Ionicons)`
  ${baseIconStyle}
`;

export const EyeIcon = styled(Feather)`
  ${baseIconStyle}
`;
