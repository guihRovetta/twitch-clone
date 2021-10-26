import React from 'react';

import FollowedLiveStreams from '../../components/FollowedLiveStreams';
import Header from '../../components/Header';
import TopGames from '../../components/TopGames';
import { Container } from './styles';

const Following = () => {
  return (
    <Container>
      <Header />

      <TopGames />
      <FollowedLiveStreams />
    </Container>
  );
};

export default Following;
