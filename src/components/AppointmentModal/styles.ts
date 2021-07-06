import styled from 'styled-components/native';

export const Container = styled.Modal``;

export const Body = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: flex-end;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 72,
  },
})`
  background-color: #312e38;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  min-height: 300px;
  max-height: 80%;
`;

export const CloseButton = styled.TouchableOpacity`
  flex: 1;
`;

export const BarberInfo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  padding: 44px 30px 30px;
`;

export const BarberAvatar = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 24px;

  background-color: #28262e;
  margin-right: 16px;
`;

export const BarberName = styled.Text`
  font-family: 'RobotoSlab_500Medium';
  font-size: 20px;
  color: #f4ede8;

  margin-bottom: 4px;
`;

export const BarberRegion = styled.Text`
  font-family: 'RobotoSlab_500Medium';
  font-size: 12px;
  color: #999591;

  margin-bottom: 6px;
`;

export const Padding = styled.View`
  padding-left: 30px;
  padding-right: 30px;
`;

export const ServiceSelected = styled.View`
  background-color: #28262e;
  padding: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-radius: 10px;

  margin-top: 30px;
`;

export const ServiceName = styled.Text`
  font-family: 'RobotoSlab_500Medium';
  font-size: 16px;
  color: #f4ede8;
`;

export const ServicePrice = styled.Text`
  font-family: 'RobotoSlab_500Medium';
  font-size: 16px;
  color: #999591;
`;

export const CalendarTitle = styled.Text`
  font-family: 'RobotoSlab_500Medium';
  font-size: 20px;
  color: #f4ede8;
  margin-top: 24px;
`;

export const HoursContainer = styled.View`
  padding: 0;
`;

export const HoursGroupTitle = styled.Text`
  font-family: 'RobotoSlab_500Medium';
  font-size: 16px;
  color: #999591;

  padding-left: 30px;
  padding-right: 30px;

  margin-top: 20px;
  margin-bottom: 8px;
`;

export const HoursGroup = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexDirection: 'row',
    paddingHorizontal: 30,
  },
})``;

export const Hours = styled.View`
  margin-left: 8px;
  background-color: #3e3b47;
  padding: 10px 16px;
  border-radius: 10px;
`;

export const HoursText = styled.Text`
  font-family: 'RobotoSlab_500Medium';
  font-size: 16px;
  color: #f4ede8;
`;
