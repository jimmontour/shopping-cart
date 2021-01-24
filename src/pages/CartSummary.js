import React from 'react'
import outfits from '../data/outfits'
import CartSummaryList from '../components/CartSummaryList'
import '../css/CartSummary.css'

export default function Products(props) {

   return (
      <div className="container">
         <h1>Items in Your Cart:</h1>
         <div className="totals">
            <h3>Items: {props.cart.count}</h3>
            <h3>Total: ${props.cart.total}</h3>
         </div>
         <hr />
         <div className="summary-items-container">
            {props.cart.list.map((outfit) => {
               return <CartSummaryList
               name={outfit.name}
               src={outfit.src}
               price={outfit.price}
               description={outfit.description}
               removeFromCart={props.removeFromCart}
               />
            })}
         </div>

         <div className="cart-checkout">
            <button>Checkout</button>
            <button>Continue Shopping</button>
         </div>
      </div>
   )
}
