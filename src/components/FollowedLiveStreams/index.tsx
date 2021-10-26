import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';

import { useAuth } from '../../hooks/auth/useAuth';
import { api } from '../../services/api';
import { formatViewersCount } from '../../utils/formatViewersCount';
import StreamCard, { StreamType } from '../StreamCard';
import {
  FollowedLiveStreamsFlatList,
  FollowedLiveStreamsFlatListSeparator,
} from './styles';

type TwitchGetFollowedStreams = {
  id: string;
  user_id: string;
  user_login: string;
  user_name: string;
  game_name: string;
  title: string;
  thumbnail_url: string;
  viewer_count: number;
};

const FollowedLiveStreams = () => {
  const [followedLiveStreams, setFollowedLiveStreams] = useState<StreamType[]>(
    []
  );
  const [isLoadingFollowedLiveStreams, setIsLoadingFollowedLiveStreams] =
    useState(true);

  const { user } = useAuth();

  const getUserFollowedStreamsAvatar = async (
    userFollowedStreamsData: TwitchGetFollowedStreams[]
  ) => {
    return Promise.all(
      userFollowedStreamsData.map(async (item) => {
        const { id, thumbnail_url, viewer_count, user_name, title, game_name } =
          item || {};

        const formattedObject = {
          id,
          streamImageUrl: thumbnail_url,
          countValue: formatViewersCount(viewer_count),
          name: user_name,
          title,
          category: game_name,
          chips: [],
        };

        try {
          const { data } = await api.get<{
            data: { profile_image_url: string };
          }>(`/users?id=${item?.user_id}`);

          const { data: chipsData } = await api.get<{
            data: {
              tag_id: string;
              localization_names: { [key: string]: string };
            }[];
          }>(`/streams/tags?broadcaster_id=${item?.user_id}`);

          const tags = chipsData?.data?.map((item) => ({
            key: item?.tag_id,
            label: item?.localization_names['pt-br'],
          }));

          return {
            ...formattedObject,
            chips: tags?.slice(0, 2),
            avatar: data.data[0].profile_image_url as string,
          };
        } catch (error) {
          return {
            ...formattedObject,
            avatar:
              'https://static-cdn.jtvnw.net/user-default-pictures-uv/cdd517fe-def4-11e9-948e-784f43822e80-profile_image-300x300.png',
          };
        }
      })
    );
  };

  const getUserFollowedStreams = async () => {
    try {
      const { data } = await api.get<{ data: TwitchGetFollowedStreams[] }>(
        `/streams/followed?user_id=${user?.id}`
      );

      const formattedData = await getUserFollowedStreamsAvatar(data?.data);

      setFollowedLiveStreams(formattedData);
    } catch (error) {
      Alert.alert(
        'Erro User Followed Streams',
        'Ocorreu um erro ao buscar as informações das streams ao vivo que o usuário segue'
      );
    } finally {
      setIsLoadingFollowedLiveStreams(false);
    }
  };

  useEffect(() => {
    getUserFollowedStreams();
  }, []);

  return (
    <FollowedLiveStreamsFlatList
      data={followedLiveStreams}
      keyExtractor={(item) => item?.id}
      renderItem={({ item }) => (
        <StreamCard stream={item} isLoading={isLoadingFollowedLiveStreams} />
      )}
      ItemSeparatorComponent={FollowedLiveStreamsFlatListSeparator}
      maxToRenderPerBatch={4}
      initialNumToRender={4}
    />
  );
};

export default FollowedLiveStreams;
