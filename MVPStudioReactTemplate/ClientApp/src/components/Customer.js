import React, { Component } from 'react';


export class Customer extends Component {
    displayName = Customer.name

    constructor(props) {
        super(props);
        this.state = { customers: [], loading: true };

        fetch('api/Customer/Customerlist')
            .then(response => response.json())
            .then(data => {
                this.setState({ customers: data, loading: false });

            });
    }
    static renderCustomerTable(customers) {
    
        return (
            <div>
                <button className="ui blue button">New Customer</button>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Action</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                  
                </table>
            </div>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Customer.renderCustomerTable(this.state.customers);

        return (
            <div>    
                <button className="ui blue button">New Customer</button>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
                <table>
                <tbody>

                    <tr key={Customer.Id}>
                        <td>{Customer.Name}</td>
                        <td>{Customer.Address}</td>

                    </tr>
                        
                    </tbody>
                </table>
            </div>
        );
    }


}




