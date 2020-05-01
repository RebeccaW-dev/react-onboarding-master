import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Product } from './components/Product';
import { Sales } from './components/Sales';
import { Store } from './components/Store';
import { Customer } from './components/Customer';
//import  AddCustomer from './components/AddCustomer';
//import  EditCustomer from './components/EditCustomer';
//import { DeleteCustomer } from './components/DeleteCustomer';
export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/Customer' component={Customer} />
        <Route path='/product' component={Product} />
        <Route path='/sales' component={Sales} />
        <Route path='/store' component={Store} />
        <Route path='/fetchdata' component={FetchData} />
      </Layout>
    );
  }
}
