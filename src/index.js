import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Components/Footer'
import Header from './Components/Header'
import NavBar from './Components/NavBar'
import HomePageBackground from './Components/HomePageBackground'
import Shop from './Components/Shop';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import AboutPage from './Components/AboutPage'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <NavBar />
      <Route exact path="/shop" component={Shop}/>
      <Route exact path='/' component={HomePageBackground} />
      <Route exact path="/about" component={AboutPage} />
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
