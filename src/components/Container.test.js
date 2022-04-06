import React, { Component } from 'react';
import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from "react-dom/test-utils";
import Container96012 from './Container';

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

it("It loads 960gs container", () => {
  act(() => {
    //render(<Container96012 expandValue="garbage" />, container);
    render(<Container96012 expandValue="container_12"/>, container);
  });
});