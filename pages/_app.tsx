import { AppProps } from 'next/app';
import PlausibleProvider from 'next-plausible'

import '@/styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider domain="example.com">
      <Component {...pageProps} />;
    </PlausibleProvider>
  )
}

export default App;
