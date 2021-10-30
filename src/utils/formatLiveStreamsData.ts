import { api } from '../services/api';
import { formatViewersCount } from './formatViewersCount';

type BroadcastTagItemType = {
  tag_id: string;
  localization_names: { [key: string]: string };
};

type GetBroadcastTagsType = {
  data: BroadcastTagItemType[];
};

const getBroadcastTags = async (userId: string) => {
  try {
    const { data } = await api.get<GetBroadcastTagsType>(
      `/streams/tags?broadcaster_id=${userId}`
    );
    return data?.data;
  } catch (error) {
    throw new Error(error);
  }
};

const formatBroadcastTags = (
  inputTags: BroadcastTagItemType[],
  numberOfTags = 2
) => {
  return inputTags?.slice(0, numberOfTags)?.map((item) => ({
    key: item?.tag_id,
    label: item?.localization_names['pt-br'],
  }));
};

type GetUserDataType = {
  data: [
    {
      profile_image_url: string;
    }
  ];
};

const getUserProfileImage = async (userId: string) => {
  try {
    const { data } = await api.get<GetUserDataType>(`/users?id=${userId}`);
    return data?.data[0]?.profile_image_url;
  } catch (error) {
    throw new Error(error);
  }
};

const getFormattedObject = (inputItem: GetStreamsType) => {
  const { id, thumbnail_url, viewer_count, user_name, title, game_name } =
    inputItem || {};

  return {
    id,
    streamImageUrl: thumbnail_url,
    countValue: formatViewersCount(viewer_count),
    name: user_name,
    title,
    category: game_name,
    chips: [],
  };
};

export type GetStreamsType = {
  id: string;
  user_id: string;
  user_login: string;
  user_name: string;
  game_name: string;
  title: string;
  thumbnail_url: string;
  viewer_count: number;
};

export const formatLiveStreamsData = async (inputData: GetStreamsType[]) => {
  return Promise.all(
    inputData?.map(async (item) => {
      const formattedObject = getFormattedObject(item);

      try {
        const avatar = await getUserProfileImage(item?.user_id);
        const broadcastTags = await getBroadcastTags(item?.user_id);
        const chips = formatBroadcastTags(broadcastTags);

        return {
          ...formattedObject,
          chips,
          avatar,
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
