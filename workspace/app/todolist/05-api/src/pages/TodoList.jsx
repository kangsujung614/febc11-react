import useAxiosInstance from "@hooks/useAxiosInstance";
import useFetch from "@hooks/useFetch";
import TodoListItem from "@pages/TodoListItem";
import { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import '@/Pagination.css';
import Pagination from "@components/Pagination";

// const dummyData = {
//   items: [{
//     _id: 1,
//     title: '잠자기',
//   }, {
//     _id: 2,
//     title: '자바스크립트 복습',
//     done: true,
//   }]
// };

function TodoList() {

  // API 서버에서 목록 조회
  // const {data} = useFetch({ url: '/todolist' });

  // 목록을 받아올 데이터를 상태로 관리
  const [data, setData] = useState();

  // 검색을 위한 훅
  const searchRef = useRef('');

  // 쿼리 스트링 정보를 읽거나 설정할 때 사용하는 훅
  // key=value 형태를 반환
  const [searchParams, setSearchParams] = useSearchParams();

  const params = {
    keyword: searchParams.get('keyword') || '',
    page: searchParams.get('page') || 1,
    limit: 10,
  }

  // axios 인스턴스
  const axios = useAxiosInstance();

  // 목록 조회 후 상태 업데이트 하는 함수
  const fetchList = async() => {
    const res = await axios.get('/todolist', {params});
    setData(res.data);
  }

  // 마운트된 후 한 번만 목록 조회
  useEffect(() => {
    fetchList();
  }, [searchParams]);

  // 삭제 작업
  const handleDelete = async (_id) => {
    try{
      // TODO: API 서버에 삭제 요청
      await axios.delete(`/todolist/${_id }`);

      // TODO: 목록을 다시 조회
      fetchList(); // 함수 호출하여 리렌더링 하도록 만듦

    }catch(err){
      console.error(err);
      alert('할일 삭제에 실패했습니다.');
    }
  };

  const itemList = data?.items.map(item => <TodoListItem key={ item._id } item={ item } handleDelete={ handleDelete } />);

  // 검색
  const handleSearch = (e) => {
    e.preventDefault();
    const inputKeyword = searchRef.current.value;
    console.log(inputKeyword);
    const newSearchParams = new URLSearchParams(`keyword=${searchRef.current.value}`);
    setSearchParams(newSearchParams);
  };

  return (
    <div id="main">
      <h2>할일 목록</h2>
      <div className="todo">
        <Link to="/list/add">추가</Link>
        <br/>
        <form className="search" onSubmit={ handleSearch }>
          <input type="text" autoFocus defaultValue={params.keyword} ref={ searchRef }/>
          <button type="submit">검색</button>
        </form>
        <ul className="todolist">
          { itemList }
        </ul>
      </div>

      {data && <Pagination totalPages={data?.pagination.totalPages} currentPage={data?.pagination.page}/>}
    </div>
  );
}

export default TodoList;