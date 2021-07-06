import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  position: relative;
  background-color: #3e3b47;
  border-radius: 12px;
  height: 112px;

  flex-direction: row;
  align-items: center;
  padding: 16px;

  margin: 8px 0;
`;

export const Avatar = styled.Image`
  width: 72px;
  height: 72px;
  border-radius: 16px;
`;

export const Content = styled.View`
  margin-left: 16px;
`;

export const Username = styled.Text`
  font-family: 'RobotoSlab_500Medium';
  font-size: 18px;
  color: #f4ede8;

  margin-bottom: 12px;
`;

export const OfficeHour = styled.View`
  flex-direction: row;
  align-items: center;

  margin-bottom: 6px;
`;

export const ContextText = styled.Text`
  font-family: 'RobotoSlab_400Regular';
  font-size: 12px;
  color: #999591;

  margin-left: 6px;
`;

export const SingleStarContainer = styled.View`
  position: absolute;
  bottom: 6px;
  right: 6px;
`;
