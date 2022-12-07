import { useState } from "react";

import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY__EXPENSE = [
  {
    id: "1",
    title: "Car Insurance",
    date: new Date(2022, 11, 24),
    price: 250,
  },
  {
    id: "2",
    title: "Bike Insurance",
    date: new Date(2021, 10, 24),
    price: 2050,
  },
  {
    id: "3",
    title: "Bus Insurance",
    date: new Date(2020, 1, 24),
    price: 25000,
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY__EXPENSE);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </>
  );
}

export default App;
