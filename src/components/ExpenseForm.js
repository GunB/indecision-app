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
    const description = e.target.value;
    this.setState(() => ({
      description
    }));
  };
  handleChangeAmount = e => {
    const amount = e.target.value;
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  handleChangeNotes = e => {
    const notes = e.target.value;
    this.setState(() => ({ notes }));
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
        <input
          type="number"
          name="amount"
          value={this.state.amount}
          onChange={this.handleChangeAmount}
        />
        <textarea
          name="notes"
          value={this.state.notes}
          onChange={this.handleChangeNotes}
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
