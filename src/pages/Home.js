import React from 'react'
import '../css/Home.css'
import { Link } from 'react-router-dom'

function App(props) {
   return (
      <div className="main-page">
         <div className="hero">
            <h1>The Greatest In Porch Goose Fashion</h1>
            <h2>We pride ourselves on providing the newest <br />seasonal fashions for your collection.</h2>
            <Link to="/products">
               <button>Check Out Our Latest Products</button>
            </Link>
         </div>
      </div>
   )
}

export default App;
