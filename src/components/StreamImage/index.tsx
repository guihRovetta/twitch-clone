import React, { useEffect, useState } from 'react';
import { Image, Linking } from 'react-native';
import { Fade } from 'rn-placeholder';

import { Container, CustomImage, Skeleton, SkeletonMedia } from './styles';

type StreamImageProps = {
  url: string;
  name: string;
  isLoading: boolean;
};

const StreamImage = ({ url, name, isLoading }: StreamImageProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isLoading) return;

    (async () => {
      try {
        await Image.prefetch(url?.replace('{width}x{height}', '113x63'));

        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [isLoading]);

  return loading ? (
    <Skeleton Animation={Fade}>
      <SkeletonMedia />
    </Skeleton>
  ) : (
    <Container
      onPress={() =>
        Linking.openURL(`https://www.twitch.tv/${encodeURI(name)}`)
      }
    >
      <CustomImage
        source={{ uri: url && url?.replace('{width}x{height}', '113x63') }}
        resizeMode="cover"
      />
    </Container>
  );
};

export default StreamImage;
