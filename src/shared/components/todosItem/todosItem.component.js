import React, { memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { compose } from 'ramda';

import { Container } from './todosItem.styles';

const TodosItemComponent = memo(({ description, created, isDone }) => {
  const statusLabel = useMemo(() => {
    return isDone ? 'Done' : 'Undone';
  }, [isDone]);

  return (
    <Container>
      {description} | Created: {created} | {statusLabel}
    </Container>
  );
});

TodosItemComponent.propTypes = {
  description: PropTypes.string.isRequired,
  created: PropTypes.number.isRequired,
  isDone: PropTypes.bool.isRequired,
};

export const TodosItem = compose(injectIntl)(TodosItemComponent);
