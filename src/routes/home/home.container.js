import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { hot } from 'react-hot-loader';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { compose } from 'ramda';

import { Home } from './home.component';
import { selectLocalesLanguage } from '../../modules/locales';
import { TodosActions, selectTodos } from '../../modules/todos';

const mapStateToProps = createStructuredSelector({
  language: selectLocalesLanguage,
  todos: selectTodos,
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchTodos: TodosActions.fetchTodos,
      createTodo: TodosActions.createTodo,
    },
    dispatch
  );

export default compose(
  hot(module),
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  injectIntl,
  withRouter
)(Home);
