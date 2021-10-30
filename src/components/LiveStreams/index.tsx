import React, { useEffect, useState } from 'react';

import { api } from '../../services/api';
import {
  formatLiveStreamsData,
  GetStreamsType,
} from '../../utils/formatLiveStreamsData';
import StreamCard, { StreamType } from '../StreamCard';
import { EMPTY_LIVE_STREAMS } from './mock';
import { LiveStreamsFlatList, LiveStreamsFlatListSeparator } from './styles';

type LiveStreamsProps = {
  apiUrl: string;
};

const LiveStreams = ({ apiUrl }: LiveStreamsProps) => {
  const [loading, setLoading] = useState(true);
  const [liveStreamsData, setLiveStreamsData] =
    useState<StreamType[]>(EMPTY_LIVE_STREAMS);

  const getStreamsData = async () => {
    try {
      const { data } = await api.get<{ data: GetStreamsType[] }>(apiUrl);
      const formattedData = await formatLiveStreamsData(data?.data);
      setLiveStreamsData(formattedData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getStreamsData();
  }, []);

  return (
    <LiveStreamsFlatList
      data={liveStreamsData}
      keyExtractor={(item) => item?.id}
      renderItem={({ item }) => (
        <StreamCard stream={item} isLoading={loading} />
      )}
      ItemSeparatorComponent={LiveStreamsFlatListSeparator}
      maxToRenderPerBatch={4}
      initialNumToRender={4}
      style={{ paddingHorizontal: 16, marginTop: 8, marginBottom: 16 }}
    />
  );
};

export default LiveStreams;
