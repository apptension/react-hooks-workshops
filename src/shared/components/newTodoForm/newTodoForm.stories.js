import React from 'react';
import { storiesOf } from '@storybook/react';

import { NewTodoForm } from './newTodoForm.component';

const defaultProps = {};

storiesOf('NewTodoForm', module).add('Default', () => <NewTodoForm {...defaultProps} />);
