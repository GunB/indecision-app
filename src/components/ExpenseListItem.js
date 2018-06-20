import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";

const ExpenseListItem = ({ id, description, amount, createdAt, dispatch }) => (
  <div>
    <div>{description}</div>
    <div>{amount}</div>
    <div>{createdAt}</div>
    <button
      onClick={e => {
        dispatch(removeExpense({ id }));
        e.preventDefault();
      }}
    >
      Remove
    </button>
  </div>
);

const mapStatoToProps = state => ({
  expenses: state.expenses
});

export default connect(mapStatoToProps)(ExpenseListItem);
