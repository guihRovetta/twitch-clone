import React, { useState } from 'react';

import { StatusType } from '../../hooks/auth/AuthContext';
import { useAuth } from '../../hooks/auth/useAuth';
import { AVAILABLE_STATUS } from '../../utils/getUserStatus';
import ModalCard from '../ModalCard';
import StatusPresenceSelector from '../StatusPresenceSelector';
import { Container, Description } from './styles';

const StatusPresenceCard = () => {
  const { user, changeUserStatus } = useAuth();

  const [status, setStatus] = useState(user?.status);

  const handleChangeUserStatus = (newStatus: StatusType) => {
    setStatus(newStatus);
    changeUserStatus(newStatus);
  };

  return (
    <Container>
      <ModalCard>
        {AVAILABLE_STATUS?.map((item, index) => (
          <StatusPresenceSelector
            key={item?.key}
            selected={item?.key === status}
            isFirst={index === 0}
            onPress={() => handleChangeUserStatus(item?.key)}
          >
            {item?.label}
          </StatusPresenceSelector>
        ))}
      </ModalCard>
      <Description>
        Controle se seus amigos podem vê-lo na lista deles
      </Description>
    </Container>
  );
};

export default StatusPresenceCard;
