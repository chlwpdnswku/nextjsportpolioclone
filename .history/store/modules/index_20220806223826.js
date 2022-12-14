import { combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import counter from './counter';

const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        return {
            ...state,
            ...action.payload
        };
    }
    return combineReducers({
        counter,
        // 여기에 추가
    })(state, action);
}

export default reducer;
출처: https://cotak.tistory.com/164 [TaxFree:티스토리]