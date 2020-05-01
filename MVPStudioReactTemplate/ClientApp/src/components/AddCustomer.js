import React from 'react';
import axios from 'axios';
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'semantic.min.css';

class AddCustomer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Id: '',
            Name: '',
            Address: '',
            Action: '',
            Action:'',
        }
    }
    AddCustomer
        = () => {
        axios.post('http://localhost:44329/Api/Customer/addcustomer/', {
            Id: this.state.Id,Name: this.state.Name, 
            Class: this.state.Class, Address: this.state.Address

        })
            .then(json => {
                if (json.data.Status === 'Success') {
                    console.log(json.data.Status);
                    alert("Data Save Successfully");
                    this.props.history.push('/CustomerList')
                }
                else {
                    alert('Data not Saved');
                    debugger;
                    this.props.history.push('/CustomerList')
                }
            })
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        return (
            <Container className="App">
                <h4 className="PageHeading">Enter Customer Informations</h4>
                <Form className="form">
                    <Col>
                        <FormGroup row>
                            <Label for="name" sm={2}>Id</Label>
                            <Col sm={10}>
                                <Input type="text" name="Id" onChange={this.handleChange} value={this.state.Id} placeholder="Enter Id" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="address" sm={2}>Name</Label>
                            <Col sm={10}>
                                <Input type="text" name="Name" onChange={this.handleChange} value={this.state.Name} placeholder="Enter Name" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="Address" sm={2}>Address</Label>
                            <Col sm={10}>
                                <Input type="text" name="Class" onChange={this.handleChange} value={this.state.Class} placeholder="Enter Address" />
                            </Col>
                        </FormGroup>
                       
                    </Col>
                    <Col>
                        <FormGroup row>
                            <Col sm={5}>
                            </Col>
                            <Col sm={1}>
                                <button type="button" onClick={this.AddCustomer} className="btn btn-success">Submit</button>
                            </Col>
                            <Col sm={1}>
                                <Button color="danger">Cancel</Button>{' '}
                            </Col>
                            <Col sm={5}>
                            </Col>
                        </FormGroup>
                    </Col>
                </Form>
            </Container>
        );
    }
}
export default AddCustomer;