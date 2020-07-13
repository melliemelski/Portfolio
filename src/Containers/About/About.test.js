import React from "react";
import About from "./About";
import { shallow } from 'enzyme';

describe("About tests", () => {
  let component;

  beforeEach(() => {
    component = shallow(<About />);
  })

  it('should render', () => {
    expect(component).toBeTruthy();
  })
});