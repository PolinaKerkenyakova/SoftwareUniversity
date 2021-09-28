const Book = (props) => {

    return (
        <li>
            <h3 onClick={props.clickHandler}>{props.title}</h3>
            <p>{props.description}</p>
        </li>

    )
}

export default Book;