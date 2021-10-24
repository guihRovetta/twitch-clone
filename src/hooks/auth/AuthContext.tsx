import { makeRedirectUri, revokeAsync, startAsync } from 'expo-auth-session';
import { generateRandom } from 'expo-auth-session/build/PKCE';
import React, { useEffect, createContext, useState, ReactNode } from 'react';

import { api } from '../../services/api';

type User = {
  id: number;
  display_name: string;
  email: string;
  profile_image_url: string;
};

type AuthContextData = {
  user: User;
  isLoggingOut: boolean;
  isLoggingIn: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
};

type AuthProviderData = {
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

export const AuthContext = createContext({} as AuthContextData);

const twitchEndpoints = {
  authorization: 'https://id.twitch.tv/oauth2/authorize',
  revocation: 'https://id.twitch.tv/oauth2/revoke',
};

export const AuthProvider = ({ children }: AuthProviderData) => {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [user, setUser] = useState({} as User);
  const [userToken, setUserToken] = useState('');

  const { TWITCH_CLIENT_ID } = process.env;

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

        api.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;

        const userResponse = await api.get<TwitchGetUser>('/users');

        const { id, display_name, email, profile_image_url } =
          userResponse.data.data[0] || {};

        setUser({
          id,
          display_name,
          email,
          profile_image_url,
        });

        setUserToken(access_token);
      }
    } catch (error) {
      throw new Error();
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
    } catch (error) {
    } finally {
      setUser({} as User);
      setUserToken('');
      delete api.defaults.headers.common['Authorization'];
      setIsLoggingOut(false);
    }
  };

  useEffect(() => {
    api.defaults.headers['Client-Id'] = TWITCH_CLIENT_ID;
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, isLoggingOut, isLoggingIn, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
