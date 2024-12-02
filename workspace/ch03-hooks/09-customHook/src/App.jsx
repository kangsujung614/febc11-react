import useAxios from "@hooks/useAxios";
import { PulseLoader } from "react-spinners";

function App() {

  const {data, error, isLoading} = useAxios({url: '/todolist?delay=500'});

  return (
    <>
      <h1>09 Custom Hook - useFetch, useAxios 커스텀 훅 사용</h1>
      <h2>할일 목록</h2>
      { isLoading &&
        <PulseLoader
          color="#aaaaaa"
          margin={9}
          size={12}
          speedMultiplier={0.8}
      /> }
      { error && <p style={{color: 'red'}}>{error.message}</p> }
      {data && (
        <ul>
          {data.items.map(e => <li key={e._id}>{e.title}</li>)}
        </ul>
      )}
    </>
  )
}

export default App

