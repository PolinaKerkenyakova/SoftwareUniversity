import { useEffect, useState } from 'react/cjs/react.development';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';
import Loader from '../UI/Loader'

const AvailableMeals = () => {

  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState
    (true)
  const [hasError, setHasError] = useState(null)
    ;

  const fetchData = async () => {

    const response = await fetch('https://food-order-app-dcf28-default-rtdb.europe-west1.firebasedatabase.app/meals.json');

    if (!response.ok) {
      throw new Error('Something went wrong!');
    }

    const result = await response.json();
    const meals = [];

    Object.entries(result).map(([id, info]) => {
      return meals.push({ id, ...info });
    });

    setMeals(meals)
    setIsLoading(false);
  }

  useEffect(() => {

    fetchData().catch(error => {
      setIsLoading(false);
      setHasError(error.message)
    });
  }, []);


  const mealsList = meals.map(m => <MealItem key={m.id} id={m.id} name={m.name} description={m.description} price={m.price} />);

let content = mealsList;

  if (isLoading) {
   content = <Loader />
  }

  if (hasError) {
    content =  <p>{hasError}</p>;
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {content}
        </ul>
      </Card>
    </section>
  )
}

export default AvailableMeals;