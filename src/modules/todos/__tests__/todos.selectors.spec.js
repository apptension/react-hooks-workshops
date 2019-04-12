import { expect } from 'chai';
import Immutable from 'seamless-immutable';

import { selectTodosDomain } from '../todos.selectors';


describe('Todos: selectors', () => {
  const state = Immutable({
    todos: {

    },
  });

  describe('selectTodosDomain', () => {
    it('should select a domain', () => {
      expect(selectTodosDomain(state)).to.equal(state.todos);
    });
  });
});
