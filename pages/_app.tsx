import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { MyGlobalStyle } from '../src/theme/globalStyles';
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
