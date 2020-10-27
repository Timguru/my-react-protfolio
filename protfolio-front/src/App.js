import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './Header'
import './asset/css/App.css'

function App() {
  return (
    <div className="app">
      <Router>
         <Switch>
           <Route path="/">
             <Header/>
           </Route>
           <Route></Route>
         </Switch>
      </Router>
    </div>
  )
}

export default App
