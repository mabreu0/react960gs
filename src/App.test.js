import React, { Component } from 'react';
import { act } from "react-dom/test-utils";
import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';

import App from './App';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without a name", () => {
  act(() => {
    render(<App />, container);
  });

//test('learn react tests jest', () => {
  //render(<App />);
  //const linkElement = screen.getByText(/container960/i);
  //const linkElement = screen.getByRole('div', { id: /container960/i });

  //const linkElement = screen.getByText(/container960/i);

  //const linkElement = screen.getByText('container960');

  //const linkElement = screen.queryAllByText('container960');
  //console.log("############################");
  //console.log(linkElement);
 // console.log("############################");
});
