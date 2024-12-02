import { useState } from "react";

// 모듈 스코프 변수 X
let count = 0;

export default function Message(){

  //상태가 변경될 때마다 Message 렌더링
  console.log('Message 렌더링');

  // 지역 변수 X
  // let count = 0;

  // state 사용 O
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState('');

  const handleChange = (event) => {
    const inputMsg = event.target.value;
    setMsg(inputMsg);
    // count++;
    setCount(count+1);
  };
  return(
    <>
      <input type="text" onChange={handleChange} />
      <br />
      <span>입력 메시지: { msg }</span>
      <br />
      <span>입력 횟수: { count }</span>
    </>
  )
}