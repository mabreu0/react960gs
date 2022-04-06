import React, { Component } from 'react';
//import * as React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { unmountComponentAtNode } from 'react-dom';
import { act } from "react-dom/test-utils";

//global.React = React;

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
