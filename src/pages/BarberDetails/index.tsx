/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { View } from 'react-native';
import Swipper from 'react-native-swiper';

import { IBarber } from '../../components/BarberItem';

import server from '../../services/server.json';

import {
  Container,
  Content,
  ContentHeader,
  BackgroundContainer,
  Header,
  BackButton,
  FavoriteButton,
  Background,
  Avatar,
  UserInfo,
  Username,
  Region,
  OfficeHourContainer,
  OfficeHour,
  ContextText,
  ServicesContainer,
  ServicesTitle,
  ServiceItem,
  ServiceInfo,
  ServiceName,
  ServicePrice,
  ServiceButton,
  ServiceButtonText,
  TestimonialContainer,
  TestimonialTitle,
  TestimonialItem,
  TestimonialHeader,
  TestimonialName,
  TestimonialBody,
} from './styles';
import { SingleStar } from '../../components/SingleStar';
import { LoadingIcon } from '../Dashboard/styles';
import { AppointmentModal } from '../../components/AppointmentModal';

interface IInformations {
  id: string;
  name: string;
  price: string;
}

interface ITestimonials {
  id: number;
  name: string;
  stars: number;
  body: string;
}

interface IParams {
  barber: IBarber;
}

export function BarberDetails() {
  const [loading, setLoading] = useState(false);
  const [informations, setInformations] = useState<IInformations[]>([]);
  const [testimonials, setTestimonials] = useState<ITestimonials[]>([]);

  const [favorited, setFavorited] = useState(false);

  const [selectedService, setSelectedService] = useState<IInformations>({});
  const [showModal, setShowModal] = useState(false);

  const { goBack } = useNavigation();

  const route = useRoute();
  const { barber } = route.params as IParams;

  function handleToggleFavorited() {
    if (favorited === true) setFavorited(false);
    if (favorited === false) setFavorited(true);
  }

  useEffect(() => {
    setLoading(true);
    setInformations(server.services);
    setTestimonials(server.testimonials);
    setLoading(false);
  }, []);

  function handleServiceAppoitment(item: IInformations) {
    setSelectedService(item);
    setShowModal(true);
  }

  return (
    <>
      <Container>
        <BackgroundContainer>
          <Header>
            <BackButton onPress={() => goBack()}>
              <Feather name="arrow-left" size={24} color="#f4ede8" />
            </BackButton>
          </Header>

          <Background source={{ uri: barber.avatar }} resizeMode="cover" />
        </BackgroundContainer>
        <Content>
          <ContentHeader>
            <Avatar source={{ uri: barber.avatar }} />

            <FavoriteButton onPress={handleToggleFavorited}>
              {favorited ? (
                <FontAwesome name="heart" size={24} color="#999591" />
              ) : (
                <FontAwesome name="heart-o" size={24} color="#999591" />
              )}
            </FavoriteButton>
          </ContentHeader>

          <UserInfo>
            <View>
              <Username>{barber.name}</Username>
              <Region>{barber.region}</Region>
            </View>
            <SingleStar stars={barber.stars} />
          </UserInfo>

          <OfficeHourContainer>
            <OfficeHour>
              <Feather name="calendar" size={16} color="#ff9000" />
              <ContextText>{barber.week_days}</ContextText>
            </OfficeHour>

            <OfficeHour>
              <Feather name="clock" size={16} color="#ff9000" />
              <ContextText>{barber.office_hour}</ContextText>
            </OfficeHour>
          </OfficeHourContainer>

          {loading ? (
            <LoadingIcon size="large" color="#f4ede8" />
          ) : (
            <ServicesContainer>
              <ServicesTitle>Lista de serviços</ServicesTitle>

              {informations.map((item: IInformations) => {
                return (
                  <ServiceItem key={item.id}>
                    <View
                      style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                      <Feather name="scissors" size={24} color="#ff9000" />
                      <ServiceInfo>
                        <ServiceName>{item.name}</ServiceName>
                        <ServicePrice>R$ {item.price}</ServicePrice>
                      </ServiceInfo>
                    </View>
                    <ServiceButton
                      onPress={() => handleServiceAppoitment(item)}
                    >
                      <ServiceButtonText>Agendar</ServiceButtonText>
                    </ServiceButton>
                  </ServiceItem>
                );
              })}
            </ServicesContainer>
          )}

          {testimonials && testimonials.length > 0 && (
            <TestimonialContainer>
              <TestimonialTitle>Depoimentos</TestimonialTitle>
              <Swipper
                style={{
                  height: 120,
                }}
                showsPagination={false}
                showsButtons
                prevButton={
                  <Feather name="chevron-left" size={24} color="#f4ede8" />
                }
                nextButton={
                  <Feather name="chevron-right" size={24} color="#f4ede8" />
                }
              >
                {testimonials.map((item: ITestimonials) => {
                  return (
                    <TestimonialItem key={item.id}>
                      <TestimonialHeader>
                        <TestimonialName>{item.name}</TestimonialName>
                        <SingleStar stars={item.stars} />
                      </TestimonialHeader>
                      <TestimonialBody numberOfLines={3}>
                        {item.body}
                      </TestimonialBody>
                    </TestimonialItem>
                  );
                })}
              </Swipper>
            </TestimonialContainer>
          )}
        </Content>

        <AppointmentModal
          show={showModal}
          setShow={setShowModal}
          barber={barber}
          service={selectedService}
        />
      </Container>
      {/* <StatusBar style="light" backgroundColor="transparent" translucent /> */}
      <StatusBar style="light" backgroundColor="#312e38" />
    </>
  );
}
