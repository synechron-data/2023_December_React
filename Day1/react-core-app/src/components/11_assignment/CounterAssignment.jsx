import React, { Component } from 'react';

// class Counter extends Component {
//     render() {
//         return (
//             <>
//                 <div className="text-center">
//                     <h3 className="text-info">Counter Component</h3>
//                 </div>
//                 <div className="d-grid gap-2 mx-auto col-6">
//                     <input type="text" className="form-control form-control-lg" />
//                     <button className="btn btn-info">
//                         <span className='fs-4'>+</span>
//                     </button>
//                     <button className="btn btn-info">
//                         <span className='fs-4'>-</span>
//                     </button>
//                     <button className="btn btn-secondary">
//                         <span className='fs-4'>Reset</span>
//                     </button>
//                 </div>
//             </>
//         );
//     }
// }

// class CounterAssignment extends Component {
//     render() {
//         return (
//             <div>
//                 <Counter />
//                 <hr />
//                 <Counter interval={10} />
//             </div>
//         );
//     }
// }

// export default CounterAssignment;

class ListItemArrow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSelected: false
        };
    }

    toggleSelect = () => {
        this.setState(prevState => ({
            isSelected: !prevState.isSelected
        }));
    }

    render() {
        const { isSelected } = this.state;
        return (
            <li onClick={this.toggleSelect} className={isSelected ? 'selected' : ''}>
                {this.props.itemName}
            </li>
        );
    }
}

class ListItemPrototype extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSelected: false
        };
        this.toggleSelect = this.toggleSelect.bind(this);
    }

    toggleSelect() {
        this.setState(prevState => ({
            isSelected: !prevState.isSelected
        }));
    }

    render() {
        const { isSelected } = this.state;
        return (
            <li onClick={this.toggleSelect} className={isSelected ? 'selected' : ''}>
                {this.props.itemName}
            </li>
        );
    }
}

class CounterAssignment extends Component {
    items = new Array(1).fill(null).map((_, index) => `Item ${index + 1}`);

    render() {
        return (
            <div>
                <h2>Testing Arrow Functions</h2>
                <ul>
                    {this.items.map(item => <ListItemArrow key={item} itemName={item} />)}
                </ul>

                <h2>Testing Prototype Methods</h2>
                <ul>
                    {this.items.map(item => <ListItemPrototype key={item} itemName={item} />)}
                </ul>
            </div>
        );
    }
}

export default CounterAssignment;