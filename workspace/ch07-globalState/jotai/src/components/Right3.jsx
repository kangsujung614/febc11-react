import { updateCount } from '@jotai/atom';
import { useSetAtom } from 'jotai';
import { useEffect } from 'react';

function Right3() {
  useEffect(()=>{
    console.log('      # Right3 렌더링.');
  });

  // const setCount = useSetAtom(countAtom);

  const setCount = useSetAtom(updateCount);

  return (
    <div>
      <h3>Right3</h3>
      {/* <button onClick={ () => setCount((count)=> count + 1) }>+1</button> */}
      <button onClick={ () => setCount(-2) }>-2</button>
      <button onClick={ () => setCount(0) }>0</button>
      <button onClick={ () => setCount(1) }>+1</button>
    </div>
  );
}

export default Right3;