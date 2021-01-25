import React, { useState } from 'react'
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
   const [cart, setCart] = useState([]);
   console.log(cart)

   const handleAddToCart = (selection) => {
      outfits.map((outfit) => {
         if (outfit.name === selection) {
            setCart([
               ...cart,
               {
                  name: outfit.name,
                  price: outfit.price,
                  src: outfit.src,
                  count: 1,
               }
            ])
         }
      })
   }

   const handleRemoveFromCart = (selection) => {
      const newArray = cart.filter((outfit) => {
         return outfit.name !== selection
      })
      outfits.map((outfit) => {
         if (outfit.name === selection) {
            setCart(
               newArray
            )
         }
      })
   }

   const updateCount = (selection, quantity) => {
      const newArray = cart.filter((outfit) => {
         return outfit.name === selection
      })
      console.log(newArray)
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
               updateCount={updateCount}
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
