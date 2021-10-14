import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import Footer from './Components/Footer'
import Header from './Components/Header'
import NavBar from './Components/NavBar'
import PageBackground from './Components/PageBackground'


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <NavBar />
    <PageBackground />
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

