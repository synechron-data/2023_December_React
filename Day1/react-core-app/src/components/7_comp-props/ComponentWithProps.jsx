import React, { Component } from 'react';

class ComponentWithProps extends Component {
    constructor(props) {
        super(props);

        // this.props = { "name": "Synechron" };   // Props cannot be initialized
        // this.props.name = "Abhijeet";           // Props cannot be modified, they are read-only  

        // Reference Copy - Will not work
        // this.state = this.props;
        // this.state.name = "Abhijeet";
        
        // Shallow Copy - Will work only at first level, it will allow to modify the nested objects (Bad Practice)
        // this.state = { ...this.props };
        // this.state.name = "Abhijeet";
        // this.state.address.city = "Mumbai";

        // Deep Copy - Will work at all levels, it will not allow to modify the nested objects (Good Practice)
        this.state = JSON.parse(JSON.stringify(this.props));
        this.state.name = "Abhijeet";
        this.state.address.city = "Mumbai";

        // Immutable.js or Immer.js (Recommended)

        console.log("Ctor, State: ", this.state);
        console.log("Ctor, Props: ", this.props);
    }

    render() {
        console.log("Render, State: ", this.state);
        console.log("Render, Props: ", this.props);
        return (
            <div>
                <h2 className="text-primary">Component with Props</h2>
            </div>
        );
    }
}

export default ComponentWithProps;