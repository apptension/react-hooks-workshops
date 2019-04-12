import React from 'react';
import { shallow } from 'enzyme';

import { TodosItemComponent as TodosItem } from '../todosItem.component';


describe('TodosItem: Component', () => {
  const defaultProps = {
  };

  const component = (props) => (
    <TodosItem {...defaultProps} {...props} />
  );

  const render = (props = {}) => shallow(component(props));

  it('should render correctly', () => {
    const wrapper = render();
    global.expect(wrapper).toMatchSnapshot();
  });
});
