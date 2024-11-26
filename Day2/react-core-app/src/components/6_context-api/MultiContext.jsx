import React, { Component } from 'react';
import DataTable from '../common/DataTable';

const C1 = React.createContext();
const C2 = React.createContext();
const C3 = React.createContext();

class ComponentFive extends Component {
    render() {
        return (
            <>
                <h3 className='text-info'>Consusming Context One</h3>
                <h3 className='text-info'>{this.context}</h3>
            </>
        );
    }
}

ComponentFive.contextType = C1;

class ComponentFour extends Component {
    render() {
        return (
            <div>
                <C1.Consumer>
                    {
                        (data) => (
                            <h3 className="text-success">{data}</h3>
                        )
                    }
                </C1.Consumer>
                <C2.Consumer>
                    {
                        (data) => (
                            <h3 className="text-success">{data}</h3>
                        )
                    }
                </C2.Consumer>
                <C3.Consumer>
                    {
                        (data) => (
                            <h3 className="text-success">{data}</h3>
                        )
                    }
                </C3.Consumer>
            </div>
        );
    }
}

class ComponentThree extends Component {
    render() {
        return (
            <div>
                <C1.Consumer>
                    {
                        (data) => (
                            <h3 className="text-warning">{data}</h3>
                        )
                    }
                </C1.Consumer>
                <C2.Consumer>
                    {
                        (data) => (
                            <h3 className="text-warning">{data}</h3>
                        )
                    }
                </C2.Consumer>
                <C3.Consumer>
                    {
                        (data) => (
                            <h3 className="text-warning">{data}</h3>
                        )
                    }
                </C3.Consumer>
            </div>
        );
    }
}

class ComponentTwo extends Component {
    render() {
        return (
            <div>
                <C1.Consumer>
                    {
                        (data) => (
                            <h3 className="text-primary">{data}</h3>
                        )
                    }
                </C1.Consumer>
                <C2.Consumer>
                    {
                        (data) => (
                            <h3 className="text-primary">{data}</h3>
                        )
                    }
                </C2.Consumer>
                <C3.Consumer>
                    {
                        (data) => (
                            <h3 className="text-primary">{data}</h3>
                        )
                    }
                </C3.Consumer>
            </div>
        );
    }
}

class ComponentOne extends Component {
    render() {
        return (
            <div>
                <ComponentTwo />
                <hr />
                <ComponentThree />
                <hr />
                <ComponentFour />
                <hr />
                <ComponentFive />
            </div>
        );
    }
}

class MultiContext extends Component {
    render() {
        return (
            <div>
                <h2 className="text-primary text-uppercase text-center mt-5 mb-5">Multiple Context</h2>

                <C1.Provider value={"Data from Context One (C1)"}>
                    <C2.Provider value={"Data from Context Two (C2)"}>
                        <C3.Provider value={"Data from Context Three (C3)"}>
                            <ComponentOne />
                        </C3.Provider>
                    </C2.Provider>
                </C1.Provider>

                {/* <hr />
                <ComponentFour /> */}
            </div>
        );
    }
}

export default MultiContext;