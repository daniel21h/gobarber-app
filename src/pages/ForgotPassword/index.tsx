import React from 'react';
import { Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/core';

import logoImg from '../../assets/Logo.png';
import Button from '../../components/Button';
import Input from '../../components/Input';

import {
  Container,
  Title,
  Description,
  BackToSignIn,
  BackToSignInText,
} from './styles';

export function ForgotPassword() {
  const { goBack } = useNavigation();

  return (
    <Container>
      <Image source={logoImg} />

      <Title>Esqueceu sua senha?</Title>
      <Description>
        Não esquenta, vamos dar um jeito nisso. Informe seu e-mail de cadastro.
      </Description>

      <Input name="email" icon="mail" placeholder="E-mail" />

      <Button>Recuperar senha</Button>

      <BackToSignIn onPress={() => goBack()}>
        <Feather name="arrow-left" size={20} color="#f4ede8" />
        <BackToSignInText>Voltar para o login</BackToSignInText>
      </BackToSignIn>
    </Container>
  );
}
