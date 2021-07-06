import React, { useCallback } from 'react';
import { Feather } from '@expo/vector-icons';

import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { api } from '../../services/api';

import { Container } from './styles';

export function Profile() {
  const { reset } = useNavigation();

  const hangleLogout = useCallback(async () => {
    await api.logout();

    reset({
      routes: [{ name: 'SignIn' }],
    });
  }, []);

  return (
    <Container>
      <TouchableOpacity onPress={hangleLogout}>
        <Feather name="log-out" size={24} color="#ff9000" />
      </TouchableOpacity>
    </Container>
  );
}
