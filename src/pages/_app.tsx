import { GlobalStyles } from '@/styles/global';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>React Avançado - Boilerplate</title>
    </Head>
    <Component {...pageProps} />
    <GlobalStyles />
  </>
);

export default App;
