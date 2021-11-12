import React from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";

function MainContainer() {
const [allStocks, setAllStocks] = useState([])
const [portStocks, setPortStocks] = useState([])
const [showStocks, setShowStocks] = useState([])
const [showPortStocks, setShowPortStocks] = useState([])
const [radioState, setRadioState] = useState({
  Alphabetically: false,
  Price: false,
})
const [isFiltered, setIsFiltered] = useState(false)


useEffect(()=>{
  fetch('http://localhost:3001/stocks')
  .then(res => res.json())
  .then(data => {
    setAllStocks(data)
    setShowStocks(data)
  })
}, [])


function addToPort(stockObj){
  if (isFiltered === false){
  if (portStocks.length === 0 || !portStocks.includes(stockObj)){
    let addArray = [stockObj, ...portStocks]
    setPortStocks(addArray)
    setShowPortStocks(addArray)
    console.log(isFiltered)
  }} else {
    if (portStocks.length === 0 || !portStocks.includes(stockObj)){
      let addArray = [stockObj, ...portStocks]
      setPortStocks(addArray)
      if (stockObj.type === isFiltered){
      let showArray = [stockObj, ...showPortStocks]
      setShowPortStocks(showArray)}
  }}
}

function sellStock(stockObj){
  let removeArray = portStocks.filter(stock => stock.name !== stockObj.name)
  setPortStocks(removeArray)
  let removeShow = showPortStocks.filter(stock => stock.name !== stockObj.name)
  setShowPortStocks(removeShow)
}

function byPrice (a, b){
  if (a.price < b.price){
    return -1
  } else if (a.price > b.price){
    return 1
  } else {
    return 0
  }
}

function byTicker (a, b){
  if (a.ticker < b.ticker){
    return -1
  } else if (a.ticker > b.ticker){
    return 1
  } else {
    return 0
  }
}

function sortStocks(e){
  if (e.target.value === 'Price'){
    setRadioState({...radioState,
      Price: true,
      Alphabetically: false
    })
    let priceArray = [...showStocks].sort(byPrice)
    setShowStocks (priceArray)
    let pricePort = [...showPortStocks].sort(byPrice)
    setShowPortStocks(pricePort)
  } else {
    setRadioState({...radioState,
      Alphabetically: true,
      Price: false
    })
    let tickerArray = [...showStocks].sort(byTicker)
    setShowStocks (tickerArray)
    let tickerPort = [...showPortStocks].sort(byTicker)
    setShowPortStocks(tickerPort)
  }
}

function filterStocks(e){
  setIsFiltered(e.target.value)
  if(e.target.value === "Tech"){
    const techArray = allStocks.filter(stock => stock.type === 'Tech')
    setShowStocks(techArray)
    const portTech = portStocks.filter(stock => stock.type === 'Tech')
    setShowPortStocks(portTech)
  } else if (e.target.value === "Sportswear"){
    const sportswearArray = allStocks.filter(stock => stock.type === 'Sportswear')
    setShowStocks(sportswearArray)
    const portSport = portStocks.filter(stock => stock.type === 'Sportswear')
    setShowPortStocks(portSport)
  } else if (e.target.value === "Finance"){
    const financeArray = allStocks.filter(stock => stock.type === 'Finance')
    setShowStocks(financeArray)
    const portFin = portStocks.filter(stock => stock.type === 'Finance')
    setShowPortStocks(portFin)
  }
}

function handleReset(){
  setShowStocks(allStocks)
  setRadioState({...radioState,
    Alphabetically: false,
    Price: false,
  })
  setShowPortStocks(portStocks)
  setIsFiltered(false)
}

  return (
    <div>
      <SearchBar sortStocks={sortStocks} filterStocks={filterStocks} handleReset={handleReset} radioState={radioState}/>
      <div className="row">
        <div className="col-8">
          <StockContainer allStocks = {showStocks} addToPort={addToPort}/>
        </div>
        <div className="col-4">
          <PortfolioContainer sellStock={sellStock} portStocks={showPortStocks}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
