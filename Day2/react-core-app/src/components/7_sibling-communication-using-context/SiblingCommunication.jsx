import React, { Component } from 'react';
import Counter from './Counter';
import CounterSibling from './CounterSibling';
import CounterContextProvider from './CounterContext';

class SiblingCommunicationUsingContext extends Component {
    render() {
        return (
            <div>
                <h2 className="text-warning text-center mt-5 mb-5">Sibling Communication Using Context</h2>
                <CounterContextProvider>
                    <Counter />
                    <hr />
                    <CounterSibling />
                </CounterContextProvider>
            </div>
        );
    }
}

export default SiblingCommunicationUsingContext;