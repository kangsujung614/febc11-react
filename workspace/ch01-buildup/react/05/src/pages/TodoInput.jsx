import React from 'react';

function TodoInput(){
  const [title, setTitle] = React.useState('');

  const handleValue = (value) => {
    setTitle(value);
    console.log(title);

  }
  
  const handleAdd = () => {

  }

  return (
    <div className="todoinput">
      <input type="text" autoFocus value={title} onChange={(e)=> handleValue(e.target.value)}/>
      <button type="button" onClick={handleAdd}>추가</button>
    </div>
  );
}

export default TodoInput;