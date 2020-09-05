import React from 'react';
import App from './App';
import { shallow } from "enzyme";

test('App renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.childAt(0).text()).toBe('Learning app');
});
