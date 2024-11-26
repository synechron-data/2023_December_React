import React, { Component } from 'react';
import DataTable from '../common/DataTable';

const ListItem = ({ item }) => <li key={item.id} className='list-group-item'>{item.name}</li>;

const ListComponent = (props) => {
    var l_items = props.items.map((item, index) => {
        return <ListItem key={item.id} item={item} />;
    });

    return (
        <>
            {props.children}
            <hr />
            <ul className="list-group">
                {l_items}
            </ul>
        </>
    );
};

const Tr = ({ item }) => {
    return (
        <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
        </tr>
    );
};

const TableComponent = (props) => {
    var trs = props.items.map((item, index) => {
        return <Tr key={item.id} item={item} />;
    });

    return (
        <>
            {props.children}
            <hr />
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {trs}
                </tbody>
            </table>
        </>
    );
};

class ListRoot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [
                { id: 1, name: "Manish" },
                { id: 2, name: "Abhijeet" },
                { id: 3, name: "Ramakant" },
                { id: 4, name: "Subodh" },
                { id: 5, name: "Abhishek" }
            ],
            posts: [
                {
                    userId: 1,
                    id: 1,
                    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                },
                {
                    userId: 1,
                    id: 2,
                    title: "qui est esse",
                    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
                }
            ]
        }
    }

    render() {
        return (
            <div>
                {/* <ListComponent items={this.state.employees}>
                    <h1>Employee List</h1>
                </ListComponent> */}

                {/* <TableComponent items={this.state.employees}>
                    <h1>Employee Table</h1>
                </TableComponent>

                <TableComponent items={this.state.posts}>
                    <h1>Posts Table</h1>
                </TableComponent> */}

                <DataTable items={this.state.employees}>
                    <h1>Employee Table</h1>
                </DataTable>

                <DataTable items={this.state.posts}>
                    <h1>Posts Table</h1>
                </DataTable>

                {/* <DataTable>
                    <h1>Posts Table</h1>
                </DataTable> */}
            </div>
        );
    }
}

export default ListRoot;