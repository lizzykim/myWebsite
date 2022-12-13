import Head from 'next/head';
import styles from '../styles/Home.module.css';
import styled, { createGlobalStyle } from 'styled-components';
import { myTheme } from '../my-theme';

export const MyGlobalStyle = createGlobalStyle`
  body {
    color: blueviolet
  }

`;

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <span>aljdf;lkS</span>
      <h1>lala</h1>
    </div>
  );
}
