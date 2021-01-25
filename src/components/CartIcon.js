import React from 'react'

export default function CartIcon(props) {
   return (
         <div className="cart">
            <i className="fas fa-shopping-cart"></i>
            <p>{props.cart.length}</p>
         </div>
   )
}
