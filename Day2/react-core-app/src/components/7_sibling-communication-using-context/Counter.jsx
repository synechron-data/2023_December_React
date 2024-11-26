import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CounterContext } from './CounterContext';

class Counter extends Component {
    static contextType = CounterContext;

    constructor(props) {
        super(props);
        this._inc = this._inc.bind(this);
        this._dec = this._dec.bind(this);
    }

    _inc(e) {
        const { count, setCount } = this.context;
        setCount(count + this.props.interval);
    }

    _dec(e) {
        const { count, setCount } = this.context;
        setCount(count - this.props.interval);
    }

    render() {
        return (
            <>
                <div className="text-center">
                    <h3 className="text-info">Counter Component</h3>
                </div>
                <div className="d-grid gap-2 mx-auto col-6">
                    <input type="text" className="form-control form-control-lg" value={this.context.count} readOnly />
                    <button className="btn btn-info"
                        onClick={this._inc}>
                        <span className='fs-4'>+</span>
                    </button>
                    <button className="btn btn-info"
                        onClick={this._dec}>
                        <span className='fs-4'>-</span>
                    </button>
                </div>
            </>
        );
    }

    static get propTypes() {
        return {
            interval: PropTypes.number
        };
    }

    static get defaultProps() {
        return {
            interval: 1
        };
    }
}

export default Counter;