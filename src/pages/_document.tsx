import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="keywords" content="Android, Kotlin, Jetpack Compose, Desenvolvimento Android, Desenvolvimento mobile" />
          <meta name="author" content="Cleyson Diego" />

          <script dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.getItem('theme');
                if (theme === 'light' || theme === 'dark') {
                  document.documentElement.dataset.theme = theme;
                }
              } catch (e) {}
            `
          }} />

          <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`} />
          <script dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');
            `
          }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}