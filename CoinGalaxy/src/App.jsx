import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar.jsx'
import {Outlet} from 'react-router-dom'
import Home from './components/Home.jsx'
import Button from './components/Button.jsx'

const App = () => {
  const [list,setlist]=useState([]);
  const [selectedCoinType, setSelectedCoinType] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/get-coins").then((res) => res.json())
    .then((json) => {
        if(selectedCoinType){
          const filteredCoins=json.filter((coin)=> coin.category === selectedCoinType);
          setlist(filteredCoins);
        }
        else{
        setlist(json);
        }

      }).catch((err) => { 
        console.log(err);
      })
  },[selectedCoinType])
  console.log(selectedCoinType)
  return (
    <>
    <NavBar/>
    <Button setSelectedCoinType={setSelectedCoinType}/>
    <div className='homerender'>
     <Home coindata={list}/>
    </div>
    <Outlet/>
    </>
  )
}

export default App