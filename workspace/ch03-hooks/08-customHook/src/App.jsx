import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";

const API_SERVER = 'https://todo-api.fesp.shop/api';

function App() {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Todo API 서버에 ajax 요청을 보냄
  const fetchTodo = async (fetchParams) => {
    try{
      setIsLoading(true);
      const res = await fetch(API_SERVER + fetchParams.url);
      console.log(res);
      const jsonData = await res.json();
      if(jsonData.ok){
        setData(jsonData.items);
        setError(null); 
      } else {
        throw new Error(jsonData.error.message);
      }
    } catch(err){
      // 에러 처리
      console.error(err); // 디버깅용(개발자 확인용)
      //사용자에게 보여줄 에러 처리 필요 → 에러를 상태로 관리
      setError({ message: '일시적인 문제로 인해 작업 처리에 실패했습니다. 잠시후 다시 요청해 주시기 바랍니다.' });
      setData(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(()=> {
    const fetchParams = { url: '/todolist?delay=3000' };
    fetchTodo(fetchParams);
  }, [])

  return (
    <>
      <h1>08 Custom Hook - 커스텀 훅 없이 fetch API 사용</h1>
      <h2>할일 목록</h2>
      { isLoading &&
        <PulseLoader
          color="#aaaaaa"
          margin={9}
          size={15}
          speedMultiplier={0.8}
      /> }
      { error && <p style={{color: 'red'}}>{error.message}</p> }
      {data && (
        <ul>
          {data.map(e => <li key={e._id}>{e.title}</li>)}
        </ul>
      )}
    </>
  )
}

export default App