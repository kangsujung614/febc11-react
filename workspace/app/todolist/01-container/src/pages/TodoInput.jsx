import PropTypes from "prop-types";
import { useState } from "react";


function TodoInput({ addItem }){
  const [title, setTitle] = useState('');
  const [nextId, setNextId] = useState(4);

  // 추가 버튼 클릭 이벤트
  const handleAdd = () => {
    if(title.trim() !== ''){
      const item = { _id: nextId, title, done: false };
      addItem(item);
      
      setNextId(nextId + 1);
      setTitle('');
    }
  };
  
  // 키업 이벤트
  const handleKeyUp = (event) => {
    // input 입력창에서 엔터키를 눌렀다 뗀 경우
    if(event.key === 'Enter') handleAdd();
  };

  return (
    <div className="todoinput">
      <input type="text" autoFocus onKeyUp={ handleKeyUp } value={ title } onChange={ event => setTitle(event.target.value) } />
      <button type="button" onClick={ handleAdd }>추가</button>
    </div>
  );
}

TodoInput.propTypes = {
  addItem: PropTypes.func.isRequired,
}

export default TodoInput;