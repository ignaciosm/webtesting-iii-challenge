import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Controls from './Controls';

test('Controls is present', () => {
  render(<Controls/>);
});

test('disable lock if gate open', () => {
  const lockedMock = jest.fn();
  const { queryByText } = render(<Controls toggleLocked={lockedMock} />);
  const lockButton = queryByText(/lock gate/i);
  expect(lockButton.disabled).toEqual(true);
});

test('disable open if gate locked', () => {
  const { queryByText } = render(<Controls locked={true} closed={true} />);
  const openButton = queryByText(/open gate/i);
  expect(openButton.disabled).toEqual(true);
});

test('close is null if gate locked', () => {
  const { queryByText } = render(<Controls locked={true} closed={true} />);
  const closeButton = queryByText(/close gate/i);
  expect(closeButton).toBeNull();
});

test('toggle close gets called', () => {
  const closeMock = jest.fn();
  const { queryByText } = render(<Controls locked={false} closed={false} toggleClosed={closeMock} />);
  const closeButton = queryByText(/close gate/i);

  fireEvent.click(closeButton);
  expect(closeMock).toHaveBeenCalled();
});

test('toggle lock gets called', () => {
  const lockeMock = jest.fn();
  const { queryByText } = render(<Controls locked={false} closed={true} toggleLocked={lockeMock} />);
  const closeButton = queryByText(/lock gate/i);

  fireEvent.click(closeButton);
  expect(lockeMock).toHaveBeenCalled();
});

test('button text shows close if door open', () => {
  const { queryByText } = render(<Controls locked={false} closed={false} />);
  const closeButton = queryByText(/close gate/i);
  expect(closeButton).toBeTruthy();
});

test('button text shows open if door closed', () => {
  const { queryByText } = render(<Controls locked={false} closed={true} />);
  const closeButton = queryByText(/open gate/i);
  expect(closeButton).toBeTruthy();
});
