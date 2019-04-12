import React, { memo, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { TodosItem } from '../../shared/components/todosItem';
import { NewTodoForm } from '../../shared/components/newTodoForm';
import { getSortedData } from '../../shared/utils/helpers';
import messages from './home.messages';
import { Container, Todos, SwitchOrder } from './home.styles';
import { ORDER_TYPES } from './home.constants';

export const Home = memo(({ fetchTodos, createTodo, todos, updateTodoStatus, intl }) => {
  const [order, setOrder] = useState(ORDER_TYPES.DESC);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const sortedTodos = useMemo(() => {
    return getSortedData(todos, order === ORDER_TYPES.ASC);
  }, [todos, order]);

  const handleOrderChange = () => {
    const hasAscOrder = order === ORDER_TYPES.ASC ? ORDER_TYPES.DESC : ORDER_TYPES.ASC;
    setOrder(hasAscOrder);
  };

  return (
    <Container>
      <Helmet title={intl.formatMessage(messages.pageTitle)} />
      <NewTodoForm onSubmit={createTodo} />
      <Todos>
        <SwitchOrder onClick={handleOrderChange}>{order}</SwitchOrder>
        {sortedTodos.map(data => (
          <TodosItem key={data.id} {...data} onStatusChange={updateTodoStatus} />
        ))}
      </Todos>
    </Container>
  );
});

Home.propTypes = {
  intl: PropTypes.object.isRequired,
  todos: PropTypes.array.isRequired,
  fetchTodos: PropTypes.func.isRequired,
  createTodo: PropTypes.func.isRequired,
  updateTodoStatus: PropTypes.func.isRequired,
};
