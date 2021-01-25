import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import CartSummary from './pages/CartSummary'
import CheckOut from './pages/CheckOut'
import outfits from './data/outfits'

function App(props) {

   const [cart, setCart] = useState({
      list: [],
      count: 0,
      total: 0
   });

   const handleAddToCart = (selection) => {
      console.log(selection)
      outfits.map((outfit) => {
      if (selection === outfit.name) {
         setCart({
            list: [
               ...cart.list,
               {
                  name: outfit.name,
                  price: outfit.price,
                  src: outfit.src,
                  count: 1,
               }
            ],
            count: (cart.count + 1),
            total: cart.total + outfit.price,
         })
      }
   })
   }

   const handleRemoveFromCart = (selection) => {

      const newArray = cart.list.filter((outfit) => {
         return outfit.name !== selection
      })
      outfits.map((outfit) => {
         if (outfit.name === selection) {
            setCart({
               list: newArray,
               count: (cart.count - 1),
               total: cart.total - outfit.price
            })
         }
      })
   }

  return (
    <div className="App">
       <Header cart={cart}/>
        <Switch>
           <Route exact path="/" component={Home} />
           <Route exact path="/products" component={Products} >
              <Products cart={cart} handleAddToCart={handleAddToCart} />
            </Route>
           <Route exact path="/cart" component={CartSummary} >
              <CartSummary
               cart={cart}
               handleRemoveFromCart={handleRemoveFromCart}
              />
            </Route>
           <Route exact path="/about" component={About} />
           <Route exact path="/checkout" component={CheckOut} />
        </Switch>
       <Footer />
    </div>
  )
}

export default App;
