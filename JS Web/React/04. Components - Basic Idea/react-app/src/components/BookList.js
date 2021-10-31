import { Component } from "react";
import Book from "./Book";

class BookList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        // console.log(this.props);
        return (
            <div>
                <h2>Our Book Collection</h2>
                <div className="book-list">

                    {this.props.books.map(x => {
                        return <Book title={x.title} description={x.description} />
                    })}

                    {/* <Book title="Book One" description="Book One Description"/>
                    <Book title="Book Two" description="Book Two Description"/>
                    <Book title="Book Three" description="Book Three Description"/> */}
                </div>
            </div>

        );
    }
}

export default BookList;