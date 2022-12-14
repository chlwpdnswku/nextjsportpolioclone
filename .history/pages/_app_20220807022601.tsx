import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { wrapper } from '../store';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <Component {...pageProps} />;
      </Head>
    </>
  );
}

export default wrapper.withRedux(MyApp);
