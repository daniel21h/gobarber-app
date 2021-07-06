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
  margin-bottom: 40px;
`;

export const Description = styled.Text`
  font-family: 'RobotoSlab_400Regular';
  font-size: 15px;
  text-align: center;
  color: #f4ede8;

  margin-bottom: 24px;
`;

export const BackToSignIn = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: 48px;
`;

export const BackToSignInText = styled.Text`
  font-family: 'RobotoSlab_600SemiBold';
  font-size: 16px;
  color: #f4ede8;

  margin-left: 16px;
`;
