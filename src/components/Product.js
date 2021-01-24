import React from 'react'
import '../css/Product.css'

export default function Product(props) {
   return (
      <div className="product-container">
         <img src={props.src} alt={props.name}/>
         <h3>{props.name}</h3>
         <p>${props.price}</p>
<<<<<<< HEAD
         <div className="purchase-buttons">
            <button>Buy Now</button>
            <button onClick={props.addToCart}>Add to Cart</button>
         </div>
=======
         <button onClick={props.addToCart}>Add to Cart</button>
>>>>>>> cbe2996372f0dba05f8043490c3de3ae0790f68d
      </div>
   )
}
