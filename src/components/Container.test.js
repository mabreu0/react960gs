import React from 'react';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import { act } from "react-dom/test-utils";
import Container96012 from './Container';

//valid grids
const grids = [
  "container_12", 
  "container_16", 
  "container_24"
];

let testContainer = null;

beforeEach(() => {
  // setup a DOM element as a render target
  testContainer = document.createElement("div");
  document.body.appendChild(testContainer);
});

afterEach(() => {
  // cleanup on exiting
  ReactDOM.unmountComponentAtNode(testContainer);
  testContainer.remove();
  testContainer = null;
});

test("Renders 960gs container", () => {
    render(<Container96012 expandValue="container_12"/>);
    const element = screen.getByTestId("container_gs960");

    expect(element).toBeInTheDocument();
    //expect(element.className).toMatch(grids.map(value) => value);
    //expect(element.className).toContainEqual(grids)

  });