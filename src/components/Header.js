import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../css/Header.css'
import logo from '../img/logo.png'

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
            <div className="cart">
               <i class="fas fa-shopping-cart"></i>
               <p>0</p>
            </div>
         </Link>
      </header>
   )
}
