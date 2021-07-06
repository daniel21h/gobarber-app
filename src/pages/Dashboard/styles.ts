import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #312e38;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 48,
  },
})`
  flex: 1;
  padding: 0 30px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 136px;

  /* background-color: #28262e; */
`;

export const Title = styled.Text`
  font-family: 'RobotoSlab_400Regular';
  font-size: 20px;
  color: #999591;

  max-width: 220px;
`;

export const Span = styled.Text`
  font-family: 'RobotoSlab_600SemiBold';
  color: #ff9000;
`;

export const SearchButton = styled.TouchableOpacity``;

export const LocationArea = styled.View`
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

export const LocationButton = styled.TouchableOpacity``;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 40%;
`;
