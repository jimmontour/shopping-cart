import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../css/Header.css'
import logo from '../img/logo.png'
import CartIcon from './CartIcon'

export default function Header(props) {

   return (
      <header>
         <div className="logo">
            <img src={logo} alt="Porch Goose Emporium logo"/>
            <h1>Porch Goose Emporium</h1>
         </div>

         <nav>
            <Link to="/">
               <a>HOME</a>
            </Link>
            <Link to="/about">
               <a>ABOUT</a>
            </Link>
            <Link to="/products">
               <a>PRODUCTS</a>
            </Link>
         </nav>
         <Link to="/cart">
<<<<<<< HEAD
            <CartIcon cart={props.cart}/>
=======
            <CartIcon cart={props.cart} />
>>>>>>> cbe2996372f0dba05f8043490c3de3ae0790f68d
         </Link>
      </header>
   )
}
