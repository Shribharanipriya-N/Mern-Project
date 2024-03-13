import React, { useEffect, useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar.jsx'
import Home from './components/Home.jsx'
import Button from './components/Button.jsx'
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import AddToCart from './components/AddToCart.jsx';

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
    <NavBar />
      <Routes>
        <Route path="/" element={<>
          <Button setSelectedCoinType={setSelectedCoinType} />
          <Home coindata={list} />
        </>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<AddToCart />} />
      </Routes>
    </>
  )
}

export default App