import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

import './ExpenseList.css';


function ExpensesList(props) {
  return (
    <Card className="expenses">
        {props.expenses.map(x => <ExpenseItem key={x.id} date={x.date} title={x.title} amount={x.amount} />)}
    </Card>
  );
}

export default ExpensesList;