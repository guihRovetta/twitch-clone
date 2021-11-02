import AsyncStorage from '@react-native-async-storage/async-storage';
import { makeRedirectUri, revokeAsync, startAsync } from 'expo-auth-session';
import { generateRandom } from 'expo-auth-session/build/PKCE';
import * as SecureStore from 'expo-secure-store';
import React, { useEffect, createContext, useState, ReactNode } from 'react';

import { api } from '../../services/api';

export type StatusType = 'online' | 'invisible' | 'busy';

type User = {
  id: number;
  display_name: string;
  email: string;
  profile_image_url: string;
  status?: StatusType;
};

type AuthContextType = {
  user: User;
  isLoggingOut: boolean;
  isLoggingIn: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
  changeUserStatus: (status: StatusType) => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

type TwitchUser = {
  id: string;
  login: string;
  display_name: string;
  type: string;
  broadcaster_type: string;
  description: string;
  profile_image_url: string;
  offline_image_url: string;
  view_count: string;
  email: string;
  created_at: string;
};

type TwitchGetUser = {
  data: TwitchUser;
};

const USER_STORAGE_KEY = '@twitch-clone:user';
const USER_TOKEN_EXPO_SECURE_KEY = 'twitch-clone.userToken';

export const AuthContext = createContext({} as AuthContextType);

const twitchEndpoints = {
  authorization: 'https://id.twitch.tv/oauth2/authorize',
  revocation: 'https://id.twitch.tv/oauth2/revoke',
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [user, setUser] = useState({} as User);
  const [userToken, setUserToken] = useState('');

  const { TWITCH_CLIENT_ID } = process.env;

  const saveUser = async (user: User) => {
    try {
      await AsyncStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
      setUser(user);
    } catch (error) {
      console.log(error);
    }
  };

  const removeUser = async () => {
    try {
      await AsyncStorage.removeItem(USER_STORAGE_KEY);
      setUser({} as User);
    } catch (error) {
      console.log(error);
    }
  };

  const saveUserToken = (access_token: string) => {
    api.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
    setUserToken(access_token);
  };

  const signIn = async () => {
    try {
      setIsLoggingIn(true);
      const REDIRECT_URI = makeRedirectUri({ useProxy: true });
      const RESPONSE_TYPE = 'token';
      const SCOPE = encodeURI('openid user:read:email user:read:follows');
      const FORCE_VERIFY = true;
      const STATE = generateRandom(30);

      const authUrl =
        twitchEndpoints.authorization +
        `?client_id=${TWITCH_CLIENT_ID}` +
        `&redirect_uri=${REDIRECT_URI}` +
        `&response_type=${RESPONSE_TYPE}` +
        `&scope=${SCOPE}` +
        `&force_verify=${FORCE_VERIFY}` +
        `&state=${STATE}`;

      const authResponse = await startAsync({ authUrl });

      if (
        authResponse.type === 'success' &&
        authResponse.params.error !== 'access_denied'
      ) {
        if (authResponse.params.state !== STATE) {
          throw new Error('Invalid state value');
        }

        const { access_token } = authResponse.params || {};

        saveUserToken(access_token);

        await SecureStore.setItemAsync(
          USER_TOKEN_EXPO_SECURE_KEY,
          access_token
        );

        const userResponse = await api.get<TwitchGetUser>('/users');

        const { id, display_name, email, profile_image_url } =
          userResponse.data.data[0] || {};

        saveUser({
          id,
          display_name,
          email,
          profile_image_url,
          status: 'online',
        });
      }
    } catch (error) {
      throw new Error(error);
    } finally {
      setIsLoggingIn(false);
    }
  };

  const signOut = async () => {
    try {
      setIsLoggingOut(true);
      await revokeAsync(
        { token: userToken, clientId: TWITCH_CLIENT_ID },
        { revocationEndpoint: twitchEndpoints.revocation }
      );

      await SecureStore.deleteItemAsync(USER_TOKEN_EXPO_SECURE_KEY);
    } catch (error) {
    } finally {
      removeUser();
      setUserToken('');
      delete api.defaults.headers.common['Authorization'];
      setIsLoggingOut(false);
    }
  };

  const changeUserStatus = (status: StatusType) => {
    saveUser({ ...user, status });
  };

  useEffect(() => {
    api.defaults.headers['Client-Id'] = TWITCH_CLIENT_ID;
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const secureStoreUserToken = await SecureStore.getItemAsync(
          USER_TOKEN_EXPO_SECURE_KEY
        );
        saveUserToken(secureStoreUserToken);
      } catch (error) {
        console.log('Erro no SecureStore', error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const localUser = await AsyncStorage.getItem(USER_STORAGE_KEY);

        if (localUser) setUser(JSON.parse(localUser));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggingOut,
        isLoggingIn,
        signIn,
        signOut,
        changeUserStatus,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
