/* eslint-disable prefer-const */
import React, { useCallback, useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import CalendarPicker from 'react-native-calendar-picker';
import { Calendar, LocaleConfig } from 'react-native-calendars';

import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import {
  Container,
  Body,
  Content,
  CloseButton,
  BarberInfo,
  BarberAvatar,
  BarberName,
  BarberRegion,
  ServiceSelected,
  ServiceName,
  ServicePrice,
  CalendarTitle,
  HoursContainer,
  HoursGroupTitle,
  HoursGroup,
  Hours,
  HoursText,
  Padding,
} from './styles';
import { SingleStar } from '../SingleStar';
import { IBarber } from '../BarberItem';
import Button from '../Button';

interface IProps {
  show: any;
  setShow: any;
  barber: IBarber;
  service: {
    id: string;
    name: string;
    price: string;
  };
}

LocaleConfig.locales.br = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
  monthNamesShort: [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ],
  dayNames: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
  dayNamesShort: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
  today: "Aujourd'hui",
};
LocaleConfig.defaultLocale = 'br';

export function AppointmentModal({ show, setShow, barber, service }: IProps) {
  const { navigate } = useNavigation();

  const [selectedDay, setSelectedDay] = useState<any>();
  const [date, setDate] = useState('');

  const handleCloseButton = useCallback(() => {
    setShow(false);
  }, [setShow]);

  const handleAppointment = useCallback(() => { }, []);

  useEffect(() => {
    let today = new Date();

    let year = today.getFullYear();
    let month: any = today.getMonth();
    let day = today.getDate();

    if (month < 10) month = `0${month + 1}`;
  }, []);

  return (
    <>
      <Container transparent visible={show} animationType="slide">
        <Body>
          <CloseButton onPress={handleCloseButton} />
          <Content showsVerticalScrollIndicator={false}>
            <BarberInfo>
              <BarberAvatar source={{ uri: barber.avatar }} />
              <View style={{ alignItems: 'flex-start' }}>
                <BarberName>{barber.name}</BarberName>
                <BarberRegion>{barber.region}</BarberRegion>
                <SingleStar stars={barber.stars} />
              </View>
            </BarberInfo>

            <Padding>
              <ServiceSelected>
                <ServiceName>{service.name}</ServiceName>
                <ServicePrice>R$ {service.price}</ServicePrice>
              </ServiceSelected>
            </Padding>

            <Padding>
              <CalendarTitle>Escolha a data</CalendarTitle>

              <Calendar
                enableSwipeMonths
                hideExtraDays
                markingType="custom"
                onDayPress={(day: any) => {
                  setSelectedDay(day);
                  console.log(selectedDay);
                }}
                markedDates={{
                  date: {
                    customStyles: {
                      container: {
                        backgroundColor: '#ff9000',
                        borderRadius: 10,
                      },
                      text: {
                        color: '#28262E',
                      },
                    },
                  },
                }}
                // // Specify style for calendar container element. Default = {}
                style={{
                  borderRadius: 10,
                  marginTop: 24,
                }}
                // Specify theme properties to override specific styles for calendar parts. Default = { }
                theme={{
                  backgroundColor: '#ff9000',
                  calendarBackground: '#28262E',
                  textSectionTitleColor: '#666360',
                  textSectionTitleDisabledColor: '#666360',
                  selectedDayBackgroundColor: '#ff9000',
                  selectedDayTextColor: '#28262E',
                  todayTextColor: '#ff9000',
                  dayTextColor: '#666360',
                  textDisabledColor: '#666360',
                  dotColor: '#ff9000',
                  selectedDotColor: '#F4EDE8',
                  arrowColor: '#999591',
                  disabledArrowColor: '#666360',
                  monthTextColor: '#F4EDE8',
                  textDayFontFamily: 'RobotoSlab_400Regular',
                  textMonthFontFamily: 'RobotoSlab_500Medium',
                  textDayHeaderFontFamily: 'RobotoSlab_500Medium',
                  textDayFontWeight: '300',
                  textDayHeaderFontWeight: '300',
                  textDayFontSize: 16,
                  textMonthFontSize: 16,
                  textDayHeaderFontSize: 16,

                  'stylesheet.calendar.header': {
                    header: {
                      backgroundColor: '#3E3B47',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingLeft: 10,
                      paddingRight: 10,
                      margin: 0,
                      marginLeft: -5,
                      marginRight: -5,
                      alignItems: 'center',
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                    },
                    week: {
                      marginTop: 5,
                      marginBottom: 20,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    },
                  },
                }}
              />
              <CalendarTitle>Escolha o horário</CalendarTitle>
            </Padding>

            <HoursContainer>
              <HoursGroupTitle>Manhã</HoursGroupTitle>
              <HoursGroup horizontal showsHorizontalScrollIndicator={false}>
                <Hours>
                  <HoursText>09:00</HoursText>
                </Hours>
                <Hours>
                  <HoursText>10:00</HoursText>
                </Hours>
                <Hours>
                  <HoursText>10:30</HoursText>
                </Hours>
                <Hours>
                  <HoursText>11:00</HoursText>
                </Hours>
                <Hours>
                  <HoursText>11:30</HoursText>
                </Hours>
              </HoursGroup>

              <HoursGroupTitle>Tarde</HoursGroupTitle>
              <HoursGroup horizontal showsHorizontalScrollIndicator={false}>
                <Hours>
                  <HoursText>13:00</HoursText>
                </Hours>
                <Hours>
                  <HoursText>14:00</HoursText>
                </Hours>
                <Hours>
                  <HoursText>15:30</HoursText>
                </Hours>
                <Hours>
                  <HoursText>16:00</HoursText>
                </Hours>
                <Hours>
                  <HoursText>16:30</HoursText>
                </Hours>
              </HoursGroup>
            </HoursContainer>

            <Padding>
              <Button onPress={handleAppointment}>Finalizar agendamento</Button>
            </Padding>
          </Content>
        </Body>
      </Container>
    </>
  );
}
