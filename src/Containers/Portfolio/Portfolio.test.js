import React from "react";
import Portfolio from "./Portfolio";
import { shallow } from 'enzyme';

describe("Portfolio tests", () => {
  let component;

  beforeEach(() => {
    component = shallow(<Portfolio />);
  })

  it('should render', () => {
    expect(component).toBeTruthy();
  })
});