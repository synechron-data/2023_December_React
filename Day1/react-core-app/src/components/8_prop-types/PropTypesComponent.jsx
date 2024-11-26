// import React, { Component } from 'react';

// class PropTypesComponent extends Component {
//     render() {
//         return (
//             <>
//                 <h2 className="text-primary">Hello, {this.props.name.toUpperCase()}</h2>
//                 <h2 className="text-primary">Your Age is, {this.props.age}</h2>
//             </>
//         );
//     }

//     static get defaultProps() {
//         return {
//             name: "Manish",
//             age: 0
//         };
//     }
// }

// class PropTypesRoot extends Component {
//     render() {
//         return (
//             <div>
//                 <h1 className='text-success'>Default Props</h1>
//                 <PropTypesComponent />
//                 <hr />
//                 <PropTypesComponent name={"abhijeet"} />
//                 <hr />
//                 <PropTypesComponent name={"ramakant"} age={40} />
//                 <hr />
//                 <PropTypesComponent name={10} age={"40"} />
//             </div>
//         );
//     }
// }

// export default PropTypesRoot;

// ------------------------------------------------------------------

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PropTypesComponent extends Component {
    render() {
        return (
            <>
                <h2 className="text-primary">Hello, {this.props.name.toUpperCase()}</h2>
                <h2 className="text-primary">Your Age is, {this.props.age}</h2>
            </>
        );
    }

    static get propTypes() {
        return {
            name: PropTypes.string.isRequired,
            // age: PropTypes.number
            age: function (props, propName, componentName) {
                if (props[propName] < 18) {
                    return new Error(`Invalid prop ${propName} supplied to ${componentName}. Age must be greater than 18.`);
                }
            },
            products: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired
            }))
        };
    }
}

class PropTypesRoot extends Component {
    render() {
        return (
            <div>
                <h1 className='text-success'>Prop Types</h1>
                <hr />
                {/* <PropTypesComponent /> */}
                {/* <PropTypesComponent name={"abhijeet"} /> */}
                {/* <PropTypesComponent name={"ramakant"} age={40} /> */}
                {/* <PropTypesComponent name={10} age={"40"} /> */}
                {/* <PropTypesComponent name={"ramakant"} age={10} /> */}
                <PropTypesComponent name={"ramakant"} age={40} products={[{ id: 1, name: "abc", price: 20 }]} />
            </div>
        );
    }
}

export default PropTypesRoot;