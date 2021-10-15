import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Components/Footer'
import Header from './Components/Header'
import NavBar from './Components/NavBar'
import PageBackground from './Components/PageBackground'
import Shop from './Components/Shop';
import { BrowserRouter as Router, Route} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <NavBar />
      <Route exact path="/shop" component={Shop}/>
      <Route exact path='/' component={PageBackground} />
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
