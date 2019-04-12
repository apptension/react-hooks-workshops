import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

export const { Types: TodosTypes, Creators: TodosActions } = createActions(
  {
    fetchTodos: [],
    fetchTodosSuccess: ['todos'],
    createTodo: ['todo'],
    createTodoSuccess: ['todo'],
    updateTodo: ['id', 'todo'],
    updateTodoSuccess: ['id', 'todo'],
    deleteTodo: ['id'],
    deleteTodoSuccess: ['id'],
  },
  { prefix: 'TODOS/' }
);

export const INITIAL_STATE = new Immutable({
  todos: [],
});

const fetchTodosSuccess = (state = INITIAL_STATE, { todos }) => state.set('todos', todos);

const createTodoSuccess = (state = INITIAL_STATE, { todo }) => state.setIn(['todos', todo.id], todo);

const updateTodoSuccess = (state = INITIAL_STATE, { id, todo }) => state.setIn(['todos', id], todo);

const deleteTodoSuccess = (state = INITIAL_STATE, { id, todo }) => state.removeIn(['todos', id], todo);

export const reducer = createReducer(INITIAL_STATE, {
  [TodosTypes.FETCH_TODOS_SUCCESS]: fetchTodosSuccess,
  [TodosTypes.CREATE_TODO_SUCCESS]: createTodoSuccess,
  [TodosTypes.UPDATE_TODO_SUCCESS]: updateTodoSuccess,
  [TodosTypes.DELETE_TODO_SUCCESS]: deleteTodoSuccess,
});
