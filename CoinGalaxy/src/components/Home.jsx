import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Home = ({ coindata ,selectedCoinType}) => {
    
    const navigate = useNavigate();
    const handleAddToCart = (id) => {
        // Navigate to AddToCart page with item ID
        console.log("dyafy")
        navigate(`/cart/${id}`);
      };
      let count=0;
      const Counter = ({ initialCount, onIncrease, onDecrease }) => {
        const [count, setCount] = useState(initialCount);
      
        return (
          <div>
            <button onClick={onDecrease} style={{ marginLeft: '30px', backgroundColor: 'red', color: 'white' }}>-</button>
            <span>{count}</span>
            <button onClick={onIncrease} style={{ marginRight: '30px', backgroundColor: 'green', color: 'white' }}>+</button>
          </div>
        );
      };
      
      

      const handleIncrease = (item) => {
        const updatedData = coindata.map((i) =>
          i.id === item.id ? { ...i, amount: i.amount + 1 } : i
        );
        setCoindata(updatedData);
      };
    
      const handleDecrease = (item) => {
        if (item.amount > 0) {
          const updatedData = coindata.map((i) =>
            i.id === item.id ? { ...i, amount: i.amount - 1 } : i
          );
          setCoindata(updatedData);
        }
      };
    
    

      const filteredCoins=selectedCoinType?coindata.filter(coin=> coin.category === selectedCoinType):coindata;
  return (
    <>
<div className='homerender'>
{Array.isArray(filteredCoins) && filteredCoins.map((item) => (
<div className='container' key={item.id}>
<div className='cards' >
<div className='image'>
<img className='coinimg' src={item.image} alt='image' />
</div>
<span style={{fontSize:"large",paddingLeft:'10px'}}><b>{item.title}</b></span>
<div className='details'>
<div className='left'>
<span><b>Amount :</b> {item.amount}</span>
<span><b>Rating :</b> {item.rating}</span>
<span><b>Availability :</b> {item.availability}</span>
</div>
<div className='right'>
    <div className='buttons'>
    <button style={{  backgroundColor: '#f1807e ', color: 'white' ,height:'21px'}}  onClick={handleDecrease}>-</button>
                <span style={{padding:'5px',}}>{count}</span>
                 <button style={{ marginRight: '30px', backgroundColor: '#50C878', color: 'white', height:'21px'}} onClick={handleIncrease}>+</button>
    </div>

              <button style={{ backgroundColor: '#dfc647', color: 'black', border: '2px', borderRadius: '15px', width:'75px' ,marginLeft:'9px'}} onClick={()=>handleAddToCart(item.id)} >Add to Cart</button>
</div>

</div>
</div>
</div>
))}
</div>
</>
  );
};
export default Home;