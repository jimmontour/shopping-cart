import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import CartSummary from './pages/CartSummary'
<<<<<<< HEAD
import outfits from './data/outfits'

function App(props) {

   const [cart, setCart] = useState({count: 0, total: 0, list: []});

   const addToCart = (e) => {
      const selection = e.target.parentNode.parentNode.childNodes[0].alt
      outfits.map((outfit) => {
         if (outfit.name === selection) {
            setCart({
               count: (cart.count + 1),
               total: cart.total + outfit.price,
               list: [...cart.list, outfit]
            })
         }
      })
   }
=======
import Footer from './components/Footer'

function App(props) {

   const [cart, setCart] = useState({count: 0, total: 0,});
>>>>>>> cbe2996372f0dba05f8043490c3de3ae0790f68d

  return (
    <div className="App">
       <Header cart={cart}/>
        <Switch>
<<<<<<< HEAD
           <Route exact path="/" component={Home} />
           <Route exact path="/products" component={Products} >
              <Products cart={cart} addToCart={addToCart} />
            </Route>
           <Route exact path="/cart" component={CartSummary} >
              <CartSummary cart={cart}/>
            </Route>
           <Route exact path="/about" component={About} />
=======
           <Route exact path="/" component={Home} >
              <Home cart={props.cart} />
           </Route>
           <Route exact path="/products" component={Products} addToCart={props.addToCart}>
              <Products cart={props.cart} />
           </Route>
           <Route exact path="/cart" component={CartSummary} >
              <CartSummary cart={props.cart} />
           </Route>
           <Route exact path="/about" component={About} >
              <About cart={props.cart} />
           </Route>
>>>>>>> cbe2996372f0dba05f8043490c3de3ae0790f68d
        </Switch>
       <Footer />
    </div>
  )
}

export default App;
