import React, { memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { compose } from 'ramda';

import { formatDate } from '../../utils/helpers';
import { Container, Details, Description, DateTime, Checkbox } from './todosItem.styles';

const TodosItemComponent = memo(props => {
  const { id, description, created, isDone, onStatusChange } = props;

  const handleCheckboxClick = () => onStatusChange(id, !isDone);
  const formattedDate = useMemo(() => formatDate(created), [created]);

  return (
    <Container isActive={!isDone}>
      <Details>
        <Description>{description}</Description>
        <DateTime>{formattedDate}</DateTime>
      </Details>
      <Checkbox isChecked={isDone} onClick={handleCheckboxClick} />
    </Container>
  );
});

TodosItemComponent.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  created: PropTypes.number.isRequired,
  isDone: PropTypes.bool.isRequired,
  onStatusChange: PropTypes.func.isRequired,
};

export const TodosItem = compose(injectIntl)(TodosItemComponent);
