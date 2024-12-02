import { useEffect } from 'react';
import Left1 from '@components/Left1';
import Right1 from '@components/Right1';
import { CounterProvider } from '@context/CounterContext';
import { SimpleContext } from '@context/SimpleContext';

function App() {

  useEffect(()=>{
    console.log('# App 렌더링.');
  });

  return (
    <>
      <h1>Context API - Props Driling 대신 Context API 사용</h1>
      <div id="container">
        <h1>App</h1>
        <div id="grid">
          <CounterProvider>
            <Left1 />
            <SimpleContext.Provider value={{ hello: 'world' }}> 
              {/* 제공하는 컴포넌트에 Context가 있더라도, 직접 사용하는 컴포넌트에서 Context가 덮어쓰기 된다. 어떤 컴포넌트가 바깥에서 감싸고 있고, 어떤 컴포넌트가 안쪽에 있는지는 관계가 없다.*/}
              <Right1 />
            </SimpleContext.Provider>
          </CounterProvider>
        </div>
      </div>
    </>
  );
}

export default App;