import React from 'react';
import { view } from '@risingstack/react-easy-state';
import state from '../store';
class ProductTable extends React.Component {
  componentDidMount() {
    state.productsSort();
  }
  sorting() {
    state.productsSorted.sort(function (a, b) {
      if (a.amount > b.amount) {
        return state.sortingType ? 1 : -1;
      }
      if (a.amount < b.amount) {
        return state.sortingType ? -1 : 1;
      }
      return 0;
    });
    state.sortingType = !state.sortingType;
  }
  render() {
    return (
      <table border="1" width="500px">
        <tr>
          <td>Название</td>
          <td>Категория</td>
          <td>Цена (шт.)</td>
          <td>
            Кол-во
            <button type="button" onClick={this.sorting}>
              сортировка
            </button>
          </td>
        </tr>
        {state.productsSorted.map((product) => (
          <tr>
            <td>{product.name}</td>
            <td>{product.category}</td>
            <td>{product.price}</td>
            <td>{product.amount}</td>
          </tr>
        ))}
      </table>
    );
  }
}

export default view(ProductTable);
