import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { MyGlobalStyle } from '../src/theme/globalStyles';
import { ThemeProvider, useTheme } from 'styled-components';
import { darkTheme, lightTheme } from '../src/theme/theme';
import { useDarkMode } from '../src/utils/hooks/useDarkMode';
import CssBaseline from '@mui/material/CssBaseline';
import Layout from '../src/components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MyGlobalStyle />
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
