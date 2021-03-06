import { all, put, takeLatest, call } from 'redux-saga/effects';

import api from '../../shared/services/api';
import { TodosTypes, TodosActions } from './todos.redux';

function* fetchTodos() {
  const todos = yield call(api.getList);
  yield put(TodosActions.fetchTodosSuccess(todos));
}

function* createTodo({ todo }) {
  const createdTodo = yield call(api.post, todo);
  yield put(TodosActions.createTodoSuccess(createdTodo));
}

function* updateTodoStatus({ id, isDone }) {
  yield call(api.put, id, isDone);
  yield put(TodosActions.updateTodoStatusSuccess(id, isDone));
}

function* deleteTodo({ id }) {
  yield call(api.delete, id);
  yield put(TodosActions.deletTodoSuccess(id));
}

export function* watchTodos() {
  yield all([
    takeLatest(TodosTypes.FETCH_TODOS, fetchTodos),
    takeLatest(TodosTypes.CREATE_TODO, createTodo),
    takeLatest(TodosTypes.UPDATE_TODO_STATUS, updateTodoStatus),
    takeLatest(TodosTypes.DELETE_TODO, deleteTodo),
  ]);
}
