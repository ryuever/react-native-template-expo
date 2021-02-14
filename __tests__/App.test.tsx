import React from 'react';
import {cleanup, render} from '@testing-library/react-native';

import App from '../App';

afterEach(cleanup);

describe('App', () => {
  it('should show hello world', () => {
    const helloWorldText = 'Hello World!';

    const {toJSON, getByText} = render(<App />);

    const foundHelloWorldText = getByText(helloWorldText);

    expect(foundHelloWorldText.props.children).toEqual(helloWorldText);
    expect(toJSON()).toMatchSnapshot();
  });
});