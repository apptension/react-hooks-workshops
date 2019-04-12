import React, { memo, useState, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { compose } from 'ramda';

import { Form, Button } from './newTodoForm.styles';
import messages from './newTodoForm.messages';

import { TextField } from '../textField';

const NewTodoFormComponent = memo(({ intl, onSubmit }) => {
  const textFieldRef = useRef();
  const [description, setDescription] = useState('');

  const handleTextFieldChange = event => {
    setDescription(event.target.value);
  };

  const handleSetUpperCase = () => {
    textFieldRef.current.setUpperCase();
  };

  const handleSubmit = useCallback(() => {
    onSubmit({ description });
  }, [description, onSubmit]);

  return (
    <Form noValidate>
      <TextField ref={textFieldRef} defaultValue="Some text" onChange={handleTextFieldChange} />
      <Button onClick={handleSetUpperCase}>{intl.formatMessage(messages.formatUppercase)}</Button>
      <Button onClick={handleSubmit}>{intl.formatMessage(messages.submitButton)}</Button>
    </Form>
  );
});

NewTodoFormComponent.propTypes = {
  intl: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export const NewTodoForm = compose(injectIntl)(NewTodoFormComponent);
