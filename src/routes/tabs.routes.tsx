import React from 'react';
import { Feather } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { RectButton } from 'react-native-gesture-handler';

import { Dashboard } from '../pages/Dashboard';
import { Search } from '../pages/Search';
import { Appointments } from '../pages/Appointments';
import { Favorites } from '../pages/Favorites';
import { Profile } from '../pages/Profile';

const { Navigator, Screen } = createBottomTabNavigator();

export function TabsRoutes() {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 10,
          shadowOpacity: 0,
          height: 72,
          paddingBottom: 0,
          borderTopColor: '#28262E',
        },
        tabStyle: {
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
          marginBottom: 4,
        },
        labelStyle: {
          fontFamily: 'RobotoSlab_500Medium',
          fontSize: 12,
        },
        inactiveBackgroundColor: '#28262E',
        activeBackgroundColor: '#28262E',
        inactiveTintColor: 'rgba(244, 237, 232, .2)',
        activeTintColor: '#F4EDE8',
      }}
    >
      <Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Feather
                name="home"
                size={size}
                color={focused ? '#F4EDE8' : color}
              />
            );
          },
        }}
      />
      <Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Busca',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Feather
                name="search"
                size={size}
                color={focused ? '#F4EDE8' : color}
              />
            );
          },
        }}
      />

      <Screen
        name="Appointments"
        component={Appointments}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <RectButton
                style={{
                  width: 64,
                  height: 64,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#ff9000',
                  borderRadius: 24,
                  elevation: 3,

                  marginTop: -36,
                }}
              >
                <Feather name="calendar" size={size} color="#28262E" />
              </RectButton>
            );
          },
        }}
      />

      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Feather
                name="heart"
                size={size}
                color={focused ? '#F4EDE8' : color}
              />
            );
          },
        }}
      />

      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Feather
                name="user"
                size={size}
                color={focused ? '#F4EDE8' : color}
              />
            );
          },
        }}
      />
    </Navigator>
  );
}
