import React from 'react'
import './Profit.css'
import LineChart from '../Main/Charts/LineChart';

export default function Profit() {
  return (
    <>
      <div className='profit__container'>
 <div className="profit__row">
  <div className="profit__element">
    <div className="profit__item">
      <ul>
        <li>stock</li>
        <li>stock</li>
        <li>stock</li>
        <li>stock</li>
        <li>stock</li>
      </ul>
    </div>
  </div>
  <div className="profit__element">
    <div className="profit__item">Chart
    <div className="chart">
          < LineChart/>
    </div>
    </div>
  </div>
 </div>
  
</div>  
    </>
  )
}
