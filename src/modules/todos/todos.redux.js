import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

export const { Types: TodosTypes, Creators: TodosActions } = createActions(
  {
    fetchTodos: [],
    fetchTodosSuccess: ['todos'],
    createTodo: ['todo'],
    createTodoSuccess: ['todo'],
    updateTodoStatus: ['id', 'isDone'],
    updateTodoStatusSuccess: ['id', 'isDone'],
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

const updateTodoStatusSuccess = (state = INITIAL_STATE, { id, isDone }) => state.setIn(['todos', id, 'isDone'], isDone);

const deleteTodoSuccess = (state = INITIAL_STATE, { id, todo }) => state.removeIn(['todos', id], todo);

export const reducer = createReducer(INITIAL_STATE, {
  [TodosTypes.FETCH_TODOS_SUCCESS]: fetchTodosSuccess,
  [TodosTypes.CREATE_TODO_SUCCESS]: createTodoSuccess,
  [TodosTypes.UPDATE_TODO_STATUS_SUCCESS]: updateTodoStatusSuccess,
  [TodosTypes.DELETE_TODO_SUCCESS]: deleteTodoSuccess,
});
