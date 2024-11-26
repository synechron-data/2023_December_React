import React, { Component } from 'react';
import DataTable from '../common/DataTable';

const { Provider, Consumer } = React.createContext();

class ComponentTwo extends Component {
    render() {
        return (
            <div>
                <Consumer>
                    {
                        (data) => (
                            <DataTable items={data}>
                                <h4 className="text-info text-uppercase font-weight-bold">Employees Table</h4>
                            </DataTable>
                        )
                    }
                </Consumer>
                <Consumer>
                    {
                        (data) => (
                            <DataTable items={data}>
                                <h4 className="text-info text-uppercase font-weight-bold">Employees Table</h4>
                            </DataTable>
                        )
                    }
                </Consumer>
            </div>
        );
    }
}

class ComponentOne extends Component {
    render() {
        return (
            <div>
                <ComponentTwo />
            </div>
        );
    }
}

class WithContext extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [
                { id: 1, name: "Manish" },
                { id: 2, name: "Abhijeet" },
                { id: 3, name: "Ramakant" },
                { id: 4, name: "Subodh" },
                { id: 5, name: "Abhishek" }
            ]
        };
    }

    render() {
        return (
            <div>
                <h2 className="text-primary text-uppercase text-center mt-5 mb-5">With Context API</h2>

                <Provider value={this.state.employees}>
                    <ComponentOne />
                </Provider>
            </div>
        );
    }
}

export default WithContext;