import React from 'react';
import { storiesOf } from '@storybook/react';

import { TextField } from './textField.component';

const defaultProps = {};

storiesOf('TextField', module).add('Default', () => <TextField {...defaultProps} />);
