import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput, Icon } from './styles';

interface IInputProps extends TextInputProps {
  name: string;
  icon?: string;
}

export function Input({ icon, value, onChangeText, ...rest }: IInputProps) {
  return (
    <Container>
      <Icon name={icon} size={20} color="#666360" />

      <TextInput
        keyboardAppearance="dark"
        placeholderTextColor="#666360"
        value={value}
        onChangeText={onChangeText}
        {...rest}
      />
    </Container>
  );
}

export default Input;
