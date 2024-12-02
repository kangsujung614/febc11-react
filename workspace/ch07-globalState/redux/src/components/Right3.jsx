import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import counterActionCreator from '@redux/counterActionCreator';
import { countDown, countReset, countUp } from '@redux-toolkit/counterSlice';

function Right3() {
  useEffect(()=>{
    console.log('      # Right3 렌더링.');
  });

  // 상태값을 수정하기 위한 훅 사용
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Right3</h3>
      {/* <button onClick={ () => {dispatch(counterActionCreator.countDown(1))} }>-1</button>
      <button onClick={ () => {dispatch(counterActionCreator.countReset())} }>0</button>
      <button onClick={ () => {dispatch(counterActionCreator.countUp(1))} }>+1</button> */}
      {/* dispatch(counterActionCreator.countUp(2))이 { type: 'countUp', payload: { step: 2 }을 반환하는 방식 */}

      {/* redux toolkit */}
      <button onClick={ () => dispatch(countDown(1))}>-1</button>
      <button onClick={ () => dispatch(countReset)}>0</button>
      <button onClick={ () => dispatch(countUp(1))}>+1</button>
    </div>
  );
}

export default Right3;