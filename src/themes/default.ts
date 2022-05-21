import {DefaultTheme} from 'styled-components/native';

const COLORS = {
  white: '#E9EAEB',
  darkBluePrimary: '#0D1821',
  darkBlueSecondary: '#252E39',
  darkBlueThird: '#5A6777',
  whiteBlue: '#00B9E7'
};

const defaultTheme: DefaultTheme = {
  backgroundColor: COLORS.darkBluePrimary,
  tabBarColor: COLORS.darkBlueSecondary,
  appChipColor: COLORS.whiteBlue,
  textColor: COLORS.darkBlueThird
};

export {defaultTheme, COLORS};
