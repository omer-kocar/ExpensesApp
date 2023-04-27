import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    // console.log("ExpensesFilter.js");
    // console.log(selectedYear);
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onChangeFilter={filterChangeHandler}
      />
      {filteredExpenses.length === 0 ? (
        <p> No expenses found! </p>
      ) : (
        filteredExpenses.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))
      )}
    </Card>
  );
}

export default Expenses;
