import { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="color-scheme" content="dark light" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
