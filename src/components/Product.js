import React from 'react'
import '../css/Product.css'
import { Link } from 'react-router-dom'

export default function Product(props) {
   return (
      <div className="product-container">
         <img src={props.src} alt={props.name}/>
         <h3>{props.name}</h3>
         <p>${props.price}</p>
         <div className="purchase-buttons">
            <button>Buy Now</button>
            <button onClick={props.addToCart}>Add to Cart</button>
         </div>
      </div>
   )
}
