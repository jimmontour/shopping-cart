import React from 'react'
import '../css/Product.css'
import { Link } from 'react-router-dom'

export default function Product(props) {

   const handleClick = (e) => {
      const selection = e.target.parentNode.parentNode.childNodes[0].alt
      props.handleAddToCart(selection)
   }

   return (
      <div className="product-container">
         <img src={props.src} alt={props.name}/>
         <h3>{props.name}</h3>
         <p>${props.price}</p>
         <div className="purchase-buttons">
            <button onClick={handleClick}>Add to Cart</button>
         </div>
      </div>
   )
}
