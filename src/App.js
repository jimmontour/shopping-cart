import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Cart from './pages/Cart'

function App() {

  return (
    <div className="App">
       <Header />
        <Switch>
           <Route exact path="/" component={Home} />
           <Route exact path="/products" component={Products} />
           <Route exact path="/cart" component={Cart} />
           <Route exact path="/about" component={About} />
        </Switch>
       <Footer />
    </div>
  )
}

export default App;
