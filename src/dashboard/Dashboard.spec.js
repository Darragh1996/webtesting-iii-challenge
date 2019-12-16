// Test away
import React from "react";
import ReactDom from "react-dom";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Dashboard from "./Dashboard";

afterEach(rtl.cleanup);

let Unlocked = () =>{
    return wrapper.queryByText('Unlocked');
}
let Open = () =>{
    return wrapper.queryByText('Open');
}
let LockGate = () =>{
    return wrapper.queryByText('Lock Gate');
}
let CloseGate = () =>{
    return wrapper.queryByText('Close Gate');
}
let Closed = () =>{
    return wrapper.queryByText('Closed');
}
let Locked = () =>{
    return wrapper.queryByText('Locked');
}
let OpenGate = () =>{
    return wrapper.queryByText('Open Gate');
}
let UnlockGate = () =>{
    return wrapper.queryByText('Unlock Gate');
}

let wrapper;
beforeEach(() => {
  wrapper = rtl.render(<Dashboard />);
});

it("renders without crashing", () => {
  expect(wrapper.container).toMatchSnapshot();
});
