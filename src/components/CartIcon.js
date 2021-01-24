import React from 'react'

export default function CartIcon(props) {
   console.log(props)
   return (
         <div className="cart">
            <i class="fas fa-shopping-cart"></i>
            <p>{props.cart.count}</p>
         </div>
   )
}
