import React, {useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {

  const [enteredTitle, setEnteredTitle]= useState('')
  const [enteredAmount, setEnteredAmount]= useState('')
  const [enteredDate, setenteredDate]= useState('')

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
  }

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
  }

  const dateChangeHandler = (event) => {
    setenteredDate(event.target.value)
  }

  return (
    <form className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" onChange={titleChangeHandler} />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input type="date" min="1970-01-01" max="-01-01" onChange={dateChangeHandler} />
      </div>
      <button type="submit"  className="new-expense__actions">
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
