import TodoItem from './TodoItem.jsx'

function TodoList({ itemList }){
  const list = itemList.map(item => <TodoItem key={ item._id } item={ item } />);
  return (
    <ul className="todolist">
      { list }
    </ul>
  );
}

export default TodoList;