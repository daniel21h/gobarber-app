import React, { useCallback, useContext, useState } from 'react';
import { Alert, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';

import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import logoImg from '../../assets/Logo.png';
import Button from '../../components/Button';
import Input from '../../components/Input';

import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  MessageToCreateAccount,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';
import { api } from '../../services/api';
import { UserContext } from '../../contexts/UserContext.jsx';

export function SignIn() {
  const { dispatch: userDispatch } = useContext(UserContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { navigate, reset } = useNavigation();

  const handleNavigateToCreateAccount = useCallback(() => {
    reset({
      routes: [{ name: 'SignUp' }],
    });
  }, [reset]);

  const handleSignIn = useCallback(async () => {
    if (email === '' && password === '') {
      return Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Ops!',
        text2: 'Preencha os campos abaixo!',
        visibilityTime: 4000,
        autoHide: true,
        topOffset: 30,
        bottomOffset: 40,
      });
    }

    const response = await api.signIn({ email, password });

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

      Toast.show({
        type: 'success',
        position: 'top',
        text1: `Bem vindo, ${response.data.name}`,
        text2: 'Estamos felizes por ter você aqui!',
        visibilityTime: 6000,
        autoHide: true,
        topOffset: 30,
        bottomOffset: 40,
      });

      setEmail('');
      setPassword('');
    } else {
      return Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Erro!',
        text2: 'E-mail e/ou senha incorretos!',
        visibilityTime: 4000,
        autoHide: true,
        topOffset: 30,
        bottomOffset: 40,
      });
    }
  }, [email, password, reset, userDispatch]);

  return (
    <Container>
      <Image source={logoImg} />

      <Title>Faça seu login</Title>

      <Input
        name="email"
        icon="mail"
        placeholder="E-mail"
        value={email}
        onChangeText={(value) => setEmail(value)}
      />

      <Input
        name="password"
        icon="lock"
        placeholder="Senha"
        value={password}
        onChangeText={(value) => setPassword(value)}
        secureTextEntry
      />

      <Button onPress={handleSignIn}>Entrar</Button>

      <ForgotPassword onPress={() => navigate('ForgotPassword')}>
        <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
      </ForgotPassword>

      <MessageToCreateAccount>Ainda não tem um conta?</MessageToCreateAccount>

      <CreateAccountButton onPress={handleNavigateToCreateAccount}>
        <Feather name="log-in" size={20} color="#ff9000" />
        <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
      </CreateAccountButton>
    </Container>
  );
}
