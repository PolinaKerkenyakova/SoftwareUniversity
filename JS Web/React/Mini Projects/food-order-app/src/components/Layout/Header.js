import classes from './Header.module.css'
import mealsImage from '../../assets/meals.jpg';
import HeaderCardButton from './HeaderCartButton';

const Header = props => {
    return (
        <>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCardButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="A table full of delicious food"/>
            </div>
        </>
    )
}

export default Header;