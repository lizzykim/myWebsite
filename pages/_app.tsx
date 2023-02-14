import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { MyGlobalStyle } from '../src/theme/globalStyles';
import CssBaseline from '@mui/material/CssBaseline';
import Layout from '../src/components/Layout';
import { DefaultSeo } from 'next-seo';

export const DEFAULT_SEO = {
  title: 'Dayoung Kim',
  description:
    'Dayoung Kim is a frontend developer seeking for new job opportunity',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: '카카오톡, 페이스북에 링크 넣으면 연결되는 url',
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
      <DefaultSeo {...DEFAULT_SEO} />
      <MyGlobalStyle />
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
