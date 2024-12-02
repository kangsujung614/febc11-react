import PropTypes from "prop-types"; // import할 때 PropTypes는 파스칼케이스 사용

function TodoItem({ item, toggleDone, deleteItem }){
  return (
    <li>
      <span>{ item._id }</span>
      <span onClick={()=> toggleDone(item._id)}>{ item.done ? <s>{ item.title }</s> : item.title }</span>
      <button type="button" onClick={()=> deleteItem(item._id)}>삭제</button>
    </li>
  );
}

// props의 타입을 지정. 이대로 props가 넘어오지 않으면 에러
TodoItem.propTypes = { // 속성명은 
  // item: PropTypes.object.isRequired, //필수일 경우 끝에 isRequired를 붙이기
  item: PropTypes.shape({ // 더 명확히 지정
    _id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    done: PropTypes.bool, // 없으면 undefined가 되어 코드상에서 false로 처리됨
  }),
  toggleDone: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
}

export default TodoItem;