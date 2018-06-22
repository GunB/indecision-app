import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";

test("should render expense form", () => {
  const action = shallow(<ExpenseForm />);
  expect(action).toMatchSnapshot();
});

test("should render expense form with data", () => {
  const action = shallow(<ExpenseForm expense={expenses[1]} />);
  expect(action).toMatchSnapshot();
});

test("should render error for invalid submission", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find("form").simulate("submit", { preventDefault: () => {} });
  expect(wrapper.state("error").length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test("should set description on input change", () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = "New descrip";
  wrapper
    .find("input[placeholder='Description']")
    .simulate("change", { target: { value } });
  expect(wrapper.state("description")).toBe(value);
});

test("should set notes on textarea change", () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = "New note";
  wrapper
    .find("textarea")
    .at(0)
    .simulate("change", { target: { value } });
  expect(wrapper.state("note")).toBe(value);
});

test("should not set amount on change", () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = "1.22";
  wrapper
    .find('input[placeholder="Amount"]')
    .at(0)
    .simulate("change", { target: { value } });
  expect(wrapper.state("amount")).toBe(value);
});

test("should not set amount on change", () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = "New note";
  wrapper
    .find('input[placeholder="Amount"]')
    .at(0)
    .simulate("change", { target: { value } });
  expect(wrapper.state("amount")).toBe("");
});
