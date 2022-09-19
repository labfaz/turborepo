// pages/_document.js

import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />

          <link
            href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;700;900&display=swap"
            rel="stylesheet"
          />
          <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="%PUBLIC_URL%/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="%PUBLIC_URL%/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="%PUBLIC_URL%/favicon-16x16.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
