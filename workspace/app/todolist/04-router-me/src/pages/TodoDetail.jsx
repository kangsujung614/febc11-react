import { Link, Outlet, useLocation, useParams } from "react-router-dom";

function TodoDetail(){
  const location = useLocation();
  console.log(location);
  const items = location.state.data;

  const {id} = useParams();
  const currentItem = items[id-1];

  return(
    <div id="main">
      <h2>할일 상세 보기</h2>
      <div className="todo">
        <div>
          제목: {currentItem.title}
        </div>
        <div>
          내용 : {currentItem.content}
        </div>
        <div>
          상태 : {currentItem.done? "완료" : "미완료"}
        </div>
        <div>
          작성일 : {currentItem.createdAt}
        </div>
        <div>
          수정일 : {currentItem.updatedAt}
        </div>
        <Outlet/>
        <Link to="/todoedit" state={[{data:items},{id:id}]}>수정</Link>
        <Link to="/todolist">목록</Link>
        <Outlet/>
      </div>
    </div>
  )
}

export default TodoDetail;