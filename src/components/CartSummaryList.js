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
         <select name="quantity" id={props.name}>
            <option value="">Qty: 1</option>
            <option value="">Qty: 2</option>
            <option value="">Qty: 3</option>
            <option value="">Qty: 4</option>
            <option value="">Qty: 5</option>
            <option value="">Qty: 6</option>
            <option value="">Qty: 7</option>
            <option value="">Qty: 8</option>
            <option value="">Qty: 9</option>
         </select>
         <button>Remove Item</button>
         </div>
      </div>
   )
}
