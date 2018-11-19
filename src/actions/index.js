import {todosRef} from '../config/firebase';
import {FETCH_TODOS} from '../actions/types';

export const addTodo = newTodo => async dispatch => {
  todosRef.push().set(newTodo);
};

export const completeTodo = completedTodoId => async dispatch => {
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
