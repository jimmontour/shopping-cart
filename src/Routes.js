import React from 'react'
import {
   BrowserRouter,
   Switch,
   Route }
from 'react-router-dom'
import App from './App'
import Shop from './components/Shop'
import Cart from './components/Cart'
import ThankYou from './components/ThankYou'
import Checkout from './components/ThankYou'


export default function Routes() {
   return (
      <BrowserRouter>
         <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/thank-you" component={ThankYou} />
            <Route exact path="/checkout" component={Checkout} />

         </Switch>
      </BrowserRouter>
   )
}
