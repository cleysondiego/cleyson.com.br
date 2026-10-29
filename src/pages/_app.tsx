import { AppProps } from 'next/app';
import Head from 'next/head';
import { Archivo, JetBrains_Mono } from 'next/font/google';

import '../styles/global.scss';

const archivo = Archivo({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="color-scheme" content="light dark" />
      </Head>
      <div className={`app ${archivo.variable} ${jetbrainsMono.variable}`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
