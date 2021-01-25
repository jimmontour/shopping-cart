import React from 'react'
import '../css/checkout.css'
import jim from '../img/jim-and-lucy.jpg'

export default function CheckOut() {
   return (
      <div className="checkout-container">
         <h1>You've Reached The End!</h1>
         <p>Thank you for 'checking out' my React Shopping Cart project.  To see more of my work, visit my <a href="http://www.github.com/jimmontour">GitHub Page</a> or my <a href="http://www.jimmontour.com">website</a>.</p>
         <img src={jim} alt="Jim and his porch goose Lucy"/>
      </div>
   )
}
