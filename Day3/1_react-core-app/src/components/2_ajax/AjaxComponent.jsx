import React, { Component } from 'react';
import LoaderAnimation from '../common/LoaderAnimation';
import DataTable from '../common/DataTable';
import postApiClient from '../../services/post-api-client';

class AjaxComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            message: "Loading data, please wait...",
            flag: false
        };
    }

    render() {
        return (
            <div>
                <div className="row mt-5">
                    <h4 className="text-warning text-center text-uppercase font-weight-bold">{this.state.message}</h4>
                </div>

                {
                    !this.state.flag ? <LoaderAnimation /> : null
                }

                <DataTable items={this.state.data}>
                    <h4 className="text-primary text-uppercase font-weight-bold">Posts Table</h4>
                </DataTable>
            </div>
        );
    }

    // componentDidMount() {
    //     // postApiClient.getAllPostsUsingCB((data) => {
    //     //     this.setState({ data: data, message: "", flag: true });
    //     // }, (err) => {
    //     //     this.setState({ data: [], message: err, flag: true });
    //     // });

    //     postApiClient.getAllPostsUsingPromise().then((data) => {
    //         this.setState({ data: data, message: "", flag: true });
    //     }).catch((err) => {
    //         this.setState({ data: [], message: err, flag: true });
    //     });
    // }

    // async componentDidMount() {
    //     try {
    //         const data = await postApiClient.getAllPostsUsingPromise();
    //         this.setState({ data: data, message: "", flag: true });
    //     } catch (err) {
    //         this.setState({ data: [], message: err, flag: true });
    //     }
    // }

    async componentDidMount() {
        try {
            const data = await postApiClient.getAllPostsAsync();
            this.setState({ data: data, message: "", flag: true });
        } catch (err) {
            this.setState({ data: [], message: err, flag: true });
        }
    }
}

export default AjaxComponent;