import logo from './logo.svg';
import './App.css';

import React, { useState, useRef } from "react";
import ReactECharts from 'echarts-for-react';

function App() {
  const priceVal = useRef();
  const rentVal = useRef();
  const [priceData, setPriceData] = useState([820, 932, 901, 934, 1290, 1330, 1320, 1300, 1230, 1340, 1300, 1100])
  const [rentData, setRentData] = useState([340, 502, 901, 700, 1400, 1230, 1100, 1040, 1250, 1000, 900, 1004])
  var priceOptions = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: 'category',
      data: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Price',
        type: 'line',
        symbolSize: 6,
        symbol: 'circle',
        stack: 'product',
        data: priceData,
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };
  var rentOptions = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: 'category',
      data: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    },
    yAxis: {
      type: 'value',
    },
    series: [    
      {
        name: 'Rent',
        type: 'line',
        symbolSize: 10,
        symbol: 'circle',
        stack: 'product',
        data: rentData,
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };
  function updatePriceData()
  {
    const price = priceVal.current.value;
    const dataLength = priceOptions.series[0].data.length;
    var updatedPriceData = new Array(dataLength);
    for (var i = 0; i < dataLength; i++) {
      updatedPriceData[i] = price * 2;
    }
    setPriceData(updatedPriceData);
  }
  function updateRentData()
  {
    const rent = rentVal.current.value;
    const dataLength = rentOptions.series[0].data.length;
    var updatedRentData = new Array(dataLength);
    for (var i = 0; i < dataLength; i++) {
      updatedRentData[i] = rent * 2;
    }
    setRentData(updatedRentData);
  }
  return (
    <>
    <div className="grid-container">
      <div className="input">
        <div>
          <label> Price
          <input ref={priceVal} onChange={updatePriceData} type="number" />
          </label>
        </div>
        <div>
          <label>Rent
          <input ref={rentVal} onChange={updateRentData} type="number" />
          </label>
        </div> 
      </div>
      <div className="charts">
        <ReactECharts option={priceOptions} />
        <ReactECharts option={rentOptions} />
      </div>
    </div>
    </>
  )
}

export default App;
