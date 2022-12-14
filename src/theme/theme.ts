import { DefaultTheme } from 'styled-components';

const lightTheme: DefaultTheme = {
  borderRadius: '10px',

  color: {
    main: '#1c1f25',
    secondary: '#fff',
    third: 'gray',
  },
};

const darkTheme: DefaultTheme = {
  borderRadius: '20px',

  color: {
    main: '#45dddd',
    secondary: '#fff',
    third: 'pink',
  },
};

export { lightTheme, darkTheme };
