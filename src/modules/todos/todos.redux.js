import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

export const { Types: TodosTypes, Creators: TodosActions } = createActions(
  {
    fetchTodos: [],
    updateTodo: ['id', 'todos'],
    deleteTodo: ['id'],
    fetchTodosSuccess: ['todos'],
    updateTodoSuccess: ['id', 'todos'],
    deleteTodoSuccess: ['id'],
  },
  { prefix: 'TODOS/' }
);

export const INITIAL_STATE = new Immutable({
  todos: [],
});

const fetchTodosSuccess = (state = INITIAL_STATE, { todos }) => state.set('todos', todos);

const updateTodoSuccess = (state = INITIAL_STATE, { id, todo }) => state.setIn(['todos', id], todo);

const deleteTodoSuccess = (state = INITIAL_STATE, { id, todo }) => state.removeIn(['todos', id], todo);

export const reducer = createReducer(INITIAL_STATE, {
  [TodosTypes.FETCH_TODOS_SUCCESS]: fetchTodosSuccess,
  [TodosTypes.UPDATE_TODO_SUCCESS]: updateTodoSuccess,
  [TodosTypes.DELETE_TODO_SUCCESS]: deleteTodoSuccess,
});
