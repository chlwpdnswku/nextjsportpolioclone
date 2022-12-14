// 모듈내에서 정의한 모듈들을 합쳐주는 역할
//

import { combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import counter from './counter';

const reducer = (state, action) => {
  // SSR작업 수행시 HYDRATE  라는 액션을 통해서 서버의 스토어와 클라이언트를
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return combineReducers({
    counter,
    // 여기에 추가
  })(state, action);
};

export default reducer;
