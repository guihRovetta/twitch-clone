import React, { useEffect, useState } from 'react';

import { api } from '../../services/api';
import { formatViewersCount } from '../../utils/formatViewersCount';
import { generateRamdomNumber } from '../../utils/generateRandomNumber';
import CategoryCard, { CategoryType } from '../CategoryCard';
import { CategoryFlatList, CategoryFlatListSeparator } from './styles';

type TwitchGetTopGames = {
  box_art_url: string;
  id: string;
  name: string;
};

const EMPTY_TOP_GAMES = [
  { id: '1', name: '', url: '', countValue: '' },
  { id: '2', name: '', url: '', countValue: '' },
  { id: '3', name: '', url: '', countValue: '' },
  { id: '4', name: '', url: '', countValue: '' },
  { id: '5', name: '', url: '', countValue: '' },
];

const TopGames = () => {
  const [topGames, setTopGames] = useState<CategoryType[]>(EMPTY_TOP_GAMES);
  const [isLoadingTopGames, setIsLoadingTopGames] = useState(true);

  const getTopGames = async () => {
    try {
      const { data } = await api.get<{ data: TwitchGetTopGames[] }>(
        '/games/top'
      );

      const formattedData: CategoryType[] = data?.data?.map(
        ({ id, name, box_art_url }) => {
          const randomCountValue = generateRamdomNumber(10, 150000);

          return {
            id,
            name,
            url: box_art_url,
            countValue: formatViewersCount(randomCountValue),
          };
        }
      );

      setTopGames(formattedData);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadingTopGames(false);
    }
  };

  useEffect(() => {
    getTopGames();
  }, []);

  return (
    <CategoryFlatList
      data={topGames}
      keyExtractor={(item) => item?.id}
      renderItem={({ item }) => (
        <CategoryCard category={{ ...item, isLoading: isLoadingTopGames }} />
      )}
      ItemSeparatorComponent={CategoryFlatListSeparator}
      maxToRenderPerBatch={5}
      initialNumToRender={5}
    />
  );
};

export default TopGames;
