import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { compose } from 'ramda';

import { Container, Details, Description, DateTime, Checkbox } from './todosItem.styles';

const TodosItemComponent = memo(({ description, created, isDone }) => {
  return (
    <Container isActive={!isDone}>
      <Details>
        <Description>{description}</Description>
        <DateTime>{created}</DateTime>
      </Details>
      <Checkbox isChecked={isDone} />
    </Container>
  );
});

TodosItemComponent.propTypes = {
  description: PropTypes.string.isRequired,
  created: PropTypes.number.isRequired,
  isDone: PropTypes.bool.isRequired,
};

export const TodosItem = compose(injectIntl)(TodosItemComponent);
