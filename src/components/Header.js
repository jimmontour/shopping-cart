import React from 'react'
import './Header.css'

export default function Header() {
   return (
      <header>
         <div className="logo">
            <i className="fas fa-tshirt"></i>
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
