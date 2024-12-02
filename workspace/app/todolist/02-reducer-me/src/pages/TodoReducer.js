import { produce } from 'immer';

function TodoReducer(state, action){ // ([{}, {}, {}], {type: 'ADD', value: {_id: 1, title: '두부', done: true}})
  const targetIndex = state.findIndex(item => item._id === action.value._id);
  let newState;

  switch(action.type){
    case 'ADD':
      newState.push(action.value);
      break;
    case 'TOGGLE':
      newState = produce(state, draft => {
        draft[targetIndex].done = !draft[targetIndex].done;
      })
      break;
    case 'DELETE':
      newState = produce(state,draft => {
        draft.splice(targetIndex, 1);
      })
      break;
    default:
      newState = state;
  }
  return newState;
}

export default TodoReducer;