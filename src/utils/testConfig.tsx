import React from 'react';
import { BaseToast, BaseToastProps } from 'react-native-toast-message';

interface IToastConfig extends BaseToastProps {
  error: () => React.FC;
  success: () => React.FC;
}

export const toastConfig: IToastConfig = {
  error: ({ text1, text2, ...rest }: IToastConfig) => {
    return (
      <BaseToast
        {...rest}
        style={{
          backgroundColor: '#181818',
          height: 60,
          borderColor: '#ff5000',
        }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontSize: 16,
          color: '#ff5000',
        }}
        text2Style={{
          fontSize: 14,
          color: '#f4ede8',
        }}
        text1={text1}
        text2={text2}
      />
    );
  },
  success: ({ text1, text2, ...rest }: IToastConfig) => {
    return (
      <BaseToast
        {...rest}
        style={{
          backgroundColor: '#181818',
          height: 60,
          borderColor: '#ff9000',
        }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontSize: 16,
          color: '#ff9000',
        }}
        text2Style={{
          fontSize: 14,
          color: '#f4ede8',
        }}
        text1={text1}
        text2={text2}
      />
    );
  },
};
