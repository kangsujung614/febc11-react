import { countState } from '@recoil/atoms';
import { countStateKor } from '@recoil/selectors';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

function Left3() {
  useEffect(()=>{
    console.log('      # Left3 렌더링.');
  });

  // getter 작업만 필요한 경우 useRecoilValue 훅 사용
  // const count = useRecoilValue(countState);

  const korCount = useRecoilValue(countStateKor);

  return (
    <div>
      <h1>Left3: {korCount}</h1>
      {/* <h3>Left3</h3>
      <span>{ count }</span> */}
    </div>
  );
}

export default Left3;