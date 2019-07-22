import * as React from 'react';
import { shallow } from 'enzyme';
import ContainedButton from './ContainedButton';
describe('ContainedButton', () => {
  test('ContainedButton', () => {
    const wrapper = shallow(
      React.createElement(ContainedButton, null, 'Button')
    );
    expect(wrapper.name()).toEqual('ContainedButton');
  });
});
/*
describe('Link', () => {
  it('Renders link to Google', () => {
    const link = shallow(<a href="http://google.com">Link to Google</a>);
    expect(link).toMatchSnapshot();
  });
});
*/
