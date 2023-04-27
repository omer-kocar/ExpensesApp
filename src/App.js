import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet paper",
    amount: "$144,87",
    date: new Date(2023, 4, 25),
  },
  {
    id: "e2",
    title: "Car insurance",
    amount: "$224,87",
    date: new Date(2022, 2, 20),
  },
  {
    id: "e3",
    title: "New Tv",
    amount: "$799,99",
    date: new Date(2021, 8, 10),
  },
  {
    id: "e4",
    title: "New Desktop (Wooden)",
    amount: "$450",
    date: new Date(2021, 6, 5),
  },
];

function App(props) {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  };

  return (
    <div className="App">
      <NewExpense onAddExpenseItem={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
