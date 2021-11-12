import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portStocks, sellStock}) {

  const myStocks = portStocks.map(stock => <Stock key = {'my' + stock.name} stock={stock} handleClick={sellStock} stockBool = {true}/>)

  return (
    <div>
      <h2>My Portfolio</h2>
      {
        myStocks
      }
    </div>
  );
}

export default PortfolioContainer;
