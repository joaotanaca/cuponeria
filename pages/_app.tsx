import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Global from 'styles/global';
import Navbar from 'src/components/Navbar';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

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
      <Navbar />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
