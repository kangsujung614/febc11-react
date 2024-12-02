export const COUNTER_ACTION = {
  UP: 'countUp',
  DOWN: 'countDown',
  RESET: 'countReset',
};

// 액션을 생성해서 반환
// counterActionCreator.countUp(2); // 이렇게 호출하면
// return { type: 'countUp', payload: { step: 2 } } // 반환
const counterActionCreator = {
  countUp: (step) => ({ type: COUNTER_ACTION.UP, payload: { step } }),
  countDown: (step) => ({ type: COUNTER_ACTION.DOWN, payload: { step } }),
  countReset: () => ({ type: COUNTER_ACTION.RESET }),
};

export default counterActionCreator;