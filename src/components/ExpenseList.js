import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";
import ExpenseListFilter from "./ExpenseLisFilters";

const ExpenseList = props => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.map(expense => (
      <ExpenseListItem key={expense.id} {...expense} />
    ))}
    <ExpenseListFilter />
  </div>
);

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
