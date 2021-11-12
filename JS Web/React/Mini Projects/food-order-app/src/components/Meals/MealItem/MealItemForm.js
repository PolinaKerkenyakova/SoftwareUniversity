import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = props => {
    const [isAmountValid, setIsAmountValid] = useState(true);
    const amountInputRef = useRef();
    const submitHadler = event => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;

        if (enteredAmount.trim().length === 0 || Number(enteredAmount) < 1 || Number(enteredAmount) > 5) {
            setIsAmountValid(false);
            return;
        }

        props.onAddToCard(Number(enteredAmount));
    }

    return (
        <form className={classes.form} onSubmit={submitHadler}>
            <Input
                ref={amountInputRef}
                label="Amount"
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }} />
            <button>+ Add</button>
            {!isAmountValid && <p>Plaease enter a valid amount (1-5).</p>}
        </form>
    )
}

export default MealItemForm;