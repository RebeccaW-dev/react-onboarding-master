import React, { Component } from 'react';


export class Sales extends Component {
    displayName = Sales.name

    constructor(props) {
        super(props);
        this.state = { currentCount: 0 };
        this.salesIncrementCounter = this.salesIncrementCounter.bind(this);
    }

    salesIncrementCounter() {
        this.setState({
            currentCount: this.state.currentCount + 1
        });
    }

    render() {
        return (
            <div>

                <button className="ui blue button">New Sales</button>

                <p>Current count: <strong>{this.state.currentCount}</strong></p>

                <button onClick={this.salesIncrementCounter}>New Sales</button>
            </div>
        );
    }
}