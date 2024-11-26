import React, { Component } from 'react';

const ComponentErrorHandlerHOC = (InputComponent) => class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    render() {
        if (this.state.hasError) {
            var errImg = require('../../assets/component-error.png');
            return (
                <div className="text-center">
                    <img src={errImg} alt="Component Error" className='rounded' />
                </div>
            );
        } else {
            return <InputComponent {...this.props} {...this.state} />
        }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }
}

export default ComponentErrorHandlerHOC;