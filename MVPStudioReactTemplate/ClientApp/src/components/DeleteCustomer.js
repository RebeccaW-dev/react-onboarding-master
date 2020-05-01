import React, { Component} from "react";
import ReactDOM from 'react-dom';
import { Button, Modal, Form } from 'semantic-ui-react';


export class DeleteCustomer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Success: { Data: '' },
            Customer: {
                CName: '',
                CAddress: '',
            },
        };
        this.handleDeleteCustomerClick = this.handleDeleteCustomerClick.bind(this);
    }
    render() {
        return (
            <React.Fragment>
                <Modal size={'small'} open={this.props.isDeleteCustomerModal}>
                    <Modal.Header> Delete Customer </Modal.Header>
                    <Modal.Content>
                        <Form>
                                <textarea>Are you sure?</textarea>

                        </Form>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button className="ui black button">Cancel<i className="check icon"></i></Button>

                    </Modal.Actions>
                    <Modal.Actions>
                        <Button className="ui red button">Delete<i className="check icon"></i></Button>
                    </Modal.Actions>


                </Modal>
            </React.Fragment>
        )
    }
}