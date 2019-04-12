import React, { forwardRef, useImperativeHandle, useState, useCallback, useRef } from 'react';

import { Input } from './textField.styles';

// eslint-disable-next-line react/prop-types
const TextFieldComponent = ({ onChange, defaultValue }, ref) => {
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState(defaultValue);

  const handleInputChange = useCallback(
    event => {
      setInputValue(event.target.value);
      onChange(event);
    },
    [onChange]
  );

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    clear: () => {
      setInputValue('');
    },
    setUpperCase: () => {
      setInputValue(inputValue.toUpperCase());
    },
    setLowerCase: () => {
      setInputValue(inputValue.toLowerCase());
    },
  }));

  return <Input ref={inputRef} value={inputValue} onChange={handleInputChange} />;
};

export const TextField = forwardRef(TextFieldComponent);
