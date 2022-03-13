import Head from 'next/head';
import {AppProps} from 'next/app';
import {MantineProvider} from '@mantine/core';
import {SubscribeContextProvider} from '../contexts/SubscribeContext';
import {FeedbackContextProvider} from '../contexts/FeedbackContext';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const App = ({Component, pageProps}: AppProps) => (
  <>
    <Head>
      <title>Melo</title>
    </Head>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'light',
      }}
    >
      <SubscribeContextProvider>
        <FeedbackContextProvider>
          <Navigation />
          <Component {...pageProps} />
          <Footer />
        </FeedbackContextProvider>
      </SubscribeContextProvider>
    </MantineProvider>
  </>
);

export default App;
