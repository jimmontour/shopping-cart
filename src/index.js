import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes'
import Header from './components/Header'
import Footer from './components/Footer'


ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
