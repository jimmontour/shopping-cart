import React, { useState } from 'react'
import pilgrim from '../img/pilgrim.jpg'
import flamingo from '../img/flamingo.jpg'
import ladybug from '../img/ladybug.jpg'
import maid from '../img/maid.jpg'
import santa from '../img/santa.jpg'
import squirrel from '../img/squirrel.jpg'
import statue from '../img/statue.jpg'
import watermelon from '../img/watermelon.jpg'
import birthdaySuit from '../img/birthdaysuit.jpg'
import './Shop.css'

export default function Shop(props) {

   const [outfits, setOutfits] = useState([
      { name: 'Pilgrim', src: pilgrim, description: "Celebrate thanksgiving with this handsome pilgrim outfit, complete with a pilgrim hat and wide collar.", price: 13.99 },
      { name: 'Pink Flamingo', src: flamingo, description: 'Give your house that Divine look, with this classic wrapped in a class look.', price: 14.99 },
      { name: 'Lady Bug', src: ladybug, description: 'Give your valentine something really special with this cute lady bug, combined with lady bug heart hat and a valentine message.', price: 17.99  },
      { name: 'Colonial Maid', src: maid, description: 'Yeh ol gal with a fantastic dress, together with a colonial bonnet for that log cabin fashion.', price: 11.99 },
      { name: 'Santa Claus', src: santa, description: 'This goose knows if you\'ve been good or not, and he\s come bearing gifts.  Comlete with santa sack of toys and red hat.', price: 16.99 },
      { name: 'Squirrel', src: squirrel, description: 'Sometimes a goose wants friends, and it can get loney sitting on your porch all day.  This outfit is sure to attract some new pals for your goose.', price: 12.99 },
      { name: 'Liberty', src: statue, description: 'Celebrate America by blowing up a piece of it with this firecracker of a goose outfit that pays homage to the Statue of Liberty.', price: 11.99  },
      { name: 'Watermelon', src: watermelon, description: 'Nothing screams summer quite like a juicy slice of watermelon.  Give your goose that summer look with this bright and festive look.', price: 15.99  },
      { name: 'Birthday Suit', src: birthdaySuit, description: 'You gotta start somewhere!  Get ahold of a porch goose sans outfits and start your hobby now!', price: 7.99 },
   ])

   return (
      <div>
         <div className="shop-container">
            {
               outfits.map((outfit) => {
                  return (
                     <div className="goose-option">
                        <img src={outfit.src} alt={outfit.name} />
                        <h3>{outfit.name}</h3>
                        <p>${outfit.price}</p>
                        <button>Add To Cart</button>
                     </div>
                  )
               })
            }
         </div>
      </div>
   )
}
