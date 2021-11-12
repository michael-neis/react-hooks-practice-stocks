import React from "react";

function SearchBar({ sortStocks, filterStocks, handleReset, radioState }) {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={radioState.Alphabetically}
          onChange={sortStocks}
          style={{cursor: 'pointer'}}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={radioState.Price}
          onChange={sortStocks}
          style={{cursor: 'pointer'}}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={filterStocks} style={{cursor: 'pointer'}}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
      <button onClick={handleReset} style={{cursor: 'pointer', marginLeft: '7px'}}>Reset</button>
    </div>
  );
}

export default SearchBar;
