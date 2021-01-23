import React from 'react'
import '../css/Product.css'

export default function Product(props) {
   return (
      <div className="product-container">
         <img src={props.src} alt={props.name}/>
         <h3>{props.name}</h3>
         <p>${props.price}</p>
         <button>Add to Cart</button>
      </div>
   )
}
