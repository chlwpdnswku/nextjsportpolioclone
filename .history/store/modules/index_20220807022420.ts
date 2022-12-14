// 모듈내에서 정의한 모듈들을 합쳐주는 역할
// 정의한 리듀서 모듈들을 결합하는 역할

import { AnyAction, CombinedState, combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import counter from './counter';

const reducer = (
  state: CombinedState<{ counter: { value: number } }> | undefined,
  action: AnyAction
) => {
  // SSR작업 수행시 HYDRATE  라는 액션을 통해서 서버의 스토어와 클라이언트의 스토어를 합쳐줌
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  // 리듀서 모듈 Slice을 추가 할 때마다 combineReducers 함수의 인자로 전달되는 객체 내부에 추가를 해줌
  return combineReducers({
    // 여기에 추가
    counter,
  })(state, action);
};

export default reducer;
