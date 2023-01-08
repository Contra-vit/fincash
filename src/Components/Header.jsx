import React from 'react';
import {useState} from 'react';
import './Header.css';
import freedom_header from '../img/freedom_header.jpeg';


export default function Header() {
  const [dataRes, setDataRes] = useState();

let myHeaders = new Headers();
myHeaders.append("apikey", "PRWy4wAZYi3MkVzMdm1JTMitiuskwnF3");

let requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders,
  currencies: "EUR"
  
};
let cur = 'EUR';
fetch("https://api.apilayer.com/currency_data/change?start_date=2022-01-01&end_date=2022-03-02&currencies=EUR", requestOptions)
  
.then(response => response.text())
  .then(result =>{ 
    setDataRes(result)
    console.log(result) })

  .catch(error => console.log('error', error));
  return (
<>
Header
{dataRes}

</>
  )
}
