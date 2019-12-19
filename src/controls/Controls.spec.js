// Test away!
import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Controls from "./Controls";
import { exportAllDeclaration } from "@babel/types";

afterEach(rtl.cleanup);

let wrapper;

let LockGate = () => {
  return wrapper.queryByText("Lock Gate");
};

let CloseGate = () => {
  return wrapper.queryByText("Close Gate");
};

let OpenGate = () => {
  return wrapper.queryByText("Open Gate");
};

let UnlockGate = () => {
  return wrapper.queryByText("Unlock Gate");
};

it("renders without crashing", () => {
  wrapper = rtl.render(<Controls />);
});

it('renders elements properly -> DEFAULT PROPS', () => {
    wrapper = rtl.render(<Controls locked={false} closed={false}/>);
    expect(LockGate()).toBeInTheDocument();
    expect(LockGate()).toBeVisible();
    expect(LockGate()).toBeDisabled();
    expect(CloseGate()).toBeInTheDocument();
    expect(CloseGate()).toBeVisible();
    expect(CloseGate()).not.toBeDisabled();
})