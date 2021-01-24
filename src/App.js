import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import CartSummary from './pages/CartSummary'
import Footer from './components/Footer'

function App(props) {

   const [cart, setCart] = useState({count: 0, total: 0,});

  return (
    <div className="App">
       <Header cart={cart}/>
        <Switch>
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
        </Switch>
       <Footer />
    </div>
  )
}

export default App;
