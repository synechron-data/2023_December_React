import React, { Component } from 'react';
import { CounterContext } from './CounterContext';

class CounterSibling extends Component {
    static contextType = CounterContext;

    render() {
        return (
            <div className="text-center">
                <h3 className="text-success">Counter Sibling Component</h3>
                <h2>Current Count is: {this.context.count}</h2>
            </div>
        );
    }
}

export default CounterSibling;