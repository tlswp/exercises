import React from 'react';
import ProductFilters from './components/ProductFilters.js';
import ProductTable from './components/ProductTable.js';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Продукты</h1>
        <ProductFilters />
        <ProductTable />
      </div>
    );
  }
}
