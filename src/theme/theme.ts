import { DefaultTheme } from 'styled-components';
import colors from './colors';

const lightTheme: DefaultTheme = {
  borderRadius: '10px',

  color: {
    background: colors.beige,
    background_shadow: colors.dark_beige,
    background_light_shadow: colors.light_beige,
    headline: colors.navy,
    paragraph: colors.navy,
    button: colors.pink,
    secondary: colors.baby_blue,
  },
};

const darkTheme: DefaultTheme = {
  borderRadius: '20px',

  color: {
    background: colors.ash,
    background_shadow: colors.dark_navy,
    background_light_shadow: colors.light_ash,
    headline: colors.white,
    paragraph: colors.light_navy_2,
    button: colors.baby_pink,
  },
};

export { lightTheme, darkTheme };
