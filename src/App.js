import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import CartSummary from './pages/CartSummary'
import outfits from './data/outfits'

function App(props) {

   const [cart, setCart] = useState({
      count: 0,
      total: 0,
      list: [],
   });

   const addToCart = (e) => {
      const selection = e.target.parentNode.parentNode.childNodes[0].alt
      outfits.map((outfit) => {
         if (selection === outfit.name) {
            setCart({
               count: (cart.count + 1),
               total: cart.total + outfit.price,
               list: [
                  ...cart.list,
                  {
                     name: outfit.name,
                     price: outfit.price,
                     src: outfit.src,
                     count: 1,
                  }
               ],
            })
         }
      })
   }

   const removeFromCart = (e) => {
      const selection = e.target.parentNode.parentNode.childNodes[0].childNodes[0].alt
      const selectionPrice = outfits.map((outfit) => {
         if (outfit.name === selection) {
            return outfit.price
         }
      })
      const newArray = cart.list.filter((outfit) => {
         return outfit.name !== selection
      })
      setCart({
         count: (cart.count - 1),
         price: (cart.total - selectionPrice),
         list: newArray,
      })
   }

   const updateCount = (outfit, quantity) => {
      console.log('update quantity')
   }

   const updateTotal = (outfit, price) => {
      console.log('update price')
   }


  return (
    <div className="App">
       <Header cart={cart}/>
        <Switch>
           <Route exact path="/" component={Home} />
           <Route exact path="/products" component={Products} >
              <Products cart={cart} addToCart={addToCart} />
            </Route>
           <Route exact path="/cart" component={CartSummary} >
              <CartSummary cart={cart} removeFromCart={removeFromCart} />
            </Route>
           <Route exact path="/about" component={About} />
        </Switch>
       <Footer />
    </div>
  )
}

export default App;
