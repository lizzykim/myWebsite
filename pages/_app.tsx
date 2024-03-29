import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { MyGlobalStyle } from '../src/theme/globalStyles';
import CssBaseline from '@mui/material/CssBaseline';
import Layout from '../src/components/Layout';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import '@fontsource/inter';

export const DEFAULT_SEO = {
  title: 'Dayoung Kim',
  description:
    'Dayoung Kim is a frontend developer seeking for new job opportunity',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://dayoungkim.vercel.app',
    title: "Dayoung Kim's Website",
    site_name: 'Dayoung Kim',
    description:
      'Dayoung Kim is a frontend developer seeking for new job opportunity',
    images: [
      {
        url: '/img/intro.png',
        width: 800,
        height: 400,
        alt: 'Intro',
      },
    ],
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <DefaultSeo {...DEFAULT_SEO} />
        <title>Dayoung Kim</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <MyGlobalStyle />
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </>
  );
}
