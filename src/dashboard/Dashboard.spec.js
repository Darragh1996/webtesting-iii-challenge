// Test away
import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Dashboard from "./Dashboard";

afterEach(rtl.cleanup);

let wrapper;
beforeEach(() => {
  wrapper = rtl.render(<Dashboard />);
});

let Unlocked = () => {
  return wrapper.queryByText("Unlocked");
};
let Open = () => {
  return wrapper.queryByText("Open");
};
let LockGate = () => {
  return wrapper.queryByText("Lock Gate");
};
let CloseGate = () => {
  return wrapper.queryByText("Close Gate");
};
let Closed = () => {
  return wrapper.queryByText("Closed");
};
let Locked = () => {
  return wrapper.queryByText("Locked");
};
let OpenGate = () => {
  return wrapper.queryByText("Open Gate");
};
let UnlockGate = () => {
  return wrapper.queryByText("Unlock Gate");
};

it("renders without crashing", () => {
  expect(wrapper.container).toMatchSnapshot();
});

it("renders expected elements properly-> DEFAULT", () => {
  expect(wrapper.container).toMatchSnapshot();
  expect(Unlocked()).toBeInTheDocument();
  expect(Unlocked()).toBeVisible();
  expect(Open()).toBeInTheDocument();
  expect(Open()).toBeVisible();
  expect(LockGate()).toBeInTheDocument();
  expect(LockGate()).toBeVisible();
  expect(LockGate()).toBeDisabled();
  expect(CloseGate()).toBeInTheDocument();
  expect(CloseGate()).toBeVisible();
});

it("renders expected elements properly -> AFTER CLOSE GATE BUTTON IS CLICKED", () => {
  rtl.fireEvent.click(CloseGate());
  expect(wrapper.container).toMatchSnapshot();
  expect(Unlocked()).toBeInTheDocument();
  expect(Unlocked()).toBeVisible();
  expect(Closed()).toBeInTheDocument();
  expect(Closed()).toBeVisible();
  expect(Open()).not.toBeInTheDocument();
  expect(LockGate()).toBeInTheDocument();
  expect(LockGate()).toBeVisible();
  expect(LockGate()).not.toBeDisabled();
  expect(OpenGate()).toBeInTheDocument();
  expect(OpenGate()).toBeVisible();
});

it("renders expected elements properly -> AFTER CLOSE GATE WAS CLICKED AND LOCK GATE WAS THEN CLICKED", () => {
  rtl.fireEvent.click(CloseGate());
  rtl.fireEvent.click(LockGate());
  expect(wrapper.container).toMatchSnapshot();
  expect(Unlocked()).not.toBeInTheDocument();
  expect(Locked()).toBeInTheDocument();
  expect(Locked()).toBeVisible();
  expect(Closed()).toBeInTheDocument();
  expect(Closed()).toBeVisible();
  expect(LockGate()).not.toBeInTheDocument();
  expect(UnlockGate()).toBeInTheDocument();
  expect(UnlockGate()).toBeVisible();
  expect(OpenGate()).toBeInTheDocument();
  expect(OpenGate()).toBeVisible();
  expect(OpenGate()).toBeDisabled();
});
