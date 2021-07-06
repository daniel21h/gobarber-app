import React from 'react';
import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Avatar,
  Content,
  Username,
  OfficeHour,
  ContextText,
  SingleStarContainer,
} from './styles';
import { SingleStar } from '../SingleStar';

export interface IBarber {
  avatar: string;
  id: number;
  name: string;
  stars: number;
  week_days: string;
  office_hour: string;
  region: string;
}

interface IBarberItemProps {
  data: IBarber;
}

export function BarberItem({ data }: IBarberItemProps) {
  const { navigate } = useNavigation();

  function handleNavigateToBarberDetails(barber: IBarber) {
    navigate('BarberDetails', { barber });
  }

  return (
    <Container onPress={() => handleNavigateToBarberDetails(data)}>
      <Avatar source={{ uri: data.avatar }} />
      <Content>
        <Username>{data.name}</Username>

        <OfficeHour>
          <Feather name="calendar" size={14} color="#ff9000" />
          <ContextText>{data.week_days}</ContextText>
        </OfficeHour>

        <OfficeHour>
          <Feather name="clock" size={14} color="#ff9000" />
          <ContextText>{data.office_hour}</ContextText>
        </OfficeHour>
      </Content>

      <SingleStarContainer>
        <SingleStar stars={data.stars} />
      </SingleStarContainer>
    </Container>
  );
}
