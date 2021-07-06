import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { SignIn } from '../pages/SignIn';
import { Preload } from '../pages/Preload';
import { SignUp } from '../pages/SignUp';
import { ForgotPassword } from '../pages/ForgotPassword';
import { TabsRoutes } from './tabs.routes';
import { BarberDetails } from '../pages/BarberDetails';

const { Navigator, Screen } = createStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Preload"
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Screen name="Preload" component={Preload} />
        <Screen name="SignIn" component={SignIn} />
        <Screen name="ForgotPassword" component={ForgotPassword} />
        <Screen name="SignUp" component={SignUp} />

        <Screen name="Dashboard" component={TabsRoutes} />

        <Screen
          name="BarberDetails"
          component={BarberDetails}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
