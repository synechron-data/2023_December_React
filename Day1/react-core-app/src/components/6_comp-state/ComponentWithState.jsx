import React, { Component } from 'react';

class ComponentWithState extends Component {
    state = { name: "Synechron" };
    message = "Hello World!";
    
    // constructor() {
    //     super();

    //     // State must be initialized in the constructor
    //     // State must be set to an object or null
    //     // this.state = "Synechron";

    //     this.state = { name: "Synechron" };
    //     this.message = "Hello World!";

    //     console.log("Ctor, State: ", this.state);
    // }

    render() {
        console.log("Render, State: ", this.state);
        return (
            <div>
                <h2 className="text-primary">Component With State</h2>
                <h2 className="text-primary">Hello, {this.state.name}</h2>
                <h2 className="text-primary">{this.message}</h2>
            </div>
        );
    }
}

export default ComponentWithState;