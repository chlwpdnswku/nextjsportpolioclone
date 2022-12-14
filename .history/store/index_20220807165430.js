// 스토어를 생성하는 함수를 정의 ,  이를인자로 wrapper Hoc을 만듬
// configureStore: store를 생성한다.
// redux-toolkit은 devTools 등의 미들웨어들을 기본적으로 제공한다. 여기에 사용하고 싶은 미들웨어가 있다면 추가로 정의해준다.
// 위의 코드에선 logger를 추가해줬다.

import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import logger from 'redux-logger';

import reducer from './modules/slices';

// 미들웨어 추가 devTools빼고 형식은 공식문서확인
const makeStore = (context) =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
  });

export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== 'production',
});
