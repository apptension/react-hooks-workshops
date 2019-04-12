import { createSelector } from 'reselect';
import { prop } from 'ramda';

export const selectTodosDomain = prop('todos');

export const selectTodos = createSelector(
  selectTodosDomain,
  prop('todos')
);
