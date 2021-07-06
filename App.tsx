import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import React from 'react';
import Toast from 'react-native-toast-message';

import {
  RobotoSlab_400Regular,
  RobotoSlab_500Medium,
  RobotoSlab_600SemiBold,
  RobotoSlab_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto-slab';

import { Routes } from './src/routes/stack.routes';
import { UserContextProvider } from './src/contexts/UserContext.jsx';
import { toastConfig } from './src/utils/testConfig';

export default function App() {
  const [fontsLoaded] = useFonts({
    RobotoSlab_400Regular,
    RobotoSlab_500Medium,
    RobotoSlab_600SemiBold,
    RobotoSlab_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <UserContextProvider>
      <Routes />
      <StatusBar style="light" backgroundColor="#312e38" />
      <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
    </UserContextProvider>
  );
}
