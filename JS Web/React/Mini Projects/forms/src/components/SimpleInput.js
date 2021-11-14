import { useState } from "react";

const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('');
  const [enteredNameFieldTouched, setEnteredNameFieldTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim().length !== 0;
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameFieldTouched;

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailFieldTouched, setEnteredEmailFieldTouched] = useState(false);

  const enteredEmailIsValid = enteredEmail.trim().includes('@');
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailFieldTouched;

  let isFormValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    isFormValid = true;
  }

  const enteredNameHandler = (event) => {
    setEnteredName(event.target.value);
  }

  const nameFieldTouchedHandler = (event) => {
    setEnteredNameFieldTouched(true);
  }

  const emailEneteredHandler = (event) => {
    setEnteredEmail(event.target.value);
  }

  const emailFirldTouchedHandler = () => {
    setEnteredEmailFieldTouched(true)
  }

  const submitHandler = (event) => {
    event.preventDefault();
    setEnteredNameFieldTouched(true);
    setEnteredEmailFieldTouched(true)

    if (isFormValid) {
      setEnteredName('');
      setEnteredEmail('');
      setEnteredNameFieldTouched(false);
      setEnteredEmailFieldTouched(false);
    }
  }


  const nameFormClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

  const emailFormClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className={nameFormClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={enteredNameHandler} onBlur={nameFieldTouchedHandler} value={enteredName} />
        {nameInputIsInvalid && <p className='error-text'>Name must not be empty.</p>}
      </div>
      <div className={emailFormClasses}>
        <label htmlFor='name'>Your Email</label>
        <input type='text' id='name' onChange={emailEneteredHandler} onBlur={emailFirldTouchedHandler} value={enteredEmail}/>
        {emailInputIsInvalid && <p className='error-text'>Email must contain @.</p>}
      </div>
      <div className="form-actions">
        <button disabled={isFormValid ? true : false}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
