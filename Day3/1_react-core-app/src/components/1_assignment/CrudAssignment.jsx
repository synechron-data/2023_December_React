import React, { Component } from 'react';
import DataTable from '../common/DataTable';
import TextInput from '../common/TextInput';

const FormComponent = (props) => {
    return (
        <div className='row'>
            <div className='col-sm-6 offset-sm-3'>
                <form className='form-horizontal' autoComplete='off' onSubmit={
                    (e) => {
                        e.preventDefault();
                        props.saveEmployee();
                    }
                }>
                    <fieldset>
                        <legend className="text-center text-secondary text-uppercase font-weight-bold">Add/Edit Employee Information</legend>
                        <hr className="mt-0" />
                        <TextInput label={"Employee Id"} name={"id"} value={props.employee.id} readOnly={true} />
                        <TextInput label={"Employee Name"} name={"name"} value={props.employee.name}
                            onChange={props.changeEmployee} />
                        <TextInput label={"Designation"} name={"designation"} value={props.employee.designation}
                            onChange={props.changeEmployee} />
                        <TextInput label={"Salary"} name={"salary"} value={props.employee.salary}
                            onChange={props.changeEmployee} />

                        <div className="d-grid gap-2 mx-auto mt-3">
                            <button type="submit" className="btn btn-success">Save</button>
                            <button type="reset" className="btn btn-primary">Reset</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

class CrudAssignment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            employee: { id: 1, name: "", designation: "", salary: "" },
            edit: false
        };

        this.changeEmployee = this.changeEmployee.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
        this.selectEmployee = this.selectEmployee.bind(this);
        this.removeEmployee = this.removeEmployee.bind(this);
    }

    saveEmployee() {
        if (this.state.edit) {
            const temp_employees = [...this.state.employees];
            const index = temp_employees.findIndex((e) => e.id === parseInt(this.state.employee.id));
            temp_employees.splice(index, 1, { ...this.state.employee });
            this.setState({
                employees: [...temp_employees],
                employee: { id: this.getNextId(temp_employees), name: "", designation: "", salary: "" },
                edit: false
            });
        } else {
            const temp_employees = [...this.state.employees, { ...this.state.employee }];
            this.setState({ employees: temp_employees }, () => {
                this.setState({ employee: { id: this.getNextId(this.state.employees), name: "", designation: "", salary: "" } });
            });
        }
    }

    getNextId(employees) {
        return employees.length ? employees[employees.length - 1].id + 1 : 1;
    }

    changeEmployee(e) {
        const field = e.target.id;
        var newEmployee = { ...this.state.employee };
        if ((field === 'id') || (field === 'salary')) {
            newEmployee[field] = parseInt(e.target.value);
        } else {
            newEmployee[field] = e.target.value;
        }
        this.setState({ employee: newEmployee });
    }

    selectEmployee(employee, allowEdit) {
        this.setState({ employee: { ...employee }, edit: allowEdit });
    }

    removeEmployee(id) { 
        this.setState({
            employees: [...this.state.employees.filter(item => item.id !== id)]
        }, () => {
            this.setState({ employee: { id: this.getNextId(this.state.employees), name: "", designation: "", salary: "" } });
        });
    }

    render() {
        return (
            <div>
                <FormComponent employee={this.state.employee} changeEmployee={this.changeEmployee} saveEmployee={this.saveEmployee} />
                <hr />
                <DataTable items={this.state.employees} onSelect={this.selectEmployee} onDelete={this.removeEmployee}>
                    <h5 className="text-primary text-uppercase font-weight-bold">Employees Table</h5>
                </DataTable>
            </div>
        );
    }
}

export default CrudAssignment;