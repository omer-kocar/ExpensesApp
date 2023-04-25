import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
import Card from "../UI/Card"

function Expenses(props) {

  const expense = [
    {
      id: "e1",
      title: "Toilet paper",
      amount: "$144,87",
      date: new Date(2023, 4, 25)
    },
    {
      id: "e2",
      title: "Car insurance",
      amount: "$224,87",
      date: new Date(2021, 2, 20)
    },
    {
      id: "e2",
      title: "New Tv",
      amount: "$799,99",
      date: new Date(2021, 8, 10)
    },
    {
      id: "e3",
      title: "New Desktop (Wooden)",
      amount: "$450",
      date: new Date(2018, 6, 5)
    },
    
  ]
  return (
    <Card className="expenses">
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      />
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      />
      <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
      />
      <ExpenseItem
        title={expense[3].title}
        amount={expense[3].amount}
        date={expense[3].date}
      />
    </Card>
  );
}

export default Expenses;
