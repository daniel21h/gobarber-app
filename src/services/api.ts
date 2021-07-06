import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_API = 'https://api.b7web.com.br/devbarber/api';

interface ISignIn {
  email: string;
  password: string;
}

interface ISignUp {
  name: string;
  email: string;
  password: string;
}

export const api = {
  checkToken: async (token: string) => {
    const request = await fetch(`${BASE_API}/auth/refresh`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    });

    const json = await request.json();

    return json;
  },

  signIn: async ({ email, password }: ISignIn) => {
    const request = await fetch(`${BASE_API}/auth/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const json = await request.json();

    return json;
  },

  signUp: async ({ name, email, password }: ISignUp) => {
    const request = await fetch(`${BASE_API}/user`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    const json = await request.json();

    return json;
  },

  logout: async () => {
    const token = await AsyncStorage.getItem('token');

    const request = await fetch(`${BASE_API}/auth/logout`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    });

    const json = await request.json();

    return json;
  },

  getBarbers: async (latitude = null, longitude = null, address = null) => {
    const token = await AsyncStorage.getItem('token');

    const request = await fetch(
      `${BASE_API}/barbers?token=${token}&latitude=${latitude}&longitude=${longitude}&address=${address}`,
    );

    console.log('Latitude', latitude);
    console.log('Longitude', longitude);
    console.log('Address', address);

    const json = await request.json();

    return json;
  },
};
