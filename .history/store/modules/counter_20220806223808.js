// 컴포넌트/모듈내에서 사용하기 위해 정의한 액션 생성함수를
import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: 0 }; // 초기 상태 정의

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions; // 액션 생성함수
export default counterSlice.reducer; // 리듀서
