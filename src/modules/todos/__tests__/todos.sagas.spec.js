import { expectSaga } from 'redux-saga-test-plan';
import Immutable from 'seamless-immutable';

import { watchTodos } from '../todos.sagas';
import {
  TodosActions,
  TodosTypes
} from '../todos.redux';


describe('Todos: sagas', () => {
  const defaultState = Immutable({});

  it('should implement a test', async () => {
    await expectSaga(watchStartup)
      .withState(defaultState)
      .put(TodosActions.noop())
      .dispatch(StartupActions.startup())
      .run();

    expect(sagaTester.getCalledActions()).to.deep.equal([TodosActions.noop()]);
  });
});
