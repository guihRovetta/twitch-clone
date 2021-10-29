import React, { useMemo } from 'react';

import FollowedLiveStreams from '../../components/FollowedLiveStreams';
import Header from '../../components/Header';
import PageHeading from '../../components/PageHeading';
import SectionTitle from '../../components/SectionTitle';
import TopGames from '../../components/TopGames';
import { Container, FollowingFlatList } from './styles';

export type FollowingItem = {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
};

const Following = () => {
  const { data, indices } = useMemo(() => {
    const items: FollowingItem[] = [
      {
        key: 'heading',
        render: () => <PageHeading>Seguindo</PageHeading>,
      },

      {
        key: 'top_games_title',
        render: () => <SectionTitle>Top categorias</SectionTitle>,
        isTitle: true,
      },
      { key: 'top_games_component', render: () => <TopGames /> },

      {
        key: 'live_channels_title',
        render: () => <SectionTitle>Seus canais ao vivo</SectionTitle>,
        isTitle: true,
      },
      { key: 'live_channels_component', render: () => <FollowedLiveStreams /> },
    ];

    const indices: number[] = [];

    items?.forEach((item, index) => item.isTitle && indices?.push(index));

    return {
      data: items,
      indices,
    };
  }, []);

  return (
    <Container>
      <Header />

      <FollowingFlatList
        data={data}
        renderItem={({ item }) => item?.render()}
        keyExtractor={(item) => item?.key}
        stickyHeaderIndices={indices}
      />
    </Container>
  );
};

export default Following;
