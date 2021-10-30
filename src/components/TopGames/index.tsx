import React, { useEffect, useState } from 'react';

import { api } from '../../services/api';
import { formatViewersCount } from '../../utils/formatViewersCount';
import { generateRamdomNumber } from '../../utils/generateRandomNumber';
import CategoryCard, { CategoryType } from '../CategoryCard';
import { EMPTY_TOP_GAMES } from './mock';
import { CategoryFlatList, CategoryFlatListSeparator } from './styles';

type TwitchGetTopGames = {
  box_art_url: string;
  id: string;
  name: string;
};

const TopGames = () => {
  const [topGames, setTopGames] = useState<CategoryType[]>(EMPTY_TOP_GAMES);
  const [isLoadingTopGames, setIsLoadingTopGames] = useState(true);

  const getTopGames = async () => {
    try {
      const { data } = await api.get<{ data: TwitchGetTopGames[] }>(
        '/games/top'
      );

      let randomCountValue = 400000;

      const formattedData: CategoryType[] = data?.data?.map(
        ({ id, name, box_art_url }) => {
          randomCountValue = generateRamdomNumber(
            randomCountValue / 2,
            randomCountValue
          );

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
