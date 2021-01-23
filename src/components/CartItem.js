import React from 'react'
import watermelon from '../img/watermelon.jpg'

export default function CartItem() {
   return (
      <div className="cart-item">
         <div className="cart-item-image">
            <img src={watermelon} alt="" />
         </div>
         <div className="cart-item-info">
            <h3>Title</h3>
            <p>Description</p>
            <h4>Price</h4>
         </div>
         <div className="cart-item-func">
            <button>Remove</button>
            <button>Increase</button>
            <button>Decrease</button>
         </div>
      </div>
   )
}
