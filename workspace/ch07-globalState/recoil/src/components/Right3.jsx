import { countState } from '@recoil/atoms';
import { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

function Right3() {
  useEffect(()=>{
    console.log('      # Right3 렌더링.');
  });

  // setter 작업만 필요한 경우 useSetRecoilState 훅 사용
  // const setCount = useSetRecoilState(countState);

  // const countUp = function(step){
  //   setCount((count) => count + step);
  // }
  
  // getter/setter 작업이 모두 필요하면 useRecoilState 훅 사용
  const [plus, setPlus] = useRecoilState(countState);

  const countUp = function(step){
    setPlus((count) => count + step);
  }

  return (
    <div>
      <h3>Right3</h3>
      <p>{plus}</p>
      {/* <button onClick={ () => countUp(1) }>+1</button> */}
      <button onClick={ () => countUp(1) }>+1</button>
    </div>
  );
}

export default Right3;