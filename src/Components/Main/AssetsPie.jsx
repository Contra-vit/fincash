import React from 'react'
import './AssetsPie.css'
import { 
  Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import colors from '../colors.json';
import {useState, useEffect} from 'react'
ChartJS.register(ArcElement, Tooltip, Legend);


export default function AssetsPie() {
  const [dataMonths, setDataMonths] =  useState(['Jan', 'Feb', 'Mar', 'Apr', 'May']);//state with names of month for doughtnut chart 
  const [dataNumbers, setDataNumbers] =  useState( [3, 2, 2, 1, 5]); //state with volume of slices in doughtnut

  
  const data = {
    labels: dataMonths,
    datasets: [
      {
        label: 'Sales for 2020 (M)',
        data:dataNumbers,
        backgroundColor: colors.color1 ,

      } 
    ]
  }



const addColor =(event)=> {
    let array = dataMonths
    array.push(55)
    let arrayNumbers = dataNumbers
    arrayNumbers.push(3)
    
    // dataMonths.add['August']
     setDataMonths([...array])
     setDataNumbers([...arrayNumbers])
     console.log(dataMonths)  
}
  return (
<div className="assetsPie">
     <Doughnut  data={data}/>  
     <button onClick={addColor}>Add color</button>
</div>

  )

}


// PRWy4wAZYi3MkVzMdm1JTMitiuskwnF3