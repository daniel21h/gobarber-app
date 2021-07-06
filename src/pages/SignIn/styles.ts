import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;

  background-color: #312e38;
`;

export const Title = styled.Text`
  font-family: 'RobotoSlab_500Medium';
  font-size: 20px;
  text-align: center;
  color: #f4ede8;

  margin-top: 48px;
  margin-bottom: 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text`
  font-family: 'RobotoSlab_500Medium';
  font-size: 14px;
  color: #f4ede8;
`;

export const MessageToCreateAccount = styled.Text`
  font-family: 'RobotoSlab_400Regular';
  font-size: 18px;
  color: #f4ede8;

  margin-top: 48px;
`;

export const CreateAccountButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: 4px;
`;

export const CreateAccountButtonText = styled.Text`
  font-family: 'RobotoSlab_500Medium';
  font-size: 16px;
  color: #ff9000;

  margin-left: 16px;
`;
