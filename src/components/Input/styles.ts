import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.SafeAreaView`
  width: 100%;
  height: 56px;
  padding: 0 16px;
  background: #232129;
  border-radius: 10px;
  margin-bottom: 8px;

  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;

  font-family: 'RobotoSlab_400Regular';
  font-size: 16px;
  color: #f4ede8;
`;

export const Icon = styled(Feather)`
  margin-right: 16px;
`;
