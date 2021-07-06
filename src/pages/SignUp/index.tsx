import React, { useCallback, useContext, useState } from 'react';
import { Alert, Image } from 'react-native';
import Toast from 'react-native-toast-message';

import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import logoImg from '../../assets/Logo.png';
import Button from '../../components/Button';
import Input from '../../components/Input';

import {
  Container,
  Title,
  MessageToCreateAccount,
  BackToSignIn,
  BackToSignInText,
} from './styles';
import { api } from '../../services/api';
import { UserContext } from '../../contexts/UserContext.jsx';

export function SignUp() {
  const { dispatch: userDispatch } = useContext(UserContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleNavigateToSignIn = useCallback(() => {
    navigation.reset({
      routes: [{ name: 'SignIn' }],
    });
  }, [navigation]);

  const handleSignUp = useCallback(async () => {
    if (name === '' && email === '' && password === '') {
      return Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Erro ao cadastrar!',
        text2: 'Todo os campos são obrigatórios.',
        visibilityTime: 4000,
        autoHide: true,
        topOffset: 30,
        bottomOffset: 40,
      });
    }

    const response = await api.signUp({ name, email, password });

    if (response.token) {
      Toast.show({
        type: 'success',
        position: 'top',
        text1: 'Cadastrado com sucesso!',
        text2: 'Usuário cadastrado com sucesso.',
        visibilityTime: 4000,
        autoHide: true,
        topOffset: 30,
        bottomOffset: 40,
      });

      await AsyncStorage.setItem('token', response.token);

      userDispatch({
        type: 'setAvatar',
        payload: {
          avatar: response.data.avatar,
        },
      });

      navigation.reset({
        routes: [{ name: 'Dashboard' }],
      });

      setName('');
      setEmail('');
      setPassword('');
    } else {
      return Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Erro ao cadastrar!',
        text2: 'Erro ao cadastrar, tente novamente!',
        visibilityTime: 4000,
        autoHide: true,
        topOffset: 30,
        bottomOffset: 40,
      });
    }
  }, [name, email, password, navigation, userDispatch]);

  return (
    <Container>
      <Image source={logoImg} />

      <Title>Crie sua conta</Title>

      <Input
        name="name"
        icon="user"
        placeholder="Nome"
        value={name}
        onChangeText={(value) => setName(value)}
      />

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

      <Button onPress={handleSignUp}>Cadastrar</Button>

      <MessageToCreateAccount>Já possui uma conta?</MessageToCreateAccount>
      <BackToSignIn onPress={handleNavigateToSignIn}>
        <BackToSignInText>Fazer login</BackToSignInText>
      </BackToSignIn>
    </Container>
  );
}
