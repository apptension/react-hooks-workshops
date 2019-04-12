import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { TodosItem } from '../../shared/components/todosItem';
import { NewTodoForm } from '../../shared/components/newTodoForm';
import messages from './home.messages';
import { Container, Logo } from './home.styles';

export const Home = memo(({ fetchTodos, createTodo, todos, intl }) => {
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <Container>
      <Helmet title={intl.formatMessage(messages.pageTitle)} />
      <Logo />
      <NewTodoForm onSubmit={createTodo} />
      {todos.map(data => (
        <TodosItem key={data.id} {...data} />
      ))}
    </Container>
  );
});

Home.propTypes = {
  intl: PropTypes.object.isRequired,
  todos: PropTypes.array.isRequired,
  fetchTodos: PropTypes.func.isRequired,
  createTodo: PropTypes.func.isRequired,
};
