import { useState } from "react";

function App() {
  // 한번 리렌더링 될 때 지정된 number은 다시 리렌더링 될 때까지 변하지 않음
  const [number, setNumber] = useState(0);
  return (
    <>
      <h3>02 이벤트 핸들러에서 state 값을 여러번 변경했을 때 문제점</h3>
      <p>{ number }</p>
      <button onClick= {() => {
        console.log('클릭 처리 시작', number);

        // setter 함수가 호출되는 즉시 리렌더링이 되지 않고 모아 두었다가 한번에 반영됨(배치)
        // setNumber(number + 1); // 이벤트 핸들러 내에서 number는 변화가 없음
        // setNumber(number + 1);

        // setter 함수의 인자값으로 함수를 전달하여 여러번 변경
        setNumber(num => num + 1); // 0 + 1
        setNumber(num => num + 1); // 1 + 1
        setNumber(num => num + 1); // 2 + 1

        console.log('클릭 처리 종료', number);
      }}>+3</button>
    </>
  )
}

export default App
