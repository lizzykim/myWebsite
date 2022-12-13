import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { MyGlobalStyle } from '.';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MyGlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
