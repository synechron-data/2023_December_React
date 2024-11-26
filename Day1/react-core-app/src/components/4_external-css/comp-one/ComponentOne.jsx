import React, { Component } from 'react';

import './ComponentOne.css';

class ComponentOne extends Component {
    render() {
        return (
            <>
                <h1 className="text-success">Hello from Component One</h1>
                <h1 className="componentOneCard">From Component One</h1>
            </>
        );
    }
}

export default ComponentOne;