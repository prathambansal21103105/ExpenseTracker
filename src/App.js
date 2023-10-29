import React, { useState } from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DummyExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2024, 2, 28)
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2023, 3, 29)
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 4, 30)
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2022, 5, 31)
  }
];
const App=()=>{
  const [expenses,setExpenses]=useState(DummyExpenses);
  const addExpenseHandler=(expense)=>{
    setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses];
    });
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;