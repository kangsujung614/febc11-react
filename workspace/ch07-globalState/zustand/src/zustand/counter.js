import { create } from "zustand";

// 객체를 반환하는 함수를 zustand에서 제공해주는 create로 정의
const useCounterState = create((set, get)=> ({
  count: 6,

  countUp: (step) => {
    const newState = { count: get().count + step };
    set(newState);
  },
}));

export default useCounterState;