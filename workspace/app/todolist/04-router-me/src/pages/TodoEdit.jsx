import { Link, useLocation } from "react-router-dom";

function TodoEdit(){
  const location = useLocation();
  console.log(location);
  const items = location.state[0].data;
  console.log(items);

  const id = location.state[1].id;
  console.log(id);

  const currentItem = items[id-1];
  console.log(currentItem);

  return(
    <div id="main">
      <h2>할일 수정</h2>
      <div className="todo">
        <form>
          <label htmlFor="title">제목 :</label>
          <input type="text" id="title" value={`${currentItem.title}`}autoFocus />
          <br/>
          <label htmlFor="content">내용 :</label>
          <textarea id="content" cols="23" rows="5">{currentItem.content}</textarea>
          <br/>
          <label htmlFor="done">완료 :</label>
          <input type="checkbox" id="done" checked />
          <br/>
          <Link to={`/tododetail/${currentItem._id}`} state={{data: items}}>수정</Link>
          <Link to={`/tododetail/${currentItem._id}`} state={{data: items}}>취소</Link>
        </form>
      </div>
    </div>
  )
}

export default TodoEdit;