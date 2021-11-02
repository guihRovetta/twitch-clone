import { StatusType } from '../hooks/auth/AuthContext';

type AvailableStatusType = {
  key: StatusType;
  label: string;
};

export const AVAILABLE_STATUS: AvailableStatusType[] = [
  {
    key: 'online',
    label: 'Online',
  },
  {
    key: 'invisible',
    label: 'Invisível',
  },
  {
    key: 'busy',
    label: 'Ocupado',
  },
];

export const getUserStatus = (inputStatus: StatusType) => {
  return AVAILABLE_STATUS?.find((item) => item?.key === inputStatus);
};
