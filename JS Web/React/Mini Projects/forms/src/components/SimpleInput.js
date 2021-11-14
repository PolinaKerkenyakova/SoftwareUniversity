import useInput from "../hooks/use-input";

const SimpleInput = () => {

  const {
    enteredValue: enteredName,
    isValueValid: isNameValid,
    isValueInputInvalid: isNameInputInvalid,
    enteredValueHandler: enteredNameHandler,
    valueFieldTouchedHandler: nameFieldTouchedHandler,
    reset: nameInputReset
  } = useInput(name => name.trim().length > 0);

  const {
    enteredValue: enteredEmail,
    isValueValid: isEmailValid,
    isValueInputInvalid: isEmailInputInvalid,
    enteredValueHandler: enteredEmailHandler,
    valueFieldTouchedHandler: emailFieldTouchedHandler,
    reset: emailInputReset
  } = useInput(email => email.trim().includes('@'));


  let isFormValid = false;

  if (isNameValid && isEmailValid) {
    isFormValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    console.log(isFormValid);
    nameInputReset();
    emailInputReset();
  }


  const nameFormClasses = isNameInputInvalid ? 'form-control invalid' : 'form-control';

  const emailFormClasses = isEmailInputInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className={nameFormClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={enteredNameHandler} onBlur={nameFieldTouchedHandler} value={enteredName} />
        {isNameInputInvalid && <p className='error-text'>Name must not be empty.</p>}
      </div>

      <div className={emailFormClasses}>
        <label htmlFor='name'>Your Email</label>
        <input type='text' id='name' onChange={enteredEmailHandler} onBlur={emailFieldTouchedHandler} value={enteredEmail} />
        {isEmailInputInvalid && <p className='error-text'>Email must contain @.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
