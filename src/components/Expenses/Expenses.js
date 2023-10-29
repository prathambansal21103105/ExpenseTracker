import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter.js';
import ExpensesChart from './ExpensesChart.js';
import ExpensesList from './ExpensesList.js';
import Card from '../UI/Card.js';
import './Expenses.css';
const Expenses=(props)=>{
    const [currYear,setCurrYear]=useState('2021');
    const yearHandler=(year)=>{
      setCurrYear(year);
    }
    const filteredExpenses=props.expenses.filter((expense)=>{
      return expense.date.getFullYear().toString()===currYear;
    });
   
    return(
      <div>
        <Card className="expenses">
            <ExpensesFilter 
              selected={currYear} 
              onChangeFilter={yearHandler}
            />
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
        </Card>
      </div>
    );
}
export default Expenses;