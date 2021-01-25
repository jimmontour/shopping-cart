import React from 'react'
import '../css/About.css'
import teacher from '../img/teacher.jpg'

export default function About(props) {
   return (
      <div className="container">
         <h1>About Porch Goose Emporium</h1>
         <div className="about-body">
            <div className="about-image">
               <img src={teacher} alt="Teacher goose" />
            </div>
         <div className="about-content">
            <p>
               The concrete goose, also known as a porch goose or lawn goose, is a popular lawn ornament in the United States. Concrete geese reached the peak of their popularity in the 1980s, but are still common in the Midwestern United States.
            </p>
            <p>
               It is not uncommon for owners of concrete geese to dress them in costumes for seasonal holidays, to match the weather, or just as decoration.</p>
         </div>
         </div>

         <h2>
            Here at Porch Goose Emporium , we specialize in the hottest seasonal trends for Porch Goose enthusiast.  We guarantee that your goose will be the best looking goose on the block, or your money back!
            </h2>
      </div>
      )
}
