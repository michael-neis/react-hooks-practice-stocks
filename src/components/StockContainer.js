import React from "react";
import Stock from "./Stock";

function StockContainer({ allStocks, addToPort }) {

  const stockList = allStocks.map(stock => <Stock key={stock.name} stock={stock} handleClick={addToPort} stockBool = {false}/>)

  return (
    <div>
      <h2>Stocks</h2>
      {stockList}
    </div>
  );
}

export default StockContainer;
