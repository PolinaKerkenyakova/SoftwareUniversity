import { useState } from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

function NewExpense(props) {

    const [isEditing, setIsEditing] = useState(false);

    const submitNewExpense = (newExpenseData) => {
        const expenseData = {
            ...newExpenseData,
            id: Math.random().toString()
        }
        setIsEditing(false);
        props.onAddNewExpense(expenseData);
    }

    const isEditingHandler = () => {
        setIsEditing(true)
    }
    const stopEditingHandler = () => {
        setIsEditing(false)
    }

    return (
        <div className="new-expense">
            {isEditing
                ? <ExpenseForm onSubmitNewExpense={submitNewExpense} onCancel={stopEditingHandler} />
                : <button onClick={isEditingHandler}>Add New Expense</button>}
        </div>
    );
}

export default NewExpense;