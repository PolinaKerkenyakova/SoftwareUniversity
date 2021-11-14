import { useState } from "react";

const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('');
  const [enteredNameFieldTouched, setEnteredNameFieldTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim().length !== 0;
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameFieldTouched;

  const enteredNameHandler = (event) => {
    setEnteredName(event.target.value);
  }

  const fieldTouchedHandler = (event) => {
    setEnteredNameFieldTouched(true);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    setEnteredNameFieldTouched(true);

    setEnteredName('');
    setEnteredNameFieldTouched(false);

  }


  const formClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className={formClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={enteredNameHandler} onBlur={fieldTouchedHandler} value={enteredName} />
        {nameInputIsInvalid && <p className='error-text'>Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
