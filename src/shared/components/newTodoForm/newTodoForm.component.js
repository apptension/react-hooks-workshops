import React, { memo, useCallback, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { compose } from 'ramda';

import { Form, Row, TextField, FormatButton, SubmitButton } from './newTodoForm.styles';
import messages from './newTodoForm.messages';
import { useFormReducer } from './newTodoForm.reducers';

const NewTodoFormComponent = memo(({ intl, onSubmit }) => {
  const textFieldRef = useRef();
  const { value, clear, setLowerCaseValue, setUpperCaseValue, setValue } = useFormReducer();

  useEffect(() => {
    textFieldRef.current.focus();
  }, [textFieldRef]);

  const handleInputChange = event => setValue(event.target.value);

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();
      onSubmit({ description: value });
      clear();
    },
    [value]
  );

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <Row>
        <TextField ref={textFieldRef} value={value} onChange={handleInputChange} />
        <SubmitButton type="submit">{intl.formatMessage(messages.submitButton)}</SubmitButton>
      </Row>
      <Row>
        <FormatButton onClick={setUpperCaseValue}>{intl.formatMessage(messages.formatUppercase)}</FormatButton>
        <FormatButton onClick={setLowerCaseValue}>{intl.formatMessage(messages.formatLowercase)}</FormatButton>
      </Row>
    </Form>
  );
});

NewTodoFormComponent.propTypes = {
  intl: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export const NewTodoForm = compose(injectIntl)(NewTodoFormComponent);
