import { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 2
        }
    }

    decrementCounter() {
        // this.setState({ count: this.state.count - 1 });
        this.setState(oldState => ({ count: oldState.count - 1 }))
    }

    render() {
        return (
            <div>
                <h3>Book Counter</h3>
                {/* <button onClick={(e) => this.decrementCounter()}>-</button> */}
                <button onClick={this.decrementCounter.bind(this)}>-</button>
                <span>{this.state.count}</span>
                <button onClick={(e) => this.setState({ count: this.state.count + 1 })}>+</button>
            </div>
        )
    }

}

export default Counter;