import { all, put, takeLatest, call } from 'redux-saga/effects';

import api from '../../shared/services/api';
import { TodosTypes, TodosActions } from './todos.redux';

function* fetchTodos() {
  const todos = yield call(api.getList);
  yield put(TodosActions.fetchTodosSuccess(todos));
}

function* updateTodo({ id, todo }) {
  const updatedTodo = yield call(api.put, id, todo);
  yield put(TodosActions.updateTodoSuccess(id, updatedTodo));
}

function* deleteTodo({ id }) {
  yield call(api.delete, id);
  yield put(TodosActions.deletTodoSuccess(id));
}

export function* watchTodos() {
  yield all([
    takeLatest(TodosTypes.FETCH_TODOS, fetchTodos),
    takeLatest(TodosTypes.UPDATE_TODO, updateTodo),
    takeLatest(TodosTypes.DELETE_TODO, deleteTodo),
  ]);
}
