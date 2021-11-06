import { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enterdDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle = '',
    //     enteredAmount = '',
    //     enterdDate = ''
    // });

    // function onChangeHandler(e) {
    //     setEnteredTitle(e.target.value)
    //     setEnteredAmount(e.target.value);
    //     setEnteredDate(e.target.value);
    // }

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    // function onTitleChangeHandler(e) {
    //     setUserInput((prevState) => {
    //         return { ...prevState, enteredTitle: e.target.value }
    // });

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: Number(enteredAmount),
            date: new Date(enterdDate)
        }

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        props.onSubmitNewExpense(expenseData);
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" id="amount" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" min="2019-01-01" max="2022-12-31" value={enterdDate} onChange={dateChangeHandler} />
                </div>
                <div className="new-expense__actions">
                    <button type="button" onClick={props.onCancel}>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
}

export default ExpenseForm;