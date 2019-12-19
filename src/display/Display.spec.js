// Test away!
import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Display from "./Display";

afterEach(rtl.cleanup);

let wrapper;
// beforeEach(() => {
//     wrapper = rtl.render(<Display />)
// });

let Unlocked = () => {
  return wrapper.queryByText("Unlocked");
};

let Open = () => {
  return wrapper.queryByText("Open");
};

let Closed = () => {
  return wrapper.queryByText("Closed");
};
let Locked = () => {
  return wrapper.queryByText("Locked");
};

it("renders without crashing", () => {
  wrapper = rtl.render(<Display />);
  expect(wrapper.container).toMatchSnapshot();
});

it("renders elements properly -> DEFUALT PROPS", () => {
  wrapper = rtl.render(<Display closed={false} locked={false} />);
  expect(wrapper.container).toMatchSnapshot();
  expect(Unlocked()).toBeInTheDocument();
  expect(Unlocked()).toBeVisible();
  expect(Unlocked()).toHaveClass("led", "green-led");
  expect(Open()).toBeInTheDocument();
  expect(Open()).toBeVisible();
  expect(Open()).toHaveClass("led", "green-led");
});

it("renders elements properly -> CLOSED SET TO TRUE", () => {
  wrapper = rtl.render(<Display closed={true} locked={false} />);
  expect(wrapper.container).toMatchSnapshot();
  expect(Unlocked()).toBeInTheDocument();
  expect(Unlocked()).toBeVisible();
  expect(Unlocked()).toHaveClass("led", "green-led");
  expect(Open()).not.toBeInTheDocument();
  expect(Closed()).toBeInTheDocument();
  expect(Closed()).toBeVisible();
  expect(Closed()).toHaveClass("led", "red-led");
});

it("renders elements properly -> CLOSED & LOCKED SET TO TRUE", () => {
  wrapper = rtl.render(<Display closed={true} locked={true} />);
  expect(Unlocked()).not.toBeInTheDocument();
  expect(Locked()).toBeInTheDocument();
  expect(Locked()).toBeVisible();
  expect(Locked()).toHaveClass("led", "red-led");
  expect(Open()).not.toBeInTheDocument();
  expect(Closed()).toBeInTheDocument();
  expect(Closed()).toBeVisible();
  expect(Closed()).toHaveClass("led", "red-led");
});
