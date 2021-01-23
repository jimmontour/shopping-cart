import React from 'react'
import './Header.css'
import logo from '../img/logo.png'
import Shop from './Shop'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Header(props) {

   const [cart, setCart] = useState({items: 0 , total: 0 })

   useEffect(() => {
      setCart({...cart, items: props.inCart})
   }, [props.inCart])

   console.log(props)
   return (
      <header>
         <div className="logo">
            <img src={logo} alt="Porch Goose Emporium logo"/>
            <h1>Porch Goose Emporium</h1>
         </div>
            <ul className="nav">
               <li>
               <Link to="/"><a>Home</a></Link>
                 </li>
              <li>
               <Link to="/shop"><a>Shop</a></Link>
                 </li>
               <li>
               <Link to="/about"><a>About</a></Link>
               </li>
            </ul>
            <Link to="cart">
               <div className="shopping-cart">
                  <i className="fas fa-shopping-cart"></i>
                  <p>{cart.items}</p>
               </div>
         </Link>
      </header>
   )
}
