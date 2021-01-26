import React from 'react'
import '../css/CartSummary.css'

export default function cartSummaryList(props) {

   const handleRemoveBtn = (e) => {
      const selection = e.target.attributes.id.nodeValue
      props.handleRemoveFromCart(selection)
   }

   const handleIncrement = (e) => {
      const selection = e.target.attributes.id.nodeValue
      if (e.target.attributes[0].nodeValue === "fas fa-chevron-up") {
         props.updateCount(selection, 1)
      }
      if (e.target.attributes[0].nodeValue === "fas fa-chevron-down") {
         props.updateCount(selection, (-1))
      }
   }

   return (
      <div className="cart-summary-item">
         <div className="item-image">
            <img src={props.src} alt={props.name}/>
         </div>
         <div className="item-data">
         <h2>{props.name}</h2>
         <p>${props.price.toFixed(2)}</p>
         <div className="quantity-container">
            <div className="quantity-display">
               <i className="fas fa-chevron-up" id={props.name} onClick={handleIncrement}></i>
               <input type="text" value={props.count} id={props.name}/>
                  <i className="fas fa-chevron-down" id={props.name} onClick={handleIncrement}></i>
            </div>
         </div>

         <button onClick={handleRemoveBtn} id={props.name}>Remove Item</button>
         </div>
      </div>
   )
}
