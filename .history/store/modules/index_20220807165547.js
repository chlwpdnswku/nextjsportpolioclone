// 모듈내에서 정의한 모듈들을 합쳐주는 역할
// 정의한 리듀서 모듈들을 결합하는 역할

import { combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import counter from './counter';

import user from './slices/user';
import post from './slices/post';

const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        return {
          ...state,
          ...action.payload,
        };
      default:
        return state;
    }
  },
  user,
  post,
});
export default rootReducer;
// 이 리듀서를 쪼개서 slice에 내가 담아줌
// const initialState = {
//   user: {
//     isLoggedIn: false,
//     user: null,
//     signUpdata: {},
//     loginData: {},
//   },
//   post: {
//     mainPosts: [],
//   },
// };
// export const loginAction = (data) => {
//   return {
//     type: 'LOG_IN',
//     data,
//   };
// };

// export const logoutAction = () => {
//   return {
//     type: 'LOG_OUT',
//   };
// };

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case HYDRATE:
//       return {
//         ...state,
//         ...action.payload,
//       };
//     case 'LOG_IN':
//       return {
//         ...state,
//         user: {
//           ...state.user,
//           isLoggedIn: true,
//           user: action.data,
//         },
//       };
//     case 'LOG_OUT':
//       return {
//         ...state,
//         user: {
//           ...state.user,
//           isLoggedIn: false,
//           user: null,
//         },
//       };
//     default:
//       return state;
//   }
// };

// export default rootReducer;

// 기본 정의 리듀서
// const reducer = (state, action) => {
//   // SSR작업 수행시 HYDRATE  라는 액션을 통해서 서버의 스토어와 클라이언트의 스토어를 합쳐줌
//   if (action.type === HYDRATE) {
//     return {
//       ...state,
//       ...action.payload,
//     };
//   }
//   // 리듀서 모듈 Slice을 추가 할 때마다 combineReducers 함수의 인자로 전달되는 객체 내부에 추가를 해줌
//   return combineReducers({
//     // 여기에 추가
//     counter,
//   })(state, action);
// };

// export default reducer;
