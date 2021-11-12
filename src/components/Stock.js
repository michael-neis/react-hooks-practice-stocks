import React from "react";

function Stock({stock, handleClick, stockBool}) {
  return (
    <div onClick = {() => handleClick(stock)} style={stockBool ? {cursor: 'not-allowed'} : {cursor: 'cell'}} title={stockBool ? 'Sell': 'Buy'}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.ticker}: {stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
