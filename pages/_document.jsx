import Document, {Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en-US">
        <Head>
          <link rel="manifest" href="/static/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}