/* eslint-disable array-callback-return */
import React, { useCallback, useEffect, useState } from 'react';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import * as Location from 'expo-location';

import { useNavigation } from '@react-navigation/native';
import { Alert, RefreshControl } from 'react-native';
import server from '../../services/server.json';
import {
  Container,
  Header,
  Title,
  Span,
  SearchButton,
  LocationArea,
  TextInput,
  LocationButton,
  Content,
  LoadingIcon,
} from './styles';
import { BarberItem } from '../../components/BarberItem';
import { api } from '../../services/api';

interface IBarber {
  avatar: string;
  id: number;
  name: string;
  stars: number;
  week_days: string;
  office_hour: string;
  region: string;
}

export function Dashboard() {
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(false);
  const [barbers, setBarbers] = useState<IBarber[]>([]);
  const [coordinates, setCoordinates] =
    useState<Location.LocationObject | null>(null);

  const [refreshing, setRefreshing] = useState(false);

  const { navigate } = useNavigation();

  const handleLocation = useCallback(async () => {
    setCoordinates(null);

    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert('Permission to access location was denied.');
      return;
    }

    setLoading(true);
    setLocation('');

    const userLocation = await Location.getCurrentPositionAsync({});

    setCoordinates(userLocation);
    handleListBarbersByLocation();
  }, []);

  // const handleListBarbersByLocation = useCallback(async () => {
  //   setLoading(true);
  //   setBarbers([]);

  //   let lat = null;
  //   let lgn = null;

  //   if (coords) {
  //     lat = coords.latitude;
  //     lgn = coords.longitude;
  //   }

  //   const response = await api.getBarbers(lat, lgn, location);

  //   if (response.error === '') {
  //     setBarbers(response.data);
  //   } else {
  //     Alert.alert(`Erro: ${response.error}`);
  //   }

  //   setBarbers(server.data);

  //   setLoading(false);
  // }, []);

  async function handleListBarbersByLocation() {
    setLoading(true);
    setBarbers([]);

    setBarbers(server.data);

    setLoading(false);
  }

  function handleOnRefresh() {
    setRefreshing(false);

    handleListBarbersByLocation();
  }

  function handleLocationSearch() {
    setCoordinates(null);
    handleListBarbersByLocation();
  }

  useEffect(() => {
    handleListBarbersByLocation();
  }, []);

  return (
    <Container>
      <Content
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleOnRefresh} />
        }
      >
        <Header>
          <Title numberOfLines={2}>
            Encontre o seu <Span>Cabeleireiro favorito!</Span>
          </Title>
          <SearchButton onPress={() => navigate('Search')}>
            <Feather name="search" size={26} color="#f4ede8" />
          </SearchButton>
        </Header>

        <LocationArea>
          <TextInput
            placeholder="Onde você está?"
            placeholderTextColor="#666360"
            value={location}
            onChangeText={(value) => setLocation(value)}
            onEndEditing={handleLocationSearch}
          />
          <LocationButton onPress={handleLocation}>
            <MaterialIcons name="my-location" size={24} color="#999591" />
          </LocationButton>
        </LocationArea>

        {loading ? (
          <LoadingIcon size="large" color="#f4ede8" />
        ) : (
          barbers.map((barber: IBarber) => {
            return <BarberItem key={barber.id} data={barber} />;
          })
        )}
      </Content>
    </Container>
  );
}
