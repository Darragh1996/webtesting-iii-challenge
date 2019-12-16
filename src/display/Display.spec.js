// Test away!
import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Display from './Display';
import { exportAllDeclaration } from "@babel/types";

afterEach(rtl.cleanup);

let wrapper;
beforeEach(() => {
    wrapper = rtl.render(<Display />)
});

it('renders without crashing',() => {
    expect(wrapper.container).toMatchSnapshot();
});

it('renders elements properly -> DEFUALT PROPS', () => {
    
})

