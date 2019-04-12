import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import messages from './home.messages';
import { Container, Logo } from './home.styles';

export const Home = memo(props => {
  return (
    <Container>
      <Helmet title={props.intl.formatMessage(messages.pageTitle)} />

      <Logo />
    </Container>
  );
});

Home.propTypes = {
  intl: PropTypes.object.isRequired,
};
