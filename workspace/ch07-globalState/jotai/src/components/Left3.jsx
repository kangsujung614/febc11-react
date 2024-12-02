import { countAtom } from '@jotai/atom';
import { useAtomValue } from 'jotai';
import { useEffect } from 'react';

function Left3() {
  useEffect(()=>{
    console.log('      # Left3 렌더링.');
  });

  const getCount = useAtomValue(countAtom); 

  return (
    <div>
      <h3>Left3</h3>
      <span>{getCount}</span>
    </div>
  );
}

export default Left3;