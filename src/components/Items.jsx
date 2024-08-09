import React from 'react'
import '../styles/Items.css';

//receive properties from Menu.jsx
const Items = ({image, name, price, onAddToBasket }) => {
  return (
    <div className='menuItem'>
        <div style={{backgroundImage: `url(${image})`}}></div>
        <h1>{name}</h1>
        <p>${price.toFixed(2)}</p>
        <button className='addToBasketButton' onClick={onAddToBasket}>Add to Basket</button>
    </div>
  )
}

export default Items