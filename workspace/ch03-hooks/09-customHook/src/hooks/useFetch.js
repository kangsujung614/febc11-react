import { axios } from "axios";
import { useEffect, useState } from "react";

axios.default.baseURL = 'https://todo-api.fesp.shop/api';
axios.default.timeout = 1500;

function useAxios(fetchParams){
  // 서버로부터 받은 응답 데이터
  const [data, setData] = useState(null);
  // 에러 메시지
  const [error, setError] = useState(null);
  // 로딩중 상태
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=> {
    request(fetchParams);
  }, []) // 마운트 된 후 한번만 호출

  // API 서버에 ajax 요청을 보냄
  const request = async (params) => {
    try{
      setIsLoading(true);
      const res = await axios(params.url);
      console.log(res);
      setData(res.data);
      setError(null);
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

  return { data, error, isLoading};
}

export default useAxios;