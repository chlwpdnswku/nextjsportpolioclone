// 리듀서 모듈
import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: 0 }; // 초기 상태 정의

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // 증가와 감소 리듀너 만듬
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
