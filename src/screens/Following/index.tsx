import React, { useMemo } from 'react';

import Header from '../../components/Header';
import LiveStreams from '../../components/LiveStreams';
import PageHeading from '../../components/PageHeading';
import SectionTitle from '../../components/SectionTitle';
import TopGames from '../../components/TopGames';
import { useAuth } from '../../hooks/auth/useAuth';
import { Container, FollowingFlatList } from './styles';

export type FollowingItem = {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
};

const Following = () => {
  const { user } = useAuth();

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
        key: 'followed_live_channels_title',
        render: () => <SectionTitle>Seus canais ao vivo</SectionTitle>,
        isTitle: true,
      },
      {
        key: 'followed_live_channels_component',
        render: () => (
          <LiveStreams apiUrl={`/streams/followed?user_id=${user?.id}`} />
        ),
      },

      {
        key: 'top_live_channels_title',
        render: () => <SectionTitle>Top canais ao vivo</SectionTitle>,
        isTitle: true,
      },
      {
        key: 'top_live_channels_component',
        render: () => <LiveStreams apiUrl="/streams" />,
      },
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
      <FollowingFlatList
        data={data}
        renderItem={({ item }) => item?.render()}
        keyExtractor={(item) => item?.key}
        stickyHeaderIndices={indices}
      />

      <Header />
    </Container>
  );
};

export default Following;
