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


var cart_items = []

function App() {
  const [cartItems, updateCartItems] = useState([])


  const addCartItem = (item) => {
    let b = [item]
    cart_items.map(Element => (
        b.push(Element[0])
    ))
    updateCartItems(b)
    cart_items.push(b)
 
  }


return (
    <Router>
      <Header />
      <NavBar />
      <Cart data={cartItems} />
      <Route path="/shop" render={() => <Shop addCartItem={addCartItem} />} /> 
      <Route exact path='/' component={HomePageBackground} />
      <Route exact path="/about" component={AboutPage} />
      <Footer />
    </Router>
);

}

render(<App/>, window.document.getElementById("root") )