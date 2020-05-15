import React from 'react';
import ProductFilters from './components/ProductFilters';
import ProductTable from './components/ProductTable';

export default function App() {
  return (
    <div className="App">
      <h1>Продукты</h1>
      <ProductFilters />
      <ProductTable />
    </div>
  );
}
