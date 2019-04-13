import React, { forwardRef, useImperativeHandle, useRef } from 'react';

import { Input } from './textField.styles';

// eslint-disable-next-line react/prop-types
const TextFieldComponent = ({ className, onChange, value = '' }, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
  }));

  return <Input className={className} ref={inputRef} value={value} onChange={onChange} />;
};

export const TextField = forwardRef(TextFieldComponent);
