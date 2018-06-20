import React from "react";
import { connect } from "react-redux";
import { addExpense } from "../actions/expenses";
import ExpenseForm from "./ExpenseForm";

const AddExpensePage = props => (
  <div>
    <ExpenseForm
      handleExpenseForm={expense => {
        props.dispatch(addExpense(expense));
      }}
    />
  </div>
);

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(AddExpensePage);
