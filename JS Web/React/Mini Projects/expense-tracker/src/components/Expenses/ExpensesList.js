import ExpenseItem from './ExpenseItem';

import './ExpensesList.css';

const ExpensesList = (props) => {

    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">No found items!</h2>
    }
    return (

        <ul className="expenses-list">
            {props.items.map(x => <ExpenseItem key={x.id} date={x.date} title={x.title} amount={x.amount} />)}
        </ul>
    )
}

export default ExpensesList;