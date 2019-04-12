import React, { forwardRef, useImperativeHandle, useState, useRef, useEffect } from 'react';

import { Input } from './textField.styles';

// eslint-disable-next-line react/prop-types
const TextFieldComponent = ({ onChange, defaultValue = '' }, ref) => {
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState(defaultValue);

  useEffect(() => {
    onChange(inputValue);
  }, [inputValue, onChange]);

  const handleInputChange = event => setInputValue(event.target.value);

  useImperativeHandle(
    ref,
    () => ({
      focus: inputRef.current.focus,
      clear: () => setInputValue(''),
      setUpperCase: () => setInputValue(inputValue.toUpperCase()),
      setLowerCase: () => setInputValue(inputValue.toLowerCase()),
    }),
    [inputValue]
  );

  return <Input ref={inputRef} value={inputValue} onChange={handleInputChange} />;
};

export const TextField = forwardRef(TextFieldComponent);
