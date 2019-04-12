import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { compose } from 'ramda';

import { Container } from './todosItem.styles';

const TodosItemComponent = memo(() => {
  return <Container>TodosItem component</Container>;
});

TodosItemComponent.propTypes = {};

export const TodosItem = compose(injectIntl)(TodosItemComponent);
