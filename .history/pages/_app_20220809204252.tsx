import '../styles/globals.css';
import type { AppProps } from 'next/app';
// import { wrapper } from '../store';

import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  // const { isLoggedIn } = useSelector((state: any) => state.user);
  // const { mainPosts } = useSelector((state: any) => state.post);
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <title>현재 app.tsx pages</title>
        <Component {...pageProps} />;
      </Head>
    </>
  );
}
// // 이건 시도때도없이 넣음 혹시모르니 넣어보고 공부

export default MyApp;
