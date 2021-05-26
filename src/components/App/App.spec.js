//App.spec.js is similar to App.test.js// both are auto detected
import React from 'react';
import {shallow} from "enzyme";
import App from './App';
import Timer from "../Timer/Timer"
import { Renderer } from 'react-dom';
//test



//


describe("App", () => {
  let container ;

  beforeEach(() => (container = shallow(<App />))) 
  //shallow render only renders the App passed without considering the children componment in it.

  it("should render a <div />", () => {
    expect(container.find("div").length).toEqual(1)
  })

  it("should render the Timer Component", () => {
    expect(container.containsMatchingElement(<Timer />)).toEqual(true)
  })
})

