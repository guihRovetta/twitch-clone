import React, { useEffect, useState } from 'react';
import { Image, Alert, Linking } from 'react-native';
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
        await Image.prefetch(url?.replace('{width}x{height}', '141x79'));

        setLoading(false);
      } catch (error) {
        Alert.alert('Erro StreamImage');
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
        source={{ uri: url && url?.replace('{width}x{height}', '141x79') }}
        resizeMode="cover"
      />
    </Container>
  );
};

export default StreamImage;
