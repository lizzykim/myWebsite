import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { MyGlobalStyle } from '../src/theme/globalStyles';
import { ThemeProvider } from 'styled-components';

import { useState } from 'react';
import { darkTheme, lightTheme } from '../src/theme/theme';

export default function App({ Component, pageProps }: AppProps) {
  const [themeMode, setThemeMode] = useState('light');
  const theme = themeMode === 'light' ? lightTheme : darkTheme;

  const toggleTheme = () => {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <MyGlobalStyle />
        <button onClick={toggleTheme}>Switch Theme</button>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
