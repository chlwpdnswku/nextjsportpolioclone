// 이제 input에 대한 state를 만들 차례인데요. 근데 한가지 문제가 있습니다. input하나하나 마다 value와 onChange이벤트를 달고 그 이벤트에대한 state, eventHandler 코드를 작성한다면 코드양이 너무 많아 질 것입니다. 그래서 공통된 부분은 Custom Hook을 만들어 코드양을 줄이고자 합니다.
import { useState, useCallback } from 'react';

export default (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return [value, handler];
};
