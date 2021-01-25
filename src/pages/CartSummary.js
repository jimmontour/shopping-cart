import React from 'react'
import CartSummaryList from '../components/CartSummaryList'
import '../css/CartSummary.css'
import { Link } from 'react-router-dom'

export default function Products(props) {

   const calculateTotal = (cart) => {
      let count = 0;
      props.cart.map((outfit) => {
         count = count + outfit.price
      })
      return count;
   }

   return (
      <div className="container">

         {props.cart.length === 0
         ? <h1>There are no items in your cart!</h1>
         :  <h1>Items in Your Cart:</h1>
         }
            <div className="totals">
               <h3>Items: {props.cart.length}</h3>
               <h3>Total: ${calculateTotal(props.cart)}</h3>
            </div>

         <hr />
         <div className="summary-items-container">
            {props.cart.map((outfit) => {
               return <CartSummaryList
               name={outfit.name}
               src={outfit.src}
               price={outfit.price * outfit.count}
               description={outfit.description}
               handleRemoveFromCart={props.handleRemoveFromCart}
               updateCount={props.updateCount}
               count={outfit.count}
               />})}
         </div>
         <div className="cart-checkout">
            <Link to="/checkout">
               <button >Checkout</button>
            </Link>
            <Link to="/products">
               <button>Continue Shopping</button>
            </Link>
         </div>
      </div>
   )
}
