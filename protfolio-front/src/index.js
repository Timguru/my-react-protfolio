import React from 'react';
import {render , hydrate} from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const rootElement = document.getElementById('protfolio')
const application = 
  <React.StrictMode>
      <App />
  </React.StrictMode>

if(rootElement.hasChildNodes()){
  hydrate(application, rootElement)
}else {
  render(application, rootElement)
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
