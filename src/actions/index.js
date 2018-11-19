import {todosRef} from '../config/firebase';
import {FETCH_TODOS} from '../actions/types';

export const addToDo = newTodo => async dispatch => {
  todosRef.push().set(newTodo);
};

export const completeToDo = completedTodoId => async dispatch => {
  todosRef.child(completedTodoId).remove();
};

export const fetchToDos = () => async dispatch => {
  todosRef.on('value', snapshot => {
    dispatch({
      type: FETCH_TODOS,
      payload: snapshot.val(),
    });
  });
};
