import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import { useState } from 'react'

import './Expenses.css';
import ExpensesChart from './ExpensesChart';


function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2020');

  const dateChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  const filteredItems = [];
  props.expenses.filter(x => {
    if (x.date.toString().includes(filteredYear)) {
      filteredItems.push(x)
    }

    return filteredItems;
  });


  return (
    <Card className="expenses">
      <ExpensesFilter selectedYear={filteredYear} onDateChange={dateChangeHandler} />
      <ExpensesChart expenses={filteredItems}/>
      <ExpensesList items={filteredItems} />
    </Card>

  );
}

export default Expenses;