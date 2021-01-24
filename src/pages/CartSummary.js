import React from 'react'
import CartSummaryList from '../components/CartSummaryList'
import '../css/CartSummary.css'
import { Link } from 'react-router-dom'

export default function Products(props) {

   return (
      <div className="container">
         <h1>Items in Your Cart:</h1>
         <div className="totals">
            <h3>Items: {props.cart.count}</h3>
            <h3>Total: ${props.cart.total.toFixed()}</h3>
         </div>
         <hr />
         <div className="summary-items-container">
            {props.cart.list.map((outfit) => {
               return <CartSummaryList
               name={outfit.name}
               src={outfit.src}
               price={outfit.price * outfit.count}
               description={outfit.description}
               removeFromCart={props.removeFromCart}
               />})}
         </div>
         <div className="cart-checkout">
            <Link to="/">
               <button>Checkout</button>
            </Link>
            <Link to="/products">
               <button>Continue Shopping</button>
            </Link>
         </div>
      </div>
   )
}
