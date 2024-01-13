import { DefaultTheme } from '@react-navigation/native';

export const colors = {
  darkBlue: '#1C172A',
  gray1: '#909097',
  lightGray1: '#E1E1E7',
  white: '#FCFCFF',
  darkRed1: '#432539',
  red1: '#E67166',
};

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.darkBlue,
    background: '#FFFF',
  },
};
