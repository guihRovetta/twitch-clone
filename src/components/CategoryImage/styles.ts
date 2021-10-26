import { Placeholder, PlaceholderMedia } from 'rn-placeholder';
import styled, { css } from 'styled-components/native';

export const CustomImage = styled.Image`
  width: 100%;
  height: 170px;
`;

export const Skeleton = styled(Placeholder)`
  width: 100%;
  height: 170px;
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
