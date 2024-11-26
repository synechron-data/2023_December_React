import React, { Component } from 'react';

class ControlledVsUncontrolled extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.state = {
            name: 'Manish'
        };
    }

    handleChange(e) {
        this.setState({ name: e.target.value });
    }

    handleClick(e) {
        // String Refs are deprecated
        // if (this.refs.t1) {
        //     this.setState({ name: this.refs.t1.value });
        // }

        // if (this.t1) {
        //     this.setState({ name: this.t1.value });
        // }

        if(this.inputRef.current) {
            this.setState({ name: this.inputRef.current.value });
        }
    }

    render() {
        return (
            <div className='text-center'>
                <h1 className="text-info">Controlled & Uncontrolled Component</h1>

                <div className="d-grid gap-2 col-6 mx-auto mt-5">
                    {/* Uncontrolled */}
                    {/* <input type="text" className='form-control' />
                    <input type="text" className='form-control' defaultValue={"Abhijeet"} />
                    <input type="text" className='form-control' defaultValue={this.state.name} /> */}

                    {/* Controlled */}
                    {/* <input type="text" className='form-control' value={"Abhijeet"} readOnly />
                    <input type="text" className='form-control' value={this.state.name} readOnly />

                    <input type="text" className='form-control' value={this.state.name} onChange={this.handleChange.bind(this)} />
                    <h2 className="text-info">Name is: {this.state.name}</h2> */}

                    {/* Uncontrolled */}
                    {/* <input type="text" className='form-control' defaultValue={this.state.name} ref="t1"/> */}
                    {/* <input type="text" className='form-control' defaultValue={this.state.name} ref={(elem) => { this.t1 = elem; }} /> */}
                    <input type="text" className='form-control' defaultValue={this.state.name} ref={this.inputRef} />

                    <h2 className="text-info">Name is: {this.state.name}</h2>
                    <button className='btn btn-primary' onClick={this.handleClick.bind(this)}>Click</button>
                </div>
            </div>
        );
    }
}

export default ControlledVsUncontrolled;