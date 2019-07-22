import * as React from 'react';
import { shallow } from 'enzyme';
import ContainedButton from './ContainedButton';

describe('ContainedButton', () => {
  test('ContainedButton', () => {
    const wrapper = shallow(<ContainedButton>Button</ContainedButton>);
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
