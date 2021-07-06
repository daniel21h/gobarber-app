import React, { useContext, useEffect } from 'react';
import { Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../../contexts/UserContext.jsx';

import logoImg from '../../assets/Logo.png';

import { api } from '../../services/api';
import { Container, LoadingIcon } from './styles';

export function Preload() {
  const { dispatch: userDispatch } = useContext(UserContext);

  const { navigate, reset } = useNavigation();

  useEffect(() => {
    async function handleCheckToken() {
      const token = await AsyncStorage.getItem('token');

      if (token) {
        // Validate token
        const response = await api.checkToken(token);

        if (response.token) {
          await AsyncStorage.setItem('token', response.token);

          userDispatch({
            type: 'setAvatar',
            payload: {
              avatar: response.data.avatar,
            },
          });

          reset({
            routes: [{ name: 'Dashboard' }],
          });
        } else {
          navigate('SignIn');
        }
      } else {
        navigate('SignIn');
      }
    }

    handleCheckToken();
  }, [navigate, reset, userDispatch]);

  return (
    <Container>
      <Image source={logoImg} />

      <LoadingIcon size="large" color="#F4EDE8" />
    </Container>
  );
}
