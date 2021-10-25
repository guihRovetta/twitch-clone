import { Placeholder, PlaceholderMedia } from 'rn-placeholder';
import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity``;

export const CustomImage = styled.Image`
  width: 141px;
  height: 79px;
  border-radius: 2px;
`;

export const Skeleton = styled(Placeholder)`
  width: 141px;
  height: 79px;
  margin-right: 16px;
  opacity: 0.2;
`;

export const SkeletonMedia = styled(PlaceholderMedia)`
  ${({ theme }) => css`
    color: ${theme.colors.gray200};
    flex: 1;
    width: 100%;
    border-radius: 10px;
  `}
`;
