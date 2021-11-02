import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';

import PageHeader from '../../components/PageHeader';
import ThemeAppearanceCard from '../../components/ThemeAppearanceCard';
import { PrivateRoutesStackProps } from '../../routes/private.routes';
import { Container, CardsScrollView } from './styles';

type NavigationProps = NavigationProp<PrivateRoutesStackProps, 'Main'>;

const Appearance = () => {
  const navigation = useNavigation<NavigationProps>();

  const handleCloseAppearanceModal = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <PageHeader
        title="Aparência"
        onPressBackButton={handleCloseAppearanceModal}
      />

      <CardsScrollView>
        <ThemeAppearanceCard />
      </CardsScrollView>
    </Container>
  );
};

export default Appearance;
