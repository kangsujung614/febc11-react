import { useState } from "react";

function App(){

  const [position, setPosition] = useState({x: 0, y: 0});

  return (
    <>
      <h1>03 상태관리 대상이 객체일 경우 주의 사항</h1>
      <div
        onPointerMove={ event => {
          position.x = event.clientX;
          position.y = event.clientY;

          // 객체는 메모리 주소를 참조하고 있고 원시 값과 달리 내부 값의 변경이 가능하므로 새 객체를 만들어서
          const newPosition = { x: event.clientX, y: event.clientY - 120};
          // setter 함수의 인수로 넘겨주어야 상태 값(객체)가 바뀌었다고 인식하여 리렌더링이 일어난다
          setPosition(newPosition);

          console.log(position);
        }}
        style={{
          position: 'relative',
          width: '100vw',
          height: '100vh',
        }}>
        <div style={{
          position: 'absolute',
          backgroundColor: 'red',
          borderRadius: '50%',
          transform: `translate(${position.x-10}px, ${position.y-10}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }} />
      </div>
    </>
  );
}

export default App;