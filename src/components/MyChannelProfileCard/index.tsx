import React from 'react';

import ModalCard from '../ModalCard';
import ProfileItem from '../ProfileItem';
import { Container, PersonIcon, ChartIcon } from './styles';

const MyChannelProfileCard = () => {
  const myChannelProfileItems = [
    {
      key: 'myChannel',
      icon: <PersonIcon name="person-outline" />,
      label: 'Meu canal',
      hasRightIcon: false,
      onPress: () => {},
    },
    {
      key: 'transmissionManage',
      icon: <ChartIcon name="insert-chart-outlined" />,
      label: 'Gerenciamento de transmissão',
      hasRightIcon: false,
      onPress: () => {},
    },
  ];

  return (
    <Container>
      <ModalCard>
        {myChannelProfileItems?.map((item, index) => (
          <ProfileItem
            key={item?.key}
            icon={item?.icon}
            hasRightIcon={item?.hasRightIcon}
            hasBorderBottom={index + 1 !== myChannelProfileItems?.length}
            onPress={item?.onPress}
          >
            {item?.label}
          </ProfileItem>
        ))}
      </ModalCard>
    </Container>
  );
};

export default MyChannelProfileCard;
