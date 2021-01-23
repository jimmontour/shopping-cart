import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './Cart.css'
import CartItem from './CartItem'

export default function Cart(props) {
   return (
      <div>
         <Header />
         <div className="cart">
            <CartItem />
            <CartItem />
            <CartItem />
         <div className="checkout">
            <button>Check Out</button>
         </div>
         </div>

         <Footer />
      </div>
   )
}
