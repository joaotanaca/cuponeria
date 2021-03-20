import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Global from 'styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Global />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
