import Todo from "@pages/Todo";
import { produce } from "immer";
import { useState } from "react";

function TodoContainer(){
  // 샘플 목록
  const sampleItemList = [
    { _id: 1, title: '두부', done: true} ,
    { _id: 2, title: '계란', done: false },
    { _id: 3, title: '라면', done: true },
  ];

  const [itemList, setItemList] = useState(sampleItemList);

  // 할일 추가하는 함수
  const addItem = (item) => {
    // 데이터 갱신(상태 변경)
    const newItemList = [...itemList, item]; // 객체일 경우 새로운 객체로 만들어야 화면 갱신이 됨
    setItemList(newItemList); // setter를 이용해야 화면 갱신이 됨
  };

  // 할일 완료/미완료 처리 함수
  const toggleDone = (_id) => {
    // 데이터 갱신(상태 변경)
    // const item = itemList.find(item => item._id === _id);
    // item.done = !item.done;
    // setItemList([ ...itemList ]);
    // 이렇게 해도 작동하지만, 상태의 불변성이 지켜지지 않는다.

    // immer 라이브러리 사용하여 불변성 유지
    const newItemList = produce(itemList, (draft) => {
      const item = draft.find(item => item._id === _id);
      item.done = !item.done;
    })
    setItemList(newItemList);

  };

  // 할일 삭제하는 함수
  const deleteItem = (_id) => {
    // 데이터 갱신(상태 변경)
    const newItemList = itemList.filter(item => item._id !== _id);
    setItemList(newItemList);
  };

  return (
    <Todo itemList={itemList} addItem={addItem} toggleDone={toggleDone} deleteItem={deleteItem}></Todo>
  )
}

export default TodoContainer;