'use client';
import React from 'react';

const AddToCart = () => {
  return (
    <div>
      <button
        className="p-2 bg-green-700 text-white hover:bg-sky-900 "
        onClick={() => console.log('Clicked')}
      >
        Add to cart
      </button>
    </div>
  );
};

export default AddToCart;
