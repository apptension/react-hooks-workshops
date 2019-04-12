import React from 'react';
import { storiesOf } from '@storybook/react';

import { TodosItem } from './todosItem.component';

const defaultProps = {};

storiesOf('TodosItem', module).add('Default', () => <TodosItem {...defaultProps} />);
