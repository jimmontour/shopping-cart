import React from 'react'
import '../css/CartSummary.css'

export default function cartSummaryList(props) {

   const handleClick = (e) => {
      const selection = e.target.parentNode.parentNode.childNodes[0].childNodes[0].alt
      props.handleRemoveFromCart(selection)
   }

   return (
      <div className="cart-summary-item">
         <div className="item-image">
            <img src={props.src} alt={props.name}/>
         </div>
         <div className="item-data">
         <h2>{props.name}</h2>
         <p>{props.price}</p>
         <button onClick={handleClick}>Remove Item</button>
         </div>
      </div>
   )
}
