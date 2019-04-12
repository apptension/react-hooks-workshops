import React from 'react';
import { shallow } from 'enzyme';

import { NewTodoFormComponent as NewTodoForm } from '../newTodoForm.component';


describe('NewTodoForm: Component', () => {
  const defaultProps = {
  };

  const component = (props) => (
    <NewTodoForm {...defaultProps} {...props} />
  );

  const render = (props = {}) => shallow(component(props));

  it('should render correctly', () => {
    const wrapper = render();
    global.expect(wrapper).toMatchSnapshot();
  });
});
