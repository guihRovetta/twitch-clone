import React from 'react';
import {
  Fade,
  Placeholder,
  PlaceholderLine,
  PlaceholderMedia,
} from 'rn-placeholder';
import { PlaceholderLineProps } from 'rn-placeholder/lib/PlaceholderLine';
import { useTheme } from 'styled-components';

import Chip from '../Chip';
import LiveIndicator from '../LiveIndicator';
import StreamImage from '../StreamImage';
import {
  Container,
  InfoWrapper,
  StreamerWrapper,
  StreamerLogo,
  StreamerName,
  Title,
  Category,
  ChipWrapper,
  StreamImageWrapper,
  Gradient,
  ChipContainer,
} from './styles';

type ChipType = {
  label: string;
  key: string;
};

export type StreamType = {
  id: string;
  streamImageUrl: string;
  countValue: string;
  avatar: string;
  name: string;
  title: string;
  category: string;
  chips: ChipType[];
};

type StreamCardProps = {
  stream: StreamType;
  isLoading: boolean;
};

const PlaceholderStreamImage = () => (
  <PlaceholderMedia style={{ width: 113, height: 63, marginRight: 16 }} />
);

const PlaceholderStreamText = ({ ...rest }: PlaceholderLineProps) => (
  <PlaceholderLine height={16} noMargin style={{ marginBottom: 6 }} {...rest} />
);

const StreamCard = ({ stream, isLoading }: StreamCardProps) => {
  const theme = useTheme();

  const { streamImageUrl, countValue, avatar, name, title, category, chips } =
    stream || {};

  return (
    <>
      {!isLoading ? (
        <Container>
          <StreamImageWrapper>
            <StreamImage
              url={streamImageUrl}
              name={name}
              isLoading={isLoading}
            />
            <Gradient colors={theme.gradients.transparentBlack}>
              <LiveIndicator
                countValue={countValue}
                color="light"
                size="xxsmall"
              />
            </Gradient>
          </StreamImageWrapper>

          <InfoWrapper>
            <StreamerWrapper>
              <StreamerLogo source={{ uri: avatar }} resizeMode="cover" />
              <StreamerName numberOfLines={1}>{name}</StreamerName>
            </StreamerWrapper>

            <Title numberOfLines={1}>{title}</Title>
            <Category numberOfLines={1}>{category}</Category>

            {chips?.length > 0 && (
              <ChipContainer>
                {chips?.map((chip) => (
                  <ChipWrapper key={chip?.key}>
                    <Chip label={chip?.label} />
                  </ChipWrapper>
                ))}
              </ChipContainer>
            )}
          </InfoWrapper>
        </Container>
      ) : (
        <Placeholder Left={PlaceholderStreamImage} Animation={Fade}>
          <PlaceholderStreamText width={40} />
          <PlaceholderStreamText />
          <PlaceholderStreamText width={80} />
          <PlaceholderStreamText width={50} />
        </Placeholder>
      )}
    </>
  );
};

export default StreamCard;
