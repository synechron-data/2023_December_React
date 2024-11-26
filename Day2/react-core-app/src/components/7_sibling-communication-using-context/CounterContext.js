import React, { Component } from 'react';

export const CounterContext = React.createContext();

const counter = {
    count: 10,
    changeCount: function (newCount) {
        this.count = newCount;
    }
};

class CounterContextProvider extends Component {
    constructor(props) {
        super(props);
        this.state = { count: counter.count };
        this.setCount = this.setCount.bind(this);
    }

    setCount(newCount) {
        counter.changeCount(newCount);
        this.setState({ count: counter.count });
    }

    render() {
        return (
            <CounterContext.Provider value={{ count: this.state.count, setCount: this.setCount }}>
                {this.props.children}
            </CounterContext.Provider>
        );
    }
}

// class CounterContextProvider extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0,
//         };
//         this.setCount = this.setCount.bind(this);
//     }

//     setCount(newCount) {
//         this.setState({ count: newCount });
//     }

//     render() {
//         return (
//             <CounterContext.Provider value={{ count: this.state.count, setCount: this.setCount }}>
//                 {this.props.children}
//             </CounterContext.Provider>
//         );
//     }
// }

export default CounterContextProvider;