import React from 'react';
import {render} from '@testing-library/react';
import Display from './Display';

test('Display is present', () => {
  render(<Display/>);
});

test('display shows open if door open', () => {
  const { queryByText } = render(<Display locked={false} closed={false} />);
  const closeDisplay = queryByText(/open/i);
  expect(closeDisplay).toBeTruthy();
});

test('display shows close if door close', () => {
  const { queryByText } = render(<Display locked={false} closed={true} />);
  const closeDisplay = queryByText(/close/i);
  expect(closeDisplay).toBeTruthy();
});

test('display shows unlocked if door unlocked', () => {
  const { queryByText } = render(<Display locked={false} closed={false} />);
  const closeDisplay = queryByText(/unlocked/i);
  expect(closeDisplay).toBeTruthy();
});

test('display shows locked if door locked', () => {
  const { queryByText } = render(<Display locked={true} closed={true} />);
  const closeDisplay = queryByText(/locked/i);
  expect(closeDisplay).toBeTruthy();
});

test('use red-led if door closed/unlocked', () => {
  const { queryByText } = render(<Display locked={false} closed={true} />);
  const closeDisplay = queryByText(/closed/i);
  expect(closeDisplay.className).toMatch(/red-led/i);
});

test('use red-led if door closed/locked', () => {
  const { queryByText } = render(<Display locked={true} closed={true} />);
  const closeDisplay = queryByText(/locked/i);
  expect(closeDisplay.className).toMatch(/red-led/i);
});

test('use green-led if door open/unlocked', () => {
  const { queryByText } = render(<Display locked={false} closed={false} />);
  const closeDisplay = queryByText(/open/i);
  expect(closeDisplay.className).toMatch(/green-led/i);
});

test('use green-led if door open/unlocked', () => {
  const { queryByText } = render(<Display locked={false} closed={true} />);
  const closeDisplay = queryByText(/unlocked/i);
  expect(closeDisplay.className).toMatch(/green-led/i);
});