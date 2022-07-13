import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

// import favicon from '../data/imageExports';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* <link rel="shortcut icon" href={favicon} /> */}

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/public/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/public/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/public/favicon-16x16.png"
          />
          <link rel="manifest" href="/public/favicon/site.webmanifest" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#f4f4fc" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
