import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {

  const addExpenseHandler = (expense) => {
    console.log('Expense.js')
    console.log(expense)
  }
  return (
    <div className="App">
      <NewExpense onAddExpenseItem={addExpenseHandler} />
      <Expenses />
    </div>
  );
}

export default App;
