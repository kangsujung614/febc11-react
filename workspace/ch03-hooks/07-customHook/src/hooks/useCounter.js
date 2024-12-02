import { useState } from "react";

function useCounter(initCount){
  const [count, setCount] = useState(initCount);

  const handleDown = (num) => {
    setCount(count - num);
  };
  const handleUp = (num) => {
    setCount(count + num);
  };
  const handleReset = initCount => {
    setCount(initCount);
  };

  return { count, handleDown, handleUp, handleReset};
}

export default useCounter;