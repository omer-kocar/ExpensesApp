import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setenteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setenteredDate(event.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      data: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData)
    setEnteredTitle("");
    setEnteredAmount("");
    setenteredDate("");
    
  };

  return (
    <form className="new-expense__controls" onSubmit={onSubmitHandler}>
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          value={enteredAmount}
          onChange={amountChangeHandler}
        />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input
          type="date"
          min="1970-01-01"
          max="2023-01-01"
          // value={enteredDate}
          onChange={dateChangeHandler}
        />
      </div>
      <button type="submit" className="new-expense__actions">
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
