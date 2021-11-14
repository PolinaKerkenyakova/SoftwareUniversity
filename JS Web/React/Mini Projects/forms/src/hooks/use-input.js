import { useState } from "react";

const useInput = (validateInput) => {

    const [enteredValue, setEnteredValue] = useState('');
    const [valueFieldTouched, setValueFieldTouched] = useState(false);

    const isValueValid = validateInput(enteredValue);
    const isValueInputInvalid = !isValueValid && valueFieldTouched;

    const enteredValueHandler = (event) => {
        setEnteredValue(event.target.value);
    }

    const valueFieldTouchedHandler = (event) => {
        setValueFieldTouched(true);
    }

    const reset = () => {
        setEnteredValue('');
        setValueFieldTouched(false);
    }


    return {
        enteredValue,
        isValueValid,
        isValueInputInvalid,
        enteredValueHandler,
        valueFieldTouchedHandler,
        reset
    }
}

export default useInput;