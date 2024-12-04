import TodoInput from "@pages/TodoInput";
import TodoList from "@pages/TodoList";
import PropTypes from "prop-types";

function Todo(props){
  return (
    <div id="main">
      <div id="container">
        <ul>
          <li>
            <h2>쇼핑 목록</h2>
            <TodoInput addItem={ props.addItem } />
            <TodoList itemList={ props.itemList } toggleDone={ props.toggleDone } deleteItem={ props.deleteItem }/>
          </li>
        </ul>
      </div>
    </div>
  );
}

// 전달 받은 Props 유효성 검증
Todo.propTypes = {
  addItem: PropTypes.func.isRequired,
  itemList: PropTypes.array.isRequired,
  toggleDone: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
}

export default Todo;