import {
  combineReducers
} from 'redux';

import {
  todosRef
} from '../config/firebase';
import {
  FETCH_TODOS
} from '../actions/types';

import data from './dataReducer';

export const addTodo = newTodo => async dispatch => {
  todosRef.push().set(newTodo);
};

export const completeTodo = completedTodoId => async dispatch => {
  todosRef.child(completedTodoId).remove();
};

export const fetchTodos = () => async dispatch => {
  todosRef.on("value", snapshot => {
    dispatch({
      type: FETCH_TODOS,
      payload: snapshot.val()
    });
  });
};

export default combineReducers({
  data
})