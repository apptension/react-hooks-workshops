import React, { memo, useState, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { compose } from 'ramda';

import { Form, Row, TextField, FormatButton, SubmitButton } from './newTodoForm.styles';
import messages from './newTodoForm.messages';

const NewTodoFormComponent = memo(({ intl, onSubmit }) => {
  const textFieldRef = useRef();
  const [description, setDescription] = useState('');

  const handleTextFieldChange = value => {
    setDescription(value);
  };

  const handleSetUpperCase = () => {
    textFieldRef.current.setUpperCase();
  };

  const handleSetLowerCase = () => {
    textFieldRef.current.setLowerCase();
  };

  const handleSubmit = useCallback(() => {
    onSubmit({ description });
    textFieldRef.current.clear();
  }, [description, onSubmit]);

  return (
    <Form noValidate>
      <Row>
        <TextField ref={textFieldRef} onChange={handleTextFieldChange} />
        <SubmitButton onClick={handleSubmit}>{intl.formatMessage(messages.submitButton)}</SubmitButton>
      </Row>
      <Row>
        <FormatButton onClick={handleSetUpperCase}>{intl.formatMessage(messages.formatUppercase)}</FormatButton>
        <FormatButton onClick={handleSetLowerCase}>{intl.formatMessage(messages.formatLowercase)}</FormatButton>
      </Row>
    </Form>
  );
});

NewTodoFormComponent.propTypes = {
  intl: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export const NewTodoForm = compose(injectIntl)(NewTodoFormComponent);
