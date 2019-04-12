import { expect } from 'chai';
import Immutable from 'seamless-immutable';

import { reducer as todosReducer, TodosActions, TodosTypes } from '../todos.redux';

describe('Todos: redux', () => {
  const state = Immutable({});

  describe('reducer', () => {
    it('should return initial state', () => {
      expect(todosReducer(undefined, {})).to.deep.equal(state);
    });

    it('should return state on unknown action', () => {
      expect(todosReducer(state, { type: 'unknown-action' })).to.deep.equal(state);
    });
  });
});
