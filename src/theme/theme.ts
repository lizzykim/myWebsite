import { DefaultTheme } from 'styled-components';

const lightTheme: DefaultTheme = {
  borderRadius: '10px',

  color: {
    background: '#fff',
    secondary: '#000000',
    third: 'gray',
  },
};

const darkTheme: DefaultTheme = {
  borderRadius: '20px',

  color: {
    background: '#45dddd',
    secondary: '#fff',
    third: 'pink',
  },
};

export { lightTheme, darkTheme };
