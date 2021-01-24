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
         <select name="quantity" id={props.name} onChange={props.updateCount}>
            <option value="1">Qty: 1</option>
            <option value="2">Qty: 2</option>
            <option value="3">Qty: 3</option>
            <option value="4">Qty: 4</option>
            <option value="5">Qty: 5</option>
            <option value="6">Qty: 6</option>
            <option value="7">Qty: 7</option>
            <option value="8">Qty: 8</option>
            <option value="9">Qty: 9</option>
         </select>
         <button onClick={props.removeFromCart}>Remove Item</button>
         </div>
      </div>
   )
}
