import React, { useState }  from 'react';
import { render } from '@testing-library/react';
import Footer from './Components/Footer'
import Header from './Components/Header'
import NavBar from './Components/NavBar'
import HomePageBackground from './Components/HomePageBackground'
import Shop from './Components/Shop';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import AboutPage from './Components/AboutPage'
import Cart from './Components/Cart'

function App() {
  const [cartItems, updateCartItems] = useState([])


  const CartItems = (item) => {
    updateCartItems(item)
  }


return (
    <Router>
      <Header />
      <NavBar />
      <Cart CartItems={CartItems} data={cartItems} />
      <Route exact path="/shop" component={Shop}/>
      <Route exact path='/' component={HomePageBackground} />
      <Route exact path="/about" component={AboutPage} />
      <Footer />
    </Router>
);

}

render(<App/>, window.document.getElementById("root") )