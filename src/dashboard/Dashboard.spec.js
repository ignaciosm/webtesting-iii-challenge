import React from 'react';
import {render} from '@testing-library/react';
import Dashboard from './Dashboard';

test('Dashboard is present', () => {
  render(<Dashboard/>);
});

test('Initial state is Unlocked', () => {
  const {queryByText} = render(<Dashboard/>);
  expect(queryByText(/unlocked/i)).toBeTruthy()
});

test('Initial state is Open', () => {
  const {queryByText} = render(<Dashboard/>);
  expect(queryByText(/open/i)).toBeTruthy()
});