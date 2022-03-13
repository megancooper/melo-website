import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import {createGetInitialProps} from '@mantine/next';

const getInitialProps = createGetInitialProps();

// eslint-disable-next-line @typescript-eslint/naming-convention
export default class _Document extends Document {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/static/favicon.ico" />
        </Head>
        {' '}
        <body className="light">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
