// AddToCart.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const AddToCart = ({ coindata }) => {
  const { id } = useParams();
  const selectedItem = coindata.find(item => item.id === parseInt(id));

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>
        <strong>{selectedItem ? selectedItem.title : 'Item not found'}</strong>
        {selectedItem && (
          <div>
            <p>Amount: {selectedItem.amount}</p>
            <p>Ratings: {selectedItem.rating}</p>
          </div>
        )}
      </div>
      {/* You can add more details here as needed */}
    </div>
  );
};

export default AddToCart;