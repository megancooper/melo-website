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
          <script async data-id="604a2301-d2e9-44a6-b6b8-bf96edaf59d8" src="https://tinyads.io/e" />
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
