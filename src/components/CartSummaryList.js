import React from 'react'
import '../css/CartSummary.css'

export default function cartSummaryList(props) {


   return (
      <div className="cart-summary-item">
         <div className="item-image">
            <img src={props.src} alt={props.name}/>
         </div>
         <div className="item-data">
         <h2>{props.name}</h2>
         <p>{props.price}</p>
         <button onClick={props.removeFromCart}>Remove Item</button>
         </div>
      </div>
   )
}
