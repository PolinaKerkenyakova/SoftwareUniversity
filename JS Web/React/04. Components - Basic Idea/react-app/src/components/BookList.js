import { Component } from 'react';

import Book from './Book.js';

class BookList extends Component {
    constructor(props) {
        super(props);
    }

    bookClicked(title) {
        console.log(`The ${title} has been clicked!`)
    }

    render() {
        return (
            <ul>
                {this.props.books.map(b => {
                    return <Book title={b.title} 
                    description={b.description} 
                    clickHandler={this.bookClicked.bind(this, b.title)}
                    // clickHandler={() => this.bookClicked(b.title)}
                    />
                })}
            </ul>
        )
    }
}

export default BookList;