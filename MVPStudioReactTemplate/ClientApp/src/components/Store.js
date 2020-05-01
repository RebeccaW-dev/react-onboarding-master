import React, { Component } from 'react';


export class Store extends Component {
    displayName = Store.name

    constructor(props) {
        super(props);
        this.state = { currentCount: 0 };
        this.storeIncrementCounter = this.storeIncrementCounter.bind(this);
    }

    storeIncrementCounter() {
        this.setState({
            currentCount: this.state.currentCount + 1
        });
    }

    render() {
        return (
            <div>
                <button className="ui blue button">New Store</button>

                <p>Current count: <strong>{this.state.currentCount}</strong></p>

                <button onClick={this.storeIncrementCounter}>New Store</button>
            </div>
        );
    }
}