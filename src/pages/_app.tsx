import {AppProps} from 'next/app';
import {SubscribeContextProvider} from '../contexts/SubscribeContext';
import {FeedbackContextProvider} from '../contexts/FeedbackContext';
import '../../styles/index.css';

export default function MyApp({Component, pageProps}: AppProps) {
  return (
    <SubscribeContextProvider>
      <FeedbackContextProvider>
        <Component {...pageProps} />
      </FeedbackContextProvider>
    </SubscribeContextProvider>
  );
}
