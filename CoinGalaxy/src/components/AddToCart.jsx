// AddToCart.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const AddToCart = ({coindata}) => {
  const { id } = useParams();
  const selectedItem = coindata.find(item => item.id === parseInt(id));
console.log(selectedItem);
  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>
          <img src={selectedItem.image}/>
          <div>
            <h2>{selectedItem.title}</h2>
            <p>Amount: {selectedItem.amount}</p>
            
          </div>
        
      </div>
      {/* You can add more details here as needed */}
    </div>
  );
};

export default AddToCart;