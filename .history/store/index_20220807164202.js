// 스토어를 생성하는 함수를 정의 ,  이를인자로 wrapper Hoc을 만듬
// configureStore: store를 생성한다.
// redux-toolkit은 devTools 등의 미들웨어들을 기본적으로 제공한다. 여기에 사용하고 싶은 미들웨어가 있다면 추가로 정의해준다.
// 위의 코드에선 logger를 추가해줬다.

import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import logger from 'redux-logger';
import { applyMiddleware, compose, createStore } from 'redux';
import reducer from '../reducers/index';

import reducer from './modules';

const configureStore = () => {
  const middlewares = [];
  //개발모드일때는 redux-devtools-extension사용가능하게
  const enhancer =
    process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(reducer, enhancer); //앱의 상태를 유지하는 Redux 스토어를 만듭니다
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;

// // 미들웨어 추가 devTools빼고 형식은 공식문서확인
// const makeStore = (context) =>
//   configureStore({
//     reducer,
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
//     devTools: process.env.NODE_ENV !== 'production',
//   });

// export const wrapper = createWrapper(makeStore, {
//   debug: process.env.NODE_ENV !== 'production',
// });
