import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 48,
    alignItems: 'center',
  },
})`
  flex: 1;
  background-color: #312e38;
`;

export const BackgroundContainer = styled.View`
  width: 100%;
  height: 250px;
`;

export const Header = styled.TouchableOpacity`
  position: absolute;
  z-index: 15;

  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 40px 30px;
`;

export const BackButton = styled.TouchableOpacity`
  background-color: #312e38;
  padding: 6px;
  border-radius: 100px;
`;

export const Background = styled.Image`
  width: 100%;
  height: 100%;

  background: #111;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;

  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background-color: #312e38;

  margin-top: -30px;
`;

export const ContentHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 24px;
  border-width: 3px;
  border-color: #312e38;

  margin-top: -30px;
  margin-bottom: 16px;
  background-color: #28262e;
`;

export const FavoriteButton = styled.TouchableOpacity``;

export const UserInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 30px;
`;

export const Username = styled.Text`
  font-family: 'RobotoSlab_500Medium';
  font-size: 20px;
  color: #f4ede8;

  margin-bottom: 4px;
`;

export const Region = styled.Text`
  font-family: 'RobotoSlab_500Medium';
  font-size: 12px;
  color: #999591;
`;

export const OfficeHourContainer = styled.View`
  margin-top: 24px;
  padding: 0 30px;
`;

export const OfficeHour = styled.View`
  flex-direction: row;
  align-items: center;

  margin-bottom: 10px;
`;

export const ContextText = styled.Text`
  font-family: 'RobotoSlab_400Regular';
  font-size: 14px;
  color: #999591;

  margin-left: 6px;
`;

export const ServicesContainer = styled.View`
  padding: 0 30px;
`;

export const ServicesTitle = styled.Text`
  font-family: 'RobotoSlab_500Medium';
  font-size: 18px;
  color: #f4ede8;
  opacity: 0.8;

  margin-top: 32px;
  margin-bottom: 16px;
`;

export const ServiceItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: #3e3b47;
  border-radius: 12px;
  padding: 16px;

  margin-bottom: 12px;
`;

export const ServiceInfo = styled.View`
  margin-left: 8px;
`;

export const ServiceName = styled.Text`
  font-family: 'RobotoSlab_500Medium';
  font-size: 16px;
  color: #f4ede8;
`;

export const ServicePrice = styled.Text`
  font-family: 'RobotoSlab_500Medium';
  font-size: 14px;
  color: #999591;
`;

export const ServiceButton = styled(RectButton)`
  background: #ff9000;
  border-radius: 10px;
  padding: 10px 12px;
`;

export const ServiceButtonText = styled.Text`
  font-family: 'RobotoSlab_500Medium';
  font-size: 14px;
  color: #312e38;
`;

export const TestimonialContainer = styled.View``;

export const TestimonialTitle = styled.Text`
  font-family: 'RobotoSlab_500Medium';
  font-size: 18px;
  color: #f4ede8;
  opacity: 0.8;

  margin-top: 32px;
  margin-bottom: 16px;
  padding: 0 30px;
`;

export const TestimonialItem = styled.View`
  justify-content: space-between;
  align-items: center;

  background-color: #3e3b47;
  border-radius: 12px;
  padding: 16px;

  margin: 0px 30px;
`;

export const TestimonialHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TestimonialName = styled.Text`
  font-family: 'RobotoSlab_500Medium';
  font-size: 16px;
  color: #f4ede8;
`;

export const TestimonialBody = styled.Text`
  font-family: 'RobotoSlab_400Regular';
  font-size: 12px;
  color: #999591;

  margin-top: 10px;
  text-align: justify;
`;
