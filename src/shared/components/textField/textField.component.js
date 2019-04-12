import React, { forwardRef, useImperativeHandle, useReducer, useRef, useEffect } from 'react';

import { Input } from './textField.styles';
import { ACTION_TYPES } from './textField.contants';

function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.SET_VALUE:
      return action.payload;
    case ACTION_TYPES.SET_UPPERCASE_VALUE:
      return state.toUpperCase();
    case ACTION_TYPES.SET_LOWERCASE_VALUE:
      return state.toLowerCase();
    default:
      throw new Error('Unknown action');
  }
}

// eslint-disable-next-line react/prop-types
const TextFieldComponent = ({ className, onChange, defaultValue = '' }, ref) => {
  const inputRef = useRef();
  const [inputValue, dispatch] = useReducer(reducer, defaultValue);

  useEffect(() => {
    onChange(inputValue);
  }, [inputValue, onChange]);

  const handleInputChange = event => dispatch({ type: ACTION_TYPES.SET_VALUE, payload: event.target.value });

  useImperativeHandle(ref, () => ({
    focus: inputRef.current.focus,
    clear: () => dispatch({ type: ACTION_TYPES.SET_VALUE, payload: '' }),
    setUpperCase: () => dispatch({ type: ACTION_TYPES.SET_UPPERCASE_VALUE }),
    setLowerCase: () => dispatch({ type: ACTION_TYPES.SET_LOWERCASE_VALUE }),
  }));

  return <Input className={className} ref={inputRef} value={inputValue} onChange={handleInputChange} />;
};

export const TextField = forwardRef(TextFieldComponent);
