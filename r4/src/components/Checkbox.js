import React from 'react';
import state from '../store';
export default function Checkbox(props) {
  const { name, label, onChange, checked } = props;
  return (
    <label>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        defaultChecked={checked}
        onChange={() => {
          if (onChange) {
            onChange();
            state.productsSort();
          }
        }}
      />
      {label}
    </label>
  );
}
