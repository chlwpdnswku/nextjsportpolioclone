import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { wrapper } from '../store';
import Head from 'next/head';

import PropTypes from 'prop-types';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <title>제운이의 로그인을 공부해보자</title>
        <Component {...pageProps} />;
      </Head>
    </>
  );
}
// 이건 시도때도없이 넣음 혹시모르니 넣어보고 공부
MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(MyApp);
