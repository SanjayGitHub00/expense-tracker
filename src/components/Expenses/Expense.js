import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpenseList from "./ExpenseList";
import "./Expense.css";
import Card from "../Ui/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

function Expense({ items }) {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterHandler = (filterYear) => {
    setFilteredYear(filterYear);
  };

  const filteredExpenses = items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onFilter={filterHandler} />

        <ExpensesChart expenses={filteredExpenses} />

        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expense;
