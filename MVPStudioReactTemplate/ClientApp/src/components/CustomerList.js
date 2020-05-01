
import React, { Component } from 'react';
import axios from 'axios';
import Table from './Table';
export default class Customerlist extends Component {
    constructor(props) {
        super(props);
        this.state = { business: [] };
    }
    componentDidMount() {
        debugger;
        axios.get('http://localhost:44329/Api/Customer/Customerdetails')
            .then(response => {
                this.setState({ business: response.data });
                debugger;
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    tabRow() {
        return this.state.business.map(function (object, i) {
            return <Table obj={object} key={i} />;
        });
    }
    render() {
        return (
            <div>
                <h4 align="center">Customer List</h4>
                <table className="table table-striped" style={{ marginTop: 10 }}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>
                </table>
            </div>
        );
    }
}