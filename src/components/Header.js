import React from 'react'
import './Header.css'
import logo from '../img/logo.png'

export default function Header() {
   return (
      <header>
         <div className="logo">
            <img src={logo} alt="Porch Goose Emporium logo"/>
            <h1>Porch Goose Emporium</h1>
         </div>
            <ul className="nav">
               <li>
               <a>Home</a>
                 </li>
              <li>
               <a>Shop</a>
                 </li>
               <li>
                  <a>About</a>
               </li>
            </ul>
            <div className="shopping-cart">
                 <i className="fas fa-shopping-cart"></i>
            </div>
      </header>
   )
}
