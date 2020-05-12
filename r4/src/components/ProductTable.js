import React from 'react';
import { store, view } from '@risingstack/react-easy-state';
import state from '../store.js';
var sortingType = store(true);
class ProductTable extends React.Component {
  ProductLine(product) {
    return (
      <tr>
        <td>{product.name}</td>
        <td>{product.category}</td>
        <td>{product.price}</td>
        <td>{product.amount}</td>
      </tr>
    );
  }
  productFilter(product) {
    switch (product.category) {
      case 'fruit':
        if (state.filters.isFruitChecked) {
          return this.ProductLine(product);
        }
        break;
      case 'vegetable':
        if (state.filters.isVegetablesChecked) {
          return this.ProductLine(product);
        }
        break;
      case 'canned':
        if (state.filters.isCannedChecked) {
          return this.ProductLine(product);
        }
        break;
    }
  }
  sorting() {
    state.products.sort(function (a, b) {
      if (a.amount > b.amount) {
        return sortingType ? 1 : -1;
      }
      if (a.amount < b.amount) {
        return sortingType ? -1 : 1;
      }
      return 0;
    });
    sortingType = !sortingType;
  }
  render() {
    return (
      <table border="1" width="500px">
        <tr>
          <td>Название</td>
          <td>Категория</td>
          <td>Цена (шт.)</td>
          <td>
            Кол-во <button onClick={this.sorting}>сортировка</button>
          </td>
        </tr>
        {state.products.map((product) => this.productFilter(product))}
      </table>
    );
  }
}

export default view(ProductTable);
