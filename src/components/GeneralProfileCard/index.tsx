import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';

import { PrivateRoutesStackProps } from '../../routes/private.routes';
import ModalCard from '../ModalCard';
import ProfileItem from '../ProfileItem';
import {
  Container,
  StarIcon,
  InboxIcon,
  PeopleIcon,
  GearIcon,
  MoonIcon,
  EyeIcon,
} from './styles';

type NavigationProps = NavigationProp<PrivateRoutesStackProps, 'Main'>;

const GeneralProfileCard = () => {
  const navigation = useNavigation<NavigationProps>();

  const handleNavigateToAppearance = () => {
    navigation.navigate('Appearance');
  };

  const handleNavigateToPresence = () => {
    navigation.navigate('Presence');
  };

  const handleNavigateToConfiguration = () => {
    navigation.navigate('Configuration');
  };

  const generalProfileItems = [
    {
      key: 'subscriptions',
      icon: <StarIcon name="star" />,
      label: 'Inscrições',
      hasRightIcon: true,
      onPress: () => {},
    },
    {
      key: 'drops',
      icon: <InboxIcon name="inbox" />,
      label: 'Drops',
      hasRightIcon: true,
      onPress: () => {},
    },
    {
      key: 'friends',
      icon: <PeopleIcon name="people-outline" />,
      label: 'Amigos',
      hasRightIcon: false,
      onPress: () => {},
    },
    {
      key: 'accountConfiguration',
      icon: <GearIcon name="cog-outline" />,
      label: 'Configurações da conta',
      hasRightIcon: true,
      onPress: () => handleNavigateToConfiguration(),
    },
    {
      key: 'appearance',
      icon: <MoonIcon name="moon-outline" />,
      label: 'Aparência',
      hasRightIcon: true,
      onPress: () => handleNavigateToAppearance(),
    },
    {
      key: 'status',
      icon: <EyeIcon name="eye" />,
      label: 'Definir presença',
      hasRightIcon: true,
      onPress: () => handleNavigateToPresence(),
    },
  ];

  return (
    <Container>
      <ModalCard>
        {generalProfileItems?.map((item, index) => (
          <ProfileItem
            key={item?.key}
            icon={item?.icon}
            hasRightIcon={item?.hasRightIcon}
            hasBorderBottom={index + 1 !== generalProfileItems?.length}
            onPress={item?.onPress}
          >
            {item?.label}
          </ProfileItem>
        ))}
      </ModalCard>
    </Container>
  );
};

export default GeneralProfileCard;
