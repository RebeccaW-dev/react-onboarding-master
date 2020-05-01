import React, { Component } from 'react';


export class Product extends Component {
    displayName = Product.name

    constructor(props) {
        super(props);
        this.state = { currentCount: 0 };
        this.productIncrementCounter = this.productIncrementCounter.bind(this);
    }

    productIncrementCounter() {
        this.setState({
            currentCount: this.state.currentCount + 1
        });
    }
  
    render() {
        return (
            <div>
               
                <button className="ui blue button">New Product</button>
                <p>Current count: <strong>{this.state.currentCount}</strong></p>
                <button onClick={this.salesIncrementCounter}>New Product</button>

                
            </div>
        );
    }
}