import { useEffect, useState } from "react";

const useCounter = (decreaseOrIncrease = '+') => {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {

        if (decreaseOrIncrease === '+') {
            setCounter((prevCounter) => prevCounter + 1);
        } else {
            setCounter((prevCounter) => prevCounter - 1);
        }
      }, 1000);
  
      return () => clearInterval(interval);
    }, [decreaseOrIncrease]);

    return counter;

}

export default useCounter;