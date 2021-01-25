import React from 'react'
import '../css/Products.css'
import outfits from '../data/outfits'
import Product from '../components/Product'

export default function Products(props) {

   return (
      <div className="container">
         <div className="products-container">
            {
            outfits.map((outfit) => {
               return <Product
                  src={outfit.src}
                  name={outfit.name}
                  price={outfit.price}
                  description={outfit.description}
                  handleAddToCart={props.handleAddToCart}
               />
            })
            }
         </div>
      </div>
   )
}
