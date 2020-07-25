import React, { Component } from "react";
import TransactionCard from "./TransactionCard";

class ExpenseTracker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transactionName: "",
      amount: "",
      IncomeAndAmountArray: [],
      type: "income",
      isTrue: false,
    };
  }

  transactionNameHandler = (e) => {
    this.setState({
      transactionName: e.target.value,
    });
  };

  amountHandler = (e) => {
    this.setState({
      amount: e.target.value,
    });
  };

  typeChangeHandler = (e) => {
    this.setState({
      type: e.target.value,
    });
  };

  addTransaction = () => {
    if (this.state.transactionName === "" || this.state.amount === "") {
      alert("Your input feild is empty,please enter a valid value");
    } else {
      const newIncAndAmt = [...this.state.IncomeAndAmountArray];
      newIncAndAmt.push({
        transactionName: this.state.transactionName,
        amount: this.state.amount,
        type: this.state.type,
      });
      this.setState({
        isTrue: true,
        transactionName: "",
        amount: "",
        IncomeAndAmountArray: newIncAndAmt,
      });
    }
  };

  render() {
    const totalincome = this.state.IncomeAndAmountArray.filter(
      (v) => v.type === "income"
    ).reduce((a, c) => +a + +c.amount, 0);

    const totalexpense = this.state.IncomeAndAmountArray.filter(
      (v) => v.type === "expense"
    ).reduce((a, c) => +a + +c.amount, 0);

    return (
      <div className="main-container">
        <div className="container">
          <div className="displayIncAndExp">
            <h6 className="income-color">Total Income ={totalincome}</h6>
            <h6 className="expense-color">Total Expense ={totalexpense}</h6>
          </div>

          <div className="trans-value">
            <label>
              Transaction
              <input
                type="text"
                value={this.state.transactionName}
                onChange={this.transactionNameHandler}
              />
            </label>
          </div>

          <div className="trans-amt">
            <label>
              Amount
              <input
                type="number"
                value={this.state.amount}
                onChange={this.amountHandler}
              />
            </label>
          </div>

          <div className="typeName">
            <label>
              Transaction type
              <select value={this.state.type} onChange={this.typeChangeHandler}>
                <option value="expense">Expense</option>
                <option value="income">Income</option>
              </select>
            </label>
          </div>
          <div className="btn">
            <button onClick={this.addTransaction}>Add</button>
            {/* <button onClick={this.addTotal}>AddTotal</button> */}
          </div>
        </div>
        {this.state.isTrue ? (
          <div className="flex">
            <h4>Type</h4>
            <h4>TransactionName</h4>
            <h4>Amount</h4>
          </div>
        ) : (
          ""
        )}
        <TransactionCard transactions={this.state.IncomeAndAmountArray} />
      </div>
    );
  }
}

export default ExpenseTracker;
