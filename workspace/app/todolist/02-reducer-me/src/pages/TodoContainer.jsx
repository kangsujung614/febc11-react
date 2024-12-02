import Todo from "@pages/Todo";
import TodoReducer from "@pages/TodoReducer";
import { produce } from "immer";
import { useReducer, useState } from "react";

function TodoContainer(){
  // 샘플 목록
  const sampleItemList = [
    { _id: 1, title: '두부', done: true} ,
    { _id: 2, title: '계란', done: false },
    { _id: 3, title: '라면', done: true },
  ];

  const [itemList, itemListDispatch] = useReducer(TodoReducer, sampleItemList);

  // 할일 추가하는 함수
  const addItem = (item) => {
    itemListDispatch({type: 'ADD', value: item});
  };

  // 할일 완료/미완료 처리 함수
  const toggleDone = (_id) => {
    itemListDispatch( {type: 'TOGGLE', value: {_id}});
  };

  // 할일 삭제하는 함수
  const deleteItem = (_id) => {
    itemListDispatch( {type: 'DELETE', value: {_id}});
  };

  return (
    <Todo itemList={itemList} addItem={addItem} toggleDone={toggleDone} deleteItem={deleteItem}></Todo>
  )
}

export default TodoContainer;