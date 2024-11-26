import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            flag: false
        };

        this._clickCount = 0;
        this._inc = this._inc.bind(this);
        this._dec = this._dec.bind(this);
        this.reset = this.reset.bind(this);
    }

    manageClickCount() {
        this._clickCount++;
        if (this._clickCount > 9) {
            this.setState({ flag: true }, () => {
                if (this.props.onMax)
                    this.props.onMax(this.state.flag);
            });
        }
    }

    _inc(e) {
        this.setState({ count: this.state.count + this.props.interval }, () => {
            this.manageClickCount();
        });
    }

    _dec(e) {
        this.setState({ count: this.state.count - this.props.interval }, () => {
            this.manageClickCount();
        });
    }

    reset(e) {
        this.setState({ count: 0, flag: false }, () => {
            if (this.props.onMax)
                this.props.onMax(this.state.flag);
        });
        this._clickCount = 0;
    }

    render() {
        return (
            <>
                <div className="text-center">
                    <h3 className="text-info">Counter Component</h3>
                </div>
                <div className="d-grid gap-2 mx-auto col-6">
                    <input type="text" className="form-control form-control-lg" value={this.state.count} readOnly />
                    <button className="btn btn-info" disabled={this.state.flag}
                        onClick={this._inc}>
                        <span className='fs-4'>+</span>
                    </button>
                    <button className="btn btn-info" disabled={this.state.flag}
                        onClick={this._dec}>
                        <span className='fs-4'>-</span>
                    </button>
                    <button className="btn btn-secondary" disabled={!this.state.flag}
                        onClick={this.reset}>
                        <span className='fs-4'>Reset</span>
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

class CounterAssignment extends Component {
    constructor(props) {
        super(props);
        this._c = React.createRef();
        this.state = {
            message: ""
        };
        this.p_reset = this.p_reset.bind(this);
        this.updateMessage = this.updateMessage.bind(this);
    }

    updateMessage(flag) {
        if (flag)
            this.setState({ message: "Max Click Reached, please click the reset button to restart" });
        else
            this.setState({ message: "" });
    }

    p_reset(e) {
        if ((this._c.current) && (this._c.current.reset))
            this._c.current.reset();
    }

    render() {
        return (
            // <div>
            //     <Counter />
            //     <hr />
            //     <Counter interval={10} />
            // </div>

            // <div>
            //     <h2 className="text-success text-center mt-5 mb-5">Calling Child Method from Parent using ref</h2>
            //     <Counter ref={this._c} />
            //     <hr />
            //     <div className="d-grid gap-2 mx-auto col-6 mt-5">
            //         <button className="btn btn-warning" onClick={this.p_reset}>
            //             <span className='fs-4'>Parent Reset</span>
            //         </button>
            //     </div>
            // </div>

            <div>
                <h2 className="text-success text-center mt-5 mb-5">Calling Parent Method from Child Component</h2>

                {
                    this.state.message &&
                    <div className="alert alert-danger text-center mt-5">
                        <h4>
                            <i className='bi bi-info-square-fill'></i>
                        </h4>
                        <h4 className="alert-heading">{this.state.message}</h4>
                    </div>
                }

                <Counter ref={this._c} onMax={this.updateMessage} />
                <hr />
                <div className="d-grid gap-2 mx-auto col-6 mt-5">
                    <button className="btn btn-warning" onClick={this.p_reset}>
                        <span className='fs-4'>Parent Reset</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default CounterAssignment;