import { useState } from "react";
import { Link } from "react-router-dom";

function TodoList(){

  const [items, setItems] = useState([
    {
      _id: 1,
      title: "React 예습",
      content: "내일 내용 예습",
      done: false,
      createdAt: "2024.11.21 04:49:00",
      updatedAt: "2024.11.21 06:49:00"
    },
    {
      _id: 2,
      title: "Promise 복습",
      content: "오늘 내용 복습",
      done: true,
      createdAt: "2024.11.19 17:49:00",
      updatedAt: "2024.11.19 21:49:00"
    },
    {
      _id: 3,
      title: "Closure 자세히 공부",
      content: "자바스크립트 파이팅",
      done: false,
      createdAt: "2024.11.18 23:49:00",
      updatedAt: "2024.11.19 01:49:00"
    },
  ]);

  return(
    <div id="main">
      <h2>할일 목록</h2>
      <div className="todo">
        <Link to="/todoadd" state={{data:items}}>추가</Link>
        <br />
        <form className="search">
          <input type="text" autoFocus />
          <button type="submit">검색</button>
        </form>
        <ul className="todolist">
          {items.map(e => {
            return(
              <li key={e._id}>
                <span>{e._id}</span>
                <Link to={`/tododetail/${e._id}`} state={{data:items}}>{e.title}</Link>
                <Link>삭제</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default TodoList;