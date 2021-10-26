import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { Fade } from 'rn-placeholder';

import { CustomImage, Skeleton, SkeletonMedia } from './styles';

type CategoryImageProps = {
  url: string;
  isLoading: boolean;
};

const CategoryImage = ({ url, isLoading }: CategoryImageProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isLoading) return;

    (async () => {
      try {
        await Image.prefetch(url?.replace('{width}x{height}', '127x170'));

        setLoading(false);
      } catch (error) {
        console.error('CategoryImage - Erro ao caregar a imagem');
      }
    })();
  }, [isLoading]);

  return loading ? (
    <Skeleton Animation={Fade}>
      <SkeletonMedia />
    </Skeleton>
  ) : (
    <CustomImage
      source={{ uri: url && url?.replace('{width}x{height}', '127x170') }}
      resizeMode="cover"
    />
  );
};

export default CategoryImage;
