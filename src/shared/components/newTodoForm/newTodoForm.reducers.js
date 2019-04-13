import Immutable from 'seamless-immutable';
import { createReducer, createActions } from 'reduxsauce';
import { useReducer } from 'react';
import { bindActionCreators } from 'redux';

export const INITIAL_STATE = Immutable({
  value: '',
});

const { Types, Creators } = createActions({
  setValue: ['value'],
  clear: null,
  setLowerCaseValue: null,
  setUpperCaseValue: null,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_VALUE]: (state, { value }) => state.set('value', value),
  [Types.CLEAR]: state => state.set('value', ''),
  [Types.SET_LOWER_CASE_VALUE]: state => state.set('value', state.value.toLowerCase()),
  [Types.SET_UPPER_CASE_VALUE]: state => state.set('value', state.value.toUpperCase()),
});

export const useFormReducer = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return {
    value: state.value,
    ...bindActionCreators(Creators, dispatch),
  };
};
