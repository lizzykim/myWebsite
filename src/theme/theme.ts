import { DefaultTheme } from 'styled-components';
import colors from './colors';

const lightTheme: DefaultTheme = {
  borderRadius: '10px',

  color: {
    background: colors.beige,
    background2: colors.beige,
    background_shadow: colors.dark_beige,
    background_light_shadow: colors.light_beige,
    headline: colors.navy,
    paragraph: colors.navy,
    button: colors.pink,
    button2: colors.orange_pink,
    secondary: colors.baby_blue,
    card_paragraph: colors.light_navy,
    card_heading: colors.navy,
    card_border: colors.light_navy,
    card_hover: colors.pink,
    card_hover_text: colors.light_navy,
  },
};

const darkTheme: DefaultTheme = {
  borderRadius: '20px',

  color: {
    background: colors.ash,
    background2: colors.ash,
    background_shadow: colors.dark_navy,
    background_light_shadow: colors.light_ash,
    headline: colors.white,
    paragraph: colors.light_navy_2,
    button: colors.baby_pink,
    button2: colors.light_navy_2,
    card_paragraph: colors.white,
    card_heading: colors.white,
    card_border: colors.black,
    card_hover: colors.baby_pink,
    card_hover_text: colors.ash,
  },
};

export { lightTheme, darkTheme };
