import './App.css';
import { Link } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (

    <div className="App">
          <Header/>
       <div className="call-to-action">
         <h1>Get The Hottest in Porch Goose Fashion!</h1>
         <p>At Porch Goose Emporium, we pride ourselves on supplying the best seasonal outfits for your little friend.  Check out this season's hottest trends:</p>
         <Link to="/shop">
            <button>Shop Outfits</button>
         </Link>
        </div>
        <Footer />
    </div>

  )

}

export default App;
