import React, { Component } from "react";
import { uuidv1 } from "uuid";

export default class ExpenseForm extends Component {
  state = {
    id: undefined,
    description: "",
    notes: "",
    amount: 0,
    createdAt: 0
  };

  componentDidMount = () => {
    this.props.expense && this.setState(() => ({ ...this.props.expense }));
  };

  handleSubmitExpense = e => {
    this.props.handleExpenseForm(this.getState());
    e.preventDefault();
  };
  handleChangeDescription = e => {
    this.setState(() => ({
      description: e.target.value
    }));
  };
  handleChangeAmount = e => {
    const amount = e.target.value;
    amount.match(/^\d+(\.\d{0,2})?$/) &&
      this.setState(() => ({
        notes: amount
      }));
  };
  handleChangeNotes = e => {
    this.setState(() => ({
      notes: e.target.value
    }));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmitExpense}>
        <input
          type="text"
          name="description"
          value={this.state.description}
          onChange={this.handleChangeDescription}
        />
        <input type="number" name="amount" value={this.state.amount} />
        <textarea
          name="notes"
          value={this.state.notes}
          onChange={this.props.handleChangeNotes}
        />
      </form>
    );
  }
}

ExpenseForm.defaultProps = {
  expense: undefined,
  handleExpenseForm(expense) {
    console.log("Not defined ", expense);
  }
};
